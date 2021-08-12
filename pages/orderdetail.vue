<template>
    <div>
        <div class="order-header text-center text-uppercase py-2 regular">
            Order Details
        </div>
        <div class="container-fluid my-4 px-4">
            <NuxtLink class="text-uppercase return regular" to="/orderlist">
                Return To Order List 
            </NuxtLink>
        
            <div class="row">
                <div class="col my-3">
                    <div class="order-box shadow container-fluid p-4">
                        <div class="order-title medium">ORDER #120600</div>
                        <div class="text-uppercase d-flex justify-content-between regular my-2">
                            <div>Payment Status: Paid</div>
                            <div>Order Status: Shipping</div>
                        </div>
                        <div class="table-responsive">
                            <table class="table text-center text-uppercase my-2">
                                <thead>
                                    <tr>
                                        <th scope="col">Product</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Unit Price</th>
                                        <th scope="col">Subtotal</th>
                                    </tr>
                                </thead>
                                <tbody class="regular">
                                    <tr>
                                        <td class="d-flex flex-column">
                                            <div>Adelaide</div>
                                            <div>10ML</div>
                                        </td>
                                        <td>X1</td>
                                        <td>₱60.00</td>
                                        <td>₱60.00</td>
                                    </tr>
                                </tbody>
                                <tfoot class="regular">
                                    <tr>
                                        <td>Subtotal</td>
                                        <td></td>
                                        <td></td>
                                        <td>₱60.00</td>
                                    </tr>
                                    <tr>
                                        <td>Shipping Fee</td>
                                        <td></td>
                                        <td></td>
                                        <td>₱10.00</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td>Total</td>
                                        <td>₱70.00</td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                    <div class="d-flex justify-content-end mt-2 pr-3">
                        <NuxtLink class="text-uppercase text-right return regular" to="/">
                            Review Products 
                        </NuxtLink>
                    </div>
                    <div class="mt-3 d-flex justify-content-around"> 
                        <button type="button" class="shadow text-uppercase btn btn-light button regular">Order Received</button>
                        <button type="button" class="shadow text-uppercase btn btn-light button regular">Cancel Order</button>
                    </div>
                    
                    
                </div>

                <div class="col">
                    <div class="container-fluid d-flex flex-column medium">
                        <div class="text-uppercase name mt-4">Choi Soobin</div>
                        <div class="my-3">
                            <div class="text-uppercase">Shipping Address</div>
                            <div class="details regular">1234 MAGIC ST. 9 QUARTER PLATFORM AND  SMTH SMTH SMTHCROWN PUMA 0X1 LOVESONG IF YOUR SMTH SMTH  ADRESS SMTH  IS TOO LONG.... HONESTLY  SMTH SMTH 3 LINES WORTH SMTH</div>
                        </div>
                        <div class="my-3">
                            <div class="text-uppercase">Contact Number</div>
                            <div class="details regular">09273421920</div>
                        </div>
                        <div class="my-3">
                            <div class="text-uppercase">Contact Email</div>
                            <div class="details regular">choisoobin@tubatu.net</div>
                        </div>
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

<style scoped>

.return{
    color: #79808F;
    font-size: 0.8rem;

}

.order-header{
    font-size: 1.5rem;
    border-style: solid;
    border-width: 2px 0;
    border-color: #E5E5E5;
}

.order-box{
    background-color: #FAFAFA;
    border-radius: 10px;
}

.order-title{
    font-size: 1.5rem;
}

.button{
    background-color: #9F9A96;
    border-color: #9F9A96;
    color: white;
    width: 45%;
}

table > tbody > tr > td {
     vertical-align: middle;
}

.name{
    font-size: 1.5rem;
}

.details{
    color: #79808F;
}

</style>
