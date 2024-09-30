function togglemenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");


}

const form = document.querySelector('form');
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const mess = document.getElementById("message");

function sendEmail(){
    const bodyMessage = `Full Name = ${fullName.value} <br> Email: ${email.value} <br> Message: ${mess.value}`;
    Email.send({
        SecureToken : "bb0094ff-f00c-4d47-8994-ba1cc4683a50",
        To : 'juanperezgutierrez579@gmail.com',
        From : "juanperezgutierrez579@gmail.com",
        Subject : "Personal Website Message Recive",
        Body : bodyMessage
    }).then(
      message => {
        if(message == "OK"){
            Swal.fire({
                title: "Good job!",
                text: "Message Sent Succesfully!",
                icon: "success"
              });
        }
      }
    );  
}

function checkInputs(){
    const items = document.querySelectorAll(".item");
    for(const item of items){
        if(item.value == ""){
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }
        if(items[1].value != ""){
            checkEmail();
        }

        items[1].addEventListener("keyup", () => {
            checkEmail();
        })

        item.addEventListener("keyup", () => {
            if (item.value != ""){
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            }
            else{
                item.classList.classList.add("error");
                item.parentElement.classList.add("error");

            }
        })
    }

}

function checkEmail(){
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const errorTxtEmail = document.querySelector(".error-txt.email");

    if(!email.value.match(emailRegex)){
        email.classList.add("error");
        email.parentElement.classList.add("error");

        if(email.value != ""){
            errorTxtEmail.innerText = "Enter a valid email address"
        }
        else{
            errorTxtEmail.innerText = "Email can't be blank"

        }
    }
    else{
        email.classList.remove("error");
        email.parentElement.classList.remove("error"); 
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();

    if(!fullName.classList.contains("error") && !email.classList.contains("error") && !mess.classList.contains("error")){
        sendEmail();
        form.reset();
        return false;
    }

})