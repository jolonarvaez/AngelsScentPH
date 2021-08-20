<template>
  <div class="d-flex flex-column">
      <div class="row justify-content-between nopadding">
          <div class="col-lg nopadding img-container">
              <div class="logo_bar w-100 py-2 d-flex justify-content-around"> 
                  <div class="col-sm-3 d-flex align-items-center">
                      <img src="~/assets/logo.png" class="img_bar img-fluid mx-2">
                  </div>
                  
                  <div class="text-uppercase logo_text">Angel's Scent</div>
              </div>
              <img src="~/assets/Flowers.jpg" class="w-100 h-100 left-container">
          </div>
          
          <div class="col-lg nopadding">
              <div class="right-container d-flex align-items-center">
                  <div class="container m-4">
                      <div class="title display-3 my-2">
                          Smell <br> heavenly.
                      </div>
                      <div class="caption mt-4">
                          Try a new fragrance today with Angel’s Scent.
                      </div>
                      <div class="d-flex justify-content-end mt-3 mx-4">
                          <button type="button" class="btn btn-light px-4 shop-now">SHOP NOW</button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="row nopadding">
        <div class="container-fluid">
            <div class="text-center text-uppercase mt-4 featured-title">Featured Products</div>
            <div class="row justify-content-center my-4">
                <div class="col-sm-2 my-2">
                    <FeaturedProduct />
                </div>
                <div class="col-sm-2 my-2">
                    <FeaturedProduct />
                </div>
                <div class="col-sm-2 my-2">
                    <FeaturedProduct />
                </div>
       
            </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  layout: "empty"
};
</script>

<style scoped>

  .img_bar{
    width:100px;
  }

  .img-container{
    position: relative;
  }

  .logo_bar{
    position: absolute;
    top: 2rem; 
    left: 0;
    background-color: rgb(159, 154, 150, 0.5);
  }

  .logo_text{
    color: white;
    font-size: 3.5rem;
  }

  .container{
    width: 55%;
  }

  .left-container{
    display: block;
    object-fit: cover;
  }

  .right-container{
    background-color: #F2E2D6;
    /* height: 100vh; */
    min-height: 100%;

  }

  .title{
    color: #7C6565;
    line-height: 80%;
  }

  .caption{
    color: #7C6565;
    font-size: 15px;
    letter-spacing: 0.5px;
  }

  br {
    display: block;
    margin-bottom: 0em;
  }

  .nopadding {
   padding: 0 !important;
   margin: 0 !important;
  }

  .shop-now{
    background-color: #9F9A96;
    border-color: #9F9A96;
    color: white;
  }

  .featured-title{
    font-size: 1.8rem;
    color: #7C6565;
  }

</style>
