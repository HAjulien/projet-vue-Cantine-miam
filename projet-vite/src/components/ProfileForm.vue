<template>
    <div class="form" @submit.prevent="submit">    
        <form class="mt-12" action="Post">
            <BaseInput
            required
            v-model="form.email"
            label= "Email"
            :indication= verificationEmail
            type= "email"
            />
            <BaseInput
            required
            v-model="form.pseudo"
            label= "pseudo"
            type= "text"
            />
            <BaseInput
            required
            v-model="form.identifiantAfpa"
            label= "identifiantAfpa (9 chiffre)"
            :indication= verificationAfpa
            type= "Number"
            />
            <BaseInput
            v-model="form.telephone"
            :indication= verificationTelephone
            label= "n° téléphone (facultative)"
            type= "Number"
            />
            <div class="flex items-center justify-around mb-4">
                <input type="submit" value="Valider" class=" valider px-5 py-1.5 button bg-emerald-500 text-slate-100  hover:bg-emerald-800 hover:scale-110 hover:duration-300 duration-300 "/>
                <input type="reset" value="annuler" @click="retour" class="px-5 py-1.5 button bg-red-500/70 hover:bg-red-600 hover:scale-110 text-slate-100  hover:duration-300 duration-300"/>
            </div>
        </form>    
    </div>
</template>

<script>
import BaseInput from '../components/BaseInput.vue';
import VerificationUser from '../mixins/VerificationUser'

export default {
    name:'ProfileForm',
    mixins: [VerificationUser],

    components:{
        BaseInput,
    },
    props: {
        user: Array,
    },

    data() {
        return {
            form: {
                email: '',
                pseudo: '',
                identifiantAfpa: '',
                telephone: '',
            },
        }
    },
    beforeUpdate() {
        this.form.email = this.user[1]
        this.form.pseudo = this.user[4]
        this.form.telephone = this.user[5]
        this.form.identifiantAfpa = this.user[7]
    },

    computed: {
        
        verificationAfpa: function(){
            let identifiantAfpa = this.form.identifiantAfpa;
            let afpaString = identifiantAfpa.toString();
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

    },

}
</script>

<style>

</style>