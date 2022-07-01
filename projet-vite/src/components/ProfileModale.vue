<template>
    <div class="bloc-modale" v-if="revele" >

        <div class="overlay" v-on:click="toggleModale"></div>

        <div class="modale card  dark:bg-gray-700 rounded-xl">
            <div class="relative bg-white rounded-xl dark:bg-gray-700">
                <div class="flex justify-end p-2">
                    <button   v-on:click="toggleModale" type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="authentication-modal">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
                    </button>
                </div>

                <form class="px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8" action="POST"  @submit.prevent="submit">
                    <h3 class="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>
                    
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email  {{indication}}</label>
                        <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com"
                        v-model="form.email"
                        >
                        <span v-if="verificationEmail" class="text-gray-100 bg-red-500 px-3 rounded transition-all text-sm"> {{verificationEmail}} </span>
                    </div>

                    <div>
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        required
                        v-model="form.password"
                        >
                        <span v-if="verificationPassword" class=" text-gray-100 bg-red-500 px-1  rounded transition-all text-sm"> {{verificationPassword}} </span>
                    </div>

                    <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
                    <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                        Not registered?  <router-link to="/inscription" class="text-blue-700 hover:underline dark:text-blue-500" v-on:click="toggleModale" >Create account</router-link> 
                    </div>
                </form>
                
            </div>
        </div>
                <div 
                class="absolute top-[20%] translate-y-[-50%] left-2 right-2 bg-emerald-400/95 text-center text-2xl z-10 p-5 rounded-lg"
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
        }
    },
    
    methods: {
        ...mapActions({
            login: 'auth/login',
        }),
        async submit(){
            await this.login(this.form)
            this.isSuccess = true
            location.reload()
        },
    },

}

</script>

<style lang="scss" scoped>

.bloc-modale{
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 20;
}

.overlay {
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
}

.modale{
    background-color: #fff;
    position: fixed;
    top: 10%;
    z-index: 1;
    width: 80vw;
    max-width: 600px;
}

    
</style>

