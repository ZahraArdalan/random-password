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






  function checkNumber()   {
    var checkBoxNumber = document.getElementById("mnumbercheck");
    var charsnumber =
      "123456789";
    for (var i = 0; i < passlenght; i++) {
      var rand = Math.floor(Math.random() * charsnumber.length);
      password += charsnumber.substring(rand, rand + 1);
    }
    document.getElementById("password").value = password;
    
  }



  function capitalcheck()   {
    var checkBoxcapital = document.getElementById("capitalcheck");
    var charscapital =
      "QWERTYUIOPASDFGHJKLZXCVBNM";
    for (var i = 0; i < passlenght; i++) {
      var rand = Math.floor(Math.random() * charscapital.length);
      password += charscapital.substring(rand, rand + 1);
    }
    document.getElementById("password").value = password;
    
  }




  function smallcheck()   {
    var checkBoxsmall = document.getElementById("smallcheck");
    var charssmall =
      "qwertyuiopasdfghjklzxcvbnm";
    for (var i = 0; i < passlenght; i++) {
      var rand = Math.floor(Math.random() * charssmall.length);
      password += charssmall.substring(rand, rand + 1);
    }
    document.getElementById("password").value = password;
    
  }




  function checkSymbols()   {
    var checkBoxSymbols = document.getElementById("Symbolscheck");
    var charsSymbols =
      "@#$%^&*()?><!+_";
    for (var i = 0; i < passlenght; i++) {
      var rand = Math.floor(Math.random() * charsSymbols.length);
      password += charsSymbols.substring(rand, rand + 1);
    }
    document.getElementById("password").value = password;
    
  }



  function checkAll()   {
    var checkBoxAll = document.getElementById("Allcheck");
    var charsAll =
      "123456789QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm@#$%^&*()?><!+_";
    for (var i = 0; i < passlenght; i++) {
      var rand = Math.floor(Math.random() * charsAll.length);
      password += charsAll.substring(rand, rand + 1);
    }
    document.getElementById("password").value = password;
    
  }



  //function myFunction() {
    // Get the checkbox
    //var checkBox = document.getElementById("myCheck");
    // Get the output text
    //var text = document.getElementById("text");

    // If the checkbox is checked, display the output text
    if (checkBoxNumber.checked == true){
      checkNumber();
    } else if (checkBoxcapital.checked == true){
      capitalcheck()

    
    } else if(checkBoxsmall.checked == true){
      smallcheck();

    } else if(checkBoxSymbols.checked == true){
      checkSymbols();
    
    }else if(checkBoxAll.checked == true){
      checkAll();
    
    }

    
    else {
      alert("Enter the information correctly!");
    }

}