interface IMailTo {
  name: string;
  email: string;
}
interface IMailMessage {
  subject: string;
  body: string;
  attachment?: string[]; // Array<string>
}
interface IMessageDTO {
  //date transfer DTO(DDD)
  to: IMailTo;
  message: IMailMessage;
}
//type

interface IEmailService {
  sendMail(request: IMessageDTO): void;
}

class EmailService implements IEmailService {
  sendMail({ to, message }: IMessageDTO) {
    console.log(`Email enviado para ${to.name}:${message.subject}`);
  }
}
export default EmailService;
