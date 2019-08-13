
function checkForm() {
  var email = document.forms["RegForm"]["Email"];
  var what = document.forms["RegForm"]["Interest"];
  var message = "Email Sent Successfully";

  if (email.value == "") {
    window.alert("Please enter a valid e-mail address.");
    email.focus();
    return false;
  }

  if (email.value.indexOf("@", 0) < 0) {
    window.alert("Please enter a valid e-mail address.");
    email.focus();
    return false;
  }

  if (email.value.indexOf(".", 0) < 0) {
    window.alert("Please enter a valid e-mail address.");
    email.focus();
    return false;
  }
  if (what.selectedIndex < 1) {
    alert("Please make a selection.");
    what.focus();
    return false;
  }
  if (email = true) {
    window.alert("Email Sent Successfully");
    email.focus();
    return false;
  }

  return true;

};
