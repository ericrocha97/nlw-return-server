import nodemailer from "nodemailer";
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "0af9ec2fecd1f8",
    pass: "144fc728d442fd",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Equipe Feedget <feedget@ericrocha.dev>",
      to: "Eric Rocha <contato@ericrocha.dev>",
      subject,
      html: body,
    });
  }
}
