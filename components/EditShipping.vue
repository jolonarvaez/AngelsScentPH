<template>
<div class="modal fade" id="editShipping" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-body">

                <div class="container-fluid border-bottom d-flex justify-content-center medium">
                    <p class="text-uppercase">New Shipping Information</p>
                </div>

                <div class="container-fluid border-bottom d-flex justify-content-center">
                    <div class="edit-container my-1">
                        <div class="row-md-12 mt-4 mb-2">
                            <input v-model="streetAdd" type="text" class="form-control form-format" id="text" placeholder="Street Address" required>
                        </div>

                        <div class="row-md-12 my-4">
                            <input v-model="city" type="text" class="form-control form-format" id="text" placeholder="City" required>
                        </div>

                        <div class="row-md-12 my-4">
                            <input v-model="province" type="text" class="form-control form-format" id="text" placeholder="Province" required>
                        </div>

                        <div class="row-md-12 my-4">
                            <input v-model="zipcode" type="text" class="form-control form-format" id="text" placeholder="Zipcode" required>
                        </div>
                    </div>

                    
                </div>

                <div class="container-fluid d-flex justify-content-center my-4">
                    <div class="row btn-container">
                        <div class="col d-grid gap-2">
                            <button type="button" @click="saveChanges()" class="btn btn-secondary btn-format">Save</button>
                        </div>

                        <div class="col d-grid gap-2">
                            <button type="button" class="btn btn-secondary btn-format" data-bs-dismiss="modal">Discard</button>
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
    props:{
        id: String, 
        streetAdd: String,
        city: String, 
        province: String,
        zipcode: String 
    },
    methods:{
        saveChanges(){
             try {
                this.$fire.firestore.collection("users").doc(this.id).update({
                    streetAdd: this.streetAdd.trim(),
                    city: this.city.trim(), 
                    province: this.province.trim(),
                    zipcode: this.zipcode.trim() 
                })
                 
            } catch (e) {
                alert(e)
            }
            window.location.reload()
        }
    }
}
</script>

<style scoped>
</style>