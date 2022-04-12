@ -0,0 +1,80 @@
<template>
  <div>
    <ul>
      <li @click="rate(star)" v-for="star in maxStars" :key="star.stars" 
      class="inline" >
        <fa 
        icon="star"
        class="h-5"
        :style="[star <= stars ? 'color:gold'  : 'color:gray']"

        />
      </li>
    </ul>
        <form action="">
        <input type="hidden" name="note" id="note" v-model="stars"> 
        <p ref="avis"></p>
        <div v-if="stars > 0">
          <textarea name="critique" id="critique" cols="20" rows="5" placeholder="Donner votre avis"></textarea>
          <button type="submit"> envoyer</button>
        </div>
         </form> 

  </div>
</template>

<script>
export default {
    name: 'Rating',
    props: ['grade', 'maxStars' , ],

    data() {
      return {
        stars : this.grade,
      }
    },
    methods: {
      rate(star){
        if(typeof star === 'number' && star <= this.maxStars && star >= 0){
          this.stars = this.stars === star ? star - 1 : star
        }
      }
    },

  watch : {
    stars(){
      switch(this.stars){
            case 0:
              this.$refs.avis.innerHTML = "";
            break;
            case 1:
              this.$refs.avis.innerHTML = "C'est pas bon!!!";
            break;

            case 2:
              this.$refs.avis.innerHTML = "Peut mieux faire";
            break;

            case 3:
              this.$refs.avis.innerHTML = "moyen";
            break;

            case 4:
              this.$refs.avis.innerHTML = "C'est bon";
            break;

            case 5:
              this.$refs.avis.innerHTML = "C'est exellent!!!";
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
</style>