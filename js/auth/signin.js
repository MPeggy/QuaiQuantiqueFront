const mailInput = document.getElementById("EmailInput");
const passwordInput = document.getElementById("PasswordInput");
const btnSignin = document.getElementById("btnSignin");

btnSignin.addEventListener("click", checkCredentials);

function checkCredentials(){
    //Il faudra appeler l'API ici pour verifier les credentials en BDD

    if(mailInput.value == "test@mail.com" && passwordInput.value == "123"){
        //Le vrai token sera à récupérer
        const token = "lkjsdngfljsqdnglkjsdbglkjqskjgkfjgbqslkfdgbskldfgdfgsdgf";
        setToken(token);
        //placer ce token en cookie

        window.location.replace("/");
    }
    else{
        mailInput.classList.add("is-invalid");
        passwordInput.classList.add("is-invalid");    
    }
}
