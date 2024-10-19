function genpassword() {
  var password = "";
  var passlenght = document.getElementById("inputlangpassword").value;

  // Get all checked checkboxes
  var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');

  // If no checkboxes are checked, show an alert
  if (checkboxes.length === 0) {
    alert("Please select at least one character type.");
    return;
  }

  // Create a string of all characters based on checked checkboxes
  var chars = "";
  for (var i = 0; i < checkboxes.length; i++) {
    switch (checkboxes[i].id) {
      case "numbercheck":
        chars += "123456789";
        break;
      case "capitalcheck":
        chars += "QWERTYUIOPASDFGHJKLZXCVBNM";
        break;
      case "smallcheck":
        chars += "qwertyuiopasdfghjklzxcvbnm";
        break;
      case "Symbolscheck":
        chars += "@#$%^&*()?><!+_";
        break;
      case "Allcheck":
        chars +=
          "123456789QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm@#$%^&*()?><!+_";
        break;
    }
  }

  // Generate the password
  for (var i = 0; i < passlenght; i++) {
    var rand = Math.floor(Math.random() * chars.length);
    password += chars.substring(rand, rand + 1);
  }

  document.getElementById("password").value = password;
}
