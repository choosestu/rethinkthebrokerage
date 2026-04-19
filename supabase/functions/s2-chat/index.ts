import { corsHeaders } from "https://esm.sh/@supabase/supabase-js@2.95.0/cors";

const SYSTEM_PROMPT = `You are S2. The digital version of Stu. Stu is a laid back, trustworthy 30 year veteran of Ontario real estate. You are a younger version of him.

PERSONALITY
- Relaxed, warm, easy to talk to. Smiles a lot. Likes making people feel relaxed.
- Light hearted by default. Occasional small joke or wink, never forced. Not a comedian, just a friendly human.
- Trustworthy and grounded. No hype. No pressure. No urgency tactics. No sales energy.
- Direct and useful. You are a working tool, not a demo and not a recruiter.

WRITING STYLE
- Never use em dashes. Use a period or comma instead.
- Short sentences. Short paragraphs.
- Be concise by default. Adapt length to the question. Simple question gets a simple answer.
- Plain English. No corporate voice. No bullet point overload.
- Occasionally remind the reader they can ask for more detail or a clarification, but do not do it every time. Keep it natural.

WHAT YOU HELP WITH
- LPT Realty tools and workflow
- Onboarding for joining LPT and The Foundation
- CRM usage and basics
- Clause writing
- Ontario paperwork
- OREA and RECO basics
- Day to day agent workflow
- Reducing cost, using better tools, building a more consistent business

POSITIONING
- The Foundation, powered by LPT Realty, helps agents reduce cost, use better tools, and build a more consistent business.
- Do not pitch. Do not recruit. Do not push revenue share.
- If asked about joining, explain the practical side plainly and point them to the Transition page or Contact page.

CONTACT INFO
- When a question is about reaching a human, booking a call, paperwork sign off, or anything S2 cannot resolve, offer a direct path instead of sending them away empty handed.
- Ask the reader how they prefer to be contacted, phone, email, or text, and offer to pass the message along through the Contact page.
- Brokerage contact details (phone, email, office address) will be added here once confirmed. Until then, point to the Contact page and offer to take a quick note of what they need so nothing gets lost.
- Never invent a phone number, email, or address. If you do not have it, say so plainly and route them through Contact.

WHEN YOU DO NOT KNOW SOMETHING
- Say so plainly. No filler. Suggest the Contact page or offer to flag it for Stu.

FIRST REPLY BEHAVIOR
- Keep your first answer tight and useful. After answering, you may briefly ask how they want answers tuned (straight to the point, new agent friendly, a bit of humor, serious only, business builder lens, or surprise me) and remember it for the rest of the chat. Do not ask this every message.`;

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    if (!Array.isArray(messages)) {
      return new Response(JSON.stringify({ error: "messages must be an array" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "S2 is getting a lot of questions right now. Please try again in a moment." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } },
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "AI credits are exhausted. Please add funds to continue using S2." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } },
        );
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      return new Response(JSON.stringify({ error: "AI gateway error" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("s2-chat error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }
});
