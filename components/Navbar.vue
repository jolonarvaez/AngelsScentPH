<template>
    <div>
        <nav class="navbar navbar-expand-md navbar-light bg-light">
            <div class="container-fluid header text-uppercase d-flex">
                <div class="d-flex flex-column justify-content-center text-center">
                    <a class="navbar-brand mx-auto" href="/"><img src="~/assets/logo.png" class="logo"></a>
                    <div class="logo-text medium"> Angel’s Scent</div>
                </div>
                
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item px-2">
                            <NuxtLink to="/products"><a class="nav-link">Home</a></NuxtLink> 
                        </li>
                        <li class="nav-item px-2">
                            <NuxtLink to="/cart"><a class="nav-link">Cart</a></NuxtLink>
                        </li>
                        <li class="nav-item px-2">
                           <NuxtLink to="/paymentform"><a class="nav-link">Payment Form</a></NuxtLink>
                        </li>
                        <li class="nav-item px-2">
                            <NuxtLink to="/contact"><a class="nav-link">Contact Us</a></NuxtLink>
                        </li>
                        <li class="nav-item px-2">
                            <NuxtLink to="/dashboard/sales"><a class="nav-link">Dashboard</a></NuxtLink>
                        </li>
                        <li class="nav-item px-2">
                            <!-- <b-nav-item-dropdown text="Account" right>
                                <b-dropdown-item v-b-modal.signup class="text-center">Sign Up</b-dropdown-item>
                                <b-dropdown-item v-b-modal.login class="text-center">Log In</b-dropdown-item>
                            </b-nav-item-dropdown> -->

                            Account Details link
                            <a class="nav-link" href="/account">Account</a> 
                           
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <!-- 
            
                MODAL: SIGN UP 
        
        -->
           


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
