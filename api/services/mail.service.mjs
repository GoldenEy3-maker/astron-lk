import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "korolevdani4@gmail.com",
    pass: "abuf ntzi uwlj fzdv",
  },
});

export default new (class MailService {
  async sendRecoveryPasswordLink(email, link) {
    try {
      const info = await transporter.sendMail({
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
