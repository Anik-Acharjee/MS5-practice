document.getElementById('submit-btn').addEventListener('click', function () {

    // Email
    const emailFeild = document.getElementById('email');
    const userEmail = emailFeild.value;
    // pass
    const passFeild = document.getElementById('pass');
    const userPass = passFeild.value;
    if (userEmail == 'abc@gmail.com' && userPass == 123) {

        window.location.href = 'html/banking.html';
    }


})

