<template>
<div class="relative">
    <div class="relative">
        <input id="email" name="email" type="text" class="peer h-10 w-[90%] mx-[5%] mb-8 p-3 bg-slate-100 border-b-[3px] border-gray-900 text-gray-900 placeholder-transparent focus:outline-none focus:border-emerald-600 " placeholder="john@doe.com" />
        <label for="email" class="absolute left-3 -top-8 mx-[5%] text-gray-900 bg-slate-100 px-3 rounded transition-all peer-placeholder-shown:text-gray-800 peer-placeholder-shown:top-2 peer-focus:-top-8 peer-focus:text-emerald-700 peer-focus:px-4 peer-focus:py-0.5 ">
            Adresse Email 
        </label>
    </div>

</div>
</template>

<script>
export default {
    name: 'BaseInput',
}

</script>

<style>

</style>