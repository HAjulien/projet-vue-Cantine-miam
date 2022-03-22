<template>
     <ul class="flex justify-around items-center icone mx-0.5 mb-2">
        <li
        v-for="icone in icones" v-bind:key="icone.id ">              
            <a :href="icone.href" target="_blank " @click=" icone.number = !icone.number">
                <fa :style="{ height: '40px'}" :icon="[ 'fab', icone.fa ]" :class="[icone.number ? icone.color1 : icone.color2 ]"/>
            </a>       
        </li>
    </ul>
</template>

<script>
export default {
    
    data() {
        return{
        
        icones:[
            { href: 'https://www.facebook.com', fa: 'facebook', number:'icon1' , color1:'text-blue-800', color2:'text-blue-300', id:1},
            { href: 'https://www.instagram.com', fa: 'instagram', number:'icon2' , color1:'text-violet-700', color2:'text-stone-400', id:2},
            { href: 'https://www.twitter.com', fa: 'twitter', number:'icon3' , color1:'text-sky-400', color2:'text-zinc-400', id:3},
            { icone:'icone4', href: 'https://www.youtube.com', fa: 'youtube', number:'icon4' , color1:'text-red-600', color2:'text-amber-600', id:4},
        ],
        }

    },

}

</script>

<style lang="scss">

.icone li{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    border-right: 3px solid $green;
    border-bottom: 3px solid $green;
    border-top: 3px solid $green;
    padding: 5px;
    transition: all .2s ease-in-out;
}

.icone li:first-child{
    border-left: 3px solid $green;
}

.icone li:hover{
    background-color: $principale;
    transition: all .2s ease-in-out;
}


</style>