<template>
  <div>
    <h1>Información de usuario</h1>
    <div class="btn-group">
      <router-link :to="{params:{ id: user} }" v-for="user in ArregloUsuario" :key="user">
        <button class="btn btn-link">{{user}}</button>
      </router-link>
    </div>
    <usuario/>
  </div>
</template>
<script>
import Usuario from '@/components/Usuario.vue';
export default {
  components: {
    Usuario
  },
  data(){
    return{
      ArregloUsuario:['Juan', 'Carlos', 'Lorenzo', 'Luisa', 'Karla']
    }
  }
}
</script>

