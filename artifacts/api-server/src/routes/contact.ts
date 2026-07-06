import { Router, type IRouter } from "express";
import { Resend } from "resend";
import { SubmitContactBody, SubmitContactResponse } from "@workspace/api-zod";

const router: IRouter = Router();

router.post("/contact", async (req, res): Promise<void> => {
  const parsed = SubmitContactBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }

  const { name, email, projectType, message } = parsed.data;

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    req.log.error("RESEND_API_KEY is not configured");
    res.status(500).json({ error: "Email service is not configured" });
    return;
  }

  const resend = new Resend(apiKey);

  const projectLine = projectType ? `<p><strong>Project type:</strong> ${projectType}</p>` : "";

  const contactEmail = process.env.CONTACT_EMAIL ?? "hello@moaiohio.com";

  const { error } = await resend.emails.send({
    from: "moaiohio contact form <onboarding@resend.dev>",
    to: [contactEmail],
    replyTo: email,
    subject: `New contact from ${name}`,
    html: `
      <h2>New contact form submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${projectLine}
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br>")}</p>
    `,
  });

  if (error) {
    req.log.error({ error }, "Failed to send contact email");
    res.status(500).json({ error: "Failed to send message. Please try again." });
    return;
  }

  req.log.info({ name, email }, "Contact form submitted");
  res.json(SubmitContactResponse.parse({ success: true }));
});

export default router;
