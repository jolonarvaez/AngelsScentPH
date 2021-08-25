<template>

<div class="modal fade" id="signup" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
        <div class="modal-header">
            <div class="d-flex m-auto">
                <div class="p-2 mx-3">Sign Up</div>
                <div class="p-2 mx-3">Log In</div>
            </div>
        </div>
        <div class="modal-body text-capitalized">
            <div class="input group">
                <div class="row">
                    <div class="col">
                        <div class="d-flex justify-content-between">
                             <input class="form-format me-2 p-1" id="text" type="text" placeholder="First Name"></input>
                             <input class="form-format ms-2 p-1" id="text" type="text" placeholder="Last Name"></input>
                        </div>
                        <div class="d-flex">
                             <p class="col validation-text mb-2">First name required</p>
                             <p class="col validation-text ms-3 mb-2">Last name required</p>
                        </div>
                        <input class="form-format w-100 my-2 p-1" id="text" type="text" placeholder="Contact Number"></input>
                        <p class="col validation-text mb-2">Contact number required</p>
                        <input class="form-format w-100 my-2 p-1" id="text" type="text" placeholder="Email"></input>
                        <p class="col validation-text mb-2">E-mail required</p>
                        <input class="form-format w-100 my-2 p-1" id="text" type="password" placeholder="Password"></input>
                        <p class="col validation-text mb-2">Invalid password</p>
                        <input class="form-format w-100 my-2 p-1" id="text" type="password" placeholder="Confirm Password"></input> 
                        <p class="col validation-text mb-2">Password does not match</p>
                    </div>
                    <div class="col">
                        <input class="form-format w-100 mb-2 p-1" id="text" type="text" placeholder="Street Address"></input>
                        <input class="form-format w-100 my-2 p-1" id="text" type="text" placeholder="Street Address 2"></input>
                        <p class="col validation-text mb-4">Street Address Required</p>
                        <input class="form-format w-100 my-2 p-1" id="text" type="text" placeholder="City"></input>
                        <p class="col validation-text mb-2">City required</p>
                        <input class="form-format w-100 my-2 p-1" id="text" type="text" placeholder="Province"></input>
                        <p class="col validation-text mb-2">Province requried</p>
                        <input class="form-format w-100 my-2 p-1" id="text" type="text" placeholder="Zipcode"></input>
                        <p class="col validation-text mb-2">Zipcode required</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
            <button type="button" class="btn register-btn">Register</button>
        </div>
        </div>
    </div>
</div>
</template>

<script>
</script>

<style scoped>

.header-btn {
    border: none;
}

.register-btn{
    background-color: #9F9A96;
    color: white;
}

.form-format{
    font-family: Inter;
    font-style: normal;
    font-weight: lighter;
    color: #9F9A96;
    background-color: #f6f6f6;
    border: #ececec;
    font-size: 0.8rem;
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