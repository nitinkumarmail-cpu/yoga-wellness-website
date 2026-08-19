"use client";
import { FormEvent, useState } from "react";
import { site, programmes } from "@/lib/site";
type Kind = "booking" | "corporate" | "contact";
const labels = {
  booking: "Personal session request",
  corporate: "Partnership enquiry",
  contact: "General enquiry",
};
export function EnquiryForm({ kind }: { kind: Kind }) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [note, setNote] = useState("");
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget,
      data = new FormData(form),
      next: Record<string, string> = {};
    for (const key of ["name", "phone", "email", "message"]) {
      if (!String(data.get(key) || "").trim())
        next[key] = "This field is required.";
    }
    const email = String(data.get("email") || "");
    if (email && !/^\S+@\S+\.\S+$/.test(email))
      next.email = "Enter a valid email address.";
    setErrors(next);
    if (Object.keys(next).length) {
      setNote("Please review the highlighted fields.");
      return;
    }
    const lines = [
      `CFIW: ${labels[kind]}`,
      ...Array.from(data.entries()).map(
        ([k, v]) => `${k.replaceAll("-", " ")}: ${v}`,
      ),
    ];
    const url = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`;
    const popup = window.open(url, "_blank", "noopener,noreferrer");
    setNote(
      popup
        ? "Your request is ready in WhatsApp. Please press send there to complete it."
        : `WhatsApp could not open. Please contact ${site.phone}.`,
    );
  }
  return (
    <form onSubmit={submit} noValidate aria-describedby="form-note">
      <div className="form-grid">
        <Field n="name" label="Name" err={errors.name} />
        {kind === "corporate" && (
          <>
            <Field n="organisation" label="Organisation" />
            <Field n="designation" label="Designation" />
          </>
        )}
        <Field n="phone" label="Phone" type="tel" err={errors.phone} />
        <Field n="email" label="Email" type="email" err={errors.email} />
        {kind === "corporate" ? (
          <>
            <Field
              n="participants"
              label="Approximate participants"
              type="number"
            />
            <Select
              n="programme-type"
              label="Type of programme"
              options={[
                "Workplace mobility",
                "Yoga sessions",
                "Mindfulness",
                "Breathwork",
                "Custom programme",
              ]}
            />
            <Field n="requirement" label="Requirement" wide />
          </>
        ) : (
          <>
            <Select
              n="programme"
              label="Preferred programme"
              options={programmes.map((p) => p.title)}
            />
            {kind === "booking" && (
              <>
                <Select
                  n="format"
                  label="Session format"
                  options={["Online", "In person"]}
                />
                <Field n="preferred-date" label="Preferred date" type="date" />
                <Field n="preferred-time" label="Preferred time" type="time" />
              </>
            )}
          </>
        )}
        <div className="field span2">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            aria-invalid={!!errors.message}
          />
          {errors.message && (
            <span className="field-error">{errors.message}</span>
          )}
        </div>
      </div>
      <p style={{ fontSize: ".8rem", color: "var(--muted)" }}>
        Submitting opens WhatsApp with your details. Nothing is stored on this
        website.
      </p>
      {note && (
        <p id="form-note" className="notice" role="status">
          {note}
        </p>
      )}
      <button className="btn btn-primary" type="submit">
        Continue in WhatsApp
      </button>
    </form>
  );
}
function Field({
  n,
  label,
  type = "text",
  err,
  wide = false,
}: {
  n: string;
  label: string;
  type?: string;
  err?: string;
  wide?: boolean;
}) {
  return (
    <div className={`field ${wide ? "span2" : ""}`}>
      <label htmlFor={n}>{label}</label>
      <input id={n} name={n} type={type} aria-invalid={!!err} />
      {err && <span className="field-error">{err}</span>}
    </div>
  );
}
function Select({
  n,
  label,
  options,
}: {
  n: string;
  label: string;
  options: readonly string[];
}) {
  return (
    <div className="field">
      <label htmlFor={n}>{label}</label>
      <select id={n} name={n} defaultValue="">
        <option value="" disabled>
          Select an option
        </option>
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}
