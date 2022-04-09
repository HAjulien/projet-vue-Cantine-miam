<template>
    <div class="mt-6">
        <input 
        type="text"
        :placeholder="template"
        class="w-56 bg-gray-300 p-3 rounded-lg focus:outline-none"
        v-model="number"
        
        >
    </div>
</template>

<script>
export default {
    props: [
        'template'
    ],
        
    data() {
        return {
            number:'',
            format:'',
            regex:'^', 
        }
    },

    mounted() {
        let x = 1;
        
        this.format = this.template.replace(/X+/g, () => '$' + x++);

        this.template.match(/X+/g).forEach((char, key) =>{
            this.regex += '(\\d{' + char.length + '})?';
        });
    },

    watch : {
        number(next, prev) {
            if (next.length > prev.length){
                this.number = this.number.replace(/[^0-9]/g,'')
                .replace(new RegExp(this.regex, 'g'), this.format)
                .substr(0, this.template.length)
            }
        }
    }
}
</script>

<style>

</style>