<template>
  <div>
    <div class="flex items-center justify-center ">
      <div  
      @click="rate(star)" v-for="star in maxStars" :key="star.stars" class="star" 
      icon="star"
      :style="[star <= stars ? 'backgroundColor:gold'  : 'backgroundColor:gray']"
      ></div>
    </div>
    <div @click="isActive">
    <p ref="avis" class="text-center" ></p>
    <form action="" v-show="isActive" class="flex items-center justify-center">
      <input type="hidden" name="note" id="note" v-model="note"> 
      <textarea name="critique" id="critique" cols="20" rows="5" placeholder="Donner votre avis"></textarea>
      <button type="submit"> envoyer</button>
    </form> 
    </div>

  </div>
</template>

<script>
export default {
    name: 'Rating',
    props: ['grade', 'maxStars' , ],

    data() {
      return {
        stars : this.grade,
        note:'',
        isActive: false,
      }
    },
    methods: {
      rate(star){
        this.isActive = true;
        if(typeof star === 'number' && star <= this.maxStars && star >= 0){
          this.stars = this.stars === star ? star - 1 : star
          this.note = this.stars *0.5
        }
      },
      comment(comment){
        this.$refs.avis.innerHTML = comment;
      }
    },

  watch : {
    stars(){
      switch(this.note){
            case 0:
              this.comment("immangeable")
            break;
            case 0.5:
              this.comment("affreux");
            break;

            case 1:
              this.comment("C'est pas bon!!!");
            break;
            case 1.5:
              this.comment("C'est pas bon!!!");
            break;

            case 2:
              this.comment("Peux mieux faire!")
            break;
            case 2.5:
              this.comment("Peux mieux faire!")
            break;

            case 3:
              this.comment("Moyen")
            break;
            case 3.5:
              this.comment("C'est Bon")
            break;

            case 4:
              this.comment("C'est Bon!")
            break;
            case 4.5:
              this.comment("C'est très Bon!!!")
            break;

            case 5:
              this.comment("C'est excellent!!!")
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

.star{
  display: inline-flex;
  height: 32px;
  width: 32px;
  margin: 0 -0.3px;
  
}

.star:nth-child(odd){
  clip-path: polygon(100% 0%, 100% 70%, 71% 91%, 82% 57%, 52% 35%, 89% 35%);
  margin-left:  -17px;
}

.star:nth-child(even){
  clip-path: polygon(0% 0%, 11% 35%, 48% 35%, 18% 57%, 29% 91%, 0% 70%);
  margin-right:  -17px;
}

.star:first-child{
  margin: 0 -0.4px;
}


</style>