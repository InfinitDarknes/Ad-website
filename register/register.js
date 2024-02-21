function PackUserData(){
    var Email = document.getElementById("email-input").value;
    var Pwd = document.getElementById("password-input").value;
    var Rpwd = document.getElementById("repeat-password-input").value;
    try{
        debugger;
        if (Email == "") throw "رایانامه خود را وارد کنید";
         if (Email.length < 6) throw "رایانامه باید دستکم دارای شش کاراکتر باشد";
         if(Pwd == "") throw "لطفا گذرواژه خود را وارد کنید";
         if (Pwd.length < 8) throw "گذرواژه باید دستکم دارای هشت کاراکتر باشد";
         if(Rpwd == "") throw "لطفا گذرواژه خود را دوبار وارد کنید";
         if (Pwd != Rpwd) throw "گذرواژه شما یکسان نیست";
         if (document.getElementById("terms-checkbox").checked != true) throw "شما با قوانین سایت موافقت نکرده اید";
        else {
            var NewUserData = {
                Email : document.getElementById("email-input").value,
                Pwd : document.getElementById("password-input").value,
                RegDate : Date(),
            };
            console.log(NewUserData);
            ShowConfirmForm();
            return false;
        }
    }
    catch (RegError) {
        
        var ErrorDisplay = document.getElementById("error-display");
        ErrorDisplay.style.display = "block";
        ErrorDisplay.innerHTML = RegError;
    }
}
function ShowConfirmForm(){
    document.getElementById("register-form-container").style.display = "none";
    document.getElementById("confirm-email-form").style.display = "flex";
    document.getElementById("register-text").innerHTML = "تایید رایانامه";
}

