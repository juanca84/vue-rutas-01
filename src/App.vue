<template>
  <div id="app">
    <ul class="nav justify-content-center">
      <li class="nav-item">
        <router-link to="/login" class="nav-link">Login</router-link>  
      </li>
      <li class="nav-item">
        <router-link to="/" class="nav-link">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link to="about" class="nav-link">About</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/contacto" class="nav-link">Contacto</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/usuarios/juanca" class="nav-link">Usuarios</router-link>
      </li>
    </ul>
    <router-view/>
  </div>
</template>

<style>
@import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
</style>
