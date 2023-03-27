const phoneNumber = {
  firstToSecond : () => {
    let firstNumber = document.getElementById("firstNumber").value;
    if (firstNumber.length === 3) {
      document.getElementById("secondNumber").focus()
    }
  },
  secondToThird : () => {
    let secondNumber = document.getElementById("secondNumber").value;
    if (secondNumber.length === 4) {
      document.getElementById("thirdNumber").focus()
    }
  },
  thirdToSending : () => {
    let thirdNumber = document.getElementById("thirdNumber").value; 
    if (thirdNumber.length === 4) {
      document.getElementById("sendingButton").style = "color:#0068FF; cursor:pointer";
      document.getElementById("sendingButton").disabled=false
    }
  }
}

let intervalID;

sending = () => {
  let number = String(Math.floor(Math.random() * 1000000));
  document.getElementById("sendingNumber").innerText = number.padStart(6, 0);

  let time = 60 * 3;
  let minute = time / 60;
  let second = time % 60;
  document.getElementById("time").innerText = minute + ':' + String(second).padStart(2, 0);

  intervalID = setInterval(() => {
    time = time - 1;

    if (time >= 0 ) {
      minute = Math.floor(time / 60);
      second = time % 60;
      document.getElementById("time").innerText = minute + ':' + String(second).padStart(2, 0);
    } else {
      clearInterval(intervalID);
    }
    
  }, 1000)

  document.getElementById("timeButton").style = "background: #0068FF; color:#FFFFFF; cursor:pointer";
  document.getElementById("timeButton").disabled=false;
}

let phone_check_bool = false;

const complete = () => {
  let time = document.getElementById("time").innerText;

  if (time === "0:00") {
    document.getElementById("timeButton").style = "  background: #FFFFFF; color: #D2D2D2; cursor:pointer";
    document.getElementById("timeButton").disabled=false;
    
    document.getElementById("sendingNumber") = 000000;
    document.getElementById("time") = '3:00';
  } else {
    alert("인증이 완료되었습니다.");
    document.getElementById("timeButton").style = "  background: #FFFFFF; color: #D2D2D2; cursor:pointer";
    
    document.getElementById("sendingNumber").innerText = '000000';
    document.getElementById("time").innerText = '3:00';
    document.getElementById("timeButton").innerText = "인증완료";
    phone_check_bool = true;
    clearInterval(intervalID);
    
  }
}


const checkSignup = () => {
  let email = document.getElementById("email").value;
  let name = document.getElementById("name").value;
  let password1 = document.getElementById("password1").value;
  let password2 = document.getElementById("password2").value;
  let region_select = document.getElementById("region");
  let region = region_select.options[region_select.selectedIndex].value;
  let gender_input = document.querySelector('input[name="gender"]:checked');
  let gender;
  if (gender_input) {gender=gender_input.value} else {gender=null}

  let check_bool = true;

  if (email && email.includes("@")) {document.getElementById("email_alert").style = "color:white;";} 
  else {document.getElementById("email_alert").style = "color:red;";check_bool = false;}

  if (!name) {document.getElementById("name_alert").style = "color:red;";check_bool = false;}
  else {document.getElementById("name_alert").style = "color:white;";}

  if (password1 && password1==password2) {document.getElementById("password1_alert").style = "color:white;";}
  else {document.getElementById("password1_alert").style = "color:red;";check_bool = false;}

  if (password2 && password1==password2) {document.getElementById("password2_alert").style = "color:white;";}
  else {document.getElementById("password2_alert").style = "color:red;";check_bool = false;}

  if (region !=="지역을 선택하세요.") {document.getElementById("region_alert").style = "color:white;";}
  else {document.getElementById("region_alert").style = "color:red;";check_bool = false;}

  if (gender) {document.getElementById("gender_alert").style = "color:white;";}
  else {document.getElementById("gender_alert").style = "color:red;";check_bool = false;}

  if (phone_check_bool) {document.getElementById("phone_alert").style = "color:white;";}
  else {document.getElementById("phone_alert").style = "color:red;";check_bool = false;}

  if (check_bool) {
    alert("코드캠프 가입을 축하합니다.")
  }

}