<template>
    <div class="spinner">
        <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

    .spinner{
        @include absolutePosition(30%,0,0,50%);
        width: 80px;
        height: 80px;
        transform: translate(-50%,-50%);
        z-index: 11;
    }
    .lds-ring {
        display: inline-block;
        position: relative;
        width: 80px;
        height: 80px;
    }
    .lds-ring div {
        box-sizing: border-box;
        display: block;
        position: absolute;
        width: 64px;
        height: 64px;
        margin: 8px;
        border: 8px solid rgb(212, 38, 38);
        border-radius: 50%;
        animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: rgb(185, 27, 27) transparent transparent transparent;
    }
    .lds-ring div:nth-child(1) {
        animation-delay: -0.45s;
    }
    .lds-ring div:nth-child(2) {
        animation-delay: -0.3s;
    }
    .lds-ring div:nth-child(3) {
        animation-delay: -0.15s;
    }

    @keyframes lds-ring {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
</style>