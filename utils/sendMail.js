const sgMail = require("@sendgrid/mail");
const { InternalServerError } = require("http-errors");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendMail = async (data) => {
  try {
    await sgMail.send({ ...data, from: "chivapchichi2@gmail.com" });
  } catch (error) {
    throw new InternalServerError(error.message);
  }
};

module.exports = sendMail;
