<template>
    <div> 
        <!-- Header -->
        <div class="header text-center regular text-uppercase py-2">
            Payment Form
        </div> 
        <!-- Container -->
        <div class="container-fluid d-flex flex-column regular text-uppercase">
            <div class="shadow container mt-4 mb-2 p-3 mx-auto w-75">
                <form class="px-4">
                    <!-- Order Number -->
                    <div class="row px-4">
                        <div class="col-sm-6 my-3">
                            <label for="orderNumberInput" class="form-label">Order Number</label>
                            <input type="orderNumber" class="form-control" id="orderNumberInput" aria-describedby="emailHelp">
                        </div>
                    </div>
                    <!-- Last & First Name -->
                    <div class="row px-4">
                        <div class="col-sm-6 my-3">
                            <label for="lastNameInput" class="form-label">Last Name</label>
                            <input type="lastName" class="form-control" id="lastNameInput" aria-describedby="emailHelp">
                        </div>

                        <div class="col-sm-6 my-3">
                            <label for="firstNameInput" class="form-label">First Name</label>
                            <input type="firstName" class="form-control" id="firstNameInput" aria-describedby="emailHelp">
                        </div>
                    </div>
                    <!-- Email Address and Contact Number -->
                    <div class="row px-4">
                        <div class="col-sm-6 my-3">
                            <label for="emailInput" class="form-label">Email Address</label>
                            <input type="email" class="form-control" id="emailInput" aria-describedby="emailHelp">
                        </div>
                        <div class="col-sm-6 my-3">
                            <label for="contactNumberInput" class="form-label">Contact Number</label>
                            <input type="contactNumber" class="form-control" id="contactNumberInput" aria-describedby="emailHelp">
                        </div>
                    </div>
                    <!-- Total Amount and GCash Transaction # -->
                    <div class="row px-4">
                        <div class="col-sm-6 my-3">
                            <label for="totalAmountInput" class="form-label">Total Amount</label>
                            <input type="totalAmount" class="form-control" id="totalAmountInput" aria-describedby="emailHelp">
                        </div>
                        <div class="col-sm-6 my-3">
                            <label for="gcashInput" class="form-label">GCash Transaction Number</label>
                            <input type="gcash" class="form-control" id="gcashInput" aria-describedby="emailHelp">
                        </div>
                    </div>
                    <!-- Proof of Transaction -->
                    <div class="row px-4 my-3 pb-1">
                        <div class="col">
                            <label for="fileInput" class="form-label">Screenshot / Receipt for Proof of Transaction</label><br>
                            <input type="file" id="fileInput" aria-describedby="emailHelp">
                        </div>
                    </div>
                </form>
            </div>
            <!-- Thank you -->
            <div class="thanks text-center regular text-uppercase py-2">
                Thank you for buying. We will process your order shortly.
            </div> 
            <!-- Button -->
            <div class="row m-auto">
                <button type="button" class="shadow-sm text-uppercase btn btn-light submit-btn w-100 regular mt-2 px-4 py-2">Submit Form</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

    .textarea{
        font-size: 0.8rem;
    }

    .header{
        font-size: 1.5rem;
        border-style: solid;
        border-width: 2px 0;
        border-color: #E5E5E5;
    }

    .container{
        background-color: #FAFAFA;
        border-radius: 10px;
    }

    .thanks{
        font-size: 1.375rem;
    }

    .submit-btn{
        background-color: #9F9A96;
        border-color: #9F9A96;
        color: white;
    }


</style>