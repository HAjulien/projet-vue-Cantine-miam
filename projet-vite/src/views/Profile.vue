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

                    <div class="flex justify-center my-2">
                        <label class="w-24 justify-start " for="afpaNumero">N°AFPA</label>
                        <input class="w-52 pl-2 rounded-sm border-2 border-gray-800" type="text" name="afpaNumero" id="afpaNumero" v-model="user.identifiantAfpa" disabled>
                    </div>
                    <div class="flex justify-center">
                        <label class="w-24 justify-start " for="pseudo">Pseudo</label>
                        <input class="w-52 pl-2 rounded-sm text-stone-700" type="text" name="pseudo" id="pseudo" v-model="user.pseudo" >
                    </div>
                    <div class="flex justify-center my-2">
                        <label class="w-24 justify-start " for="email">@Email</label>
                        <input class="w-52 pl-2 rounded-sm text-stone-700" type="text" name="email" id="email" v-model="user.email" >
                    </div>
                    <div class="flex justify-center my-2">
                        <label class="w-24 justify-start " for="status">Status</label>

                        <input class="w-52 pl-2 rounded-sm border-2 border-gray-800" v-if='roles[0] === "ROLE_ADMIN" || "ROLE_PERSONEL"'  type="text" name="status" id="status" value=" Personnel" disabled>
                        <input class="w-52 pl-2 rounded-sm border-2 border-gray-800" v-else  type="text" name="status" id="status" value="Etudiant" disabled>

                    </div>

                    <div class="flex justify-center my-2">
                        <label class="w-24 justify-start " for="pointsFidelite">points </label>
                        <input class="w-52 pl-2 rounded-sm border-2 border-gray-800" type="text" name="pointsFidelite" id="pointsFidelite" v-model="user.pointFidelite" disabled>
                    </div>

                    <div class="flex justify-center my-2">
                        <label class="w-24 justify-start " for="telephone">N°tel </label>
                        <input class="w-52 pl-2 rounded-sm text-stone-700" type="text" name="telephone" id="telephone" v-model="user.telephone" maxlength="10" >
                    </div>

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

export default {
    
    name:'profile',
    

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
            this.roles =  this.user.roles
            if(this.user.pseudo !== this.$route.params.pseudo) throw new Error('Impossible de trouvé votre profile')
        } catch(e){
            console.error(e);
            this.messageError = e
        }
    },
    methods: {
        async submit(){
            const pseudo = this.user.pseudo
            const telephone = this.user.telephone
            const email = this.user.email
            const form = {pseudo, telephone, email}
            //console.log(form);

            try{
                const formData = await axios.put(`/users/${this.user.id}`,form, {
                    headers: {
                        'Authorization': 'Bearer ' + this.token,
                    },
                })
                //console.log(formData);
                location.reload();
                
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
    