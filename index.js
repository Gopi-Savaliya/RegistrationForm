function isNameValidate() {
    let regex = /^[A-Za-z]{2,30}$/;
    let Name = document.querySelector("#Name");
    if(Name.value == ""){
        Name.setCustomValidity("Name cannot be empty");
        Name.reportValidity();
        return false;
    } else if(Name.value.length < 2 || Name.value.length > 30){
        Password.setCustomValidity("Name length must be 2 to 30");
        Password.reportValidity();
        return false;
    } else if(!regex.test(Name.value.trim())) {
        Name.setCustomValidity("Name only contains alphabets");
        Name.reportValidity();
        return false;
    } else {
        Name.setCustomValidity("");
        return true;
    }
}

function isEmailValidate() {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let Email = document.querySelector("#Email");
    if(Email.value == ""){
        Email.setCustomValidity("Email cannot be empty");
        Email.reportValidity();
        return false;
    } else if(!regex.test(Email.value.trim())) {
        Email.setCustomValidity("Email only");
        Email.reportValidity();
        return false;
    } else {
        Email.setCustomValidity("");
        return true;
    }
};

function isPhoneNoValidate() {
    let regex = /^(0|91)?[0-9]{10}$/;
    let PhoneNo = document.querySelector("#PhoneNo");
    if(PhoneNo.value == "") {
        PhoneNo.setCustomValidity("Phone No cannot be empty");
        PhoneNo.reportValidity();
        return false;
    } else if(!regex.test(PhoneNo.value.trim())) {
        PhoneNo.setCustomValidity("Phone No must be in Indian format");
        PhoneNo.reportValidity();
        return false;
    } else {
        PhoneNo.setCustomValidity("");
        return true;
    }
};

function isDateValidate() {
    let date = document.querySelector("#date");
    if(date.value == "") {
        date.setCustomValidity("Date of birth cannot be empty");
        date.reportValidity();
        return false;
    } else if (new Date(date.value) > new Date()) {
        date.setCustomValidity("Birthdate invalid");
        date.reportValidity();
        return false;
    } else {
        date.setCustomValidity("");
        return true;
    }
};

function isGenderSelected(){
    let gender = document.querySelector("#Gender");
    if(gender.value=="-1") {
        gender.setCustomValidity("Select Gender");
        gender.reportValidity();
        return false;
    } else {
        return true;
    }
}

function isPasswordValidate() {
    let regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,12}$/;
    let Password = document.querySelector("#Password");
    if(Password/value == "") {
        Password.setCustomValidity("Password cannot be empty");
        Password.reportValidity();
        return false;
    } else if(Password.value.length < 8 || Password.value.length > 12){
        Password.setCustomValidity("Password length must be 8 to 12");
        Password.reportValidity();
        return false;
    } else if(!regex.test(Password.value.trim())) {
        Password.setCustomValidity("Password must contain at least one digit and one secial character");
        Password.reportValidity();
        return false;
    } else {
        Password.setCustomValidity("");
        return true;
    }
};

function isConfirmPasswordValidate() {
    let ConfirmPassword = document.querySelector("#ConfirmPassword");
    if(ConfirmPassword.value == "") {
        ConfirmPassword.setCustomValidity("Confirm Password cannot be empty");
        ConfirmPassword.reportValidity();
        return false;
    } else if(Password.value !== ConfirmPassword.value) {
        ConfirmPassword.setCustomValidity("Password and Confirm Password must match");
        ConfirmPassword.reportValidity();
        return false;
    } else {
        ConfirmPassword.setCustomValidity("");
        return true;
    }
};

function success(){
    if(isNameValidate() && isEmailValidate() && isPhoneNoValidate() && isDateValidate() && isGenderSelected() && isPasswordValidate() && isConfirmPasswordValidate()) {
        return true;
    } else {
        return false;
    }
}

function clear() {
    document.querySelector("#Name").value = "";
    document.querySelector("#Email").value = "";
    document.querySelector("#PhoneNo").value = "";
    document.querySelector("#date").value = "";
    document.querySelector("#Gender").value = "-1";
    document.querySelector("#Password").value = "";
    document.querySelector("#ConfirmPassword").value = "";
}

const Form = document.querySelector("#Form");
document.querySelector("#result").style.display = "none";

Form.addEventListener("submit", function(event) {
    event.preventDefault();
    document.querySelector("#result").style.display = "block";
    function hide() {
        document.querySelector("#result").style.display = "none";
    }
    setTimeout(hide, 5000);
    clear();
});
