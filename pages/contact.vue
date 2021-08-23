<template>
    <div>
        <div class="contact-header text-center regular text-uppercase py-2">
            Contact Us
        </div>
        <div class="container-fluid d-flex flex-column regular text-uppercase">
            <div class="shadow contact-box mt-4 mb-2 p-3 mx-auto w-75">
                <form class="px-4">
                    <div class="row px-4">
                        <div class="col-sm-6 my-3">
                            <label for="firstNameInput" class="form-label">First Name</label>
                            <input type="firstName" class="form-control" id="firstNameInput" aria-describedby="emailHelp">
                        </div>

                        <div class="col-sm-6 my-3">
                            <label for="lastNameInput" class="form-label">Last Name</label>
                            <input type="lastName" class="form-control" id="lastNameInput" aria-describedby="emailHelp">
                        </div>
                    </div>
                    <div class="row px-4">
                        <div class="col-sm-6 my-3">
                            <label for="emailInput" class="form-label">Email</label>
                            <input type="email" class="form-control" id="emailInput" aria-describedby="emailHelp">
                        </div>
                        <div class="col-sm-6 my-3">
                            <label for="contactNumberInput" class="form-label">Contact Number</label>
                            <input type="contactNumber" class="form-control" id="contactNumberInput" aria-describedby="emailHelp">
                        </div>
                    </div>
                    <div class="row px-4 my-3">
                        <div class="col">
                            <label for="subjectInput" class="form-label">Subject</label>
                            <input type="subject" class="form-control" id="subjectInput" aria-describedby="emailHelp">
                        </div>
                    </div>
                    <div class="row px-4 my-3 pb-1">
                        <div class="col">
                            <label for="message">Message</label>
                            <textarea class="form-control w-100" placeholder="" id="message" style="height: 80px"></textarea>
                        </div>
                    </div>
                </form>
            </div>
            <div class="row m-auto">
                <button type="button" class="shadow-sm text-uppercase btn btn-light submit-btn w-100 regular mt-2 px-4 py-2">Submit Inquiry</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

textarea{
    font-size: 0.8rem;
}
.contact-header{
    font-size: 1.5rem;
    border-style: solid;
    border-width: 2px 0;
    border-color: #E5E5E5;
}

.contact-box{
    background-color: #FAFAFA;
    border-radius: 10px;
}

.submit-btn{
    background-color: #9F9A96;
    border-color: #9F9A96;
    color: white;
}

</style>
