const username = document.getElementById("username");
const password = document.getElementById("password");
const phone = document.getElementById("phone");
const order = document.getElementById("order");
const button = document.getElementById("submitb");
const result = document.getElementById("result");

const usernameRegex = /^\S+$/;
const passwordRegex = /^(?=.*[0-9]).{8,}$/;
const phoneRegex = /^07[0-9]{8}$/;


button.onclick = function () {

    if (!usernameRegex.test(username.value)) { alert("Invalid Username");  }

    else if (!passwordRegex.test(password.value)) { alert("Invalid Password"); }

    else if (!phoneRegex.test(phone.value)) { alert("Invalid Phone Number"); }

    else {

    alert( result.innerHTML = "Welcome, " + username.value);

        // Local Storage
         localStorage.setItem("order", order.value);

        // Session Storage
        sessionStorage.setItem("username", username.value);
        result.innerHTML += "<br> Saved Order: "  + localStorage.getItem("order");
        result.innerHTML += "<br> Saved Username: " + sessionStorage.getItem("username");
        result.innerHTML += "<br> phone: " + phone.value

    }
};