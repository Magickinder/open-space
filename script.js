function logIn() {
    let password = document.getElementById("password");

    if(password.value === "TrustNo1") {
        document.getElementById("check1").disabled = false;
        document.getElementById("check2").disabled = false;
        document.getElementById("check3").disabled = false;
        document.getElementById("check4").disabled = false;
        document.getElementById("check5").disabled = false;
        document.getElementById("check6").disabled = false;

        document.getElementById("lever1").disabled = false;
        document.getElementById("lever2").disabled = false;
        document.getElementById("lever3").disabled = false;
        document.getElementById("lever4").disabled = false;
        document.getElementById("lever5").disabled = false;

        password.value = "";
        password.placeholder = "Access granted!";
        password.disabled = true;
        document.getElementById("ok-btn").disabled = true;
    } else {
        password.value = "";
        password.placeholder = "Incorrect password!";
    }
}

function checkIfRocketIsPreparedForStart() {
    let ch1 = document.getElementById("check1").checked;
    let ch2 = document.getElementById("check2").checked;
    let ch3 = document.getElementById("check3").checked;
    let ch4 = document.getElementById("check4").checked;
    let ch5 = document.getElementById("check5").checked;
    let ch6 = document.getElementById("check6").checked;

    console.log(ch1);

    let lev1 = document.getElementById("lever1").value === "100";
    let lev2 = document.getElementById("lever2").value === "100";
    let lev3 = document.getElementById("lever3").value === "100";
    let lev4 = document.getElementById("lever4").value === "100";
    let lev5 = document.getElementById("lever5").value === "100";

    console.log(document.getElementById("lever1").value);
    console.log(lev1);

    if((ch1 && ch2 && ch3 && ch4 && ch5 && ch6) && (lev1 && lev2 && lev3 &&
        lev4 && lev5)) {
        document.getElementById("launch-btn").disabled = false;
    }
}

function launchRocket() {
    let rocket = document.getElementsByClassName("rocket");

    while(parseInt(rocket[0].style.top) > -15) {
        rocket[0].style.top = String(parseInt(rocket[0].style.top) - 1 + "rem");
        rocket[0].style.left = String(parseFloat(rocket[0].style.left) + 0.5 + "rem");
    }
}