<template>
    <div>
        <p class="mt-2 mb-4">---ASSIGNMENT NEEDED---</p>
        <br>
        
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#warning">
            Warning - Limited Access
        </button>

        <div class="modal fade" id="warning" tabindex="-1">

            <div class="modal modal-dialog-centered">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-body">
                        <div class="container-fluid border-bottom d-flex flex-column regular">
                                <div class="popup-container mt-4 mb-2 mx-auto">
                                    <p class="warning-text text-center mt-4 mb-1 py-2">You are currently not allowed to access this page. With a guest account, you can only visit the Product List, Product Details, Payment Form, and Contact Us.</p>
                                    <p class="warning-text text-center mb-4 py-2">To proceed, you can either sign up or log in below. to exit this pop-up, you can simply click anywhere on the site.</p>
                                </div>
                            </div>

                            <div class="container-fluid d-flex justify-content-center regular">
                                <div class="btn-container mt-4 mb-2 d-grid gap-2">
                                    <button type="button" class="btn btn-primary text-uppercase py-2 mt-3" block>Sign Up</button>
                                    <p class="popup-text text-center my-1 py-2">OR</p>
                                    <button type="button" class="btn btn-primary text-uppercase py-2 mb-4" block>Log In</button>
                                </div>
                            </div>
                    </div>
                </div>
            </div> 
            </div>

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

<style scoped>
    /** Modal: Warning Popup */
    .warning-text{
        font-family: Inter;
        font-style: normal;
        font-weight: 300;
        font-size: 15.5px
    }

    .signup-container{
        width: 900px;
    }

    .header-btn {
        border: none;
    }

    .form-format{
        font-family: Inter;
        font-style: normal;
        font-weight: lighter;
        color: #9F9A96;
        background-color: #f6f6f6;
        border: #ececec;
    }

    .show-btn{
        border: #ececec;
        border-left: none;
    }

    .login-container{
        width: 400px;
    }

    .validation-text{
        font-family: Inter;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 20px; /* identical to box height, or 143% */
        letter-spacing: 0.2px;
        color: #DC3915;
    }

    .popup-container{
        background: #FFFFFF;
        border-radius: 25px;
    }

    .btn-container{
        width: 335px;
    }

    .popup-text{
        font-family: Inter;
        font-style: normal;
        font-weight: 300;
        font-size: 20.5px;
    }

    .btn {
        background: #9F9A96;
        border-radius: 8px;
    }

    .deleteaccount-text {
        font-family: Inter;
        font-style: normal;
        font-weight: 300;
        font-size: 18.5px;
    }
</style>