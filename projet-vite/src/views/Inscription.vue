<template>
    <div class="inscription">
        <div class="portableImage md:w-1/2 lg:w-[35vw]">
            <div class="portable  md:hidden"></div>
            <h1 class="text-center mt-20 mb-4 md:my-6" >Inscription </h1>
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
                    required
                    v-model="form.password"
                    label= "mot de passe"
                    :indication= verificationPassword
                    type= "password"

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
        </div>
        <div class="imageDesktop md:ml-[50vw] lg:ml-[35vw]">
            <div class="information text-center">
                <h1 class=" my-4 "> Avantages</h1>
                <ul class=" mx-4 min-h-[250px] flex flex-col justify-around  text-slate-200 font-bold">
                    <li>Accumuler des points de fidélités pour acheter des plats</li>
                    <li>1€ = 2 points de fidélités</li>
                    <li>Commander sur le site pour récupérer votre commande</li>
                    <li>Donner votre avis sur nos plats </li>
                </ul>
            </div>
        </div>    
        <div 
        class="absolute top-[20%] translate-y-[-50%] left-2 right-2 bg-emerald-400/95 text-center text-2xl z-[150] p-5 rounded-lg"
        :class="[isLoading ? '' : 'hidden']"
        >
            <p>traitement en cours: veillez patientez</p>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import BaseInput from '../components/BaseInput.vue' ;
import VerificationUser from '../mixins/VerificationUser'

