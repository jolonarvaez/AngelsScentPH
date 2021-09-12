<template>
    <div>
        <div class="payment-header text-center regular text-uppercase py-2">
            Payment Form
        </div>
        <div class="container-fluid d-flex flex-column regular text-uppercase">
            <div class="shadow payment-box mt-3 mb-4 px-3 py-2 mx-auto w-75">
                <form class="px-4" action="https://formspree.io/f/xeqvnjvb" method="POST">
                    <div class="row px-4">
                        <div class="col-sm-3 my-3">
                            <label for="orderInput" class="form-label">Order Number</label>
                            <input type="text" class="form-control" id="orderInput"   required>
                        </div>

                    </div>
                    <div class="row px-4">
                        <div class="col-sm-6 my-3">
                            <label for="firstName" class="form-label">First Name</label>
                            <input type="firstName" class="form-control" id="firstName" name="First Name" required>
                        </div>
                        <div class="col-sm-6 my-3">
                            <label for="lastName" class="form-label">Last Name</label>
                            <input type="lastName" class="form-control" id="lastName"  name="Last Name" required>
                        </div>
                    </div>
                    <div class="row px-4 my-3">
                        <div class="col-sm-6 my-3">
                            <label for="emailInput" class="form-label">Email Address</label>
                            <input type="email" class="form-control" id="emailInput" name="Email" required>
                        </div>
                        <div class="col-sm-6 my-3">
                            <label for="contactInput" class="form-label">Contact Number</label>
                            <input type="number" class="form-control" id="contactInput" name="Contact Number"  required>
                        </div>
                    </div>

                    <div class="row px-4 my-3 d-flex justify-content-between">
                        <div class="col-sm-3 my-3">
                            <label for="totalInput" class="form-label">Total Amount</label>
                            <input type="number" class="form-control" id="totalInput"  name="Total Price"  required>
                        </div>
                        <div class="col-sm-6 my-3">
                            <label for="gcashInput" class="form-label">Gcash Transaction Number</label>
                            <input type="number" class="form-control" id="gcashInput" name="Gcash Transaction Number" required>
                        </div>
                    </div>

                    <div class="row px-4 my-3 pb-1">
                        <div class="col-sm-6">
                            <label for="formFile">Screenshot / Receipt for proof of transaction</label>
                            <input type="file" id="formFile" accept="image/png, image/gif, image/jpeg" name="Upload" required>
                        </div>
                    </div>
                    <div class="d-flex justify-content-center">
                        <button type="submit" class="shadow-sm text-uppercase btn btn-light submit-btn regular mt-2 px-4 py-2">Submit Form</button>
                    </div>
                </form>
            </div>
            
            
            <!-- Confimation Popup
            <b-modal ref="payment-modal" id="confirmation" centered hide-header hide-footer >
                <div class="container-fluid d-flex flex-column regular">
                    <div class="payment-container mt-4 mb-2 mx-auto">
                        <p class="payment-text text-center my-4 py-2">Thank you! We have received your form submission. Please wait for a few hours or days to receive your response.</p>
                    </div>
                </div>
                <div class="container-fluid d-flex justify-content-center regular">
                    <div class="btn-container mt-4 mb-2">
                        <b-button class="button text-uppercase pb-2 mt-3 mb-4" block @click="hideModal">Okay</b-button>
                    </div>
                </div>
            </b-modal> -->
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            hideModal() {
                this.$refs['payment-modal'].hide()
            } 
        }
    }
</script>

<style>

    .payment-header{
        font-size: 1.5rem;
        border-style: solid;
        border-width: 2px 0;
        border-color: #E5E5E5;
    }

    .payment-box{
        background-color: #FAFAFA;
        border-radius: 10px;
    }

    .submit-btn{
        background-color: #9F9A96;
        border-color: #9F9A96;
        color: white;
    }

    .payment-container{
        background: #FFFFFF;
        border-radius: 25px;
    }

    .payment-text{
        font-family: Inter;
        font-style: normal;
        font-weight: 300;
        font-size: 20.5px;
    }

    .btn-container{
        width: 335px;
    }

    .button {
        background: #9F9A96;
        border-radius: 8px;
    }

</style>
