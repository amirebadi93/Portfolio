import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});

transporter.verify((error, success) => {
  if (error) {
    console.log("❌ Connection Failed:");
    console.log(error);
  } else {
    console.log("✅ Connection Successful!");
    console.log(`Server is ready to take messages from: ${process.env.EMAIL_USER}`);
  }
});
