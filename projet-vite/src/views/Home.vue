<template >
  <div class="dark">
    <div class="dark:bg-gray-600 bg-pink-300 ">
      <h1 class=" dark:text-white  font-extrabold text-3xl mb-8 m-3 ">home</h1>
      <p class="mb-6 dark:text-white m-3 ">  Name in store is: {{ name }} </p>
      
      <input  v-model="newName"
       type="text" 
       class="p-2 m-3 border border-gray-600 rounded"
       />
      
      <button @click="saveName" class=" dark:bg-pink-600 p-2 text-white bg-fuchsia-500 rounded">Envoyé</button>
      
    </div>
  </div>
</template>

<script setup>

  import { computed, ref } from 'vue'
  import { useStore } from 'vuex'

  const store = useStore()

  import { useRouter } from 'vue-router'
  const router = useRouter()

  const name = computed(() =>{
    return store.state.user.name
  })

  const newName = ref('')

  function saveName() {
    store.dispatch('saveName', newName.value)
    newName.value =''
    router.push('/about')
  }



</script>


