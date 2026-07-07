import nodeMailer from "nodemailer";

export const verify = async (token, email) => {
  //!Step 1: Create a Transport
  const transport = nodeMailer.createTransport({
    service: "gmail",
    auth: {
      user: "process.env.AUTH_USER",
      pass: "process.env.AUTH_USER",
    },
  });

  // !Step 2: configure a mail
  const mailconfigure = {
    from: "process.env.AUTH_USER",
    to: "email",
    subject: "Verification Email ",
    html: `
        <h1>Welcome User</h1>
        <p>Please verify yourself</p>
        <a href='htp://localhost:5173/verify-email/${token}'>
            <button>Verify</button>
        </a>
        
        `,
  };

  //!Step 3: Send a mail
  transport.sendMail(mailconfiguration, (err, info) => {
    if (err) {
      throw new Error(err);
    }
    console.log("Email sent Successfully", info);
  });
};
