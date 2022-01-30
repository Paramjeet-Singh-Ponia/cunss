const nodeMailer = require('../config/nodemailer');

// this is naother way of exporting a method

exports.newComment = (comment,email) => {
    let htmlString = nodeMailer.renderTemplate({comment: comment}, '/comments/new_comment.ejs');

    console.log('inside newComment mailer',email);

    nodeMailer.transporter.sendMail({
        from:'paramponia95@gmail.com',
        to: email,
        subject:'New Comment Published!',
        // html:"<h1>Yup, your comment is now published!</h1>"
        html:htmlString
    }, (err,info) => {
        if(err){
            console.log('Error in sending mail',err);
            return;
        }

        console.log('Message sent',info);
        return;
    });
}