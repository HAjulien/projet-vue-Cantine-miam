<template>
  <div>
        <fa 
        icon="star"
        :style="{ height: '25px', color:'gray'}" 
        v-bind:data-value="index +=1"
        v-for="(n, index) in 5"
        v-bind:key="n.id"
        />

        <form action="">
        <input type="text" name="note" id="note" value="0">
        <p id="avis" ></p>
         </form> 


  </div>
</template>

<script>
export default {

        
}
</script>

<style>

</style>