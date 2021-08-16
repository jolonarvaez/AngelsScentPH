<template>
    
    <div class="card border-0 text-center m-auto" style="width: 10rem;">
        <NuxtLink to="/product">
            <img src="~/assets/product.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title text-uppercase medium">Adelaide</h5>
                <p class="card-text regular">BURBERRY X BURBERRY</p>
            </div>
        </NuxtLink>
    </div>
    

</template>
<script>
export default {

}
</script>

<style scoped>

.card{
    background-color: #FAFAFA;
}

.card-title{
    font-size: 0.9rem;
    color: black;
}

.card-text{
    color: #79808F;
    font-size: 0.8rem;
}

a{
    text-decoration: none;
}

</style>