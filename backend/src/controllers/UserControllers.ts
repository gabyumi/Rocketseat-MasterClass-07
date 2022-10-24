import { Request, Response } from "express";
import EmailService from "../services/EmailService";

const users = [{ name: "Gabs", email: "gabs+rocketseat@mail.com" }];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },
  async create(req: Request, res: Response) {
    const emailService = new EmailService();
    emailService.sendMail({
      to: {
        name: "Gabs",
        email: "gabsmail@gmail.com",
      },
      message: {
        subject: "Welcome",
        body: "Welcome to the system and thank you for your support!",
      },
    });
    return res.send();
  },
};
