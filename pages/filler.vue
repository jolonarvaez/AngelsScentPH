<template>
    <div>
        <!-- Warning -->
        <b-button v-b-modal.warn-modal>Guest Account Warning</b-button>

        <b-modal class="popup" ref="my-modal" id="warn-modal" centered hide-header hide-footer >
            <!-- Text Container -->
            <div class="container-fluid d-flex flex-column regular">
                <div class="payment-container mt-4 mb-2 mx-auto">
                    <p class="warning-text text-center mt-4 mb-1 py-2">You are currently not allowed to access this page. With a guest account, you can only visit the Product List, Product Details, Payment Form, and Contact Us.</p>
                    <p class="warning-text text-center mb-4 py-2">To proceed, you can either sign up or log in below. to exit this pop-up, you can simply click anywhere on the site.</p>
                </div>
            </div>
            <!-- Sign Up / Log In Button Container -->
            <div class="container-fluid d-flex justify-content-center regular">
                <div class="btn-container mt-4 mb-2">
                    <b-button class="payment-button text-uppercase py-2 mt-3" block @click="hideModal">Sign Up</b-button>
                    <p class="payment-text text-center my-1 py-2">OR</p>
                    <b-button class="payment-button text-uppercase py-2 mb-4" block @click="hideModal">Log In</b-button>
                </div>
            </div>
        </b-modal>

        <!-- For Payment Confirmation -->
        <b-button v-b-modal.confirm-modal>Submit Form</b-button>

        <b-modal class="popup" ref="payment-modal" id="confirm-modal" centered hide-header hide-footer >
            <!-- Text Container -->
            <div class="container-fluid d-flex flex-column regular">
                <div class="payment-container mt-4 mb-2 mx-auto">
                    <p class="payment-text text-center my-4 py-2">Thank you! We have received your form submission. Please wait for a few hours or days to receive your response.</p>
                </div>
            </div>
            <!-- Button Container -->
            <div class="container-fluid d-flex justify-content-center regular">
                <div class="btn-container mt-4 mb-2">
                    <b-button class="payment-button text-uppercase pb-2 mt-3 mb-4" block @click="hideModal">Okay</b-button>
                </div>
            </div>
        </b-modal>
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

<style scoped>
    .warning-text{
        font-family: Inter;
        font-style: normal;
        font-weight: 300;
        font-size: 15.5px
    }

    .payment-container{
        background: #FFFFFF;
        border-radius: 25px;
    }

    .btn-container{
        width: 335px
    }

    .payment-text{
        font-family: Inter;
        font-style: normal;
        font-weight: 300;
        font-size: 20.5px;
    }

    .payment-button {
        background: #9F9A96;
        border-radius: 8px;
    }
</style>