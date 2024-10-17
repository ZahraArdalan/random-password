function genpassword() {
  var pass = document.getElementById("password");
  //var inputnumber = document.getElementById("inputlangpassword");
  //var passlenght = inputnumber;
  var passlenght = 12;
  var password = "";
  var chars =
    "123456789QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm@#$%^&*()?><!+_";

  for (var i = 0; i < passlenght; i++) {
    var rand = Math.floor(Math.random() * chars.length);
    password += chars.substring(rand, rand + 1);
  }
  document.getElementById("password").value = password;
}
