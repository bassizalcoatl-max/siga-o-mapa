import { Resend } from "resend";

const SITE_URL = process.env.SITE_URL || "https://sigaomapa.com.br";
const QUIZ_URL = `${SITE_URL}/quiz-diagnostico`;
const NOTIFY_TO = process.env.QUIZ_LEAD_NOTIFY_TO || "contato@sigaomapa.com.br";
const FROM = process.env.QUIZ_EMAIL_FROM || "Quiz Diagnóstico MAPA <quiz@sigaomapa.com.br>";

export const handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return json({ error: "Método não permitido. Use POST." }, 405);
  }

  let name;
  let email;
  let language;
  try {
    const body = JSON.parse(event.body || "{}");
    name = String(body.name ?? "")
      .trim()
      .replace(/\s+/g, " ");
    email = String(body.email ?? "")
      .trim()
      .toLowerCase();
    language = String(body.language ?? "")
      .trim()
      .replace(/\s+/g, " ");
  } catch {
    return json(
      {
        error:
          "Corpo da requisição inválido: esperava um JSON com os campos name, email e language.",
      },
      400,
    );
  }

  if (!name) {
    return json({ error: "Preencha seu nome." }, 400);
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    return json({ error: "Esse e-mail não parece válido. Confere e tenta de novo?" }, 400);
  }
  if (!language) {
    return json({ error: "Escolha o idioma que você estuda." }, 400);
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return json(
      {
        error:
          "Servidor sem RESEND_API_KEY configurada. Adicione a variável de ambiente no Netlify.",
      },
      500,
    );
  }

  const html = `<!DOCTYPE html>
<html lang="pt-BR">
  <body style="margin:0;padding:0;background:#101c18;font-family:Georgia,'Times New Roman',serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#101c18;">
      <tr><td align="center" style="padding:48px 16px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:520px;background:#16241f;border:1px solid #19293A;border-radius:12px;padding:40px 32px;">
          <tr><td style="font-size:24px;color:#e6ddc9;padding-bottom:16px;">Novo lead do Quiz Diagnóstico 🎯</td></tr>
          <tr><td style="color:#a5b5a0;font-size:15px;padding-bottom:8px;">Um novo lead entrou no fluxo do quiz e quer seguir a jornada.</td></tr>
          <tr><td style="padding:16px 0;"><div style="border-top:1px solid #26384C;"></div></td></tr>
          <tr><td style="font-size:14px;color:#e6ddc9;padding-bottom:6px;"><strong style="color:#d96b43;">Nome:</strong> ${escapeHtml(name)}</td></tr>
          <tr><td style="font-size:14px;color:#e6ddc9;padding-bottom:6px;"><strong style="color:#d96b43;">E-mail:</strong> ${escapeHtml(email)}</td></tr>
          <tr><td style="font-size:14px;color:#e6ddc9;padding-bottom:6px;"><strong style="color:#d96b43;">Idioma:</strong> ${escapeHtml(language)}</td></tr>
          <tr><td style="padding:16px 0;"><div style="border-top:1px solid #26384C;"></div></td></tr>
          <tr><td style="padding-bottom:16px;"><a href="mailto:${escapeHtml(email)}" style="background:#C1613C;color:#F1EAD9;text-decoration:none;padding:12px 20px;border-radius:8px;font-size:14px;font-family:Arial,Helvetica,sans-serif;">Responder pelo e-mail</a></td></tr>
          <tr><td style="font-size:13px;color:#8a97a8;">Levado pelo fluxo do quiz em ${QUIZ_URL}.</td></tr>
          <tr><td style="font-size:14px;color:#a5b5a0;padding-top:24px;border-top:1px solid #26384C;">&copy; 2026 MAPA · Todos os direitos reservados.</td></tr>
        </table>
      </td></tr>
    </table>
  </body>
</html>`;

  try {
    const resend = new Resend(apiKey);
    const { data, error } = await resend.emails.send({
      from: FROM,
      to: NOTIFY_TO,
      subject: `Novo lead do Quiz Diagnóstico: ${name} (${language})`,
      html,
    });
    console.log("[submit-quiz-lead] enviado:", data?.id ?? "ok");

    if (error) {
      console.error("[submit-quiz-lead] Resend error:", error);
      return json(
        { error: `Falha ao notificar: ${error.message || "erro do provedor de e-mail"}` },
        500,
      );
    }

    return json({ message: "sucesso" });
  } catch (err) {
    console.error("[submit-quiz-lead] Unexpected error:", err);
    return json({ error: "Falha ao processar o lead." }, 500);
  }
};

function json(body, status = 200) {
  return {
    statusCode: status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-cache",
    },
    body: JSON.stringify(body),
  };
}

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
