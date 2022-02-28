<template>
    <header class="headerDesktop ">
        <img src="../assets/images/logo.png" alt="Logo"  class="w-17 h-6 lg:h-8 lg:ml-3 " >
<!-- menu grand format tablette  -->
        <nav class="menuDesktop  ">
            <ul class="menuLiens">
                <li class="menuLien "> <router-link to="/" class="router-link" >ACCUEIL</router-link> </li>
                        <li class="menuLien "> <router-link to="/" class="router-link" >MENU/TARIF</router-link> </li>
                <li class="menuLien "> <router-link to="/" class="router-link" >L'équipe</router-link> </li>
                <li class="menuLien "> <router-link to="/" class="router-link" >CLICK/COLLECT</router-link> </li>
                <li class="menuLien "> <router-link to="/" class="router-link" >CAFÉ</router-link> </li>
                <li class="menuLien "> <router-link to="/" class="router-link" >HORAIRE/LIEU</router-link> </li>
                <li class="menuLien "> <router-link to="/" class="router-link" >CONTACT</router-link> </li>
            </ul>
        </nav>
    </header> 
</template>

<script>
export default {
    name:'HeaderDesktop'
}
</script>

<style scoped>
    .headerDesktop {
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: fixed;
      top: 0;
      height: 37px;
      width: 100%;
      color: #f8f8f8;
      text-transform: lowercase;
      background: rgba(0, 0, 0, 0.7);
      z-index: 2;
    }
    
    .menuDesktop {
      top: 10%;
  
    }

    .menuLien {
      display: inline-block;
      width: 10vw;
    }

    .router-link {
      display: flex;
      justify-content: center;
      align-content: center;
      font-size: .9rem;
    }

    .router-link:hover {
      color: #cda673;
      transition: all .3s ease-in-out;
      transform: scale(1.3);
    }

   
   
    .menuLien:not(:last-child) {
      border-right: 2px solid #cda673;
    }

    .menuLien::after {
      content: "";
      display: block;
      margin: auto;
      height: 4px;
      margin-top: 5px;
      background-color: #cda673;
      transition: all .3s ease-in-out;
      transform: scale(0);
    }
    /* barre qui apparait sous menu lors d'un hover */

    .menuLien:hover::after {
      transform: scale(0.8);
      transition: all .3s ease-in-out;
    }


    @media screen and (max-width:767.6px){
        .headerDesktop{
          display: none;
        }
    }
    @media screen and (min-width:767.6px) and (max-width:1024px) {

 /* on change les tailles des case du menu */
/* petites case pour accueil/cafe/equipe/contact */
    .menuLien:nth-child(odd){
        width: 10vw;
    }
/* grande cases pour les autres */
    .menuLien:nth-child(even){
        width: 15vw;
    }
  }
  
</style>