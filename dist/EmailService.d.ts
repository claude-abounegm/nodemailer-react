import { SendMailOptions, SentMessageInfo } from 'nodemailer';
import { Options as TransportOptions } from 'nodemailer/lib/smtp-transport';
import { ReactElement } from 'react';
declare type ArgumentType<F extends Function> = F extends (arg: infer A) => any ? A : never;
export declare type EmailConfig = {
    transport: TransportOptions;
    defaults?: SendMailOptions;
};
export declare type Email<Props> = (props: Props) => {
    body: ReactElement<Props>;
    subject: string;
};
export declare type EmailsList = {
    [name: string]: Email<any>;
};
export default function <Emails extends EmailsList>(config: EmailConfig, emails: Emails): {
    transport: import("nodemailer/lib/mailer");
    send<TemplateName extends keyof Emails>(template: TemplateName, props: ArgumentType<Emails[TemplateName]>, message: SendMailOptions): Promise<SentMessageInfo>;
};
export {};
