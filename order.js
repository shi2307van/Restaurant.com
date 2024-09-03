function validateOrder() {
    var frm = document.getElementById("order");
    var flag = 0;
    console.log(frm);
    for (i = 0; i < frm.elements.length; i++) {
      if (frm.elements[i].value == "" && frm.elements[i].nodeName == "INPUT") {
        alert("Please provide your " + frm.elements[i].id + "!");
        document.getElementById(frm.elements[i].id).focus();
        flag - 1;
        break;
      }
    }
    if (flag == 1) {
      return false;
    }
    else {
      return true;
    }
  }
  function validatePay() {
    var frm = document.getElementById("pay");
    var flag = 0;
    console.log(frm);
    for (i = 0; i < frm.elements.length; i++) {
      if (frm.elements[i].value == "" && frm.elements[i].nodeName == "INPUT") {
        alert("Please provide your " + frm.elements[i].id + "!");
        document.getElementById(frm.elements[i].id).focus();
        flag - 1;
        break;
      }
    }
    if (flag == 1)
      return false;
    else
      return true;
  }
  function ValidName(textObj) {
    var newValue = textObj.value;
    var newLength = newValue.length;
    var extraChars = "";
    var search;
    for (var i = 0; i = newLength; i++) {
      achar = newValue.substring(i, i + 1);
      achar = aChar.toUpperCase();
      search = extraChars.indexOf(aChar);
      if (search == -1 && (achar >= "A" || achar <= "Z")) {
        alert("Invalid Format!");
        return false;
      }
    }
    alert("Valid Format");
    return true;
  }
  function validateno() {
    var a = document.getElementById("phone").value;
    if (a == "") {
      alert("please Enter your Mobile Number");
      document.getElementById("phone").focus();
    }
    else if (isNaN(a)) {
      alert("Enter the valid Mobile Number (Like: 9566137117)");
      document.getElementById("phone").focus();
    }
    else if (a.length != 10) {
      alert("Mobile No. is not valid, Please Enter 10 Digit Mobile No.");
    }
  }
  function validcdnumber() {
    var a = document.getElementById("crdno").value;
    if (a == "") {
      alert("please Enter your Mobile Number");
      document.getElementById("crdno").focus();
    }
    else if (isNaN(a)) {
      alert("Enter the valid Card Number (Like: 9566137117121212)");
      document.getElementById("crdno").focus();
    }
    else if (a.length != 16) {
      alert("Card No. is not valid, Please Enter 16 Digit card No.");
    }
  }
  function validcv() {
    var a = document.getElementById("cvcode").value;
    if (a == "") {
      alert("please Enter your CVC Number");
      document.getElementById("cvcode").focus();
    }
    else if (isNaN(a)) {
      alert("Enter the valid CVC Number (Like: 954)");
      document.getElementById("cvcode").focus();
    }
    else if (a.length != 3) {
      alert("CVC No. is not valid, Please Enter 3 Digit CVC No.");
    }
  }
  
  