<template>
    <div>
        <div class="cart-header text-center text-uppercase py-2 regular">
            Shopping Cart
        </div>
        <div class="container-fluid text-uppercase my-5">
            <div class="row">
                <div class="col-lg-7">
                    <div class="card shadow round-table">
                        <div class="table-responsive">
                            <table class="table regular table-striped text-center borderless mb-4">
                                <thead>
                                    <tr>
                                        <th scope ="col"></th>
                                        <th scope ="col">Item</th>
                                        <th scope ="col"></th>
                                        <th scope ="col">Price</th>
                                        <th scope ="col">Qty</th>
                                        <th scope ="col">Subtotal</th>
                                        <th scope ="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody class="align-middle">
                                    <tr>
                                        <td>
                                            <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                            <label class="form-check-label" for="flexCheckDefault">
                                                
                                            </label>
                                            </div>
                                        </td>
                                        <td><img src="~/assets/product.jpg" class="img-thumbnail"></td>
                                        <td class="text-left">
                                            <div>Adelaide</div>
                                            <div class="light">10 ML</div>
                                        </td>
                                        <td>₱ 60.00</td>
                                        <td></td>
                                        <td>₱ 60.00</td>
                                        <td>Remove</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                            <label class="form-check-label" for="flexCheckDefault">
                                            </label>
                                            </div>
                                        </td>
                                        <td><img src="~/assets/product.jpg" class="img-thumbnail"></td>
                                        <td class="text-left">
                                            <div>Adelaide</div>
                                            <div class="light">10 ML</div>
                                        </td>
                                        <td>₱ 60.00</td>
                                        <td></td>
                                        <td>₱ 60.00</td>
                                        <td>Remove</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="col-md d-flex align-items-center flex-column">
                    <div class="shadow card round-table summary medium w-75">
                        <div class="card-body">
                            <div class="card-title">
                                Cart Summary
                            </div>
                            <div class="row d-flex flex-row my-2">
                                <div class="col">Subtotal</div>
                                <div class="col">₱ 620.00</div>
                            </div>
                            <div class="row d-flex flex-row my-2">
                                <div class="col">Total Qty</div>
                                <div class="col">4</div>
                            </div>
                            <div class="row d-flex flex-row my-2">
                                <div class="col">Total Weight</div>
                                <div class="col">220 ML</div>
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

</style>
