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
    <form action="" v-show="isActive" >
      <p ref="avis" class="text-center text-12" ></p>
      <input type="hidden" name="note" id="note" v-model="note"> 
      <textarea  name="critique" id="critique" cols="30" rows="8" placeholder="Votre avis nous intéresse "></textarea>
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

<style lang="scss" scoped>

  .halfStar{
    display: inline-flex;
    height: 35px;
    width: 35px;
    margin: 0 -0.4px;
    transition: all .2s ease-in;

  
    &:nth-child(odd){
      clip-path: polygon(100% 0%, 100% 70%, 71% 91%, 82% 57%, 52% 35%, 89% 35%);
      margin-left:  -17px;
    }

    &:nth-child(even){
      clip-path: polygon(0% 0%, 11% 35%, 48% 35%, 18% 57%, 29% 91%, 0% 70%);
      margin-right:  -17px;

    }
  }

  form{
    max-width: 350px;
    margin: auto;
    background-color: #3581B8;
    padding: 20px 0;
    border-radius: 15px;
  }

  textarea{
    margin: 10px 5%;
    width: 90%;
    padding: 3px 10px;
    background-color: #F8F1AE;
    outline: none !important;
    border: 3px solid $green; 
    border-radius: 10px;
    color: black;
    caret-color: $green;
    transition: all .3s linear;


    &::placeholder{
      position: absolute;
      top: 40%;
      left: 50%;
      font-size: 24px;
      text-align: center;
      color: #064D0D;
      transform: translate(-50%,-50%);
      transition: all .2s linear;

    }
    &:focus{
    border: 5px solid #5B507A; 
    }

    &:focus::placeholder{
      opacity: 0;
      transition: all .2s linear;
    }    
  }

  button{
    height: 45px;
    width: 90px;
    margin: 5px 10px;
    border-radius: 25px;

    &:first-child{
    border: 3px solid $green;
    background-image: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);
    }

    &:last-child{
    border: 3px solid red;
    background-image: linear-gradient(to top, #ff0844 0%, #ffb199 100%);   
    }

    &:hover{
      font-size: 18px;
      transform: scale(1.1);
      transition: all .2s ease-in;
    }

    &:active{
      transform: scale(.9);
      transition: all .2s ease-in;
    }

    &:first-child:active{
      color: gray;
    }
  }


</style>