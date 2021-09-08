<template>
    <div>
        <p class="mt-2 mb-4">---ASSIGNMENT NEEDED---</p>
        <br>
        
        <button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#guestWarning">
            Guest Account Warning
        </button>

        <div class="modal fade" id="guestWarning" tabindex="-1">

            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-body">
                        <div class="container-fluid border-bottom d-flex flex-column regular">
                            <div class="popup-container mt-4 mb-2 mx-auto">
                                <p class="warning-text text-center mt-4 mb-1 py-2">You are currently not allowed to access this page. With a guest account, you can only visit the Product List, Product Details, Payment Form, and Contact Us.</p>
                                <p class="warning-text text-center mb-4 py-2">To proceed, you can either sign up or log in below. To exit this pop-up, you can simply click anywhere on the site.</p>
                            </div>
                        </div>

                        <div class="container-fluid d-flex justify-content-center regular">
                            <div class="btn-container mt-4 mb-2 d-grid gap-2">
                                <button type="button" class="btn btn-secondary btn-format text-uppercase py-2 mt-3" block>Sign Up</button>
                                <p class="popup-text text-center my-1 py-2">OR</p>
                                <button type="button" class="btn btn-secondary btn-format text-uppercase py-2 mb-4" block>Log In</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Confirmation Message -->
        <button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target='#confirmation'>
            Contact Us + Payment Form Confirmation
        </button>

        <div class="modal fade" id="confirmation" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-body">
                        <!-- Text Container -->
                        <div class="container-fluid d-flex flex-column regular">
                            <div class="confirmation-container mt-4 mb-2 mx-auto">
                                <p class="confirmation-text text-center my-4 py-2">Thank you! We have received your form submission. Please wait for a few hours or days to receive your response.</p>
                            </div>
                        </div>

                        <div class="container-fluid d-flex justify-content-center regular">
                            <div class="btn-container mt-4 mb-2 d-grid gap-2">
                                <button type="button" class="btn btn-secondary btn-format text-uppercase pb-2 mt-3 mb-4" block>Okay</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <!-- Delete Account -->
        <button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target='#deleteAccount'>
            Delete Account
        </button>

        <div class="modal fade" id="deleteAccount">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-body">
                        <div class="container-fluid d-flex flex-column regular">
                            <div class="popup-container mt-4 mb-2 mx-auto">
                                <!-- Text -->
                                <div class="row border-bottom">
                                    <div class="col">
                                        <p class="deleteaccount-text text-center mt-4 mb-1 py-2">Are you sure you want to delete your account? If you do, you will not be able to access your order list and other account privileges anymore.</p>
                                        <p class="deleteaccount-text text-center mb-4 py-2">Proceed?</p>
                                    </div>
                                </div>

                                <!-- Buttons -->
                                <div class="d-flex justify-content-center">
                                    <div class="row btn-container mt-4 mb-2">
                                        <div class="col d-grid gap-2"><button type="button" class="btn btn-secondary btn-foramt text-uppercase">Delete</button></div>
                                        <div class="col d-grid gap-2"><button type="button" class="btn btn-secondary btn-format text-uppercase">Go Back</button></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Admin Warning --> 
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#adminWarning">
            Admin Account Warning
        </button>

        <div class="modal fade" id="adminWarning" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-body">
                        <div class="container-fluid d-flex flex-column regular">
                            <div class="popup-container mt-4 mb-2 mx-auto">
                                <!-- Text -->
                                <div class="row border-bottom">
                                    <div class="col"><p class="deleteaccount-text text-center mb-4 py-2">Sorry, this feature is restricted to buyer accounts. If you want to go further, you can log out of your admin account to proceed to checkout.</p></div>
                                </div>

                                <div class="d-flex justify-content-center">
                                    <div class="row btn-container mt-4 mb-2">
                                        <div class="col d-grid gap-2"><button type="button" class="btn btn-secondary btn-format text-uppercase">Log Out</button></div>
                                        <div class="col d-grid gap-2"><button type="button" class="btn btn-secondary btn-format text-uppercase">Cancel</button></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Add to Cart -->
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addToCart">
            Add to Cart
        </button>

        <div class="modal fade" id="addToCart" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-body">
                        <!-- Text Container -->
                        <div class="container-fluid d-flex flex-column regular">
                            <div class="confirmation-container mt-4 mb-2 mx-auto">
                                <p class="confirmation-text text-center mt-4 mb-2 py-2">Noted! We have added this product to your shopping cart.</p>
                            </div>
                        </div>

                        <div class="container-fluid d-flex justify-content-center regular">
                            <div class="btn-container mt-2 mb-2 d-grid gap-2">
                                <button type="button" class="btn btn-secondary btn-format text-uppercase pb-2 mt-3 mb-4" block>Okay</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Buyer Warning -->
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#buyerWarning">
            Buyer Account Warning
        </button>

        <div class="modal fade" id="buyerWarning" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-body">
                        <div class="container-fluid d-flex flex-column regular">
                            <div class="popup-container mt-4 mb-2 mx-auto">
                                <!-- Text -->
                                <div class="row border-bottom">
                                    <div class="col"><p class="deleteaccount-text text-center mb-4 py-2">Sorry, this page can only be accessed by an admin account. To proceed, log out of your buyer account and log in again with your admin account.</p></div>
                                </div>

                                <div class="d-flex justify-content-center">
                                    <div class="row btn-container mt-4 mb-2">
                                        <div class="col d-grid gap-2"><button type="button" class="btn btn-secondary btn-format text-uppercase">Log Out</button></div>
                                        <div class="col d-grid gap-2"><button type="button" class="btn btn-secondary btn-format text-uppercase">Cancel</button></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>        

        <!-- Order Received -->
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#orderReceived">
            Order Received
        </button>

        <div class="modal fade" id="orderReceived" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-body">
                        <div class="container-fluid d-flex flex-column regular">
                            <div class="popup-container mt-4 mb-2 mx-auto">
                                <!-- Text -->
                                <div class="row border-bottom">
                                    <div class="col"><p class="deleteaccount-text text-center mt-2 mb-4 py-2">Do you wish to proceed? Once you press confirm, the status of your order will change and you will not be able to request a refund.</p></div>
                                </div>

                                <div class="d-flex justify-content-center">
                                    <div class="row btn-container mt-4 mb-2">
                                        <div class="col d-grid gap-2"><button type="button" class="btn btn-secondary btn-format text-uppercase">Confirm</button></div>
                                        <div class="col d-grid gap-2"><button type="button" class="btn btn-secondary btn-format text-uppercase">Go Back</button></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Remove Cart -->
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#removeCart">
            Remove Cart Confirmation
        </button>

        <div class="modal fade" id="removeCart" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-body">
                        <div class="container-fluid d-flex flex-column regular">
                            <div class="popup-container mt-4 mb-2 mx-auto">
                                <!-- Text -->
                                <div class="row border-bottom">
                                    <div class="col"><p class="deleteaccount-text text-center mt-2 mb-4 py-2">Are you sure you want to remove this from your shopping cart?</p></div>
                                </div>

                                <div class="d-flex justify-content-center">
                                    <div class="row btn-container mt-4 mb-2">
                                        <div class="col d-grid gap-2"><button type="button" class="btn btn-secondary btn-format text-uppercase">Remove</button></div>
                                        <div class="col d-grid gap-2"><button type="button" class="btn btn-secondary btn-format text-uppercase">Cancel</button></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- cancel order -->

        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#cancelOrder">
            Cancel Order confirmation
        </button>

        <div class="modal fade" id="cancelOrder" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-body">
                        <div class="container-fluid d-flex flex-column regular">
                            <div class="popup-container mt-4 mb-2 mx-auto">
                                <!-- Text -->
                                <div class="row border-bottom">
                                    <div class="col"><p class="deleteaccount-text text-center mt-2 mb-4 py-2">Are you sure you want to cancel your order?</p></div>
                                </div>

                                <div class="d-flex justify-content-center">
                                    <div class="row btn-container mt-4 mb-2">
                                        <div class="col d-grid gap-2"><button type="button" class="btn btn-secondary btn-format text-uppercase">Proceed</button></div>
                                        <div class="col d-grid gap-2"><button type="button" class="btn btn-secondary btn-format text-uppercase">Go Back</button></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Check Confirmation -->

        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#checkOut">
            Order Received
        </button>

        <div class="modal fade" id="checkOut" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-body">
                        <div class="container-fluid d-flex flex-column regular">
                            <div class="popup-container mt-4 mb-2 mx-auto">
                                <!-- Text -->
                                <div class="row border-bottom">
                                    <div class="col"><p class="deleteaccount-text text-center mt-2 mb-4 py-2">Once you submit your order, you will not be able to edit it. Proceed with check out and complete your order?</p></div>
                                </div>

                                <div class="d-flex justify-content-center">
                                    <div class="row btn-container mt-4 mb-2">
                                        <div class="col d-grid gap-2"><button type="button" class="btn btn-secondary btn-format text-uppercase">Proceed</button></div>
                                        <div class="col d-grid gap-2"><button type="button" class="btn btn-secondary btn-format text-uppercase">Go Back</button></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <!-- Cart Restriction -->
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#cartRestrict">
            Cart Restriction
        </button>

        <div class="modal fade" id="cartRestrict" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-body">
                        <div class="container-fluid d-flex flex-column regular">
                            <div class="popup-container mt-4 mb-2 mx-auto">
                                <!-- Text -->
                                <div class="row border-bottom">
                                    <div class="col"><p class="deleteaccount-text text-center mt-2 mb-4 py-2">Sorry, this feature is restricted to buyer accounts. If you want to go further, you can log out of your admin account to proceed to checkout.</p></div>
                                </div>

                                <div class="d-flex justify-content-center">
                                    <div class="row btn-container mt-4 mb-2">
                                        <div class="col d-grid gap-2"><button type="button" class="btn btn-secondary btn-format text-uppercase">Log Out</button></div>
                                        <div class="col d-grid gap-2"><button type="button" class="btn btn-secondary btn-format text-uppercase">Cancel</button></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <!-- Delete Product -->
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#deleteProduct">
            Delete Product
        </button>

        <div class="modal fade" id="deleteProduct" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-body">
                        <div class="container-fluid d-flex flex-column regular">
                            <div class="popup-container mt-4 mb-2 mx-auto">
                                <!-- Text -->
                                <div class="row border-bottom">
                                    <div class="col"><p class="deleteaccount-text text-center mt-2 mb-4 py-2">Are you sure you want to delete this product and remove it from your inventory?</p></div>
                                </div>

                                <div class="d-flex justify-content-center">
                                    <div class="row btn-container mt-4 mb-2">
                                        <div class="col d-grid gap-2"><button type="button" class="btn btn-secondary btn-format text-uppercase">Delete</button></div>
                                        <div class="col d-grid gap-2"><button type="button" class="btn btn-secondary btn-format text-uppercase">Cancel</button></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <!-- Add Product 

        TODO: feature that includes the name -->

        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addProduct">
            Add Product
        </button>

        <div class="modal fade" id="addProduct" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-body">
                        <!-- Text Container -->
                        <div class="container-fluid d-flex flex-column regular">
                            <div class="confirmation-container mt-4 mb-2 mx-auto">
                                <p class="confirmation-text text-center mt-2 mb-2 py-2">You have added "Name of Product".</p>
                            </div>
                        </div>

                        <div class="container-fluid d-flex justify-content-center regular">
                            <div class="btn-container mt-2 mb-2 d-grid gap-2">
                                <button type="button" class="btn btn-secondary btn-format text-uppercase pb-2 mt-3 mb-4" block>Okay</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Edit Profile -->

        <button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#editProfile">
            Edit Profile
        </button>

        <div class="modal fade" id="editProfile" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-body">

                        <div class="container-fluid border-bottom d-flex justify-content-center medium">
                            <p class="text-uppercase">New Profile Information</p>
                        </div>

                        <div class="container-fluid border-bottom d-flex justify-content-center">
                            <div class="edit-container my-1">
                                <div class="row my-4">
                                    <div class="col">
                                        <input type="text" class="form-control form-format" id="text" placeholder="First Name">
                                    </div>

                                    <div class="col">
                                        <input type="text" class="form-control form-format" id="text" placeholder="Last Name">
                                    </div>
                                </div>

                                <div class="row-md-12 my-4">
                                    <input type="email" class="form-control form-format" id="email" placeholder="Email">
                                </div>

                                <div class="row-md-12 my-4">
                                    <div class="input-group">
                                        <input type="password" class="form-control form-format" id="password" placeholder="Password">
                                        <button type="button" class="btn btn-primary form-format show-btn">Show</button>
                                    </div>
                                </div>

                                <div class="row-md-12 my-4">
                                    <div class="input-group">
                                        <input type="password" class="form-control form-format" id="password" placeholder="Confirm Password">
                                        <button type="button" class="btn btn-primary form-format show-btn">Show</button>
                                    </div>
                                </div>
                            </div>

                            
                        </div>

                        <div class="container-fluid d-flex justify-content-center my-4">
                            <div class="row btn-container">
                                <div class="col d-grid gap-2">
                                    <button type="submit" class="btn btn-secondary btn-format">Save</button>
                                </div>

                                <div class="col d-grid gap-2">
                                    <button type="button" class="btn btn-secondary btn-format">Discard</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Edit Shipping -->

        <button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#editShipping">
            Edit Shipping
        </button>

        <div class="modal fade" id="editShipping" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-body">

                        <div class="container-fluid border-bottom d-flex justify-content-center medium">
                            <p class="text-uppercase">New Shipping Information</p>
                        </div>

                        <div class="container-fluid border-bottom d-flex justify-content-center">
                            <div class="edit-container my-1">
                                <div class="row-md-12 mt-4 mb-2">
                                    <input type="text" class="form-control form-format" id="text" placeholder="Street Address">
                                </div>

                                <div class="row-md-12 my-2">
                                    <input type="text" class="form-control form-format" id="text" placeholder="Street Address 2">
                                </div>

                                <div class="row-md-12 my-4">
                                    <input type="text" class="form-control form-format" id="text" placeholder="City">
                                </div>

                                <div class="row-md-12 my-4">
                                    <input type="text" class="form-control form-format" id="text" placeholder="Province">
                                </div>

                                <div class="row-md-12 my-4">
                                    <input type="text" class="form-control form-format" id="text" placeholder="Zipcode">
                                </div>
                            </div>

                            
                        </div>

                        <div class="container-fluid d-flex justify-content-center my-4">
                            <div class="row btn-container">
                                <div class="col d-grid gap-2">
                                    <button type="submit" class="btn btn-secondary btn-format">Save</button>
                                </div>

                                <div class="col d-grid gap-2">
                                    <button type="button" class="btn btn-secondary btn-format">Discard</button>
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

    .edit-container{
        width: 400px;
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

    .btn-format {
        background: #9F9A96;
        border-radius: 8px;
    }

    .deleteaccount-text {
        font-family: Inter;
        font-style: normal;
        font-weight: 300;
        font-size: 18.5px;
    }

    .confirmation-container {
        background: #FFFFFF;
        border-radius: 25px;
    }

    .confirmation-text {
        font-family: Inter;
        font-style: normal;
        font-weight: 300;
        font-size: 20.5px;
    }

    .large-modal {
        width: 1500px;
    }
</style>