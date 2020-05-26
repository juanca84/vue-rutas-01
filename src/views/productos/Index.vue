<template>
    <div>
        <div class="cover">
            <div class="col-md-12">
                <h3>Productos</h3>
            </div>
            <div class="row">
                <div class="col-md-3">
                    <div class="col-md-12">
                    <img src="http://placehold.it/200x200/000" alt="imagen prueba">
                    </div>
                    <div class="col-md-12">
                        <h4>Título de Producto 0</h4>
                        <p>Descripción de producto 0</p>
                        <router-link :to="{name:'producto', params:{id:0}}" class="btn btn-success">Ver detalle</router-link>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="col-md-12">
                        <img src="http://placehold.it/200x200/000" alt="imagen prueba">
                    </div>
                    <div class="col-md-12">
                        <h4>Título de Producto 1</h4>
                        <p>Descripción de producto 1</p>
                        <router-link :to="{name:'producto', params:{id:1}}" class="btn btn-success">Ver detalle</router-link>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="col-md-12">
                        <img src="http://placehold.it/200x200/000" alt="imagen prueba">
                    </div>
                    <div class="col-md-12">
                        <h4>Título de Producto 2</h4>
                        <p>Descripción de producto 2</p>
                        <router-link :to="{name:'producto', params:{id:2}}" class="btn btn-success">Ver detalle</router-link>
                    </div>
                </div>
                                <div class="col-md-3">
                    <div class="col-md-12">
                        <img src="http://placehold.it/200x200/000" alt="imagen prueba">
                    </div>
                    <div class="col-md-12">
                        <h4>Título de Producto 3</h4>
                        <p>Descripción de producto 3</p>
                        <router-link :to="{name:'producto', params:{id:3}}" class="btn btn-success">Ver detalle</router-link>
                    </div>
                </div>
                                <div class="col-md-3">
                    <div class="col-md-12">
                        <img src="http://placehold.it/200x200/000" alt="imagen prueba">
                    </div>
                    <div class="col-md-12">
                        <h4>Título de Producto 4</h4>
                        <p>Descripción de producto 4</p>
                        <router-link :to="{name:'producto', params:{id:4}}" class="btn btn-success">Ver detalle</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style>
    .cover{
        padding: 20px;
        margin: 40px 2px;
        border: 1px solid #D2E0E6;
    }
</style>