document.getElementById("Register")

function checkField(Field) {
    if (!Field.checkValidity()) {
        Field.style.backgroundColor = "red";
    } else {
        Field.style.backgroundColor = "";
    }
}

window.addEventListener("load", function(e) {
    const form= document.getElementById("Register");
    const username= form.username;
    username.dataset.errorMsg = "Invalid username";
    const password= form.password;
    password.dataset.errorMsg = "Invalid password";
    const email= form.email;
    email.dataset.errorMsg= "Invalid email";

    textField.addEventListener("input", function(e) {
        checkField(textField);
    });
    form.addEventListener("submit", function(e) {
        checkField(textField);
    });
    form.addEventListener("submit", function(e) {
        checkField(textField);
        if (!form.checkValidity()) {
            e.preventDefault();
            alert("Please fix form errors.");
        }
    });
});

window.addEventListener("load", function(e) {
    const form=document.getElementById("Register");
    const username=form.username;
    textField.dataset.errorMsg="You must enter a Value.";
    textField.dataset.errorMsg="Your entry must be between " + textField.minLength + " and " + textField.maxLength + "characters.";


     function addError(field) {
        if (field.previousElementSibling &&
         field.previousElementSibling.className === "error") {
                return;
            }
     const error=document.createElement('div');
     error.innerHTML= '&#x26A1; '
         + field.dataset.errorMsg;
         error.className = "error";
         field.parentNode.insertBefore(error, field);
        }

    function removeError(field) {
        if (field.previousElementSibling &&
            field.previousElementSibling.className === "error") {
             field.previousElementSibling.remove();
         }
    }

    function checkField(field) {
     if (!field.checkValidity()) {
           addError(field);
        } else {
         removeError(field);
        }
    }

    username.addEventListener("change", function(e) {
        username.dataset.status = "touched";
        checkField(username);
    });

    username.addEventListener("input", function(e) {   
     if (username.dataset.status === "touched") {
            checkField(username);
     }
    })

    email.addEventListener("change", function(e) {
        email.dataset.status = "touched";
        checkField(email);
    });

    email.addEventListener("input", function(e) {   
        if (email.dataset.status === "touched") {
         checkField(email);
        }
    })

    password.addEventListener("change", function(e) {
        password.dataset.status = "touched";
        checkField(password);
    });

    password.addEventListener("input", function(e) {    
     if (password.dataset.status === "touched") {
            checkField(password);
        }
    })

    form.addEventListener("submit", function(e) {
        for (field of inputFields) {
        field.dataset.status = "touched";
        }
        checkField(username);
        checkField(password);
        checkField(email);

        if (!form.checkValidity()) {
        e.preventDefault();
        alert("Please fix form errors");
        }
    });
});