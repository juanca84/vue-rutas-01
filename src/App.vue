<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/contacto">Contacto</router-link> |
      <router-link to="/usuarios/juanca">Usuarios</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
@import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
</style>
