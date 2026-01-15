import nodemailer from "nodemailer";

type ContactPayload = {
  name: string;
  company?: string;
  email: string;
  message: string;
  privacyAccepted: boolean;
  marketingAccepted?: boolean;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    if (!body?.name || !body?.email || !body?.message) {
      return Response.json({ error: "Faltan campos obligatorios." }, { status: 400 });
    }

    if (!body.privacyAccepted) {
      return Response.json(
        { error: "Debes aceptar la Política de Privacidad." },
        { status: 400 }
      );
    }

    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT || 587);
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const secure = process.env.SMTP_SECURE === "true";

    if (!host || !user || !pass) {
      return Response.json(
        { error: "Faltan variables SMTP en el servidor." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass }
    });

    const toEmail = process.env.TO_EMAIL || "partners@banclubs.com";
    const fromEmail = process.env.MAIL_FROM || user;

    const subject = "Nuevo contacto desde banclubs.com";
    const text = [
      `Nombre: ${body.name}`,
      `Empresa: ${body.company || "-"}`,
      `Email: ${body.email}`,
      `Acepta privacidad: ${body.privacyAccepted ? "Sí" : "No"}`,
      `Acepta marketing: ${body.marketingAccepted ? "Sí" : "No"}`,
      "",
      "Mensaje:",
      body.message
    ].join("\n");

    await transporter.sendMail({
      from: `BAnCLUBS <${fromEmail}>`,
      to: toEmail,
      replyTo: body.email,
      subject,
      text
    });

    return Response.json({ ok: true });
  } catch (error) {
    console.error(error);
    return Response.json({ error: "No se pudo enviar el mensaje." }, { status: 500 });
  }
}
