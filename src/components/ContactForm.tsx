import { useState } from "react";
import type { FormEvent } from "react";
import { Send } from "lucide-react";
const email = "2k25aiml2512104@gmail.com";
export default function ContactForm() {
  const [status, setStatus] = useState("");
  const [busy, setBusy] = useState(false);
  const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT?.trim();
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (data.get("_gotcha")) return;
    setStatus("");
    if (!endpoint) {
      const body = `Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`;
      window.location.href = `mailto:${email}?subject=${encodeURIComponent(String(data.get("subject")))}&body=${encodeURIComponent(body)}`;
      setStatus(
        "EMAIL DRAFT PREPARED — Send it from your email app. If no app opened, use the email link alongside this form.",
      );
      return;
    }
    setBusy(true);
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
        signal: AbortSignal.timeout(15000),
      });
      if (!response.ok) throw new Error("Submission failed");
      setStatus("MESSAGE SENT SUCCESSFULLY");
      form.reset();
    } catch {
      setStatus(
        "MESSAGE NOT SENT — Please try again or use the direct email link.",
      );
    } finally {
      setBusy(false);
    }
  }
  return (
    <form onSubmit={submit} className="contact-form">
      <div className="panel-top">
        <span>COMMS TERMINAL</span>
        <span>NEW MESSAGE</span>
      </div>
      <div className="form-content">
        <div className="form-row">
          <label>
            NAME
            <input
              name="name"
              autoComplete="name"
              required
              maxLength={100}
              placeholder="Your name"
            />
          </label>
          <label>
            EMAIL
            <input
              name="email"
              type="email"
              autoComplete="email"
              required
              maxLength={254}
              placeholder="you@example.com"
            />
          </label>
        </div>
        <label>
          SUBJECT
          <input
            name="subject"
            required
            maxLength={180}
            placeholder="Let’s work together"
          />
        </label>
        <label>
          MESSAGE
          <textarea
            name="message"
            required
            rows={6}
            minLength={10}
            maxLength={5000}
            placeholder="Tell me about your opportunity or project…"
          />
        </label>
        <div className="hidden" aria-hidden="true">
          <label>
            Leave empty
            <input name="_gotcha" tabIndex={-1} autoComplete="off" />
          </label>
        </div>
        {!endpoint && (
          <p className="small-note">
            This form opens a prefilled email in your email app. You’ll send it
            from there.
          </p>
        )}
        <button className="pixel-button" type="submit" disabled={busy}>
          <Send size={16} />
          {busy ? "SENDING…" : endpoint ? "SEND MESSAGE" : "OPEN EMAIL DRAFT"}
        </button>
        <p role="status" aria-live="polite" className="form-status">
          {status}
        </p>
      </div>
    </form>
  );
}
