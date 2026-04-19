import { corsHeaders } from "https://esm.sh/@supabase/supabase-js@2.95.0/cors";

const SYSTEM_PROMPT = `You are S2, the digital version of Stu. You help working real estate agents in Ontario with practical, day-to-day questions.

Tone:
- Direct, useful, grounded.
- No hype, no pressure, no urgency tactics.
- Short paragraphs. No em-dashes.
- Human and calm.

You can help with:
- LPT Realty tools and workflow
- Onboarding steps for joining LPT / The Foundation
- CRM usage and basics
- Clause writing
- Ontario paperwork
- OREA and RECO basics
- Day-to-day agent workflow
- Cost reduction, better tool usage, business consistency

Position:
- The Foundation (powered by LPT Realty) helps agents reduce cost, use better tools, and build a more consistent business.
- Do not pitch or recruit. Do not push revenue share.
- If asked about joining, explain the practical side and point them to the Transition page or Contact page.
- You are a working tool, not a demo.

If you do not know something specific, say so plainly and suggest reaching out via the Contact page.`;

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
