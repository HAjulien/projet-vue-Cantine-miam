<template>
  <div>
    <div class="flex items-center justify-center ">
      <div  
      @click="rate(halfStar)" v-for="halfStar in maxHalfStars" :key="halfStar.halfStars" class="halfStar" 
      icon="halfStar"
      :style="[halfStar <= halfStars ? 'backgroundColor:gold'  : 'backgroundColor:gray']"
      ></div>
    </div>
    <div>
    <form action="" v-show="isActive" class="TEST">
      <p ref="avis" class="text-center text-12" ></p>
      <input type="hidden" name="note" id="note" v-model="note"> 
      <textarea class="QQ" name="critique" id="critique" cols="20" rows="5" placeholder="Donner votre avis"></textarea>
      <div class="flex item-center justify-center">
        <button type="submit" class="px-3"> envoyer</button>
        <button type="reset" @click="annuler()" > annuler</button>
      </div>
    </form> 
    </div>

  </div>
</template>

<script>
export default {
  name: 'Rating',
  props: ['grade', 'maxHalfStars' , ],

  data() {
    return {
      halfStars : this.grade,
      note:0,
      isActive: false,
    }
  },

  methods: {
    rate(halfStar){
      this.isActive = true;
      if(typeof halfStar === 'number' && halfStar <= this.maxHalfStars && halfStar >= 0){
        this.halfStars = this.halfStars === halfStar ? halfStar - 1 : halfStar
        this.note = this.halfStars *0.5
      }
    },
    comment(comment){
      this.$refs.avis.innerHTML = comment;
    },
    annuler(){
      this.isActive = false;
      this.halfStars = 0;
    }
  },

  watch : {
    halfStars(){
      switch(this.note){
        case 0:
          this.comment("immangeable &#129326")
        break;
        case 0.5:
          this.comment("affreux &#128565");
        break;
        
        case 1:
          this.comment("C'est pas bon!!! &#128545");
        break;
        case 1.5:
          this.comment("C'est pas bon!!! &#128544 ");
        break;
        
        case 2:
          this.comment("Peux mieux faire! &#128580 ")
        break;
        case 2.5:
          this.comment("Peux mieux faire! &#128580 ")
        break;
        
        case 3:
          this.comment("Moyen &#128578")
        break;
        case 3.5:
          this.comment("C'est Bon &#128516")
        break;
        
        case 4:
          this.comment("C'est Bon!  &#128516 ")
        break;
        case 4.5:
          this.comment("C'est très Bon!!! &#128525")
        break;
        
        case 5:
          this.comment("C'est excellent!!! &#129321")
        break;
      }
    }
  }
}
</script>

<style scoped>
  #critique{
    border: 2px solid black; 
  }

.halfStar{
    display: inline-flex;
    height: 35px;
    width: 35px;
    margin: 0 -0.3px;
    
  }

  .halfStar:nth-child(odd){
    clip-path: polygon(100% 0%, 100% 70%, 71% 91%, 82% 57%, 52% 35%, 89% 35%);
    margin-left:  -17px;
  }

  .halfStar:nth-child(even){
    clip-path: polygon(0% 0%, 11% 35%, 48% 35%, 18% 57%, 29% 91%, 0% 70%);
    margin-right:  -17px;
  }

  .halfStar:first-child{
    margin: 0 -0.4px;
  }

  .TEST{
    max-width: 350px;
    margin: auto;
  }

  .QQ{
    margin: 0 15%;
    width: 70%;
  }
</style>