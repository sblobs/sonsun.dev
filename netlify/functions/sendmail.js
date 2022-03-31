const nodemailer = require('nodemailer');
const { google } = require('googleapis');

exports.handler = async (event, context, callback) => {
  const data = JSON.parse(event.body);
  const OAuth2 = google.auth.OAuth2;

  const createTransporter = async () => {
    const oauth2Client = new OAuth2(
      process.env.CLIENT_ID,
      process.env.CLIENT_SECRET,
      'https://developers.google.com/oauthplayground'
    );

    oauth2Client.setCredentials({
      refresh_token: process.env.REFRESH_TOKEN
    });

    const accessToken = await new Promise((resolve, reject) => {
      oauth2Client.getAccessToken((err, token) => {
        if (err) {
          console.log('getAccessToken error is ', err);
          reject('Could not create access token');
        }
        resolve(token);
      });
    });

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        type: 'OAuth2',
        user: process.env.MAIL_SENDER,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
        accessToken
      }
    });
    return transporter;
  };

  const emailOptions = {
    from: process.env.MAIL_SENDER,
    to: process.env.MAIL_RECEIVER,
    subject: `Message from ${data.name}`,
    html:  `<h3>Message from ${data.name} ${data.email}: </h3>
            <p>${data.msg}</p>`
  };

  async function sendEmail(oldEmail, newEmail) {
    const transporter = await createTransporter();
    try {
      const info = await transporter.sendMail(emailOptions);
      console.log('Email sent: ' + info.response);
      callback(null, {
        statusCode: 200,
        body: 'OK'
      });
    } catch (error) {
      console.log(error);
      callback(error);
    }
  }
  await sendEmail();
}