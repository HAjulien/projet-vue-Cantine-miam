<template>
    <div class="flex justify-center my-2">
        <label 
        class="w-24 justify-start"
        :for="label">
            {{label}} 
        </label>

        <input class=" outline-none w-52 pl-2 rounded-sm border-b-2 border-gray-800 focus:border-amber-400 focus:border-b-4" type="text" :name="label" :id="label"
        v-bind="$attrs"
        :value="modelValue"
        :class="inputClassTailwind"
        @input="$emit('update:modelValue', $event.target.value)"
        >
    </div>
</template>
    
    <script>
    export default {
        name: 'ProfileInput',
    
        props: {
            label: {
                type: String,
                default: ''
            },
            modelValue: {
                type: [String, Number],
                default: ''
            },
            inputClassTailwind: {
                type : String,
                default : ''
            }
        }
    }
    
    </script>
    
    <style style lang="scss">
        
    
    </style>