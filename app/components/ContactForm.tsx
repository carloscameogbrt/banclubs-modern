"use client";

import { useState } from "react";

type FormState = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<FormState>("idle");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get("nombre") || "").trim(),
      company: String(formData.get("empresa") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      message: String(formData.get("mensaje") || "").trim(),
      privacyAccepted: formData.get("privacy") === "on",
      marketingAccepted: formData.get("marketing") === "on"
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data?.error || "No se pudo enviar el mensaje.");
      }

      event.currentTarget.reset();
      setStatus("success");
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <form className="glass-card rounded-3xl p-8 shadow-card" onSubmit={handleSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-medium text-ink">
          Nombre
          <input
            className="mt-2 w-full rounded-xl border border-ink/10 px-4 py-3 text-sm"
            type="text"
            name="nombre"
            required
          />
        </label>
        <label className="text-sm font-medium text-ink">
          Empresa
          <input
            className="mt-2 w-full rounded-xl border border-ink/10 px-4 py-3 text-sm"
            type="text"
            name="empresa"
          />
        </label>
        <label className="text-sm font-medium text-ink sm:col-span-2">
          Dirección de correo electrónico
          <input
            className="mt-2 w-full rounded-xl border border-ink/10 px-4 py-3 text-sm"
            type="email"
            name="email"
            required
          />
        </label>
        <label className="text-sm font-medium text-ink sm:col-span-2">
          Mensaje
          <textarea
            className="mt-2 h-28 w-full rounded-xl border border-ink/10 px-4 py-3 text-sm"
            name="mensaje"
            required
          />
        </label>
      </div>
      <div className="mt-5 space-y-3 text-xs text-ink/70">
        <label className="flex items-center gap-2">
          <input type="checkbox" name="privacy" className="h-4 w-4" required />
          He leído y acepto la Política de Privacidad.
        </label>
        <label className="flex items-center gap-2">
          <input type="checkbox" name="marketing" className="h-4 w-4" />
          Deseo recibir comunicaciones comerciales sobre servicios de BANCLUBS.
        </label>
      </div>
      <div className="mt-6 flex flex-wrap items-center justify-end gap-3">
        <button
          className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-sand transition hover:bg-ink/90 disabled:cursor-not-allowed disabled:opacity-70"
          type="submit"
          disabled={status === "sending"}
        >
          {status === "sending" ? "Enviando..." : "Enviar"}
        </button>
      </div>
      {status === "success" ? (
        <div className="mt-4" />
      ) : null}
      {status === "error" ? (
        <div className="mt-4" />
      ) : null}
    </form>
  );
}
