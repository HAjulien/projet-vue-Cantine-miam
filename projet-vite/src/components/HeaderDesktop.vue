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
      <div class=" flex justify-around items-center mr-3">
          <BtnDarkMode/>
          <button class=" flex items-center ml-6 " v-if=" user == '' " @click="toggleModale">
              <fa :style="{height: '35px', color: '#cda673', }"   icon='user' />
          </button>

          <span class="px-3 text-slate-200 text-center mx-4 border-2 border-amber-400 rounded cursor-pointer md:text-xs md:py-1 lg:text-base 
          hover:bg-amber-400 hover:text-slate-700 duration-300	hover:duration-300"
          v-if=" user != '' ">
          bonjour  {{user[4]}}
          </span>
          <span class=" border rounded border-slade-100 border-2 dark:border-slate-200 cursor-pointer py-0.5 px-1.5 
          hover:bg-amber-400 duration-300	hover:duration-300"
          @click="logout"  v-if=" user != '' ">
              <fa :style="{height: '23px', color: '#097770', }"   icon='sign-out' />                    
          </span>
      </div>

      <transition name="slide">
        <ProfileModale :revele="revele" :toggleModale="toggleModale"></ProfileModale>
      </transition >

  </header> 
</template>

<script>
import BtnDarkMode from './BntDarkMode.vue';
import ProfileModale from './ProfileModale.vue';
import Login_logout from '../mixins/Login_logout';
import MenuLiens from '../mixins/MenuLiens';

export default {
  name:'HeaderDesktop',
  mixins: [MenuLiens, Login_logout], 
  components:{
    BtnDarkMode,
    ProfileModale
  },
  props:{
    id:Number,
    chemin:String,
    page:String,
  },
  data() {
      return {
          revele :false,
      }
  },
  methods: {
    toggleModale: function(){
        this.revele = !this.revele
    },
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
  transform: scale(1);
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

.slide-enter-from{
  opacity: 0;
  transform: translateY(-250px);
}
.slide-enter-active{
  transition: all .3s ease-out;
}
.slide-leave-to{
  opacity: 0;
  transform: translateY(-250px);
}
.slide-leave-active{
  transition: all .2s ease-in;
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
      width: 8vw;
  }
/* grande cases pour les autres */
  li:nth-child(even){
      width: 13vw;
  }
  li{
    font-size: 0.8rem;
  }
  li:hover::after {
    transform: scale(0);
  }
  .router-link:hover {
    transform: scale(0.9);
  }
  .router-link:hover {
    transform: scale(0.9);
  }
}
  
</style>