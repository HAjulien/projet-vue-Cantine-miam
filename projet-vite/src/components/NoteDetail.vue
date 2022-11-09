<template>
    <div class="flex items-center justify-around my-4 m-auto" >
        <div class=" flex flex-col  grow justify-center text-amber-400" >
            <p  v-if="nbMaxCritiques > 0"  class=" text-4xl  flex grow justify-center"  >
                {{noteMoyenneArrondie}} <fa :style="{ height: '33px'}" icon="star" />
            </p>
            <span class="text-center text-lg"> ({{ produit.critiques.length}} avis)  </span>
        </div>
        <div class="flex justify-center grow"  v-if="nbMaxCritiques > 0">
            <ul>
                <li class="jauge"
                :style="{width: `calc(( ${note0} / ${nbMaxCritiques} ) * 180px)`}">
                    {{note0}}
                </li> 
                <li class="jauge"
                :style="{width: `calc(( ${note1} / ${nbMaxCritiques} ) * 180px)`}">
                    {{note1}} 
                </li> 
                <li class="jauge"
                :style="{width: `calc(( ${note2} / ${nbMaxCritiques} ) * 180px)`}">
                    {{note2}}  
                </li> 
                <li class="jauge"
                :style="{width: `calc(( ${note3} / ${nbMaxCritiques} ) * 180px)`}">
                    {{note3}}  
                </li> 
                <li class="jauge"
                :style="{width: `calc(( ${note4} / ${nbMaxCritiques} ) * 180px)`}">
                    {{note4}}  
                </li> 
            </ul>
            <ul>
                <li class="jaugeValeur">0 <fa :style="{ height: '17px'}" icon="star" /> </li>
                <li class="jaugeValeur">1 <fa :style="{ height: '17px'}" icon="star" /> </li>
                <li class="jaugeValeur">2 <fa :style="{ height: '17px'}" icon="star" /> </li>
                <li class="jaugeValeur">3 <fa :style="{ height: '17px'}" icon="star" /> </li>
                <li class="jaugeValeur">4 <fa :style="{ height: '17px'}" icon="star" /> </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "NoteDetail",
    props: {
        produit: Object,
    },
    data() {
        return {
            moyenneNote: 0,
            note0: 0,
            note1: 0,
            note2: 0,
            note3: 0,
            note4: 0,
            nbMaxCritiques:0,
        }
    },


    created() {
        let sommeAllNotes = 0
        const allNotes = this.produit.critiques.map( critique => {

            sommeAllNotes += critique.note 
            if (critique.note >= 4 ){
                this.note4++
            }else if( critique.note >= 3){
                this.note3++
            }else if( critique.note >= 2){
                this.note2++
            }else if( critique.note >= 1){
                this.note1++
            }else{
                this.note0++
            }

            return critique.note
        })
        this.moyenneNote = sommeAllNotes / allNotes.length
        this.nbMaxCritiques = Math.max(this.note0, this.note1, this.note2, this.note3, this.note4)  
    },
    computed: {
        noteMoyenneArrondie: function(){
            return Math.round(this.moyenneNote * 10) /10
        },
    },

}
</script>

<style lang="scss" scoped>

    .jauge{
        position: relative;
        text-decoration: none;
        margin: 8px 0;
        height: 30px;
        background-color: $green;
        border-radius: 6px ;
        text-align: left;
        font-size: 22px;
        font-weight: 700;
        color: $principale;
        z-index: 1;

    }

    .jauge::before{
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        background-color: rgba(0, 128, 0, 0.165);
        border-radius: 6px;
        width: 180px;
        z-index: -1;
    }

    .jaugeValeur{
        position: relative;
        text-decoration: none;
        margin: 8px 0;
        margin-left: 5px;
        height: 30px;
        font-size: 15px;
        font-size: 20px;
        font-weight: 600;
        color: $green;
        z-index: 1;

    }



</style>