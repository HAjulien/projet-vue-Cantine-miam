<template>
<div class="relative">
    <div class="relative">
        <input  name="email" type="text" class="peer h-10 w-[90%] mx-[5%] mb-9 p-3 bg-slate-100/40 border-b-[3px] border-emerald-900 text-gray-900 placeholder-transparent focus:outline-none focus:border-emerald-600 " 
        required
        :placeholder="label"
        v-bind="$attrs"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        />
        <label for="email" class="absolute left-3 -z-10 -top-8 mx-[5%] text-gray-100 bg-emerald-700 px-3 rounded transition-all peer-placeholder-shown:text-slate-100 peer-placeholder-shown:top-2 peer-focus:-top-8 peer-focus:text-slate-100 peer-focus:px-4 peer-focus:py-0.5 "
        v-if="label">
            {{label}} 
        </label>
        <span v-if="indication" class="absolute left-8 top-11 text-gray-100 bg-red-500 px-3 rounded transition-all"> {{indication}} </span>

    </div>

</div>
</template>

<script>
export default {
    name: 'BaseInput',

    props: {
        label: {
            type: String,
            default: ''
        },
        indication: {
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

<style>

</style>