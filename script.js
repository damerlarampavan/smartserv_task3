function ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        return (true);
    }
    return (false);
}

document.getElementById('password').addEventListener('keydown', function(event){
    var format = /[ `!#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if(format.test(event.key)){
        alert("only @ special charecter is allowed");
      }
});

function fun(){
    var email = document.getElementById('username');
    var password = document.getElementById('password');
    if(ValidateEmail(email.value)){
        var format = /[ `!#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        if(format.test(password.value)){
            alert("only @ special charecter is allowed");
        }else{
            if(password.value != "SmartServTest@123"){
                alert("wrong password");
            }
        }
    } else {
        alert("please enter valid email");
    }
    window.location.href = "dashboard.html";
}