import { json } from '@sveltejs/kit';
import { render } from 'svelte-email';
import nodemailer from 'nodemailer';

import TemplateMail from './TemplateMail.svelte';

const user = process.env.MAIL_AUTH_USER ?? import.meta.env.VITE_MAIL_AUTH_USER;
const pass = process.env.MAIL_AUTH_PASS ?? import.meta.env.VITE_MAIL_AUTH_PASS;
const to = process.env.MAIL_MAILING_LIST ?? import.meta.env.VITE_MAIL_MAILING_LIST;

// create reusable transporter object using the default SMTP transport
const sendEmail = async (name: string, email: string, organization: string, country: string, message: string, type: string) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user, // Mail user
      pass, // Mail app password
    },
  });
  
  const emailHtml = render({
    template: TemplateMail,
    props: {
      name,
      email,
      organization,
      country,
      message,
      type
    }
  });
  
  const options = {
    email,
    to,
    subject: `Newly contact reached - ${name}`,
    html: emailHtml
  };
  
  return await transporter.sendMail(options, (error, response) => {
    if(error) {
      console.log(error);
    }
  });
} 

export const POST = async ({ request }) => {
  const { name, email, organization, country, message, type } = await request.json();
  sendEmail(name, email, organization, country, message, type);
  console.log(name, email, organization, country, message);
  return new Response;
}

