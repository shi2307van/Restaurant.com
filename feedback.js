function check() {
    if (document.getElementById("name").value == "") {
        alert("Enter Your Name.");
        document.getElementById("name").focus();
        return false;
    }
    if (document.getElementById("email").value == "") {
        alert("Enter Your Email.");
        document.getElementById("email").focus();
        return false;
    }
    if (document.getElementById("contactno").value == "" || isNaN(document.getElementById("contactno").value) ||
        document.getElementById("contactno").value.length != 10) {
        alert("Enter Your Contact Number Properly.");
        document.getElementById("contactno").focus();
        return false;
    }
    return true;
}

