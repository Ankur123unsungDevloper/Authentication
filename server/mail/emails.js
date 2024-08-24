import {
  client,
  sender
} from "./mailtrap.config.js";
import {
  PASSWORD_RESET_REQUEST_TEMPLATE,
  PASSWORD_RESET_SUCCESS_TEMPLATE,
  VERIFICATION_EMAIL_TEMPLATE
} from "./emailTemplates.js";

export const sendVerificationEmail = async (email, verificationToken) => {
  const recipient = [ { email } ]

  try {
    const response = await client.send({
      from: sender,
      to: recipient,
      subject: "Verify your email",
      html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken),
    })
  } catch (error) {
    throw new Error("Error sending verification email:", error);
  }
};

export const sendWelcomeEmail = async (email, name) => {
  const recipient = [ { email } ]
  
  try {
    const response = await client.send({
      from: sender,
      to: recipient,
      subject: `Welcome to my website, ${name}`,
      html: `Welcome to my website, ${name}! We're thrilled to have you here. Please verify your email by clicking the link below:`,
    })
  } catch (error) {
    throw new Error("Error sending welcome email:", error);
  }
};

export const sendPasswordResetEmail = async (email, resetURL) => {
  const recipient = [ { email } ];
  
  try {
    const response = await client.send({
      from: sender,
      to: recipient,
      subject: "Reset your password",
      html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
      category: "Password Reset"
    });
  } catch (error) {
    throw new Error(`Error sending password reset email: ${error}`);
  }
};

export const sendResetSuccessEmail = async (email) => {
  const recipient = [ { email } ]
  
  try {
    const response = await client.send({
      from: sender,
      to: recipient,
      subject: "Password reset successfully",
      html: PASSWORD_RESET_SUCCESS_TEMPLATE,
      category: "Password Reset"
    });
  } catch (error) {
    throw new Error(`Error sending password reset success email: ${error}`);
  }
};