<template>
    <div>
        <div class="product-title-header text-center text-uppercase py-2 regular">
            Product Detail
        </div>
        <div class="mt-4 ml-4">
            <NuxtLink class="text-uppercase return regular" to="/">
                Return To Product List 
            </NuxtLink>
        </div>

        <div class="container-fluid">
            <div class="row">
                <div class="mx-auto"> 
                    <img src="~/assets/product.jpg" class="mx-auto">
                </div>

                <div class="col-md-6"> 
                    <div class="container-fluid">
                        <div class="text-uppercase d-flex flex-column">
                            <div class="product-title regular">Adelaide</div>
                            <div class="light">₱ 60.00</div>
                            <div class="d-flex flex-row my-1 align-items-center">
                                <i class="fas fa-star fa-xs mx-1"></i>
                                <i class="fas fa-star fa-xs mx-1"></i>
                                <i class="fas fa-star fa-xs mx-1"></i>
                                <i class="fas fa-star fa-xs mx-1"></i>
                                <i class="far fa-star fa-xs mx-1"></i>
                                <div class="light mx-2"> 2 Ratings </div>
                            </div> 
                        </div>

                        <div class="box w-100 p-4 my-2 light d-flex flex-column">
                            <div class="mt-1 mb-2">
                                DESCRIPTION
                                <div class="box-text mt-1">
                                    Enter your description here. Something something something something something something  soobin hi ladies mwah supremacy something.
                                </div>
                            </div>
                            <div class="my-2">
                                DETAILS
                                <div class="box-text mt-1">
                                    Enter your description here. Something something something something something something  soobin hi ladies mwah supremacy something.
                                </div>
                            </div>
                            <div class="text-uppercase mt-1">
                                Available Stock: 100
                            </div>
                        </div>
                        <div class="text-center">
                            <button type="button" class="btn btn-light add mt-4">ADD TO CART</button>
                        </div>
                    </div> 
                </div>
            </div>

            <div class="row">
                <div class="container d-flex flex-column my-2">
                    <div class="light text-uppercase ml-2">Product Reviews</div>
                    <div class="box w-100 p-3 my-2 light">
                        <div>Username</div>
                        <div class="d-flex flex-row my-1 align-items-center">
                                <i class="fas fa-star fa-xs mr-1"></i>
                                <i class="fas fa-star fa-xs mx-1"></i>
                                <i class="fas fa-star fa-xs mx-1"></i>
                                <i class="fas fa-star fa-xs mx-1"></i>
                                <i class="far fa-star fa-xs mx-1"></i>
                            </div> 
                        <div class="box-text mt-1">Better than most affordable perfumes that I’ve bought on Shoppee.</div>
                    </div>
                    <div class="box w-100 p-3 my-2 light">
                        <div>Username</div>
                        <div class="d-flex flex-row my-1 align-items-center">
                                <i class="fas fa-star fa-xs mr-1"></i>
                                <i class="fas fa-star fa-xs mx-1"></i>
                                <i class="fas fa-star fa-xs mx-1"></i>
                                <i class="fas fa-star fa-xs mx-1"></i>
                                <i class="far fa-star fa-xs mx-1"></i>
                            </div> 
                        <div class="box-text mt-1">Better than most affordable perfumes that I’ve bought on Shoppee.</div>
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

.product-title-header{
    font-size: 1.5rem;
    border-style: solid;
    border-width: 2px 0;
    border-color: #E5E5E5;
}

.product-title{
    font-size: 1.8rem;
}

.return{
    color: #79808F;
    font-size: 0.8rem;
    border-bottom: 2px solid;
    border-bottom-color: #79808F;
}

.box{
    background-color: #FAFAFA;
    border-radius: 10px;
}

.box-text{
    color: #79808F;
    font-size: 0.8rem;
}

.add{
    font-size: 0.7rem;
    background-color: #9F9A96;
    border-color: #9F9A96;
    color: white;
    width: 40%;
}

.checked{
    color: #f2d31c;
}


 a, a:hover, a:focus, a:active {
      text-decoration: none;
      color: inherit;
 }
 
 .fa-star{
     color: #9F9A96;
 }


</style>
