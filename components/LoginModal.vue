<template>
<div class="modal fade" id="login" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-md">
        <div class="modal-content">
        <div class="modal-header">
            <div class="d-flex m-auto">
                <!-- <div class="p-2 mx-3">Sign Up</div> -->
                <div class="p-2 mx-3">Log In</div>
            </div>
            <!-- <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> -->
        </div>
        <form ref="registerForm" action="" @submit="submit">
            <div class="modal-body text-capitalized">
                
                    <div class="input group">
                        <div class="mx-4">
                            <input v-model="email" class="form-format w-100 my-2 p-1" type="email" placeholder="Email" required>
                            <input v-model="password" class="form-format w-100 my-2 p-1" type="password" placeholder="Password" required>
                        </div>
                    </div>
                
            </div>
            <div class="modal-footer">
                <!-- <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button> -->
                <button type="submit" class="btn register-btn">Log in</button>
            </div>
        </form>
        </div>
    </div>
</div>

</template>

<script>

import $ from 'jquery'

export default {
    data(){
        return{
            email: '',
            password: ''
        }
    },
    methods: {
        async asyncdata( $fire, store ){
            // let docRef = $fire.firestore.collection('users').doc(store.state.user.uid)
            // console.log(docRef)
        },
        async submit(event) {
             event.preventDefault()

            // this.$store.commit('SET_NEWUSER', false)
            // this.$store.commit('SET_CONCESSIONAIRE', false)

            try {
                const result = await this.$fire.auth.signInWithEmailAndPassword(this.email, this.password)
                    console.log(result.user)
                    let docRef = this.$fire.firestore.collection('users').doc(result.user.uid)

                    docRef.get().then((doc) => {
                        if (doc.exists) {
                            console.log("Document data:", doc.data());
                            if(doc.data().role == "admin")
                                this.$store.commit('SET_ADMIN', true)
                        } else {
                            console.log("No such document!");
                        }
                    }).catch((error) => {
                        console.log("Error getting document:", error);
                    });

                    $("#login").hide()
                    $('.modal-backdrop').remove();
                    this.$router.push('/account')
            } catch (e) {
                alert(e)
            }
        }
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

.modal-backdrop {
   background-color: transparent;
}

form, input, label, p {
    color: black !important;
}

</style>