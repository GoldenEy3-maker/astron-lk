import nodemailer from "nodemailer";

export default new (class MailService {
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "korolevdani4@gmail.com",
        pass: "abuf ntzi uwlj fzdv",
      },
    });
  }

  async sendRecoveryPasswordLink(email: string, link: string) {
    try {
      const info = await this.transporter.sendMail({
        from: "korolevdani4@gmail.com",
        to: email,
        subject: "Восстановление пароля",
        text: `Перейдите по ссылке для восстановления пароля: ${link}`,
      });
      console.log("Email отправлен", info.messageId);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
})();
