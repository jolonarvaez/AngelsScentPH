<template>
<div>
    <div :id="'edit-modal'+id" class="modal fade" role="dialog">
        <div class="modal-dialog modal-xl round">
            <div class="modal-content round">
                <form @submit="submit">
                    <div class="container-fluid text-start d-flex flex-column regular text-uppercase p-5 w-100 bg">
                        <div class="row">
                            <div class="col-sm-3">
                                <p>Product Photo</p>
                            </div>
                            <div class="col-sm-9">
                                <input type="file" id="formFile" accept="image/png, image/gif, image/jpeg">
                            </div>
                        </div>
                        <div class="row mt-3 pt-2">
                            <div class="col-sm-3">
                                <p>Product Name</p>
                            </div>
                            <div class="col-sm-9">
                                <input v-model="name" class="w-75 border border-secondary" type="text" id="productName" required>
                            </div>
                        </div>
                        <div class="row mt-3 pt-2">
                            <div class="col-sm-3">
                                <p>Product Description</p>
                            </div>
                            <div class="col-sm-9">
                                <textarea v-model="description" id="productDesc" class="form-control border border-secondary" rows="3"></textarea>
                            </div>
                        </div>
                        <div class="row mt-3 pt-2">
                            <div class="col-sm-3">
                                <p>Length</p>
                            </div>
                            <div class="col-sm-9">
                                <input v-model="length" class="w-75 border border-secondary" type="number" id="length" required>
                            </div>
                        </div>
                        <div class="row mt-3 pt-2">
                            <div class="col-sm-3">
                                <p>Width</p>
                            </div>
                            <div class="col-sm-9">
                                <input v-model="width" class="w-75 border border-secondary" type="number" id="width" required>
                            </div>
                        </div>
                        <div class="row mt-3 pt-2">
                            <div class="col-sm-3">
                                <p>Height</p>
                            </div>
                            <div class="col-sm-9">
                                <input v-model="height" class="w-75 border border-secondary" type="number" id="height" required>
                            </div>
                        </div>
                        <div class="row mt-3 pt-2">
                            <div class="col-sm-3">
                                <p>Weight (In ml)</p>
                            </div>
                            <div class="col-sm-9">
                                <input v-model="weight" class="w-75 border border-secondary" type="number" id="weight" required>
                            </div>
                        </div>
                        <div class="row mt-3 pt-2">
                            <div class="col-sm-3">
                                <p>Price</p>
                            </div>
                            <div class="col-sm-9">
                                <input v-model="price" class="w-75 border border-secondary" type="number" id="price" required>
                            </div>
                        </div>
                        <div class="row mt-3 pt-2">
                            <div class="col-sm-3">
                                <p>Quantity</p>
                            </div>
                            <div class="col-sm-9">
                                <input v-model="qty" class="w-75 border border-secondary" type="number" id="quantity" required>
                            </div>
                        </div>
                        <div class="row mt-3 pt-2">
                            <div class="col-sm-3">
                                <p>Status</p>
                            </div>
                            <div v-if="display == 'listed'" class="col-sm-3">
                                <select id="displayoption" @click="changeSelected()" class="form-select border border-secondary">
                                    <option value="1" selected >LISTED</option>
                                    <option value="2" >HIDDEN</option>
                                </select>
                            </div>
                            <div v-if="display == 'hidden'" class="col-sm-3">
                                <select id="displayoption" class="form-select border border-secondary">
                                    <option value="1" >LISTED</option>
                                    <option value="2" selected >HIDDEN</option>
                                </select>
                            </div>
                        </div>
                        <div class="row mt-3 pt-2">
                            <div class="col-sm-3">
                                <p>Tag</p>
                            </div>
                            <div class="col-sm-3 dropdown">
                                <button class="btn btn-secondary dropdown-toggle text-uppercase" type="button" id="tagDropDown" data-bs-toggle="dropdown" aria-expanded="false">
                                    Choose tag
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a class="dropdown-item" @click="changeTag('women')">Women</a></li>
                                    <li><a class="dropdown-item" @click="changeTag('men')">Men</a></li>
                                </ul>
                            </div>
                        </div>
                        
                        <div class="row mt-3 pt-5 w-100 d-flex justify-content-center">
                            <button type="submit" class="btn btn-lg btn-block w-50 save-btn btn-outline-light text-uppercase" id = "submit">Save Changes</button>
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
        name: String, 
        description: String, 
        length: Number, 
        width: Number, 
        height: Number,
        weight: Number, 
        price: Number, 
        qty: Number, 
        display: String
    },
    methods:{
        async submit(event){
            event.preventDefault()

            var displayStatus
            var e = document.getElementById("displayoption");
            var num = e.options[e.selectedIndex].value;
            if(num == 1)
                displayStatus = 'listed'
            else
                displayStatus = 'hidden'
            
            try {
                this.$fire.firestore.collection("products").doc(this.id).update({
                    name: this.name.trim(), 
                    description: this.description.trim(),
                    length: this.length, 
                    width: this.width,  
                    height: this.height,
                    weight: this.weight, 
                    price: this.price, 
                    qty: this.qty, 
                    tag: this.tag,
                    display: displayStatus
                })
                
            } catch (e) {
                alert(e)
            }
            this.$router.app.refresh()         
        },
        changeSelected(){
        //    var e = document.getElementById("displayoption");
        //      var strUser = e.options[e.selectedIndex].value;
        //      console.log(strUser)
        }
    }
}

</script>

<style scoped>
.btn{
    background-color: #9F9A96;
    color: white;
    border-radius: 8px;
    font-weight: bold;

}
.bg{
    background-color: #FAFAFA;
}
#submit{
    background-color: #9F9A96;
    color: white;
    border-radius: 8px;
}
.round{
    border-radius: 30px;
}
</style>