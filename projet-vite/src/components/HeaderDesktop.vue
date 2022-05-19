<template>
  <header class="px-3">
      
<!-- menu grand format tablette  -->
      <nav>
        <ul>
          <li
          v-for="linkmenu in linksMenu" v-bind:key="linkmenu.id ">
            <router-link :to="{path:linkmenu.chemin}" class="router-link" >{{ linkmenu.page }}</router-link> 
          </li>
        </ul>
      </nav>
      <div class=" flex justify-around items-center w-32 mr-3">
          <BtnDarkMode/>
          <button class=" flex items-center ml-6 ">
              <fa :style="{height: '35px', color: '#cda673', }"   icon='user' />
          </button>
      </div>

  </header> 
</template>

<script>
import BtnDarkMode from './BntDarkMode.vue';
import  Menu from '../mixins/Menu';

export default {
  name:'HeaderDesktop',
  mixins: [Menu],
  components:{
    BtnDarkMode,
  },
  props:{
    id:Number,
    chemin:String,
    page:String,
  },
}
</script>

<style scoped>

header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  height: 45px;
  width: 100%;
  color: #f8f8f8;
  text-transform: lowercase;
  background: rgba(0, 0, 0, 0.7);
  z-index: 2;
}
    
nav {
  top: 10%;

}

li {
  display: inline-block;
  width: 10vw;
}

.router-link {
  display: flex;
  justify-content: center;
  margin-top: 9px;
  text-transform: uppercase;
  transform: scale(.8);
  transition: all .3s ease-in-out;
}

.router-link:hover {
  color: #cda673;
  transform: scale(1.1);
  transition: all .3s ease-in-out;
}

li:not(:last-child) {
  border-right: 2px solid #cda673;
}

li::after {
  content: "";
  display: block;
  margin: auto;
  height: 2px;
  margin-top: 5px;
  background-color: #cda673;
  transition: all .3s ease-in-out;
  transform: scale(0);
}
/* barre qui apparait sous menu lors d'un hover */

li:hover::after {
  transform: scale(1);
  transition: all .3s ease-in-out;
}


@media screen and (max-width:767.6px){
  header{
    display: none;
  }
}

@media screen and (min-width:767.6px) and (max-width:1024px) {

 /* on change les tailles des case du menu */
/* petites case pour accueil/cafe/equipe/contact */
  li:nth-child(odd){
      width: 10vw;
  }
/* grande cases pour les autres */
  li:nth-child(even){
      width: 15vw;
  }
}
  
</style>