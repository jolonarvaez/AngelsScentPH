<template>
    <div>
        <div class="product-title-header text-center text-uppercase py-2 regular">
            Product Detail
        </div>
        <div class="mt-4 ms-4">
            <NuxtLink class="text-uppercase return regular" to="/products">
                Return To Product List 
            </NuxtLink>
        </div>

        <div class="container-fluid mt-4">
            <div class="row d-flex justify-content-around my-2">
                <div class="col"> 
                    <img :src="data.img" class="mx-auto d-block product-img img-fluid">
                </div>

                <div class="col-md-6 mb-4"> 
                    <div class="container-fluid">
                        <div class="text-uppercase d-flex flex-column">
                            <div class="product-title regular">{{data.name}}</div>
                            <div class="light">₱{{data.price}}.00</div>
                            <div class="d-flex flex-row my-1 align-items-center">
                                <i class="fas fa-star fa-xs mx-1"></i>
                                <i class="fas fa-star fa-xs mx-1"></i>
                                <i class="fas fa-star fa-xs mx-1"></i>
                                <i class="fas fa-star fa-xs mx-1"></i>
                                <i class="far fa-star fa-xs mx-1"></i>
                                <div class="light mx-2"> 2 Ratings </div>
                            </div> 
                        </div>

                        <div class="shadow box w-100 p-4 my-2 light d-flex flex-column">
                            <div class="mt-1 mb-2">
                                DESCRIPTION
                                <div class="box-text mt-1">
                                    {{data.description}}
                                </div>
                            </div>
                            <div class="my-2">
                                DETAILS
                                <div class="box-text mt-1">
                                    Weight: {{ data.weight }}ml<br>
                                    Length: {{ data.length }}cm<br>
                                    Width: {{ data.width }}cm<br>
                                    Height: {{ data.height }}cm
                                </div>
                            </div>
                            <div class="text-uppercase mt-1">
                                Available Stock: 100
                            </div>
                        </div>
                        <div class="def-number-input number-input safari_only m-auto my-2">
                            <button type="button" @click="() => qty--" class="minus decrease"></button>
                            <input v-model="qty" class="quantity" name="quantity" min="1" type="number" disabled>
                            <button type="button" @click="() => qty++" class="plus increase"></button>
                        </div>
                        <div class="text-center">
                            <button type="button" @click="addToCart()" class="shadow btn btn-light add mt-2">ADD TO CART</button>
                        </div>
                        
                    </div> 
                </div>
            </div>

            <div class="col-8 mx-auto">
                <div class="container d-flex flex-column my-2">
                    <div class="light text-uppercase ml-2">Product Reviews</div>
                    <div class="shadow-sm box w-100 p-3 my-2 light">
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
                    <div class="shadow-sm box w-100 p-3 my-2 light">
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
    data(){
        return {
            qty: 1
        }
    },
    watch: {
        qty: function(newQty, oldQty) {
            if (newQty <= 0) {
                this.qty = 1
            }
        }
    },
    async asyncData({$fire, params}) {
        let slug = params.slug;
        let docRef = $fire.firestore.collection('products').doc(slug)
        let data = await docRef.get().then(doc => doc.data())
        return{data, slug}
    },
    methods: {
        async addToCart(){
            const item = {
            name: this.data.name,
            price: this.data.price,
            qty: this.qty,
            weight: this.data.weight,
            productid: this.slug,
            subtotal: this.data.price * this.qty,
            img: this.data.img
        }
        if (this.$fire.auth.currentUser) {
            let docRef = this.$fire.firestore.collection('users').doc(this.$store.state.user.uid)
                      .collection('cart').where('productid', '==', item.productid)    

            let doc = await docRef.get()
            let cartItem = !doc.empty ? await doc.docs[0].ref.get().then(doc => doc.data()) : null

            if (cartItem) {
                doc.docs[0].ref.update({
                    qty: cartItem.qty + item.qty,
                    subtotal: (cartItem.qty + item.qty) * item.price
                })
            
                this.$store.commit('cart/addItem', { ...item})
                console.log(this.$store.state.cart)
            } else{
                    let ref = await this.$fire.firestore.collection('users').doc(this.$store.state.user.uid)
                        .collection('cart').add({
                        ...item
                    })
                    this.$store.commit('cart/addItem', { ...item})
                }
            }
        }
    }
}
</script>

<style>

.card:hover{
    transition: box-shadow .3s;
    box-shadow: 0 0 11px rgba(33,33,33,.2); 
}

.product-img{
    max-width: 20rem;
    border-radius: 10px;
}
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

number-input input[type="number"] {
-webkit-appearance: textfield;
-moz-appearance: textfield;
appearance: textfield;
}

.number-input input[type=number]::-webkit-inner-spin-button,
.number-input input[type=number]::-webkit-outer-spin-button {
-webkit-appearance: none;
}

.number-input {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.number-input button {
-webkit-appearance: none;
background-color: transparent;
border: none;
align-items: center;
justify-content: center;
cursor: pointer;
margin: 0;
position: relative;
}

.number-input button:before,
.number-input button:after {
display: inline-block;
position: absolute;
content: '';
height: 2px;
transform: translate(-50%, -50%);
}

.number-input button.plus:after {
transform: translate(-50%, -50%) rotate(90deg);
}

.number-input input[type=number] {
text-align: center;
}

.number-input.number-input {
border: 1px solid #ced4da;
width: 7rem;
border-radius: .25rem;
background-color: white;
}

.number-input.number-input button {
width: 2.6rem;
height: .7rem;
}



.number-input.number-input button.minus {
padding-left: 10px;
}

.number-input.number-input button:before,
.number-input.number-input button:after {
width: .7rem;
background-color: #c4c4c4;
}

.number-input.number-input input[type=number] {
max-width: 3rem;
padding: .5rem;
border: 1px solid #ced4da;
border-width: 0 1px;
font-size: 1rem;
height: 1.5rem;
color: #495057;
}

@media not all and (min-resolution:.001dpcm) {
@supports (-webkit-appearance: none) and (stroke-color:transparent) {

.number-input.def-number-input.safari_only button:before,
.number-input.def-number-input.safari_only button:after {
margin-top: -.3rem;
}
}
}

</style>
