function genpassword() {
  var pass = document.getElementById("password");

  var inputnumber = document.getElementById("inputlangpassword").value;
  var passlenght = inputnumber;
  //var passlenght = 12;
  var password = "";
  /*var chars =
    "123456789QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm@#$%^&*()?><!+_";

  for (var i = 0; i < passlenght; i++) {
    var rand = Math.floor(Math.random() * chars.length);
    password += chars.substring(rand, rand + 1);
  }
  document.getElementById("password").value = password;
*/

  function checkNumber() {
    var checkBoxNumber = document.getElementById("mnumbercheck");
    var charsnumber = "123456789";
    for (var i = 0; i < passlenght; i++) {
      var rand = Math.floor(Math.random() * charsnumber.length);
      password += charsnumber.substring(rand, rand + 1);
    }
    document.getElementById("password").value = password;
  }

  function capitalcheck() {
    var checkBoxcapital = document.getElementById("capitalcheck");
    var charscapital = "QWERTYUIOPASDFGHJKLZXCVBNM";
    for (var i = 0; i < passlenght; i++) {
      var rand = Math.floor(Math.random() * charscapital.length);
      password += charscapital.substring(rand, rand + 1);
    }
    document.getElementById("password").value = password;
  }

  function smallcheck() {
    var checkBoxsmall = document.getElementById("smallcheck");
    var charssmall = "qwertyuiopasdfghjklzxcvbnm";
    for (var i = 0; i < passlenght; i++) {
      var rand = Math.floor(Math.random() * charssmall.length);
      password += charssmall.substring(rand, rand + 1);
    }
    document.getElementById("password").value = password;
  }

  function checkSymbols() {
    var checkBoxSymbols = document.getElementById("Symbolscheck");
    var charsSymbols = "@#$%^&*()?><!+_";
    for (var i = 0; i < passlenght; i++) {
      var rand = Math.floor(Math.random() * charsSymbols.length);
      password += charsSymbols.substring(rand, rand + 1);
    }
    document.getElementById("password").value = password;
  }

  function checkAll() {
    var checkBoxAll = document.getElementById("Allcheck");
    var charsAll =
      "123456789QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm@#$%^&*()?><!+_";
    for (var i = 0; i < passlenght; i++) {
      var rand = Math.floor(Math.random() * charsAll.length);
      password += charsAll.substring(rand, rand + 1);
    }
    document.getElementById("password").value = password;
  }
  document.getElementById("password").value = password;

  //function myFunction() {
  // Get the checkbox
  //var checkBox = document.getElementById("myCheck");
  // Get the output text
  //var text = document.getElementById("text");

  // If the checkbox is checked, display the output text
}

if (checkBoxNumber.checked == true) {
  checkNumber();
} else if (checkBoxcapital.checked == true) {
  capitalcheck();
} else if (checkBoxsmall.checked == true) {
  smallcheck();
} else if (checkBoxSymbols.checked == true) {
  checkSymbols();
} else if (checkBoxAll.checked == true) {
  checkAll();
} else {
  alert("Enter the information correctly!");
}

alert("Enter the information correctly!");

/*
function genpassword() {
  var pass = document.getElementById("password");
  var inputnumber = document.getElementById("inputlangpassword").value;
  var passlenght = parseInt(inputnumber); // تبدیل به عدد صحیح
  var password = "";

  // بررسی اینکه حداقل یک چک باکس انتخاب شده باشد
  if (
    !document.getElementById("mnumbercheck").checked &&
    !document.getElementById("capitalcheck").checked &&
    !document.getElementById("smallcheck").checked &&
    !document.getElementById("Symbolscheck").checked &&
    !document.getElementById("Allcheck").checked
  ) {
    alert("لطفاً حداقل یک گزینه را انتخاب کنید!");
    return;
  }

  // تولید رمز بر اساس چک باکس‌های انتخاب شده
  if (document.getElementById("mnumbercheck").checked) {
    var charsnumber = "123456789";
    for (var i = 0; i < passlenght; i++) {
      var rand = Math.floor(Math.random() * charsnumber.length);
      password += charsnumber.charAt(rand);
    }
  }

  if (document.getElementById("capitalcheck").checked) {
    var charscapital = "QWERTYUIOPASDFGHJKLZXCVBNM";
    for (var i = 0; i < passlenght; i++) {
      var rand = Math.floor(Math.random() * charscapital.length);
      password += charscapital.charAt(rand);
    }
  }

  if (document.getElementById("smallcheck").checked) {
    var charssmall = "qwertyuiopasdfghjklzxcvbnm";
    for (var i = 0; i < passlenght; i++) {
      var rand = Math.floor(Math.random() * charssmall.length);
      password += charssmall.charAt(rand);
    }
  }

  if (document.getElementById("Symbolscheck").checked) {
    var charsSymbols = "@#$%^&()<>!+_";
    for (var i = 0; i < passlenght; i++) {
      var rand = Math.floor(Math.random() * charsSymbols.length);
      password += charsSymbols.charAt(rand);
    }
  }

  if (document.getElementById("Allcheck").checked) {
    var charsAll =
      "123456789QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm@#$%^&()<>!+_";
    for (var i = 0; i < passlenght; i++) {
      var rand = Math.floor(Math.random() * charsAll.length);
      password += charsAll.charAt(rand);
    }
  }

  // نمایش رمز تولید شده
  document.getElementById("password").value = password;
}
*/
