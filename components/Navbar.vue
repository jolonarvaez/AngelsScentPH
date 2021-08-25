<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid header text-uppercase">
                <div class="d-flex flex-column justify-content-center text-center">
                    <a class="navbar-brand mx-auto" href="/"><img src="~/assets/logo.png" class="logo"></a>
                    <div class="logo-text medium"> Angel’s Scent</div>
                </div>
                
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item px-2">
                            <a class="nav-link" aria-current="page" href="/">Home</a>
                        </li>
                        <li class="nav-item px-2">
                            <a class="nav-link" href="/cart">Cart</a>
                        </li>
                        <li class="nav-item px-2">
                            <a class="nav-link" href="/paymentform">Payment Form</a>
                        </li>
                        <li class="nav-item px-2">
                            <a class="nav-link" href="/contact">Contact Us</a>
                        </li>
                        <li class="nav-item px-2">
                            <a class="nav-link" href="#">Dashboard</a>
                        </li>
                        <li class="nav-item px-2">
                            <b-nav-item-dropdown text="Account" right>
                                <b-dropdown-item v-b-modal.signup class="text-center">Sign Up</b-dropdown-item>
                                <b-dropdown-item v-b-modal.login class="text-center">Log In</b-dropdown-item>
                            </b-nav-item-dropdown>

                            <!-- Account Details link
                            <a class="nav-link" href="/account">Account</a> 
                            -->
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <!-- 
            
                MODAL: SIGN UP 
        
        -->
        <b-modal ref="signup-modal" id="signup" size="xl" centered hide-header hide-footer no-stacking>
            <div class="container-fluid d-flex justify-content-center regular">
                <div class="signup-container my-1">
                    
                    <!-- Header -->
                    <div class="row border-bottom">
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
                                <p class="modal-text text-center text-uppercase my-1">OR</p>
                                <b-button class="button text-uppercase" block>Continue as Guest</b-button>
                            </div>
                        </div>
                    </div>

                <!-- Container END -->
                </div>
            </div>
        </b-modal>

        <!-- 
                
                MODAL: LOG IN  
                
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
                            <p class="modal-text text-center my-1 py-2">OR</p>
                            <b-button class="button text-uppercase" block>Continue as Guest</b-button>
                        </div>
                    </div>


                <!-- Container END -->    
                </div>
            </div>
        </b-modal>    


    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    .header{
        font-size: 12px;
    }

    .logo{
        width: 75px;
        height: auto;
    }

    .logo-text{
        font-size: 0.55rem;
        letter-spacing: 2px;
    }

    /*the following styles are used for the modals*/

    .signup-container{
        width: 900px;
    }

    .login-container{
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

    .validation-text{
        font-family: Inter;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 20px; /* identical to box height, or 143% */
        letter-spacing: 0.2px;
        color: #DC3915;
    }

    .modal-text {
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
