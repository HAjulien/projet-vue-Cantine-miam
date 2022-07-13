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

        verificationPassword: function(){
            let password = this.form.password;
            let valider = document.querySelector(".valider")
            var hasNumber = /\d/; 
            
            if(password.length == 0){
                return "Au moins 1 MAJ, 1 MIN,1 chiffre"
            }
            else if(password.length > 0 && password.length < 8){
                return "Au moins 8 caractères"
            }else if(password === password.toLowerCase()){
                return "doit contenir au moins 1 majuscule"
            }
            else if(password === password.toUpperCase()){
                return "doit contenir au moins 1 minuscule"
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