import User from '@/models/userModel';
import bcryptjs from 'bcryptjs'
import nodemailer from 'nodemailer'

export const SendEmail = async({email, emailType, userId} : any) => {

    try{
        const hashedToken = await bcryptjs.hash(userId.toString(), 10)

        if(emailType === 'VERIFY'){
            await User.findByIdAndUpdate(userId, {
                verifyToken : hashedToken,
                verifyTokenExpiry : Date.now()+3600000
            })
        } else if (emailType === "RESET"){
            await User.findByIdAndUpdate(userId, 
                {forgotPasswordToken: hashedToken, forgotPasswordTokenExpiry: Date.now() + 3600000})
        }
        var transport = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
              user: "1045d04de6baf6",
              pass: "dd7eb5a2c7679e"
            }
          });

          const mailOptions = {
            from: 'nabeel@gmail.com',
            to: email,
            subject: emailType === "VERIFY" ? "Verify your email" : "Reset your password",
            html: `<p>Click <a href="${process.env.DOMAIN}/verifyemail?token=${hashedToken}">here</a> to ${emailType === "VERIFY" ? "verify your email" : "reset your password"}
            or copy and paste the link below in your browser. <br><br> ${process.env.DOMAIN}/verifyemail?token=${hashedToken}
            </p>`
        }

        const mailresponse = await transport.sendMail
        (mailOptions);
        return mailresponse;

    }catch(error : any){
        throw new Error(error.message);
    }
}