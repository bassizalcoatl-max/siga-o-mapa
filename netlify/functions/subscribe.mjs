import { Resend } from "resend";

const SITE_URL = process.env.SITE_URL || "https://sigaomapa.com.br";
const GUIDE_URL = `${SITE_URL}/guia-7-niveis`;
const FROM = process.env.RESEND_FROM || "MAPA <onboarding@resend.dev>";

const resend = new Resend(process.env.RESEND_API_KEY);

export const handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return json({ error: "Método não permitido." }, 405);
  }

  let email;
  try {
    const body = JSON.parse(event.body || "{}");
    email = String(body.email ?? "").trim().toLowerCase();
  } catch {
    return json({ error: "Corpo da requisição inválido." }, 400);
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    return json({ error: "Esse e-mail não parece válido. Confere e tenta de novo?" }, 400);
  }

  const html = `<!DOCTYPE html>
<html lang="pt-BR">
  <body style="margin:0;padding:0;background:#101c18;font-family:Georgia,'Times New Roman',serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#101c18;">
      <tr><td align="center" style="padding:48px 16px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:520px;background:#16241f;border:1px solid #2f3d37;border-radius:12px;padding:40px 32px;">
          <tr><td style="font-size:24px;color:#e6ddc9;padding-bottom:16px;">Boa, você chegou ao penúltimo passo.</td></tr>
          <tr><td style="font-size:15px;line-height:1.7;color:#d8cfba;padding-bottom:24px;">
            O <strong style="color:#e6ddc9;">Guia dos Sete Níveis</strong> está te esperando. São sete níveis, um só caminho de volta pro idioma — direto pelo link abaixo, sem cadastro nem cobrança extra.
          </td></tr>
          <tr><td align="center" style="padding-bottom:24px;">
            <a href="${GUIDE_URL}" style="display:inline-block;background:#d96b4a;color:#fff7e8;text-decoration:none;font-family:Arial,sans-serif;font-weight:bold;font-size:15px;padding:14px 28px;border-radius:6px;">Abrir o guia →</a>
          </td></tr>
          <tr><td style="font-size:14px;color:#2f3d37;padding-top:8px;">&nbsp;</td></tr>
          <tr><td style="font-size:13px;line-height:1.6;color:#9aa5a1;border-top:1px solid #2a3833;padding-top:16px;font-family:Arial,sans-serif;">
            Se não conseguir abrir o link, copie este endereço no navegador:<br/>
            <a href="${GUIDE_URL}" style="color:#9de3c5;word-break:break-all;">${GUIDE_URL}</a><br/><br/>
            Se quiser ir além do mapa, a call de diagnóstico de 30 minutos é gratuita e sem compromisso.
          </td></tr>
        </table>
      </td></tr>
    </table>
  </body>
</html>`;

  try {
    const { data, error } = await resend.emails.send({
      from: FROM,
      to: email,
      subject: "Seu Guia dos 7 Níveis está aqui",
      html,
    });

    if (error) {
      console.error("[subscribe] Resend error:", error);
      return json({ error: "Não consegui enviar o guia agora. Tenta de novo em instantes." }, 500);
    }

    return json({ success: true, id: data?.id });
  } catch (err) {
    console.error("[subscribe] Unexpected error:", err);
    return json({ error: "Erro inesperado. Tenta de novo em instantes." }, 500);
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