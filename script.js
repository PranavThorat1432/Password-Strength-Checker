var pass = document.getElementById("password");
var msg = document.getElementById("msg");
var str = document.getElementById("strength");
let eyeIcon = document.getElementById("eye-icon");
const copyButton = document.querySelector(".copy-btn");

pass.addEventListener('input', () => {
    if(pass.value.length > 0) {
        msg.style.display = "block";

    } else {
        msg.style.display = "none";
    }


    if(pass.value.length < 4) {
        str.innerHTML = "weak";
        pass.style.borderColor = "#ff5925";
        msg.style.color = "#ff5925";

    } else if(pass.value.length >= 4 && pass.value.length < 8) {
        str.innerHTML = "medium";
        pass.style.borderColor = "yellow";
        msg.style.color = "yellow";

    } else if(pass.value.length >= 8) {
        str.innerHTML = "strong";
        pass.style.borderColor = "#26d730";
        msg.style.color = "#26d730";
    }

    if (pass.value.length > 0) {
        msg.classList.add("show");
    } else {
        msg.classList.remove("show");
    }

    eyeIcon.onclick = function() {
        if(pass.type == "password") {
            pass.type = "text";
            eyeIcon.src = "eye-icons/eye-open.png";
    
        } else {
            pass.type = "password";
            eyeIcon.src = "eye-icons/eye-close.png";
    
        }
    }

    
    function copyPass() {
        pass.select();
        document.execCommand("copy");
    }
    
    copyButton.addEventListener("click", () => {
        copyPass();
    });

});