<template>
    <div>
        <div class="account-header text-center text-uppercase py-2 regular">
            Account
        </div>
        <div class="container-fluid account-bg">
            <div class="row py-3">
                <div class="col-xs-4 mx-4">
                    <ul class="nav flex-column account-info shadow text-uppercase medium text-right py-2">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/account">Account <br>Information</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/orderlist">Order List</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Log Out</a>
                        </li>
                    </ul>
                </div>
                <div class="col">
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
                                                <button type="button" class="shadow text-uppercase btn btn-light editbtn regular p-3 mt-2">Edit Profile Information</button>
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
                                        <button type="button" class="shadow text-uppercase btn btn-light editbtn regular p-3 mt-2">Edit Shipping Information</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="shadow account-info p-3 mb-4 w-50 mx-auto">
                        <div class="section-title medium text-uppercase mb-2 text-center">Account Deletion</div>
                        <div class="container-fluid my-2">
                            <div class="d-flex justify-content-center">
                                <button type="button" class="shadow text-uppercase btn btn-light editbtn regular p-3 mt-2">Delete Account</button>
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

</style>
