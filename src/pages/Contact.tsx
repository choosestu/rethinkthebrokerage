import { useState } from "react";
import Layout from "@/components/Layout";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message received. We will be in touch.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <Layout>
      <section className="section-padding">
        <div className="max-w-lg mx-auto animate-fade-in">
          <h1 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-3">
            Start a conversation.
          </h1>
          <p className="text-muted-foreground leading-relaxed mb-10">
            No pitch. No pressure. Just a direct discussion about what this could look like for you.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="text-sm text-muted-foreground mb-2 block">Name</label>
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-muted rounded-md px-4 py-3 text-sm outline-none text-foreground placeholder:text-muted-foreground/50"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-2 block">Email</label>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-muted rounded-md px-4 py-3 text-sm outline-none text-foreground placeholder:text-muted-foreground/50"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-2 block">Message</label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-muted rounded-md px-4 py-3 text-sm outline-none text-foreground placeholder:text-muted-foreground/50 resize-none"
                placeholder="What are you thinking about?"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground rounded-md py-3 text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Send
            </button>
          </form>

          <p className="mt-8 text-xs text-muted-foreground/50 text-center">
            You can also ask S2 questions anytime through the chat icon.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
