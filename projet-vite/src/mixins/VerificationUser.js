export default {
    
    computed: {

        verificationEmail: function(){
            var validEmailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            let email = this.form.email;
            let valider = document.querySelector(".valider")

            if(email.length == 0){
                return
            }
            else if(email.length > 0 && email.length < 10){
                return "Au moins 8 caractères"
            }
            else if(validEmailRegex.test(email) == false){
                return "format email invalide"
            }
            else {
                return
            }
        },

        verificationAfpa: function(){
            let identifiantAfpa = this.form.identifiantAfpa;
            let afpaString = identifiantAfpa.toString();
            let valider = document.querySelector(".valider")
            var onlyNumber = /^\d+$/;

            if(afpaString.length == 0){
                return
            }
            else if(afpaString.length != 9){
                return "9 chiffre uniquement"
            }
            else if(onlyNumber.test(afpaString) == false){
                return "format invalide"
            }
            else {
                return
            }
        },

        verificationTelephone: function(){
            let telephone = this.form.telephone;
            let telephoneString = telephone.toString();
            let valider = document.querySelector(".valider")
            var onlyNumber = /^[0].*/;

            if(telephoneString.length == 0){
                return
            }
            else if(onlyNumber.test(telephoneString) == false){
                return "doit Débuter par 0 "
            }
            else if(telephoneString.length != 10){
                return "10 chiffre uniquement sans espace"
            }
            else {
                return
            }
        },

        verificationPassword: function(){
            let password = this.form.password;
            let valider = document.querySelector(".valider")
            var hasNumber = /\d/; 
            
            if(password.length == 0){
                return
            }
            else if(password.length > 0 && password.length < 8){
                return "Au moins 8 caractères"
            }else if(password === password.toLowerCase()){
                return "doit contenir au moins 1 majuscule"
            }
            else if(hasNumber.test(password) == false){
                return "doit contenir au moins 1 chiffre"
            }
            else {

            }
        }
    },
    // watch: {
    //     //quand on efface tout le champs newValue est undefined
    //     verificationTelephone(newValue) {
    //         let valider = document.querySelector(".valider")
    //         if(newValue === undefined){

    //         }
    //     }
    // }
};