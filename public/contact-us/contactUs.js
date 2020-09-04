function myFunction() {
    console.log('we clicked it...');

    var templateParams = {
        from_name: 'Billy',
        message: 'Check this out!'
    };

    emailjs.send('service_9e2b0gf', 'template_zyfhl0j', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
            console.log('FAILED...', error);
        });
}
