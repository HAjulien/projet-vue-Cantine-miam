<template>
    <div class="main">
        <section class="localisation">
            <h1>Comment s’y rendre:</h1>
            <div class=" dark:bg-gray-600">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4205.270827304077!2d2.430662728708436!3d48.78697332329085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e673449d8b48e3%3A0x83768eac6932ce9f!2s9%20Rue%20Marc%20Seguin%2C%2094000%20Cr%C3%A9teil!5e0!3m2!1sfr!2sfr!4v1640784669488!5m2!1sfr!2sfr" width="420" height="320" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                <article>
                    <h2>  <fa  icon="train" /> En train:</h2>
                    <p> Prenez le <span class="dark:text-emerald-300">RER D</span> arrêt le Vert de Maison</p>
                    <h2> <fa icon="bus"/> En bus:</h2>
                    <p>prenez le 181,TVM arrêt rue MARC SEGUIN</p>
                    <h2> <fa icon="car"/> En voiture:</h2>
                    <p>Autoroute A86 sortie Créteil</p>
                </article>
            </div>
        </section>
        <section class="contact">
            <h2> adresse:</h2>
            <address>
                <p> 9 rue Seguin </p>
                <p> 94 000 Créteil </p>
                <p> Bâtiment 4, 2eme étage</p>
            </address>
            <p class="call">
                <a href="tel=+33100000000" > <fa  icon="phone"/> tél: 01 00 00 00 00</a>
                <a href="mailto:cantinemiam@gmail.com" > cantinemiam@gmail.com</a>
            </p>
        </section>    
    </div>
</template>

<script>
export default {
    name: 'Localisation'

}
</script>

<style lang="scss" scoped>

    .main{
        width: 96%;
        margin: auto;
    }
    h1{
        font-family: "Satisfy", sans-serif;
        font-size: 1.8rem;
        margin: 20px 0;
    }
    .localisation{
        text-align: center;
    }
    .localisation div{
        display: block;
        border: 2px solid $principale;
        border-radius: 20px 0 20px 0;
        padding: 0.4em;
    }

    iframe{
        margin: auto;
    }

    article p{
        margin-bottom: 1.5em;
    }

    article h2:first-child{
        margin-top: 1.4em;
    }
    h2{
        font-size: 1.2rem;
        text-decoration: underline;
        margin: 5px 0;
    }
    span{
        color: green;
    }

    .contact{
        text-align: center;
        margin: 35px 0;
    }

    .call{
        display: flex;
        justify-content: center;
        flex-flow: wrap;
        margin: 25px;
        line-height: 25px;
    }

    .call a{
        margin: 0 10px;
    }
    @media screen and (min-width:1024px) {
        .localisation div{
            display: flex;
            align-items: center;
            justify-content: space-around;
            max-width: 1000px;
            margin: auto;
            padding: 1.2rem;

        }

    }

</style>