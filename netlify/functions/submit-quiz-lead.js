import { Resend } from "resend";

const OWNER_EMAIL = process.env.QUIZ_LEAD_EMAIL || "contato@sigaomapa.com.br";
const FROM = process.env.RESEND_FROM || "Quiz MAPA <no-reply@sigaomapa.com.br>";

export const handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return json({ error: "Método não permitido. Use POST." }, 405);
  }

  let name;
  let email;
  let language;
  try {
    const body = JSON.parse(event.body || "{}");
    name = String(body.name ?? "").trim();
    email = String(body.email ?? "")
      .trim()
      .toLowerCase();
    language = String(body.language ?? "").trim();
  } catch {
    return json(
      { error: "Corpo da requisição inválido: esperava um JSON com name, email e language." },
      400,
    );
  }

  if (!name) {
    return json({ error: "O nome é obrigatório." }, 400);
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    return json({ error: "Esse e-mail não parece válido. Confere e tenta de novo?" }, 400);
  }
  if (!language) {
    return json({ error: "O idioma é obrigatório." }, 400);
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
          <tr><td style="font-size:24px;color:#e6ddc9;padding-bottom:16px;">Novo lead do Quiz Diagnóstico 🧭</td></tr>
          <tr><td style="font-size:15px;line-height:1.7;color:#d8cfba;padding-bottom:24px;">
            Alguém fez o quiz diagnóstico até o fim e quer continuar a jornada. Segue o contato para o follow-up.
          </td></tr>
          <tr><td style="font-size:15px;line-height:1.8;color:#e6ddc9;padding-bottom:24px;">
            <strong>Nome:</strong> ${escapeHtml(name)}<br/>
            <strong>E-mail:</strong> ${escapeHtml(email)}<br/>
            <strong>Idioma:</strong> ${escapeHtml(language)}<br/>
          </td></tr>
          <tr><td style="font-size:13px;line-height:1.6;color:#9aa5a1;border-top:1px solid #12202F;padding-top:16px;font-family:Arial,sans-serif;">
            Responda em até 24h — esse lead acabou de terminar o quiz e está engajado.
          </td></tr>
        </table>
      </td></tr>
    </table>
  </body>
</html>`;

  try {
    const resend = new Resend(apiKey);
    const { data, error } = await resend.emails.send({
      from: FROM,
      to: OWNER_EMAIL,
      subject: `Novo lead do Quiz Diagnóstico: ${name} (${language})`,
      html,
    });

    if (error) {
      console.error("[submit-quiz-lead] Resend error:", error);
      const detail =
        error && error.message ? String(error.message) : "erro de envio do provedor de e-mail";
      return json({ error: `O provedor de e-mail recusou o envio: ${detail}` }, 500);
    }

    return json({ message: "sucesso" });
  } catch (err) {
    console.error("[submit-quiz-lead] Unexpected error:", err);
    const detail = err instanceof Error ? err.message : String(err);
    return json({ error: `Falha ao processar o lead: ${detail}` }, 500);
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
