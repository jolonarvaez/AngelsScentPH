<template>

<div class="modal fade" id="signup" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
        <div class="modal-header">
            <div class="d-flex m-auto">
                <div class="p-2 mx-3">Sign Up</div>
                <!-- <div class="p-2 mx-3">Log In</div> -->
            </div>
        </div>
        <form ref="registerForm" action="" @submit="submit">
            <div class="modal-body text-capitalized">
                <div class="input group">
                    <div class="row">
                        <div class="col">
                            <div class="d-flex justify-content-between">
                                <input class="form-format me-2 p-1" v-model="fName" type="text" placeholder="First Name" required>
                                <input class="form-format ms-2 p-1" v-model="lName" type="text" placeholder="Last Name" required>
                            </div>
                            <!-- <div class="d-flex">
                                <p class="col validation-text mb-2">First name required</p>
                                <p class="col validation-text ms-3 mb-2">Last name required</p>
                            </div> -->
                            <input class="form-format w-100 my-2 p-1" v-model="contactNo" type="number" placeholder="Contact Number" required>
                            <!-- <p class="col validation-text mb-2">Contact number required</p> -->
                            <input class="form-format w-100 my-2 p-1" v-model="email" type="text" placeholder="Email" requried>
                            <!-- <p class="col validation-text mb-2">E-mail required</p> -->
                            <input class="form-format w-100 my-2 p-1" v-model="password" type="password" placeholder="Password" required>
                            <!-- <p class="col validation-text mb-2">Invalid password</p> -->
                            <!-- <input class="form-format w-100 my-2 p-1" type="password" placeholder="Confirm Password"> -->
                            <!-- <p class="col validation-text mb-2">Password does not match</p> -->
                        </div>
                        <div class="col">
                            <input class="form-format w-100 mb-2 p-1" v-model="streetAdd" type="text" placeholder="Street Address" required>
                            <input class="form-format w-100 my-2 p-1" type="text" placeholder="Street Address 2">
                            <!-- <p class="col validation-text mb-4">Street Address Required</p> -->
                            <input class="form-format w-100 my-2 p-1" v-model="city" type="text" placeholder="City" required>
                            <!-- <p class="col validation-text mb-2">City required</p> -->
                            <input class="form-format w-100 my-2 p-1" v-model="province" type="text" placeholder="Province" required>
                            <!-- <p class="col validation-text mb-2">Province requried</p> -->
                            <input class="form-format w-100 my-2 p-1" v-model="zipcode" type="number" placeholder="Zipcode" required>
                            <!-- <p class="col validation-text mb-2">Zipcode required</p> -->
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                <button type="submit" class="btn register-btn">Register</button>
            </div>
        </form>
        </div>
    </div>
</div>
</template>

<script>

export default {
    data(){
        return{
            email: '',
            contactNo: '',
            password:'',
            fName: '',
            lName: '',
            streetAdd: '',
            city: '',
            province: '',
            zipcode: ''
        }
    },
    methods: {
       async createUserDocument(uid, email, fName, lName, contactNo, streetAdd, city, province, zipcode) {
            try {
                await this.$fire.firestore.collection("users").doc(uid).set({
                email, fName, lName, contactNo, streetAdd, city, province, zipcode
                })
            } catch (e) {
                alert(e)
            }
        },
        async submit(event) {
            event.preventDefault()
            
            this.$store.commit('SET_NEWUSER', true)
            // this.$store.commit('SET_CONCESSIONAIRE', false)

            try {
                const result = await this.$fire.auth.createUserWithEmailAndPassword(this.email, this.password)

                await this.createUserDocument(result.user.uid, result.user.email, this.fName, this.lName, this.contactNo, this.streetAdd, this.city, this.province, this.zipcode)
                $("#signup").hide()
                $('.modal-backdrop').remove();
                this.$router.push('/account/info')


            } catch (e) {
                alert(e)
            }
        },
    }
}

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

form, input, label, p {
    color: black !important;
}
</style>