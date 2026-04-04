import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const S2ChatButton = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "I'm S2. The digital version of Stu. Ask me about LPT tools, onboarding, CRM, paperwork, or anything about the day-to-day. I'm here to be useful, not to pitch you.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim() || isLoading) return;
    const userMsg: Message = { role: "user", content: input.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    // Simulated response - will be replaced with real AI
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "I appreciate the question. For a full conversation with more context, head over to the S2 page. I can cover LPT tools, onboarding steps, CRM basics, and Ontario paperwork there.",
        },
      ]);
      setIsLoading(false);
    }, 1200);
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-accent text-accent-foreground shadow-lg flex items-center justify-center hover:opacity-90 transition-all"
        aria-label="Open S2 chat"
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </button>

      {/* Chat panel */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 bg-background border border-border rounded-lg shadow-2xl animate-slide-up flex flex-col max-h-[70vh]">
          {/* Header */}
          <div className="px-4 py-3 border-b border-border flex items-center justify-between">
            <div>
              <h3 className="font-display text-sm font-semibold">S2</h3>
              <p className="text-xs text-muted-foreground">Direct. Useful. Grounded.</p>
            </div>
            <button
              onClick={() => navigate("/s2")}
              className="text-xs text-accent hover:underline"
            >
              Full page
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`text-sm leading-relaxed ${
                  msg.role === "user"
                    ? "text-foreground bg-muted rounded-lg px-3 py-2 ml-8"
                    : "text-muted-foreground pr-8"
                }`}
              >
                {msg.content}
              </div>
            ))}
            {isLoading && (
              <div className="text-sm text-muted-foreground animate-pulse">S2 is thinking...</div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="px-4 py-3 border-t border-border">
            <div className="flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask S2 something..."
                className="flex-1 text-sm bg-muted rounded-md px-3 py-2 outline-none placeholder:text-muted-foreground/50 text-foreground"
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="p-2 rounded-md bg-primary text-primary-foreground hover:opacity-90 transition-opacity disabled:opacity-40"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default S2ChatButton;
