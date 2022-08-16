import nodemailer from "nodemailer";
import { htmlEmailTemplate } from "../../helpers";

export default async function handler(req, res) {
    try {
        const email = req.body;
        const newsletterEmail = htmlEmailTemplate();
        const mailOptions = {
            from: '"Nike" <john-doe@gmail.com>',
            to: email,
            subject: "Nike Store Newsletter subscription",
            html: newsletterEmail,
        };
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            service: "gmail",
            auth: {
                user: process.env.NODEMAILER_USER,
                pass: process.env.NODEMAILER_PASS,
            },
        });
        const mailSent = await transporter.sendMail(mailOptions);
        if (mailSent) {
            return res.status(200).json({
                success: "true",
                message:
                    "You have successfully subscribed to our newsletter we'll keep by updated with our news and new products",
            });
        } else {
            return res.status(409).json({ mailSent });
        }
    } catch (error) {
        return res.status(409).json({ success: false, message: error.message });
    }
}
