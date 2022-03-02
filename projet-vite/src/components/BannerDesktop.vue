<template>
  <div id="pageDesktop" >

<!-- les images Accueil vont se succeder lors d une animation -->
    <section class="heroBanner">
      <div class="bigImage un"></div>
      <div class="bigImage deux"></div>
      <div class="bigImage trois"></div>

  <!-- bandeau menu et header -->   
      <article class="insideBigImage">
              <h1>Cantine Miam</h1>
              <p>Venez vivre une expérience unique. La cantine comme vous ne l'avez jamais connue!!</p>
      </article>

    </section>
  </div>
</template>

<script>
export default {
  name: 'BannerDesktop',
}
</script>

<style lang="scss" scoped>

#pageDesktop{
  overflow-x: hidden;
}
.heroBanner {
      position: relative;
      height: 100vh;
      width: 100vw;
      /* petit effet parallax titre dans l'image */
      perspective: 1px;
      transform-style: preserve-3d;
    /* pour enlever les barres defilement à l'interieux image */
      overflow-y: scroll;
      overflow-x: hidden;
    }
    /* les 3 div bigImage qui contiennent chacune 1 image en background */
    .bigImage {
      position: absolute;
      height: 150vh;
      width: 100vw;
      transform-style: inherit;
      background-size: cover;
      background-position: center;
      /* donne effet parallax */
      transform: translateZ(-1px) scale(2);
    /* passe les image en arriere plan */
      z-index: -1;
    }

    /* filtre opacité */
    .bigImage::before {
      content: "";
      @include absolutePosition(0,0,0,0);
      background-color: rgba(0, 0, 0, 0.2);
    }

    /* images de fond qui vont se succéder  */
    .un {
      background-image: url(../assets/images/burgers.jpg);
      animation: thirdappear 3s 7s;
    }

    .deux {
      background-image: url(../assets/images/pizza.jpg);
      animation: Secondappear 3s 4s;
    }

    .trois {
      background-image: url(../assets/images/festive.jpg);
      animation: firstappear 4s;
    }

    /* conteneur des textes dans image */
    .insideBigImage {
      position: absolute;
      top: 65%;
      left: 50%;
      height: 100vh;
      width: 100vw;
      transform: translate(-50%, -50%);
      text-align: center;
      color: white;
    }
    /* texte dans la grande image */

    .insideBigImage h1 {
      margin-bottom: 40vh;
      font-family: 'Roboto', sans-serif;
      font-weight: 800;
      font-size: 8rem;
      text-transform: uppercase;
      letter-spacing: 4px;
      /* contour couleur titre */
      -webkit-text-stroke: 4px #cda673;
      animation: showup 3s;
    }

    .insideBigImage p {
      font-size: 1.5rem;
      margin: 0 30%;
      /* contour lettre en couleur */
      text-shadow: 1.5px 0 0 #534F56, 1.5px 1.5px 0 #534F56, 0 1.5px 0 #534F56, -1.5px 1.5px 0 #534F56, -1.5px 0 0 #534F56, -1.5px -1.5px 0 #534F56, 0 -1.5px 0 #534F56, 1.5px -1.5px 0 #534F56;
    }

    /* animation titre qui se rempli */
    @-webkit-keyframes showup {
      0% {
        color: transparent;
      }
      40% {
        color: transparent;
      }
      100% {
        color: #f8f8f8;
      }
    }

    @keyframes showup {
      0% {
        color: transparent;
      }
      40% {
        color: transparent;
      }
      100% {
        color: #f8f8f8;
      }
    }

      /* animation image accueil qui se succede */
    @-webkit-keyframes firstappear {
      0% {
        transform: scale(1);
        z-index: 0;
      }
      20% {
        transform: scale(1);
        z-index: 0;
      }
      100% {
        transform: scale(1.1);
        z-index: 0;
      }
    }

    @keyframes firstappear {
      0% {
        transform: scale(1);
        z-index: 0;
      }
      20% {
        transform: scale(1);
        z-index: 0;
      }
      100% {
        transform: scale(1.1);
        z-index: 0;
      }
    }

    @-webkit-keyframes Secondappear {
      0% {
        transform: scale(1);
        z-index: 0;
      }
      20% {
        transform: scale(1);
        z-index: 0;
      }
      100% {
        transform: scale(1.1);
        z-index: 0;
      }
    }

    @keyframes Secondappear {
      0% {
        transform: scale(1);
        z-index: 0;
      }
      20% {
        transform: scale(1);
        z-index: 0;
      }
      100% {
        transform: scale(1.1);
        z-index: 0;
      }
    }

    @-webkit-keyframes thirdappear {
      0% {
        transform: scale(1);
        z-index: 0;
      }
      20% {
        transform: scale(1);
        z-index: 0;
      }
      100% {
        transform: scale(1.1);
        z-index: 0;
      }
    }

    @keyframes thirdappear {
      0% {
        transform: scale(1);
        z-index: 0;
      }
      20% {
        transform: scale(1);
        z-index: 0;
      }
      100% {
        transform: scale(1.1);
        z-index: 0;
      }
    }

    @media screen and (max-width:767.9px){
        #pageDesktop{
          display: none;
        }
    }

</style>