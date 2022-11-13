<template>
    <main id="app" class=" bg-gray-100 dark:bg-gray-700 dark:text-gray-100 min-h-[90vh]">

        <div class=" mt-40 mx-auto h-20 w-[95%] max-w-[700px] bg-red-600" v-if="messageError">
            <h2 class=" flex items-center justify-center h-full text-xl font-bold text-gray-100"> {{messageError}} </h2>
        </div>
        <section v-if="messageError === null" >
            <h1 class="text-center text-2xl m-6 underline underline-offset-4 decoration-amber-400 decoration-4 "> Votre Profile {{pseudo}} </h1>

            <article class="my-1 mx-auto rounded-md border-2 max-w-[500px] border-emerald-300 bg-slate-200 dark:bg-slate-600  py-3 ">
                <h2 class="text-center text-xl py-2">Mes Informations</h2>
                <form action="" method="post" @submit.prevent="submit">

                    <ProfileInput
                        disabled
                        v-model="user.identifiantAfpa"
                        label= "afpaNumero"
                        type= "text"/>
                    <ProfileInput
                        v-model="user.pseudo"
                        label= "pseudo"
                        type= "text"
                        inputClassTailwind= "dark:text-gray-700"/>
                        <ProfileInput
                        v-model="user.email"
                        label= "email"
                        type= "email"
                        inputClassTailwind= "dark:text-gray-700"/>

                    <div class="flex justify-center my-2">
                        <label class="w-24 justify-start " for="status">Status</label>

                        <input class="outline-none w-52 pl-2 rounded-sm border-b-2 border-gray-800" v-if='roles[0] === "ROLE_ADMIN" || "ROLE_PERSONEL"'  type="text" name="status" id="status" value=" Personnel" disabled>
                        <input class="outline-none w-52 pl-2 rounded-sm border-b-2 border-gray-800" v-else  type="text" name="status" id="status" value="Etudiant" disabled>

                    </div>

                    <ProfileInput
                        disabled
                        v-model="user.pointFidelite"
                        label= "points"
                        type= "number"/>
                    <ProfileInput
                        maxlength="10"
                        v-model="user.telephone"
                        label= "telephone"
                        type= "text"
                        inputClassTailwind= "dark:text-gray-800"/>

                    <div class="flex items-center justify-center mb-4">
                        <input type="submit" value="modifier" class=" valider px-3 py-1 button bg-emerald-500 text-slate-100  hover:bg-emerald-800 hover:scale-110 hover:duration-300 duration-300 "/>
                    </div>
                </form>

            </article>
        </section>
    </main>
</template>

<script>
import axios from 'axios';
import ProfileInput from '../components/ProfileInput.vue';

export default {
    
    name:'profile',
    components:{
        ProfileInput,
    },

    data() {
        return {
            pseudo : this.$route.params.pseudo,
            user : {},
            messageError : null,
            roles: {},
            token: ""

        }
    },
    async created () {
        this.token = localStorage.getItem('token');
        try {
            if(!this.token) throw new Error('Impossible de trouvé votre profile')
            let response = await axios.get('/profile', {
                headers: {
                    'Authorization': 'Bearer ' + this.token
                }
            })
            this.user = JSON.parse(response.data.user)
            console.log(this.user);
            this.roles =  this.user.roles
            if(this.user.pseudo !== this.$route.params.pseudo) throw new Error('Impossible de trouvé votre profile')
        } catch(e){
            console.error(e);
            this.messageError = e
        }
    },
    methods: {
        async submit(){

            const form = {pseudo : this.user.pseudo , telephone: this.user.telephone, email : this.user.email}
            //console.log(form);

            try{
                const formData = await axios.put(`/users/${this.user.id}`,form, {
                    headers: {
                        'Authorization': 'Bearer ' + this.token,
                    },
                })

                this.$router.push('/profile/' + this.user.pseudo)
                //console.log(formData);
                
            }
            catch(error) {
                console.error(error);
            };
        },
    },



}
</script>

<style lang="scss" scoped>

#app{
    width: 100vw;
    overflow: scroll;
    overflow-x: hidden;   
}


@media screen and (max-width: 768px){
    #app{
        max-height:calc( 100vh - 165px );
    }
}

@media screen and (min-width: 768px){
    #app{
        padding: 50px 0;
    }
}
</style>
    