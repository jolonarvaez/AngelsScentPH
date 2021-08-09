<template>
    <div>
        <div class="account-header text-center text-uppercase py-2 regular">
            Account
        </div>
        <div class="container-fluid account-bg">
            <div class="row py-3">
                <div class="col-xs mx-4">
                    <div class="shadow d-flex flex-column account-list text-right regular py-2 px-3">
                        <div class="medium">Account <br>Information</div>
                        <div>Order List</div>
                        <div>Log out</div>
                    </div>
                </div>

                <div class="col-md">
                    <div class="shadow account-info regular py-2 px-3">
                        <div class="d-flex flex-column m-3">
                            <div class="section-title medium text-uppercase mb-2">Profile</div>
                            <div class="container-fluid my-2">
                                <div class="text-uppercase medium">First Name</div>
                                <div class="section-body medium">Choi</div>
                                <div class="text-uppercase medium">Last Name</div>
                                <div class="section-body medium">Soobin</div>
                                <div class="text-uppercase medium">Email</div>
                                <div class="section-body medium">choisoobin@tubatu.net</div>
                                <div class="text-uppercase medium">Password</div>
                                <div class="section-body medium">******</div>
                                <button type="button" class="shadow text-uppercase btn btn-light editbtn w-25 regular py-2">Edit Profile Information</button>
                            </div>
                            <div class="section-title medium text-uppercase mb-2">Shipping Information</div>
                            <div class="container-fluid my-2">
                                <div class="text-uppercase medium">First Name</div>
                                <div class="section-body medium">Choi</div>
                                <div class="text-uppercase medium">Last Name</div>
                                <div class="section-body medium">Soobin</div>
                                <div class="text-uppercase medium">Email</div>
                                <div class="section-body medium">choisoobin@tubatu.net</div>
                                <div class="text-uppercase medium">Password</div>
                                <div class="section-body medium">******</div>
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

</style>
