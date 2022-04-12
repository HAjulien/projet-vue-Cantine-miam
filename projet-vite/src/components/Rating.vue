<template>
  <div>
    <ul>
      <li @click="rate(star)" v-for="star in maxStars" :key="star.stars" 
      class="inline test" >
        <div
        class="star"
        :style="[star <= stars ? 'color:gold'  : 'color:gray']"

        ></div>
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

.star{

  height: 20px;
  width: 20px;
  display: inline-flex;
  margin: 5px;
}


.test:nth-child(odd){
  background-color: rgb(224, 42, 42);
   clip-path: polygon(100% 0%, 100% 70%, 71% 91%, 82% 57%, 52% 35%, 89% 35%);


}

.test:nth-child(even){
  background-color: rgb(104, 15, 15);
  clip-path: polygon(0% 0%, 11% 35%, 48% 35%, 18% 57%, 29% 91%, 0% 70%);

}

</style>