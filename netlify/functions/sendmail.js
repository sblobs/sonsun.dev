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
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: process.env.MAIL_SENDER,
        accessToken,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
    return transporter;
  };

  const sendEmail = async (emailOptions) => {
    try {
      const emailTransporter = await createTransporter();
      emailTransporter.sendMail(emailOptions, (err, info) => {
        if (err) {
          console.log(err);
          throw new Error(err);
        } else {
          return info;
        }
      })
    } catch (err) {
      console.log('sendMail error is', err);
      return err;
    }
  };
  
  try {
    await sendEmail({
      from: process.env.MAIL_SENDER,
      to: process.env.MAIL_RECEIVER,
      subject: `Message from ${data.name}`,
      html:  `
        <h3>Message from ${data.name} ${data.email}: </h3>
        <p>${data.msg}</p>
      `
    });
    return {
      statusCode: 200,
      body: JSON.stringify({ 'result': 'success' })
    }
  } catch (err) {
    console.log('sendEmail error is', err);
    return err;
  }
}