export default {
    mixins: [VerificationUser],
    name:'inscription',
    components:{
        BaseInput,
    },
    data() {
        return {
            form: {
                email: '',
                pseudo: '',
                identifiantAfpa: '',
                password: '',
                telephone: '',
            },
            isLoading: false,
        }
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

    methods: {
        ...mapActions({
            register: 'auth/register',
            login: 'auth/login',
        }),
        async submit(){
            this.isLoading = true
            await this.register(this.form)
            await this.login(this.form)
            location.href = '/';
        },
        retour(){
            this.$router.go(-1)
        }
    },

}
</script>

<style lang="scss" scoped>


    .inscription, .portableImage{
        @include absolutePosition(0, 0, 0, 0);
        z-index: 100;
        background-image: linear-gradient(to left bottom, #f9f871, #86d683, #26a992, #127884, #2f4858);
        }
        
    .portableImage{
        background-image: url("https://c8.alamy.com/compfr/2cfdepn/vue-de-dessus-d-un-delicieux-plat-appetissant-avec-du-poisson-et-des-oignons-bagues-garnies-de-feuilles-de-basilic-frais-et-de-toasts-servis-sur-plaque-blanche-2cfdepn.jpg");
        background-size: cover;
        background-position: center;
    }

    .portable::before, .portable::after{
        clip-path: polygon(0% 0%, 0% 82.5%, 1.69492% 84.3293%, 3.38983% 86.1385%, 5.08475% 87.9078%, 6.77966% 89.6179%, 8.47458% 91.25%, 10.1695% 92.7862%, 11.8644% 94.2098%, 13.5593% 95.505%, 15.2542% 96.6578%, 16.9492% 97.6555%, 18.6441% 98.487%, 20.339% 99.1435%, 22.0339% 99.6176%, 23.7288% 99.9041%, 25.4237% 100%, 27.1186% 99.9041%, 28.8136% 99.6176%, 30.5085% 99.1435%, 32.2034% 98.487%, 33.8983% 97.6555%, 35.5932% 96.6578%, 37.2881% 95.505%, 38.9831% 94.2098%, 40.678% 92.7862%, 42.3729% 91.25%, 44.0678% 89.6179%, 45.7627% 87.9078%, 47.4576% 86.1385%, 49.1525% 84.3293%, 50.8475% 82.5%, 52.5424% 80.6708%, 54.2373% 78.8616%, 55.9322% 77.0922%, 57.6271% 75.3821%, 59.322% 73.75%, 61.017% 72.2138%, 62.7119% 70.7902%, 64.4068% 69.495%, 66.1017% 68.3422%, 67.7966% 67.3446%, 69.4915% 66.513%, 71.1864% 65.8565%, 72.8814% 65.3824%, 74.5763% 65.0959%, 76.2712% 65%, 77.9661% 65.0959%, 79.661% 65.3824%, 81.3559% 65.8565%, 83.0509% 66.513%, 84.7458% 67.3446%, 86.4407% 68.3422%, 88.1356% 69.495%, 89.8305% 70.7902%, 91.5254% 72.2138%, 93.2203% 73.75%, 94.9153% 75.3821%, 96.6102% 77.0922%, 98.3051% 78.8616%, 100% 80.6708%, 100% 0%); shape-outside: polygon(0% 0%, 0% 82.5%, 1.69492% 84.3293%, 3.38983% 86.1385%, 5.08475% 87.9078%, 6.77966% 89.6179%, 8.47458% 91.25%, 10.1695% 92.7862%, 11.8644% 94.2098%, 13.5593% 95.505%, 15.2542% 96.6578%, 16.9492% 97.6555%, 18.6441% 98.487%, 20.339% 99.1435%, 22.0339% 99.6176%, 23.7288% 99.9041%, 25.4237% 100%, 27.1186% 99.9041%, 28.8136% 99.6176%, 30.5085% 99.1435%, 32.2034% 98.487%, 33.8983% 97.6555%, 35.5932% 96.6578%, 37.2881% 95.505%, 38.9831% 94.2098%, 40.678% 92.7862%, 42.3729% 91.25%, 44.0678% 89.6179%, 45.7627% 87.9078%, 47.4576% 86.1385%, 49.1525% 84.3293%, 50.8475% 82.5%, 52.5424% 80.6708%, 54.2373% 78.8616%, 55.9322% 77.0922%, 57.6271% 75.3821%, 59.322% 73.75%, 61.017% 72.2138%, 62.7119% 70.7902%, 64.4068% 69.495%, 66.1017% 68.3422%, 67.7966% 67.3446%, 69.4915% 66.513%, 71.1864% 65.8565%, 72.8814% 65.3824%, 74.5763% 65.0959%, 76.2712% 65%, 77.9661% 65.0959%, 79.661% 65.3824%, 81.3559% 65.8565%, 83.0509% 66.513%, 84.7458% 67.3446%, 86.4407% 68.3422%, 88.1356% 69.495%, 89.8305% 70.7902%, 91.5254% 72.2138%, 93.2203% 73.75%, 94.9153% 75.3821%, 96.6102% 77.0922%, 98.3051% 78.8616%, 100% 80.6708%, 100% 0%);
    }
    .portable::after{
        content: "";
        @include absolutePosition(0%,0,88%,-10%);
        background-image: linear-gradient(to left, #097770, #1a8776, #2e977a, #45a77b, #5eb67b, #72c17a, #87cc77, #9ed775, #b3e073, #cae872, #e1f071, #f9f871);
        z-index: -1;
    }
    .portable::before{
        content: "";
        @include absolutePosition(87%,0,0,0);
        background-image: linear-gradient(to left, #097770, #1a8776, #2e977a, #45a77b, #5eb67b, #72c17a, #87cc77, #9ed775, #b3e073, #cae872, #e1f071, #f9f871);
        transform: rotate(180deg);
        z-index: -1;
    }
    
    h1{
        --bord: 0.5em;
        --bord-width: 0.15em;
        position: relative;
        isolation: isolate;
        color: #4A5979;
        clip-path: polygon(
            0% var(--bord),
            var(--bord) 0,
            100% 0, 
            100% calc( 100% - var(--bord)), 
            calc( 100% - var(--bord)) 100%, 
            0 100%  );
        max-width: 170px;
        margin-left: 50%;
        transform: translateX(-50%);
        font-size: 1.8rem;
        padding: 2px ;
    }
    h1::before, h1::after{
        content: "";
        position: absolute;
        inset: 0;
    }
    h1::before{
        background-image: linear-gradient(to right bottom, #ff73d0, #ff75bd, #ff7aad, #ff819f, #ff8894, #ff918a, #ff9c82, #ffa77c, #ffb974, #ffcc6e, #ffe26c, #f9f871);
        z-index: -2;
    }
    h1::after{
        background-image: linear-gradient(to left bottom, #fcf7ff, #faf3fb, #f8eff7, #f5ecf2, #f3e8ee);
        z-index: -1;
        clip-path: polygon(

            var(--bord-width) 
            calc(var(--bord) + var(--bord-width) * 0.5),

            calc(var(--bord) + var(--bord-width) * 0.5)
            var(--bord-width),

            calc(100% - var(--bord-width))
            var(--bord-width), 

            calc(100% - var(--bord-width))
            calc( 100% - calc(var(--bord) + var(--bord-width) * 0.5)), 

            calc(100% - calc(var(--bord) + var(--bord-width) * 0.5)) 
            calc(100% - var(--bord-width)), 

            var(--bord-width) 
            calc(100% - var(--bord-width))
            );
    }

    .form{
        min-height: 65%;
        width: 95%;
        margin: auto;
        background: rgba(128,208,147,0.2);
        -webkit-backdrop-filter: blur(3px);
        backdrop-filter: blur(3px);
        border: 2px solid rgba(24, 37, 27, 0.2);
        border-radius: 6px;
    }
    .button{
        --bord: 0.5em;
        --bord-width: 0.15em;
        position: relative;
        clip-path: polygon(
            0% var(--bord),
            var(--bord) 0,
            100% 0, 
            100% calc( 100% - var(--bord)), 
            calc( 100% - var(--bord)) 100%, 
            0 100%  );
    }


    @media screen and(min-width: 768px) {


        .portableImage{
        background-image: none;
        }
        .form{
            background: none;
            -webkit-backdrop-filter: none;
            backdrop-filter: none;
            max-width: 420px;
            border: 5px solid rgb(255, 255, 255);
        }
        .imageDesktop{
            position: relative;
            min-height: 100vh;
            background-image: url("https://th.bing.com/th/id/R.bbb63a5450b8de5ffe6c6abedeb2f7c4?rik=AoKi58eVPTf12g&pid=ImgRaw&r=0");
            background-size: cover;
            background-position: center;
            clip-path: polygon(100% 0%, 100% 56%, 100% 100%, 12% 100%, 0% 50%, 12% 0%);

        }
        .imageDesktop::before{
            content: '';
            @include absolutePosition(0, 0, 0, 0);
            background-color: rgba(0,0,0,0.5);

        }
        .information{
            @include absolutePosition(1%, 5%, 50%, 25%);
            background: rgba(128,208,147,0.2);
            -webkit-backdrop-filter: blur(3px);
            backdrop-filter: blur(3px);
            border: 2px solid rgba(24, 37, 27, 0.2);
            border-radius: 6px;

        }
        ul li{
            padding: 5px;
            margin: 10px;
            background: rgba(158, 118, 130, 0.9);
            color: #E4FDE1;
            border: 3px solid rgba(255, 255, 255, 0.7);
            border-radius: 8px;
        }
    }
    
</style>