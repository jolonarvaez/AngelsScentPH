<template>
    <div>
        <div class="contact-header text-center regular text-uppercase py-2">
            Contact Us
        </div>
        <div class="container-fluid d-flex flex-column regular text-uppercase">
            <form class="px-4">
                <div class="shadow contact-box mt-4 mb-2 p-3 mx-auto w-75">
                    <div class="row px-4">
                        <div class="col-sm-6 my-3">
                            <label for="firstNameInput" class="form-label">First Name</label>
                            <input type="firstName" class="form-control" id="firstNameInput" aria-describedby="emailHelp" required>
                        </div>

                        <div class="col-sm-6 my-3">
                            <label for="lastNameInput" class="form-label">Last Name</label>
                            <input type="lastName" class="form-control" id="lastNameInput" aria-describedby="emailHelp" required>
                        </div>
                    </div>
                    <div class="row px-4">
                        <div class="col-sm-6 my-3">
                            <label for="emailInput" class="form-label">Email</label>
                            <input type="email" class="form-control" id="emailInput" aria-describedby="emailHelp" required>
                        </div>
                        <div class="col-sm-6 my-3">
                            <label for="contactNumberInput" class="form-label">Contact Number</label>
                            <input type="contactNumber" class="form-control" id="contactNumberInput" aria-describedby="emailHelp" requried>
                        </div>
                    </div>
                    <div class="row px-4 my-3">
                        <div class="col">
                            <label for="subjectInput" class="form-label">Subject</label>
                            <input type="subject" class="form-control" id="subjectInput" aria-describedby="emailHelp" required>
                        </div>
                    </div>
                    <div class="row px-4 my-3 pb-1">
                        <div class="col">
                            <label for="message">Message</label>
                            <textarea class="form-control w-100" placeholder="" id="message" style="height: 80px" required></textarea>
                        </div>
                    </div>
                </div>
                <div class="d-flex justify-content-center">
                    <button type="submit" class="shadow-sm text-uppercase btn btn-light submit-btn regular mt-2 px-4 py-2" data-bs-toggle="modal" data-bs-target="#confirmation">Submit Inquiry</button>
                </div>
            </form>
        </div>

        <!-- MODAL -->
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
                                <button type="button" class="btn btn-secondary btn-format text-uppercase pb-2 mt-3 mb-4" data-bs-dismiss="modal">Okay</button>
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

    .btn-container{
        width: 335px;
    }

    .btn-format {
        background: #9F9A96;
        border-radius: 8px;
    }

</style>
