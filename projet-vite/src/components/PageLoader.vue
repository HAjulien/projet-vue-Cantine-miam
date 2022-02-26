/<template>
    <div class="page-loader" v-if="!isloaded">
        <div class="cube"></div>
        <div class="cube"></div>
        <div class="cube"></div>
        <div class="cube"></div>

    </div>
</template>

<script>
export default {
    data: () => {
        return {
            isloaded: false
        }
    },
    mounted() {
        document.onreadystatechange = () => {
            if(document.readyState == "complete") {
                this.isloaded = true;
            }
        }
    }

}
</script>

<style>

        .page-loader{
            display: flex;
            justify-content: center;
            align-items: center;
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background-color: #333;
            z-index: 999;
        }

        .cube {
            width: 40px;
            height: 40px;
            margin-right: 10px;
            background-color: #fff;
            border-radius: 7px;

            /* @for $i from 1 throuht length ($colors) {
                &:nth-child(#{$i}) {
                    background-color:nth($colors, $i);
                }
            } */
        }

        .cube:first-child{
            animation: left 1s infinite;
            background-color: rgb(212, 26, 26);
        }
        .cube:last-child{
            animation: right 1s infinite .5s;
            background-color: rgb(50, 175, 18);
        }
         .cube:nth-child(2){
             background-color: blue;
         }
         .cube:nth-child(3){
             background-color: rgb(173, 228, 21);
         }

        @keyframes left {
            40% {
                transform: translateX(-60px);
            }
            50% {
                transform: translateX(0px);
            }
        }
        @keyframes right {
            40% {
                transform: translateX(60px);
            }
            50% {
                transform: translateX(0px);
            }
        }


</style>