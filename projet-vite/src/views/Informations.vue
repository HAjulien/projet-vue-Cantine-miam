<template>
    <div id="app" class="bg-gray-100 dark:bg-gray-700 dark:text-gray-100 pb-6 md:pt-[45px]">
        <div class="h-[300px] w-full mb-4 banniere"></div>
        <h1 class="text-center italic font-['Satisfy']  text-4xl md:text-5xl underline underline-offset-8 decoration-4 decoration-rose-500 my-6">Nos informations</h1>
        <div class="px-4 my-12 "> 
            <h2 class="text-center text-2xl italic " > 1: Nos mesures d'hygiène </h2>
            <article class="flex items-center flex-col md:flex-row  max-w-[1000px] space-x-4">
                <img src="../assets/images/masque.jpg" alt="" class="h-40 m-4">
                    <p class="my-4 leading-7 indent-8">
                        L’établissement doit mettre à disposition du gel-hydroalcoolique obligatoirement à l’entrée et à la sortie, y compris en terrasse et également aux toilettes.
                        Les établissements doivent mettre en place des méthodes de consultation des menus évitant le contact (par exemple : ardoise, oralement, QR code).
                        Tout mode de paiement sans contact (prépaiement, virement, cartes bancaires, QR code...) est privilégié et à table, dans la mesure du possible, afin de limiter les déplacements.
                    </p>
            </article>
        </div>
        <div class="px-4 my-12 "> 
            <h2 class="text-center text-2xl italic " > 2: Comment les menu sont élaborés? </h2>
            <article class="  flex items-center justify-end flex-col md:flex-row  space-x-4">
                <img src="../assets/images/CAF.jpg" alt="" class="h-40 m-4 md:order-1">
                    <p class="lg:max-w-[850px] leading-7 my-4 indent-8">
                        La commission des menus a lieu une fois par mois, en présence des responsables de la cuisine (production, qualité), de la diététicienne et d'agents techniques des écoles maternelles et élémentaires.Lorsque des menus de périodes de vacances doivent être établis, participent également des agents des centres de loisirs.Chaque mois un nouveau plan alimentaire est établi pour tenir compte de la saisonnalité (potage en hiver...) des contraintes des producteurs (planning de livraison pour le poulet bio ou la viande bovine...), des jours fériés..Le but l'exercice, qui dure en moyenne 3 heures, est de remplacer les intitulés génériques (légumes, bœuf...) par des noms de recettes pour obtenir les menus.
                    </p>
            </article>
        </div>
        <div class="px-4 my-12 "> 
            <h2 class="text-center text-2xl italic " > 3: Notre engagement sur le développement durable </h2>
            <article class="flex items-center flex-col md:flex-row  max-w-[1000px] space-x-4">
                <img src="../assets/images/durable.jpg" alt="" class="h-40 m-4">
                    <p class="my-4 leading-7 indent-8">
                        Chez Miam, nous prenons très au sérieux notre engagement en matière de développement durable, non seulement parce que cela nous paraît juste, mais aussi parce que cet engagement est essentiel à notre croissance et à notre transformation.Nous respectons le monde dans lequel nous opérons, et nous avons un rôle à jouer dans la société, des obligations envers les pays dans lesquels nous exerçons nos activités et envers les communautés proches de nos sites et le devoir d’agir en tant qu’acteur responsable. Ainsi, notre engagement à être une entreprise socialement responsable sous-tend toutes nos actions, de même que nos relations avec les clients, employés, fournisseurs, gouvernements et actionnaires.
                    </p>
            </article>
        </div>
                    <h2 class="text-center text-2xl italic " > 4: Notre politique de confidentialité </h2>
            <article class="  flex items-center justify-end flex-col md:flex-row  space-x-4">
                <img src="../assets/images/cadenas.jpg" alt="" class="h-40 m-4 md:order-1">
                    <p class="lg:max-w-[850px] leading-7 indent-8 my-4">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae labore, quibusdam fugit ex praesentium architecto nostrum iste, perferendis vero voluptate accusamus laboriosam earum dolore, suscipit inventore repellat? Blanditiis aperiam eaque repellat dolorum assumenda, sit pariatur. Debitis eveniet maxime rem. Sequi officiis labore minus adipisci omnis, enim, quis eveniet laboriosam, alias explicabo voluptates ipsam deleniti veniam consequuntur perferendis? Odit aliquam iusto expedita sequi ad nam vitae cumque non suscipit eos impedit, sit repellat nemo sapiente fuga rerum qui. Voluptatibus temporibus odio, fugiat doloribus ab aperiam sequi quae consequatur deserunt dicta nobis repellendus sapiente quia ex. Eligendi iste eius error recusandae cupiditate, saepe corrupti quasi alias harum esse ab consequatur in inventore officiis necessitatibus vitae? Culpa cumque repudiandae numquam nemo facere neque ut et. Alias odio nulla tempora error iusto sequi facere, harum numquam beatae fuga similique, exercitationem reiciendis. Eius, corporis maiores.
                    </p>
            </article>
    </div>
</template>

<script>
import ProgressBar from '../mixins/ProgressBar'

export default {
    mixins: [ProgressBar],
    name: 'Informations',
}

</script>

<style lang="scss" scoped>

.banniere{
    background-image: url(../assets/images/vegetables.jpg);
    background-size: cover;
    background-position: center;

}

@media screen and (max-width: 768px){
    #app{
            max-height:calc( 100vh - 165px );
    }

}

    
    #app{
        width: 100vw;
        overflow: scroll;
        overflow-x: hidden;
    }

</style>