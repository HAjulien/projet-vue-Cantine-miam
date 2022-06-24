export default {
    
    computed: {
        verificationPassword: function(){
            let password = this.form.password;
            let valider = document.querySelector(".valider")
            var hasNumber = /\d/; 
            
            if(password.length == 0){
                return
            }
            else if(password.length > 0 && password.length < 7){
                valider.classList.add("bg-sky-600")
                valider.classList.add("-z-10")
                return "Au moins 8 caractères"
            }else if(password === password.toLowerCase()){
                return "doit contenir au moins 1 majuscule"
            }
            else if(hasNumber.test(password) == false){
                return "doit contenir au moins 1 chiffre"
            }
            else {
                valider.classList.remove("bg-sky-600")
                valider.classList.remove("-z-10")
            }
        }
    },
};