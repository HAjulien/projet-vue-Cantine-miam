/<template>
    <div class=" md:hidden progress-bar dark:bg-gray-800 bg-gray-100">

    <div :class="(progress == 100) ? 'progress-inner complete' : 'progress-inner'" 
        :style="`width: ${progress}%`"
        v-if="progress > 0"
        >

        <span :class="(progress > 50) ? 'white' : '' " > {{ progress }}% </span>
        
    </div>

    </div>
</template>

<script>
export default {
    name: 'progressbar',
    props: ['progress']
}
</script>

<style lang="scss" scoped>

.progress-bar{
    width: 100%;
    height: 15px;
    position: relative;
    transition: all .3s ease-in-out;
}
.progress-inner{
    height: 100%;
    background-image: linear-gradient(to right, #16eb16, #2484E2);
}

span{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: $orange;
    font-size: 13px;
}

.progress-inner span.white{
    color: #fff;
}

</style>