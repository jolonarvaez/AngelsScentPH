<template>
    <div>
        <div class="order-header text-center text-uppercase py-2 regular">
            Checkout
        </div>
        <div class="container-fluid checkout-bg">
            <NuxtLink class="text-uppercase return regular" to="/Cart">
                Return To Cart
            </NuxtLink>
        
            <div class="row">
                <div class="col my-3">
                    <div class="order-box shadow container-fluid p-4">
                        <div class="order-title medium">CART SUMMARY</div>
                        <div class="table-responsive">
                            <table class="table text-center text-uppercase my-2">
                                <thead>
                                    <tr>
                                        <th scope="col">Product Name</th>
                                        <th scope="col">Weight</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Price</th>
                                    </tr>
                                </thead>
                                <tbody class="regular">
                                    <tr>
                                        <td class="d-flex flex-column">
                                            <div>Adelaide</div>
                                        </td>
                                        <td>10 ml</td>
                                        <td>1</td>
                                        <td>₱60.00</td>
                                    </tr>

                                    <tr>
                                        <td class="d-flex flex-column">
                                            <div>Adelaide</div>
                                        </td>
                                        <td>50 ml</td>
                                        <td>2</td>
                                        <td>₱250.00</td>
                                    </tr>
                                </tbody>

                                <tbody class="regular">
                                    <tr>
                                        <td class="d-flex flex-column">
                                            <div>Total Qty</div>
                                        </td>
                                        <td></td>
                                        <td></td>
                                        <td>3</td>
                                    </tr>

                                    <tr>
                                        <td class="d-flex flex-column">
                                            <div>Total Weight</div>
                                        </td>
                                        <td></td>
                                        <td></td>
                                        <td>110 ml</td>
                                    </tr>
                                </tbody>
            
                                <tbody class="regular">
                                    <tr>
                                        <td>Subtotal</td>
                                        <td></td>
                                        <td></td>
                                        <td>₱560.00</td>
                                    </tr>
                                    <tr>
                                        <td>Shipping Fee</td>
                                        <td></td>
                                        <td></td>
                                        <td>₱0.00</td>
                                    </tr>
                                </tbody>

                                <tfoot class="regular">
                                    <tr>
                                        <td>Total</td>
                                        <td></td>
                                        <td></td>
                                        <td>₱560.00</td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>

                    <br/><br/>

                    <div class="order-box shadow container-fluid p-4">
                        <div class="order-title medium">CUSTOMER INFORMATION</div>
                        
                        <div class="my-3">
                            <div class="text-uppercase">Name</div>
                            <div class="details regular">Choi Soobin</div>
                        </div>
                        

                        <div class="my-3">
                            <div class="text-uppercase">Shipping Address</div>
                            <div class="details regular">1234 MAGIC ST. 9 QUARTER PLATFORM AND  SMTH SMTH SMTHCROWN PUMA 0X1 LOVESONG IF YOUR SMTH SMTH  ADRESS SMTH  IS TOO LONG.... HONESTLY  SMTH SMTH 3 LINES WORTH SMTH</div>
                        </div>
                    </div>
                    
                    
                </div>


                <div class="col">
                    <div class="order-box shadow container-fluid p-4">
                        <div class="text-uppercase name mt-4">Payment Instructions</div>
                        <div class="my-3">
                            <div class="details regular">
                                Hello, thank you for your interest in Angel's Scent! <br/>
                                For us to process your order, kindly deposit the computed total amount to our GCash Account. <br/><br/>
                                1. Open your GCash App.<br/>
                                2. Click Send Money > Express Send<br/>
                                3. Enter the following Account Details: <br/>
                                <center>
                                Angela Sophia A. <br/>
                                09123456789<br/> 
                                </center>
                                4. Send receipt to: angelsscent@gmail.com <br/>
                                5. Take a screenshot of the successful payment transaction and upload it to our
                                payment form. <br/><br/><br/>

                                Note: Please settle your payment within 7 days and submit your proof of payment using the form, otherwise we cannot process your order.
                                To track your order fulfillment, please check your account page for updates. We will notify via email regarding your tracking number.
                                
                            </div>
                        </div>
                    </div> 

                    <br/>
                    <div class="mt-3 d-flex justify-content-around"> 
                        <button type="button" class="shadow text-uppercase btn btn-light button regular">Complete Order</button>
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

.checkout-bg{
    background-color: #FAFAFA;
}



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
