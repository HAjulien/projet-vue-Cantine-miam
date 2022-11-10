<template>
    <main id="app" class=" bg-gray-100 dark:bg-gray-700 dark:text-gray-100 min-h-[90vh]">

        <div class=" mt-40 mx-auto h-20 w-[95%] max-w-[700px] bg-red-600" v-if="messageError">
            <h2 class=" flex items-center justify-center h-full text-xl font-bold text-gray-100"> {{messageError}} </h2>
        </div>
        <section v-if="messageError === null" >
            <h1 class="text-center text-2xl m-6 underline underline-offset-4 decoration-amber-400 decoration-4 "> Votre Profile {{pseudo}} </h1>

            <article class="my-3 ">
                <h2 class="text-center py-2">Status</h2>
                <form action="" method="post">

                    <div class="flex justify-center my-2">
                        <label class="w-24 justify-start " for="afpaNumero">N°AFPA</label>
                        <input class="w-52 pl-2 rounded-sm" type="text" name="afpaNumero" id="afpaNumero" v-model="user.identifiantAfpa" disabled>
                    </div>
                    <div class="flex justify-center">
                        <label class="w-24 justify-start " for="pseudo">Pseudo</label>
                        <input class="w-52 pl-2 rounded-sm" type="text" name="pseudo" id="pseudo" v-model="user.pseudo" >
                    </div>
                    <div class="flex justify-center my-2">
                        <label class="w-24 justify-start " for="email">@Email</label>
                        <input class="w-52 pl-2 rounded-sm" type="text" name="email" id="email" v-model="user.email" >
                    </div>
                    <div class="flex justify-center my-2">
                        <label class="w-24 justify-start " for="status">Status</label>

                        <input class="w-52 pl-2 rounded-sm" v-if='roles[0] === "ROLE_ADMIN" || "ROLE_PERSONEL"'  type="text" name="status" id="status" value=" Personnel" disabled>
                        <input class="w-52 pl-2 rounded-sm" v-else  type="text" name="status" id="status" value="Etudiant" disabled>

                    </div>

                    <div class="flex justify-center my-2">
                        <label class="w-24 justify-start " for="pointsFidelite">points </label>
                        <input class="w-52 pl-2 rounded-sm" type="text" name="pointsFidelite" id="pointsFidelite" v-model="user.pointFidelite" disabled>
                    </div>

                    <div class="flex justify-center my-2">
                        <label class="w-24 justify-start " for="telephone">N°tel </label>
                        <input class="w-52 pl-2 rounded-sm" type="text" name="telephone" id="telephone" v-model="user.telephone" maxlength="10" >
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
            roles: {} 

        }
    },
    async created () {
        const token = localStorage.getItem('token');
        try {
            if(!token) throw new Error('Impossible de trouvé votre profile')
            let response = await axios.get('/profile', {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            })
            this.user = JSON.parse(response.data.user)
            this.roles =  this.user.roles
            if(this.user.pseudo !== this.$route.params.pseudo) throw new Error('Impossible de trouvé votre profile')
            console.log(this.user);
        } catch(e){
            console.error(e);
            this.messageError = e
        }
    }



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
    