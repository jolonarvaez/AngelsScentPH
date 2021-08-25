<template>
    <div>
        <p class="mt-2 mb-4">---ASSIGNMENT NEEDED---</p>
        <br>
        
        <!-- Warning -->
        <b-button v-b-modal.warning>Warning - Limited Acceess</b-button>

        <b-modal ref="warning-modal" id="warning" centered hide-header hide-footer no-stacking>
            <!-- Text Container -->
            <div class="container-fluid border-bottom d-flex flex-column regular">
                <div class="popup-container mt-4 mb-2 mx-auto">
                    <p class="warning-text text-center mt-4 mb-1 py-2">You are currently not allowed to access this page. With a guest account, you can only visit the Product List, Product Details, Payment Form, and Contact Us.</p>
                    <p class="warning-text text-center mb-4 py-2">To proceed, you can either sign up or log in below. to exit this pop-up, you can simply click anywhere on the site.</p>
                </div>
            </div>
            <!-- Sign Up / Log In Button Container -->
            <div class="container-fluid d-flex justify-content-center regular">
                <div class="btn-container mt-4 mb-2">
                    <b-button v-b-modal.signup class="button text-uppercase py-2 mt-3" block>Sign Up</b-button>
                    <p class="popup-text text-center my-1 py-2">OR</p>
                    <b-button v-b-modal.login class="button text-uppercase py-2 mb-4" block>Log In</b-button>
                </div>
            </div>
        </b-modal>
        
        <!-- Delete Account -->
        <b-button v-b-modal.deleteaccount>Delete Account</b-button>
        
        <b-modal ref="deleteaccount-modal" id="deleteaccount" centered hide-header hide-footer no-stacking>
        <div class="container-fluid d-flex flex-column regular">
                <div class="popup-container my-2 mx-auto">
                    <!-- Text Row -->
                    <b-row class="border-bottom">
                        <b-col>
                            <p class="deleteaccount-text text-center mt-4 mb-1 py-2">Are you sure you want to delete your account? If you do, you will not be able to access your oder list and other account privileges anymore.</p>
                            <p class="deleteaccount-text text-center mb-2 py-2">Proceed?</p>
                        </b-col>
                    </b-row>

                    <div class="d-flex justify-content-center">
                        <b-row class="btn-container mt-3">
                            <b-col>
                                <b-button class="button text-uppercase" block>Delete</b-button>
                            </b-col>
                            <b-col>
                                <b-button class="button text-uppercase" block>Go Back</b-button>
                            </b-col>
                        </b-row>
                    </div>
                </div>

            </div>
        </b-modal>


        <!-- Warning - Admin Only Feature --> 
        <b-button v-b-modal.adminprivilege>Warning - Admin Only Feature</b-button>
        
        <b-modal ref="adminprivilege-modal" id="adminprivilege" centered hide-header hide-footer no-stacking>
        <div class="container-fluid d-flex flex-column regular">
                <div class="popup-container my-2 mx-auto">
                    <!-- Text Row -->
                    <b-row class="border-bottom">
                        <b-col>
                            <p class="deleteaccount-text text-center mt-4 mb-2 py-2">Sorry, this page can only be accessed by an admin account. to proceed, log out of your buyer account and log in again with your admin account.</p>
                        </b-col>
                    </b-row>

                    <div class="d-flex justify-content-center">
                        <b-row class="btn-container mt-3">
                            <b-col>
                                <b-button class="button text-uppercase" block>Log Out</b-button>
                            </b-col>
                            <b-col>
                                <b-button class="button text-uppercase" block>Cancel</b-button>
                            </b-col>
                        </b-row>
                    </div>
                </div>

            </div>
        </b-modal>

        <!-- Confirmation - Add to Cart -->
        <b-button v-b-modal.addcart>Confirmation - Add to Cart</b-button>
        
        <b-modal ref="addcart-modal" id="addcart" centered hide-header hide-footer no-stacking>
        <div class="container-fluid d-flex flex-column regular">
                <div class="popup-container my-2 mx-auto">
                    <!-- Text Row -->
                    <b-row class="border-bottom">
                        <b-col>
                            <p class="popup-text text-center mt-4 mb-2 py-2">Noted! We have added this product to your shopping cart.</p>
                        </b-col>
                    </b-row>

                    <div class="d-flex justify-content-center">
                        <b-row class="btn-container mt-3">
                            <b-col>
                                <b-button class="button text-uppercase" block>Okay</b-button>
                            </b-col>
                        </b-row>
                    </div>
                </div>

            </div>
        </b-modal>


        <!--    |
                |
                |
                |
                V
            
            EVERYTHING BELOW HERE HAS BEEN IMPLEMENTED ALREADY 
        
        
        
        
        
        
        
        -->
        <br>
        <p class="mt-5 mb-4">---IMPLEMENTED---</p>
        <br>

        <!-- 
            Sign Up 
            TODO: Fix the entire container and add the validations
        -->
        <b-modal ref="signup-modal" id="signup" size="xl" centered hide-header hide-footer no-stacking>
            <div class="container-fluid d-flex justify-content-center regular">
                <div class="signup-container my-1">
                    
                    <!-- Header -->
                    <div class="row">
                        <div class="col">
                            <b-button class="text-uppercase" block>Sign Up</b-button>
                        </div>
                        <div class="col">
                            <b-button v-b-modal.login class="text-uppercase" block>Log In</b-button>
                        </div>
                    </div>
                    
                    <!-- Name and Address-->
                    <b-row>
                        <!-- First Name -->
                        <b-col sm="3">
                            <p class="validation-text my-2">First name required</p>
                            <b-form-input class="form-format" id="text" type="text" placeholder="First Name"></b-form-input>
                        </b-col>

                        <!-- Last Name --> 
                        <b-col sm="3">
                            <p class="validation-text my-2">Last name required</p>
                            <b-form-input class="form-format" id="text" type="text" placeholder="Last Name"></b-form-input>
                        </b-col>

                        <!-- Street Address -->
                        <b-col sm="6">
                            <p class="validation-text my-2">Street address required</p>
                            <b-form-input class="form-format" id="text" type="text" placeholder="Street Address"></b-form-input>
                        </b-col>
                    </b-row>

                    <!-- Contact Number and Street Address 2 -->
                    <b-row>
                        <b-col sm="6">
                            <p class="validation-text my-2">Contact number required</p>
                            <b-form-input class="form-format" id="number" type="number" placeholder="Contact Number"></b-form-input>
                        </b-col>

                        <b-col sm="6">
                            <p class="validation-text my-2">  </p>
                            <b-form-input class="form-format" id="text" type="text" placeholder="Street Address 2"></b-form-input>
                        </b-col>
                    </b-row>
                    
                    <!-- Email and City -->
                    <b-row>
                        <b-col>
                            <p class="validation-text my-2">Invalid email address / email address required</p>
                            <b-form-input class="form-format" id="email" type="email" placeholder="Email"></b-form-input>
                        </b-col>

                        <b-col>
                            <p class="validation-text my-2">City required</p>
                            <b-form-input class="form-format" id="text" type="text" placeholder="City"></b-form-input>
                        </b-col>
                    </b-row>

                    <!-- Password and Province -->
                    <b-row>
                        <!-- Password -->
                        <b-col>
                            <p class="validation-text my-2">Invalid password / password required </p>
                            <b-input-group>
                                <b-form-input class="form-format" id="password" type="password" placeholder="Password"></b-form-input>
                                <b-input-group-append>
                                    <b-button class="form-format show-btn">Show</b-button> 
                                </b-input-group-append>
                            </b-input-group> 
                        </b-col>

                        <!-- Province -->
                        <b-col>
                            <p class="validation-text my-2">Province required</p>
                            <b-form-input class="form-format" id="text" type="text" placeholder="Province"></b-form-input>
                        </b-col>
                    </b-row>

                    <!-- Confirm Password and Zipcode -->
                    <b-row class="mb-3">
                        <b-col>
                            <p class="validation-text my-2">Password does not match / Password required</p>
                            <b-input-group>
                                <b-form-input class="form-format" id="password" type="password" placeholder="Confirm Password"></b-form-input>
                                <b-input-group-append>
                                    <b-button class="form-format show-btn">Show</b-button> 
                                </b-input-group-append>
                            </b-input-group> 
                        </b-col>

                        <b-col>
                            <p class="validation-text my-2">Zipcode required</p>
                            <b-form-input class="form-format" id="number" type="number" placeholder="Zipcode"></b-form-input>
                        </b-col>
                    </b-row>

                    <!-- BUTTON: Sign Up -->
                    <div class="d-flex justify-content-center my-1">
                        <div class="row btn-container">
                            <div class="col">
                                <b-button class="button text-uppercase" block>Sign Up</b-button>
                            </div>
                        </div>
                    </div>
                    
                    <!-- BUTTON: Continue as Guest -->
                    <div class="d-flex justify-content-center">
                        <div class="row btn-container">
                            <div class="col">
                                <p class="popup-text text-center text-uppercase my-1">OR</p>
                                <b-button class="button text-uppercase" block>Continue as Guest</b-button>
                            </div>
                        </div>
                    </div>

                <!-- Container END -->
                </div>
                

            </div>
        </b-modal>

        <!-- Login 
            TODO: FIX Button Styling
            TODO: Header styling
            TODO: validations

        -->
        <b-modal ref="login-modal" id="login" centered hide-header hide-footer>
            <div class="container-fluid d-flex justify-content-center regular">
                <div class="login-container my-1">

                    <!-- Header -->
                    <div class="row">
                        <div class="col">
                            <b-button class="text-uppercase" block>Sign Up</b-button>
                        </div>
                        <div class="col">
                            <b-button class="text-uppercase" block>Log In</b-button>
                        </div>
                    </div>
                    
                    <div class="row">
                        <div class="col">
                            <p class="validation-text my-2">Invalid email address / Email address required</p>
                            <b-form-input class="form-format" id="email" type="email" placeholder="Email"></b-form-input>
                        </div>
                    </div>

                    <!-- Password Form -->
                    <div class="row">
                        <div class="col">
                            <p class="validation-text my-2">Invalid password / Password required</p>
                            <b-input-group>
                                <b-form-input class="form-format" id="password" type="password" placeholder="Password"></b-form-input>
                                <b-input-group-append>
                                    <b-button class="form-format show-btn">Show</b-button> 
                                </b-input-group-append>
                            </b-input-group> 
                            
                            <!-- Forgot Password -->
                            <div class="d-flex justify-content-end">
                                <b-link class="validation-text mt-1 mb-2" href="#">Forgot Password?</b-link>
                            </div>
                        </div>
                    </div>
                    
                    <div class="d-flex justify-content-center">
                        <div class="row btn-container">
                            <div class="col">
                                <b-button class="button text-uppercase" block>Log In</b-button>
                            </div>
                        </div>
                    </div>

                    <!-- [Log In] Continue as Guest -->
                    <div class="d-flex justify-content-center">
                        <div class="btn-container my-1">
                            <p class="popup-text text-center my-1 py-2">OR</p>
                            <b-button class="button text-uppercase" block>Continue as Guest</b-button>
                        </div>
                    </div>


                <!-- Container END -->    
                </div>
            </div>
        </b-modal>    



        <!-- For Payment Confirmation -->
        <b-button v-b-modal.confirmation>Submit Form</b-button>

        <b-modal ref="payment-modal" id="confirmation" centered hide-header hide-footer >
            <!-- Text Container -->
            <div class="container-fluid d-flex flex-column regular">
                <div class="popup-container mt-4 mb-2 mx-auto">
                    <p class="popup-text text-center my-4 py-2">Thank you! We have received your form submission. Please wait for a few hours or days to receive your response.</p>
                </div>
            </div>
            <!-- Button Container -->
            <div class="container-fluid d-flex justify-content-center regular">
                <div class="btn-container mt-4 mb-2">
                    <b-button class="button text-uppercase pb-2 mt-3 mb-4" block @click="hideModal">Okay</b-button>
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

    .button {
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