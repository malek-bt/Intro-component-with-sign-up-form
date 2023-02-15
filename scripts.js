const validate = () => {

    const form = document.getElementById("form");
    const firstName = document.getElementById("first");
    const lastName = document.getElementById("last");
    const email = document.getElementById("email");
    const pass = document.getElementById("pass");

    const rgx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        if (firstName.value.length == 0) {
            document.querySelector(".first_name_error").style.display = 'block';
            document.querySelector(".iconErrorF").style.display = 'block';
            firstName.style.border = '2px solid hsl(0, 100%, 74%)';
        } else {
            document.querySelector(".first_name_error").style.display = 'none';
            document.querySelector(".iconErrorF").style.display = 'none';
            firstName.style.border = '';
        }

        if (lastName.value.length == 0) {
            document.querySelector(".last_name_error").style.display = 'block';
            document.querySelector(".iconErrorL").style.display = 'block';
            lastName.style.border = '2px solid hsl(0, 100%, 74%)';
        } else {
            document.querySelector(".last_name_error").style.display = 'none';
            document.querySelector(".iconErrorL").style.display = 'none';
            lastName.style.border = '';
        }

        if (email.value.length == 0 || !email.value.match(rgx)) {
            document.querySelector(".email_error").style.display = 'block';
            document.querySelector(".iconErrorE").style.display = 'block';
            email.style.border = '2px solid hsl(0, 100%, 74%)';
            document.getElementsByName('email')[0].placeholder = 'email@example/com';
            

        } else {
            document.querySelector(".email_error").style.display = 'none';
            document.querySelector(".iconErrorE").style.display = 'none';
            email.style.border = '';

        }

        if (pass.value.length == 0) {
            document.querySelector(".Password_error").style.display = 'block';
            document.querySelector(".iconErrorP").style.display = 'block';
            pass.style.border = '2px solid hsl(0, 100%, 74%)';
        } 
        else if (pass.value.length < 8) {
            document.querySelector(".Password_error").style.display = 'none';
            document.querySelector(".Password_error_length").style.display = 'block';
            document.querySelector(".iconErrorP").style.display = 'block';
            pass.style.border = '2px solid hsl(0, 100%, 74%)';
        }
        else {
            document.querySelector(".Password_error").style.display = 'none';
            document.querySelector(".Password_error_length").style.display = 'none';
            document.querySelector(".iconErrorP").style.display = 'none';
            pass.style.border = '';
        }
    })

}