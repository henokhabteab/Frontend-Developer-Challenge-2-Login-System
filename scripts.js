function myFunction() {
  var un = document.forms["myForm"]["username"].value;
  var pw = document.forms["myForm"]["password"].value;
  if (un == "student" && pw == "1234") {
    window.location.href = "welcome.html";
  } else {
    alert("Invalid UserName and Password");
  }
}
