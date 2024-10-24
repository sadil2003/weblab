function validateform() {
    var name = document.form1.uname.value;
    var address = document.form1.address.value;
    var birthDate = document.form1.Bday.value;
    var age = document.form1.age.value;
    var gender = document.form1.g.value;
    var disease = document.form1.disease.value;
    var email = document.form1.mail.value;
    var password = document.form1.pin.value;
    
    if (name.length == 0) {
        window.alert("Name is Missing");
        return false;
    }
    if (address.length == 0) {
        window.alert("Address is Missing");
        return false;
    }
    if (birthDate.length == 0) {
        window.alert("Birth Date is Required");
        return false;
    }
    if (isNaN(age) || age.length === 0) {
        window.alert("Input a numerical value for age");
        return false;
    }
    if (age.length > 3) {
        window.alert("Age should be less than 3 numerical places");
        return false;
    }
    if (!gender) {
        window.alert("Choose male or female");
        return false;
    }
    if (disease == "0") {
        window.alert("Please select a valid disease");
        return false;
    }
    if (email.length == 0) {
        window.alert("Email is missing");
        return false;
    }
    if (email.indexOf('@') === -1) {
        window.alert("Email must contain an '@' symbol");
        return false;
    }
   
    if (password.length == 0) {
        window.alert("password is Required");
        return false;
    }

    if (password.length < 6) {
        window.alert("password should be greater than 6 characters");
        return false;
    }

    document.getElementById("output").innerHTML =
        "<strong>Name:</strong> " + name + "<br>" +
        "<strong>Address:</strong> " + address + "<br>" +
        "<strong>Birth Date:</strong> " + birthDate + "<br>" +
        "<strong>Age:</strong> " + age + "<br>" +
        "<strong>Gender:</strong> " + (gender === '0' ? 'Male' : 'Female') + "<br>" +
        "<strong>Disease:</strong> " + disease + "<br>" +
        "<strong>Email:</strong> " + email;

    return true; 
}
