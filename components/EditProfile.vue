<template>
<div class="modal fade" id="editProfile" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-body">

                <div class="container-fluid border-bottom d-flex justify-content-center medium">
                    <p class="text-uppercase">New Profile Information</p>
                </div>

                <form @submit="submit">
                    <div class="container-fluid border-bottom d-flex justify-content-center">
                        <div class="edit-container my-1">
                            <div class="row my-4">
                                <div class="col">
                                    <input type="text" class="form-control form-format" id="text" placeholder="First Name" v-model="fName">
                                </div>

                                <div class="col">
                                    <input type="text" class="form-control form-format" id="text" placeholder="Last Name" v-model="lName">
                                </div>
                            </div>

                            <div class="row-md-12 my-4">
                                <input type="email" class="form-control form-format" id="email" placeholder="Email" v-model="email">
                            </div>

                            <div class="row-md-12 my-4">
                                <input type="contactNo" class="form-control form-format" id="contactNo" placeholder="Contact Number" v-model="contactNo">
                            </div>

                            <!-- <div class="row-md-12 my-4">
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
                            </div> -->
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
</template>

<script>

import $ from 'jquery'

export default {
    props:{
        id: String, 
        fName: String, 
        lName: String, 
        email: String, 
        contactNo: String
    },
    methods:{
        async submit(event){
            event.preventDefault()
            try {
                this.$fire.firestore.collection("users").doc(this.id).update({
                    fName: this.fName.trim(),
                    lName: this.lName.trim(), 
                    email: this.email.trim(),
                    contactNo: this.contactNo.trim() 
                })

                this.$fire.auth.currentUser.updateEmail(this.email.trim())
                .then(() => {
               
                });
                console.log(this.fName)
                this.$router.app.refresh()
                $('#editProfile').hide()
                $('.modal-backdrop').remove();
                 
            } catch (e) {
                alert(e)
            }
        }
    }
}
</script>

<style scoped>
</style>