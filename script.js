
const submit_btn = document.getElementById("submit_btn")
const form = document.getElementsByClassName("form_box")

let pass_valid

function isPassValid() {
    pass_valid = false
    let pass1 = document.getElementById("password").value;
    let pass2 = document.getElementById("password_conf").value;
    
    if (pass1 === pass2 ) {
        console.log("true")
    }
    else {
        alert("passwords do not match")
        pass2 = ""
        
    
}
}



submit_btn.addEventListener("mousedown", isPassValid);