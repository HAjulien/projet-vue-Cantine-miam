<template>
    <div class="bloc-modale" v-if="revele" >

        <div class="overlay" v-on:click="toggleModale"></div>

        <div class="modale card rounded-xl ">
            <div class="relative bg-gray-300/70 rounded-xl dark:bg-gray-700">
                <div class="flex justify-end p-2">
                    <button   v-on:click="toggleModale" type="button" class=" close z-10 text-gray-200 bg-red-500 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="authentication-modal">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
                    </button>
                </div>

                <form class="px-6 pb-4 space-y-6 sm:pb-6 xl:pb-8 mt-[250px]" action="POST"  @submit.prevent="submit">
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
                        <div class="flex  justify-center pr-2 items-center rounded-lg bg-white text-emerald-800 focus-within:border-amber-400 focus-within:border-2">
                            <span class="w-[45px] py-2 pl-[12px] border-r-2 rounded-tl-[6.5px] bg-gray-600 rounded-bl-[6.5px] border-black text-gray-200 dark:bg-white dark:text-gray-600">
                                <fa :style="{ height: '20px'}" icon="user" />
                            </span>
                            <input type="email" name="email" id="email" placeholder="email@gmail.com" class="ml-[14px] w-[60%] text-sm py-2.5 grow outline-0"
                            required
                            v-model="form.email"
                            >
                        </div>
                        <span v-if="verificationEmail" class="text-gray-100 bg-red-500 px-3 rounded transition-all text-sm"> {{verificationEmail}} 
                        </span>
                    </div>

                    <div>
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Mot de passe</label>
                        <div class="flex justify-center pr-2 items-center rounded-lg bg-white text-emerald-800 focus-within:border-amber-400 focus-within:border-2">
                            <span class="w-[45px] py-2 pl-[12px] border-r-2 rounded-tl-[6.5px] rounded-bl-[6.5px] border-black text-gray-200 bg-gray-600 dark:bg-white dark:text-gray-600">
                                <fa :style="{ height: '20px'}" icon="lock" />
                            </span>
                            <input :type="passwordTypeField" name="password" id="password" placeholder="••••••••" class="ml-[14px] w-[60%] text-sm py-2.5 grow outline-0"
                            required
                            v-model="form.password"
                            >
                            <button @click.prevent="changeVisibilite(), isHidden = !isHidden " type="password" v-if="isHidden == true">
                                <fa :style="{ height: '20px'}" icon="eye-slash" />
                            </button>
                            <button @click.prevent="changeVisibilite(), isHidden = !isHidden" type="password" v-if="isHidden == false ">
                                <fa :style="{ height: '20px'}" icon="eye" />
                            </button>
                        </div>
                        <span v-if="verificationPassword" class=" text-gray-100 bg-red-500 px-1  rounded transition-all text-sm"> {{verificationPassword}} </span>
                    </div>

                    <button type="submit" class="w-full text-white bg-emerald-700 hover:bg-amber-400 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:hover:bg-amber-400 dark:focus:ring-blue-800">Se connecter</button>
                    <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                        Pas encore inscrit:  <router-link to="/inscription" class="text-emerald-700 hover:bg-emerald-700 hover:text-amber-400 dark:text-amber-500 ml-3 px-2 py-1 rounded  border-2 border-amber-500" v-on:click="toggleModale" >S'enregistrer</router-link> 
                    </div>
                </form>
                
            </div>
        </div>
        <div 
        class="fixed top-[10%] w-full translate-y-[-50%] sm:left-[50%] sm:translate-x-[-50%] max-w-[600px] left-2 right-2 bg-amber-400/95 text-center text-2xl  text-black z-10 p-5 rounded-lg"
        :class="[isAttempt ? '' : 'hidden']"
        >
            <p>connexion en cours...</p>
        </div>
        <div 
        class="fixed top-[10%] w-full translate-y-[-50%] sm:left-[50%] sm:translate-x-[-50%] max-w-[600px] left-2 right-2 bg-emerald-400/95 text-center text-2xl text-black z-10 p-5 rounded-lg"
        :class="[isSuccess ? '' : 'hidden']"
        >
            <p>connexion réussie: nous allons recharger la page</p>
        </div>
    </div>
</template>

<script>
import VerificationUser from '../mixins/VerificationUser'
import { mapActions } from 'vuex';


export default {
    name:'ProfileModale',
    props: ['revele', 'toggleModale'],
    mixins: [VerificationUser],
    
    data() {
        return {
            form: {
                email: '',
                password: '',
            },
            isSuccess: false,
            isAttempt: false,
            passwordTypeField: "password",
            isHidden: true
        }
    },
    
    methods: {
        ...mapActions({
            login: 'auth/login',
        }),
        async submit(){
            try {
                this.isAttempt = true
                await this.login(this.form)
                this.isAttempt = false
                this.isSuccess = true
                location.reload()
            }
            catch (e) {
                this.isAttempt = false

            }
        },
        changeVisibilite(){
            this.passwordTypeField = this.passwordTypeField === "password" ? "text": "password";
        }
    },


}

</script>

<style lang="scss" scoped>

.bloc-modale{
    display: flex;
    justify-content: center;
    align-items: center;
    @include absolutePosition(0, 0, 0, 0);
    z-index: 20;
}

.overlay {
    background-color: rgba(0, 0, 0, 0.8);
    @include absolutePosition(0, 0, 0, 0);
    min-height: 1000px;

}

.modale{
    background-color: #fff;
    position: absolute;
    top: 5%;
    z-index: 1;
    width: 90vw;
    max-width: 450px;
}

.modale::before{
    content: '';
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 300px;
    background-image: url("https://cdn.pixabay.com/photo/2015/10/20/15/26/samos-997876_960_720.jpg");
    background-size: cover;
    background-position: center;
    clip-path: polygon(100% 0, 100% 90%, 50% 100%, 0 90%, 0 0);
    border-radius: 10px;
}    
.modale::after{
    content: 'Connexion';
    position: absolute;
    top: 15%;
    left: 50%;
    padding: 5px 30px;
    font-size: 1.3rem;
    background-color: #097770cc;
    color: #f8f8f8;
    border-radius: 8px;
    transform: translateX(-50%);
    z-index: 1;

}    

.close{
    clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);

}
input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus, 
input:-webkit-autofill:active  {
    -webkit-box-shadow: 0 0 0 30px white inset !important;
}

@media screen and (min-width:767px) {
.modale{
    margin-top: 50px;
}

}
</style>

