import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { streamS2, type S2Msg as Message } from "@/lib/s2Stream";
import { toast } from "@/hooks/use-toast";

const S2ChatButton = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "I'm S2. A digital version of Stu. Ask me anything about LPT tools, onboarding, CRM, paperwork, or the day to day.\n\nQuick note. Most people don't need more information, they need it delivered properly. Tell me how you like answers and I'll match it: straight to the point, new agent friendly, a bit of humor, serious only, business builder lens, or surprise me. DISC works too.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener("s2:open", handler);
    return () => window.removeEventListener("s2:open", handler);
  }, []);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    const userMsg: Message = { role: "user", content: input.trim() };
    const nextMessages = [...messages, userMsg];
    setMessages(nextMessages);
    setInput("");
    setIsLoading(true);

    let assistantSoFar = "";
    const upsert = (chunk: string) => {
      assistantSoFar += chunk;
      setMessages((prev) => {
        const last = prev[prev.length - 1];
        if (last?.role === "assistant") {
          return prev.map((m, i) =>
            i === prev.length - 1 ? { ...m, content: assistantSoFar } : m,
          );
        }
        return [...prev, { role: "assistant", content: assistantSoFar }];
      });
    };

    await streamS2({
      messages: nextMessages,
      onDelta: upsert,
      onDone: () => setIsLoading(false),
      onError: (msg) => {
        setIsLoading(false);
        toast({ title: "S2", description: msg, variant: "destructive" });
      },
    });
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        className="group fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full s2-orb shadow-[0_10px_40px_-10px_hsl(220_15%_8%/0.6)] flex items-center justify-center transition-all hover:scale-105"
        aria-label="Open S2 chat"
      >
        <span className="absolute inset-0 rounded-full s2-orb-glow opacity-70 group-hover:opacity-100 transition-opacity" />
        <span className="relative text-white">
          {open ? <X size={24} /> : <MessageCircle size={24} />}
        </span>
      </button>

      {/* Chat panel */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-[22rem] sm:w-[26rem] s2-panel rounded-2xl shadow-[0_30px_80px_-20px_hsl(220_15%_4%/0.7)] animate-slide-up flex flex-col max-h-[75vh] overflow-hidden">
          {/* Header */}
          <div className="px-5 py-4 s2-header flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-9 h-9 rounded-full s2-orb flex items-center justify-center text-white font-display text-sm font-semibold shadow-md">S2</div>
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[hsl(220_15%_12%)]" />
              </div>
              <div>
                <h3 className="font-display text-sm font-semibold text-white tracking-wide">S2</h3>
                <p className="text-[11px] text-white/60">Direct. Useful. Grounded.</p>
              </div>
            </div>
            <button
              onClick={() => navigate("/s2")}
              className="text-[11px] uppercase tracking-wider text-white/70 hover:text-white transition-colors px-2 py-1 rounded border border-white/15 hover:border-white/40"
            >
              Full page
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 s2-body">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`text-sm leading-relaxed whitespace-pre-wrap ${
                  msg.role === "user"
                    ? "ml-8 px-3 py-2 rounded-2xl rounded-tr-sm bg-gradient-to-br from-[hsl(210_60%_45%)] to-[hsl(220_55%_35%)] text-white shadow"
                    : "mr-6 px-3 py-2 rounded-2xl rounded-tl-sm bg-[hsl(220_12%_22%)] text-white/90 border border-white/5"
                }`}
              >
                {msg.content}
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-1 items-center text-xs text-white/60 px-2">
                <span className="w-1.5 h-1.5 rounded-full bg-white/60 animate-bounce [animation-delay:-0.3s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-white/60 animate-bounce [animation-delay:-0.15s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-white/60 animate-bounce" />
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="px-4 py-3 s2-footer">
            <div className="flex gap-2 items-center bg-[hsl(220_12%_18%)] rounded-full pl-4 pr-1 py-1 border border-white/10 focus-within:border-white/30 transition-colors">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask S2 something..."
                className="flex-1 text-sm bg-transparent outline-none placeholder:text-white/40 text-white py-2"
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="p-2 rounded-full s2-orb text-white hover:scale-105 transition-transform disabled:opacity-40 disabled:hover:scale-100"
              >
                <Send size={15} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default S2ChatButton;
