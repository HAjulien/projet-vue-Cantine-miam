<template>
  <div>
      <h1 class="font-extrabold text-3xl mb-8">home</h1>
  <p>  Name in store is: {{ name }} </p>
  </div>
</template>

<script setup>

  import { computed } from 'vue'
  import { useStore } from 'vuex'

  const store = useStore()
  const name = computed(() =>{
    return store.state.user.name
  })




</script>


