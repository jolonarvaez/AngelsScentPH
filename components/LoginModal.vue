<template>
<div class="modal fade" id="login" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-md">
        <div class="modal-content">
        <div class="modal-header">
            <div class="d-flex m-auto">
                <div class="p-2 mx-3">Sign Up</div>
                <div class="p-2 mx-3">Log In</div>
            </div>
            <!-- <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> -->
        </div>
        <div class="modal-body text-capitalized">
            <div class="input group">
                <div class="mx-4">
                    <input class="form-format w-100 my-2 p-1" id="text" type="text" placeholder="Email"></input>
                    <p class="col validation-text mb-2">Invalid Email</p>
                    <input class="form-format w-100 my-2 p-1" id="text" type="password" placeholder="Password"></input>
                    <p class="col validation-text mb-2">Invalid Password</p>
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