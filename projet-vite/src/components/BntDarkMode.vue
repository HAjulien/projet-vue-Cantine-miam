<template>
    <button
    @click="toggleDarkMode"
    >
        <div>
                <transition name="fade" mode="out-in">
        <div  v-if="isDark" class=" bg-amber-300	shadow-inner  rounded-xl flex h-8 items-center w-20 justify-evenly">
            <span class="text-xs font-bold text-white"> JOUR </span>
            <div class="w-6 h-6 bg-white rounded-full flex justify-center items-center">
                <fa :style="{height: '16px', color:'yellow'}" icon='sun' />
            </div>
        </div>
        <div  v-else class=" bg-gray-800 shadow-inner  rounded-xl flex h-8 items-center w-20 justify-evenly"> 
            <span class="text-xs font-bold text-white"> NUIT </span> 
            <div class="w-7 h-7 bg-black rounded-full flex justify-center items-center">
                <fa :style="{ height: '16px', color:'yellow'}" icon='moon' />
            </div>
            
        </div>
                </transition>
        </div>
    </button>  
</template>

<script>
export default {
    name:'BtnDarkMode',
    data(){
        let isDark = localStorage.getItem('darkMode') == 'true'
        return{
            isDark,
        }   
    },
    methods: {
        toggleDarkMode() {
            this.isDark = !this.isDark;
            localStorage.setItem('darkMode', this.isDark);
        },
    }
}
</script>

<style>

    .fade-enter-active, .fade-leave-active {
    transition: opacity .3s;
    }
    .fade-enter, .fade-leave-to {
    opacity: 0;
    }
    .fade-enter-from{
    opacity: 0;
    }

</style>