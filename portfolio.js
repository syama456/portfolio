
    let form = document.getElementById("myform");

    let nameInput = document.getElementById("name");
    let emailInput = document.getElementById("email");
    let numberInput = document.getElementById("number");
    let messageInput = document.getElementById("message");

    let nameError = document.getElementById("name-error");
    let numberError = document.getElementById("number-error");
    let emailError = document.getElementById("email-error");
    let messageError = document.getElementById("message-error");

let successMsg = document.getElementById("success-msg");


    nameInput.addEventListener("input", function () {
      nameError.innerHTML = "";
    })

    numberInput.addEventListener("input", function () {
      numberError.innerHTML = "";
    })

    emailInput.addEventListener("input", function () {
      emailError.innerHTML = "";
    });


    messageInput.addEventListener("input", function () {
      messageError.innerHTML = "";
    })

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      nameError.innerHTML = "";
      emailError.innerHTML = "";
      numberError.innerHTML = "";
      messageError.innerHTML = "";
      successMsg.innerHTML = "";



      let name = nameInput.value.trim();
      let number = numberInput.value.trim();
      let email = emailInput.value.trim();
      let message = messageInput.value.trim();

      let hasError = false;


      if (name === "") {
        nameError.innerHTML = "Name is Required";
        hasError = true;
      }


      if (number === "") {
        numberError.innerHTML = "Phone number is required";
        hasError = true;

      }
      else if (number.length !== 10) {
        numberError.innerHTML = "Phone number must be exactly 10 digits";
        hasError = true;
      }


      if (email === "") {
        emailError.innerHTML = "Email is required";
        hasError = true;

      }
      else if (!email.includes("@")) {
        emailError.innerHTML = "Please enter a correct email";
        hasError = true;
      }

      if (message === "") {
        messageError.innerHTML = "Message is required";
        hasError = true;
      }

       if (!hasError) {
    successMsg.innerHTML =
      "Great!!! Email has been Successfully Sent. We will get in touch asap.";
form.onsubmit='https//www.syamasivankutty10@gmail.com'

    form.reset();
    
setTimeout(function () {
  successMsg.innerHTML = "";
}, 2000)
  }
    });
