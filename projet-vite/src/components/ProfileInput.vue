<template>
    <div class="flex justify-center my-2">
        <label 
        class="w-24 justify-start " 
        :for="label">
            {{label}} 
        </label>

        <input class="w-52 pl-2 rounded-sm border-2 border-gray-800" type="text" :name="label" :id="label"
        v-bind="$attrs"
        :value="modelValue"
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
            }
        }
    }
    
    </script>
    
    <style style lang="scss">
        
    
    </style>