<template>
  <div>
    <div class="flex items-center justify-center ">
      <div  
      @click="rate(halfStar)" v-for="halfStar in maxHalfStars" :key="halfStar.halfStars" class="halfStar" 
      icon="halfStar"
      :style="[halfStar <= halfStars ? 'backgroundColor:gold'  : 'backgroundColor:gray']"
      ></div>
    </div>

    <transition  name="formulaire" mode="out-in" >
      <form action="" v-show="isActive"  @submit.prevent="submit"  method="POST">
        <p ref="avis" class="avis" ></p>
        <input type="hidden" name="note" id="note" v-model="note"> 
        <textarea  name="critique" id="critique" v-model="contenu" cols="30" rows="8" placeholder="Votre avis nous intéresse "> </textarea>
        <div class="flex item-center justify-center">
          <button type="submit" class="px-3"> envoyer</button>
          <button type="reset" @click="annuler()" > annuler</button>
        </div>
      </form> 
    </transition>

  </div>
</template>

<script>
import Login_logout from '../mixins/Login_logout';
import axios from 'axios';

export default {
  name: 'Rating',
  mixins: [Login_logout], 
  props: ['grade', 'maxHalfStars' ],

  data() {
    return {
      halfStars : this.grade,
      note:0,
      isActive: false,
      id:this.$route.params.id,
      contenu:""

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
    comment(comment, color){
      this.$refs.avis.innerHTML = comment;
      this.$refs.avis.style.backgroundColor = color;
    },
    annuler(){
      this.isActive = false;
      this.halfStars = 0;
    },
    submit(){
      axios.post('https://cantinemiam.herokuapp.com/api/critiques', {
        note: this.note,
        contenu: this.contenu,
        produit: "/api/produits/" + this.id,
      },{
        headers: {
          'Authorization': 'Bearer ' + this.token
        }
      })
      .then(function (response) {
        console.log(response);
        location.reload();

      })
      .catch(function (error) {
        console.log(error);
      });
      
    }
  },

  watch : {
    halfStars(){
      switch(this.note){
        case 0:
          this.comment("immangeable &#129326", "#9A031E")
        break;
        case 0.5:
          this.comment("affreux &#128565", "#9A031E");
        break;
        
        case 1:
          this.comment("C'est pas bon!!! &#128545","#F45B69");
        break;
        case 1.5:
          this.comment("C'est pas bon!!! &#128544 ", "#F45B69");
        break;
        
        case 2:
          this.comment("Peux mieux faire! &#128580 ", "#128544")
        break;
        case 2.5:
          this.comment("Peux mieux faire! &#128580 ", "#128544")
        break;
        
        case 3:
          this.comment("Moyen &#128578", "#FA824C")
        break;
        case 3.5:
          this.comment("C'est pas mal &#128516", "#FA824C")
        break;
        
        case 4:
          this.comment("C'est Bon!  &#128516 ","#FB8B24")
        break;
        case 4.5:
          this.comment("C'est très Bon!!! &#128525", "#FB8B24")
        break;
        
        case 5:
          this.comment("C'est excellent!!! &#129321","#FB8B24")
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
    cursor: pointer;
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

  .avis{
    width: 90%;
    text-align: center;
    margin: auto;
    padding: 8px;
    color: white;
    font-size: 22px;
    border-radius: 20px;
    border: 2px solid #f8f8f8;
  }
  textarea{
    margin: 10px 5%;
    width: 90%;
    padding: 3px 10px;
    background-color: #F8F1AE;
    font-size: 20px;
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



    .formulaire-enter-from{
    opacity: 0;
    transform: scale(0);
    }
    .formulaire-enter-active{
    transition: all .4s ease-out;
    }
    .formulaire-leave-to{
    opacity: 0;
    transform: scale(1);
    }
    .formulaire-leave-active{
    transition: all .4s ease-in;
    }

</style>