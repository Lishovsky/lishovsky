const sgMail = require('@sendgrid/mail');

exports.sendEmailToOwner = (req, res) => {

    const { names, message, mail } = req.query;

    const nameToSend = names;
    const messageText = message;
    const emailAdress = mail;

    sgMail.setApiKey('i_hide_key');
    const msg = {
        to: `agencja@colorblue.pl`,
        from: `potwierdzenie@colorblue.pl`,
        subject: 'Nowa wiadomość ze strony',
        html: `<div
                        style="background: #fff; text-align: center; font-family: 'Montserrat', sans-serif; padding: 30px 20px; text-transform: uppercase;">
                        <img src="./public/assets/img/logo.svg" alt="logo">
                        <h2 style="color: #2f7194;">Nowa wiadomość</h2>
                        <p style="font-weight: 500; font-size: 16px;"><b>${nameToSend} (${emailAdress}) wysłał zapytanie ze strony!</b> <br><br>
                            ${messageText}
                        </p>
                        <p style="color: #2f7194; font-size: 11px; font-weight: 500;">Wiadomość wygenerowana automatycznie ze strony
                            www.lishovsky.pl.
                            Prosimy na nią nie
                            odpowiadać.</p>
                    </div>`,
    }
    sgMail
        .send(msg)
        .then(() => {
            console.log('Email sent')
        })
        .catch((error) => {
            console.error(error)
        })

    res.redirect(`/`);
}