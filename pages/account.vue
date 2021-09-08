<template>
    <div>
        <div class="account-header text-center text-uppercase py-2 regular">
            Account
        </div>
        <div class="container-fluid account-bg">
            <div class="row py-3">
                <AccountNavbar />
                <div class="col-10">
                    <div class="row">
                        <div class="col-md">
                            <div class="regular m-auto">
                                <div class="d-flex flex-column mx-3">
                                    <div class="shadow account-info p-3 mb-4">
                                        <div class="section-title medium text-uppercase mb-3">Profile</div>
                                        <div class="container-fluid my-2 account-section">
                                            <div class="my-2">
                                                <div class="text-uppercase medium">First Name</div>
                                                <div class="section-body medium">Choi</div>
                                            </div>
                                            <div class="my-2">
                                                <div class="text-uppercase medium">Last Name</div>
                                                <div class="section-body medium">Soobin</div>
                                            </div>
                                            
                                            <div class="my-2">
                                                <div class="text-uppercase medium">Email</div>
                                                <div class="section-body medium">choisoobin@tubatu.net</div>
                                            </div>

                                            <div class="my-2">
                                                <div class="text-uppercase medium">Phone Number</div>
                                                <div class="section-body medium">+639123345678</div>
                                            </div>
                                            
                                            <div class="my-2">
                                                <div class="text-uppercase medium">Password</div>
                                                <div class="section-body medium">******</div>
                                            </div>
                                            <div class="d-flex justify-content-center">
                                                <button type="button" class="shadow text-uppercase btn btn-light editbtn regular p-3 mt-2" data-bs-toggle="modal" data-bs-target="#editProfile">Edit Profile Information</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="shadow account-info p-3 mb-4">
                                <div class="section-title medium text-uppercase mb-3">Shipping Information</div>
                                <div class="container-fluid my-2 account-section">
                                    <div class="my-2">
                                        <div class="text-uppercase medium">Address Line 1</div>
                                        <div class="section-body medium">Choi Soobin</div>
                                    </div>
                                    <div class="my-2">
                                        <div class="text-uppercase medium">Address Line 2</div>
                                        <div class="section-body medium">N/A</div>
                                    </div>
                                    
                                    <div class="my-2">
                                        <div class="text-uppercase medium">City</div>
                                        <div class="section-body medium">Seoul</div>
                                    </div>

                                    <div class="my-2">
                                        <div class="text-uppercase medium">Region</div>
                                        <div class="section-body medium">Korea</div>
                                    </div>

                                    <div class="my-2">
                                        <div class="text-uppercase medium">Zipcoded</div>
                                        <div class="section-body medium">1980</div>
                                    </div>
                                    
                                    <div class="d-flex justify-content-center">
                                        <button type="button" class="shadow text-uppercase btn btn-light editbtn regular p-3 mt-2" data-bs-toggle="modal" data-bs-target="#editShipping">Edit Shipping Information</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="shadow account-info p-3 mb-4 w-50 mx-auto">
                        <div class="section-title medium text-uppercase mb-2 text-center">Account Deletion</div>
                        <div class="container-fluid my-2">
                            <div class="d-flex justify-content-center">
                                <button type="button" class="shadow text-uppercase btn btn-light editbtn regular p-3 mt-2" data-bs-toggle="modal" data-bs-target="#deleteAccount">Delete Account</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- MODALS -->

            <!-- EDIT PROFILE INFORMATION -->
        <div class="modal fade" id="editProfile" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-body">

                        <div class="container-fluid border-bottom d-flex justify-content-center medium">
                            <p class="text-uppercase">New Profile Information</p>
                        </div>

                        <form>
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
                                        <button type="button" class="btn btn-secondary btn-format" data-bs-dismiss="modal">Discard</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

            <!-- Edit Shipping Information --> 
        <div class="modal fade" id="editShipping" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-body">

                        <div class="container-fluid border-bottom d-flex justify-content-center medium">
                            <p class="text-uppercase">New Shipping Information</p>
                        </div>

                        <form>
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
                                        <button type="button" class="btn btn-secondary btn-format" data-bs-dismiss="modal">Discard</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        

            <!-- DELETE ACCOUNT -->

        <div class="modal fade" id="deleteAccount">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-body">
                        <div class="container-fluid d-flex flex-column regular">
                            <div class="popup-container mt-4 mb-2 mx-auto">
                                <!-- Text -->
                                <div class="row border-bottom">
                                    <div class="col">
                                        <p class="select-text text-center mt-4 mb-1 py-2">Are you sure you want to delete your account? If you do, you will not be able to access your order list and other account privileges anymore.</p>
                                        <p class="select-text text-center mb-4 py-2">Proceed?</p>
                                    </div>
                                </div>

                                <!-- Buttons -->
                                <div class="d-flex justify-content-center">
                                    <div class="row btn-container mt-4 mb-2">
                                        <!-- TODO: DELETE BUTTON -->
                                        <div class="col d-grid gap-2"><button type="button" class="btn btn-secondary btn-format text-uppercase">Delete</button></div>
                                        <div class="col d-grid gap-2"><button type="button" class="btn btn-secondary btn-format text-uppercase" data-bs-dismiss="modal">Go Back</button></div>
                                    </div>
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

}
</script>

<style scoped>

    .account-bg{
        background-color: #FAFAFA;
    }

    .account-header{
        font-size: 1.5rem;
        border-style: solid;
        border-width: 2px 0;
        border-color: #E5E5E5;
    }

    .account-list, .account-info{
        background-color: white;
        border-radius: 10px;
    }

    .account-section{
        letter-spacing: 1.8px;
    }

    .section-title{
        font-size: 1.5rem;
    }

    .section-body{
        color: #79808F;
    }

    .editbtn{
        font-size: 0.8rem;
        background-color: #9F9A96;
        border-color: #9F9A96;
        color: white;
    }

    .nav-link{
        color: #79808F;
    }

    .active{
        color: black;
    }

    .edit-container{
        width: 400px;
    }

    .form-format{
        font-family: Inter;
        font-style: normal;
        font-weight: lighter;
        color: #9F9A96;
        background-color: #f6f6f6;
        border-color: #ececec;
    }

    .show-btn{
        border-color: #ececec;
        border-left: none;
    }

    .btn-container{
        width: 335px;
    }

    .btn-format {
        background: #9F9A96;
        border-radius: 8px;
    }

</style>
