import { useState, useRef, useEffect } from "react";
import Layout from "@/components/Layout";
import { Send } from "lucide-react";
import { streamS2, type S2Msg as Message } from "@/lib/s2Stream";
import { toast } from "@/hooks/use-toast";

const S2Page = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "I'm S2. A digital version of Stu. Ask me about LPT tools, onboarding, CRM, clause writing, Ontario paperwork, OREA and RECO basics, or anything in the day to day.\n\nQuick note.\n\nMost people don't need more information. They need it delivered properly.\n\nIf you want, tell me how you like answers and I'll match it.\n\nPick one or ignore it:\n\n- Straight to the point\n- New agent friendly\n- A bit of humor\n- No fluff, serious only\n- Explain it like I'm building a business\n- Surprise me\n\nOr tell me your DISC if you know it. I'll remember it.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

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
    <Layout>
      <section className="section-padding">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <h1 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-3">S2</h1>
            <p className="text-muted-foreground leading-relaxed">
              The digital version of Stu. Direct. Useful. Grounded.
            </p>
          </div>

          {/* Topics */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
            {[
              "LPT tools",
              "Onboarding",
              "CRM usage",
              "Clause writing",
              "Ontario paperwork",
              "OREA / RECO basics",
            ].map((topic) => (
              <button
                key={topic}
                onClick={() => setInput(`Tell me about ${topic.toLowerCase()}`)}
                className="text-xs bg-muted text-muted-foreground rounded-md px-3 py-2 hover:bg-accent/10 hover:text-accent transition-colors text-left"
              >
                {topic}
              </button>
            ))}
          </div>

          {/* Chat area */}
          <div className="border border-border rounded-lg bg-background">
            <div className="max-h-[50vh] overflow-y-auto p-4 space-y-4">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`text-sm leading-relaxed whitespace-pre-wrap ${
                    msg.role === "user"
                      ? "bg-muted rounded-lg px-4 py-3 ml-12 text-foreground"
                      : "text-muted-foreground pr-12"
                  }`}
                >
                  {msg.role === "assistant" && (
                    <span className="text-xs font-semibold text-accent block mb-1">S2</span>
                  )}
                  {msg.content}
                </div>
              ))}
              {isLoading && (
                <div className="text-sm text-muted-foreground animate-pulse">S2 is thinking...</div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="border-t border-border p-4">
              <div className="flex gap-3">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Ask S2 something..."
                  className="flex-1 bg-muted rounded-md px-4 py-3 text-sm outline-none text-foreground placeholder:text-muted-foreground/50"
                />
                <button
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className="px-4 py-3 rounded-md bg-primary text-primary-foreground hover:opacity-90 transition-opacity disabled:opacity-40"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default S2Page;
