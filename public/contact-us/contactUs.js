function sendMail() {

    let emailForm = document.getElementById('email-form');
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let subject = document.getElementById('subject').value;
    let text = document.getElementById('text').value;

    let templateParams = {
        from_name: name,
        email: email,
        subject: subject,
        message: text
    };

    emailjs.send('service_nm5dnjq', 'template_1gckf7r', templateParams)
        .then(function(response) {
            emailForm.reset();
            document.getElementById('form-header').innerText = 'Message Sent!'
            document.getElementById('form-info').innerText = 'Thanks for contacting us!  We will get back to you soon!'
        }, function(error) {
            console.log('FAILED...', error);
        });
}
