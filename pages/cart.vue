<template>
    <div>
        <div class="cart-header text-center text-uppercase py-2 regular">
            Shopping Cart
        </div>

        <p v-if="items.length == 0">
          Cart is currently empty.
        </p>

        <div class="container-fluid text-uppercase my-5">
            <div class="row d-flex justify-content-center mx-auto">
                <div class="col-lg-7">
                    <div class="card shadow round-table mb-4">
                        <div class="table-responsive">
                            <table class="table regular table-striped text-center borderless mb-4">
                                <thead>
                                    <tr>
                                        <th scope ="col">Item</th>
                                        <th scope ="col"></th>
                                        <th scope ="col">Price</th>
                                        <th scope ="col">Qty</th>
                                        <th scope ="col">Subtotal</th>
                                        <th scope ="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody class="align-middle">
                                    <tr :key="item.id" v-for="item in items">
                                        <td><img src="~/assets/product.jpg" class="img-thumbnail"></td>
                                        <td class="text-left">
                                            <div>{{ item.name }}</div>
                                            <div class="light">{{ item.weight }} ML</div>
                                        </td>
                                        <td>₱ {{ item.price }}.00</td>
                                        <td>
                                            <div class="row">
                                                <div class="col d-flex flex-row justify-content-center mt-2">
                                                    <div class="def-number-input number-input safari_only">
                                                        <button v-on:click='subtractItem(item.id)' class="minus"></button>
                                                        <input :id='item.id+" qty"' class="quantity" name="quantity" :value="item.qty" min="0" type="number">
                                                        <button v-on:click='addItem(item.id)' class="plus"></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td :id='item.id+" subtotal"'>₱ {{ item.subtotal }}.00</td>
                                        <td>Remove</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="col-md-5 d-flex align-items-center flex-column">
                    <div class="shadow card round-table summary medium w-75">
                        <div class="card-body">
                            <div class="card-title">
                                Cart Summary
                            </div>
                            <div class="row d-flex flex-row my-2">
                                <div class="col">Subtotal</div>
                                <div class="col">₱ {{ total }}.00</div>
                            </div>
                            <div class="row d-flex flex-row my-2">
                                <div class="col">Total Qty</div>
                                <div class="col">{{ totalQty }}</div>
                            </div>
                            <div class="row d-flex flex-row my-2">
                                <div class="col">Total Weight</div>
                                <div class="col">{{ totalWeight }} ML</div>
                            </div>
                        </div>
                    </div>
                    <button type="button" class="shadow text-uppercase btn btn-light checkout w-75 regular mt-4">Proceed to Checkout</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
                items: [
                        {
                            name: "product1",
                            id: 1, 
                            weight: 10, 
                            price: 60, 
                            qty: 1, 
                            subtotal: 60
                        },
                        {
                            name: "product2",
                            id: 2,
                            weight: 120, 
                            price: 60,
                            qty: 2,
                            subtotal: 120
                        },

                    ],
                total: 0, 
                totalQty: 0, 
                totalWeight: 0
            }
    },
    // computed: {
    //     total(){
    //         return {
    //             total: 0
    //         }
    //     }
    // },
    methods: {
        addItem(id){
            let item = this.items.find(obj => obj.id === id)
            item.qty++
            item.subtotal = item.price * item.qty
            this.updateTotal()
            this.updateTotalQty()
            this.updateTotalWeight()
        },
        subtractItem(id){
            let item = this.items.find(obj => obj.id === id)
            if(item.qty > 1){
                item.qty--
                item.subtotal = item.price * item.qty
            }
            this.updateTotal()
            this.updateTotalQty()
            this.updateTotalWeight()
        },
        updateTotal(){
            var sum = 0
            for(var i = 0; i < this.items.length; i++){
                sum += this.items[i].subtotal
            }
            this.total = sum
        },
        updateTotalQty(){
            var sum = 0
            for(var i = 0; i < this.items.length; i++){
                sum += this.items[i].qty
            }
            this.totalQty = sum
        },
        updateTotalWeight(){
            var sum = 0
            for(var i = 0; i < this.items.length; i++){
                sum += (this.items[i].weight * this.items[i].qty)
            }
            this.totalWeight = sum
        }
    }
}
</script>

<style scoped>

.cart-header{
    font-size: 1.5rem;
    border-style: solid;
    border-width: 2px 0;
    border-color: #E5E5E5;
}

.product-col{
    font-size: 0.8rem;
}

table > tbody > tr > td {
     vertical-align: middle;
}

table{
    font-size: 0.8rem;
    vertical-align: middle;
}

img{
    max-width: 4rem;
    height: auto;
}

.borderless td, .borderless th {
    border: none;
}

.round-table{
    border: none;
    border-radius: 10px;
}

.summary{
    font-size: 0.8rem;
    border: none;
    background-color: #FAFAFA;
}

.card-title{
    border-bottom: 1.5px solid;
}

.checkout{
    font-size: 0.8rem;
    background-color: #9F9A96;
    border-color: #9F9A96;
    color: white;
    width: 40%;
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
