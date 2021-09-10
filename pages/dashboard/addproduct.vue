@ -0,0 +1,119 @@
<template>
    <div>
        <div class="dashboard-header text-center text-uppercase py-2 regular">
            Dashboard
        </div>
        <div class="container-fluid ">
            <div class="row py-3">
                <DashboardNavbar />
                <div class="col-10">
                    <div class="shadow container-fluid data-bg p-3 rounded-3">
                        <div class="section-title medium text-uppercase py-3">
                            Add Product
                        </div>
                        <div id="content" class="container-fluid d-flex flex-column regular text-uppercase p-5 w-100 bg justify-content-center">
                            <form ref="productForm" action="" @submit="submit">
                                <div class="row mt-3 pt-2 d-flex">
                                    <div class="col-sm-2">
                                        <p>Product Name</p>
                                    </div>
                                    <div class="col-sm-4">
                                        <input v-model="name" class="w-75 border border-secondary" type="text" id="productName" required>
                                    </div>
                                    <div class="col-sm-6"></div>
                                </div>
                                <div class="row mt-3 pt-2">
                                    <div class="col-sm-2">
                                        <p>Product Description</p>
                                    </div>
                                    <div class="col-sm-5">
                                        <textarea v-model="description" id="productDesc" class="form-control border border-secondary" rows="3" required></textarea>
                                    </div>
                                    <div class="col-sm-5"></div>
                                </div>
                                <div class="row mt-3 pt-2">
                                    <div class="col-sm-2">
                                        <p>Length</p>
                                    </div>
                                    <div class="col-sm-4">
                                        <input v-model="length" class="w-75 border border-secondary" type="number" id="length" required>
                                    </div>
                                    <div class="col-sm-6"></div>
                                </div>
                                <div class="row mt-3 pt-2">
                                    <div class="col-sm-2">
                                        <p>Width</p>
                                    </div>
                                    <div class="col-sm-4">
                                        <input v-model="width" class="w-75 border border-secondary" type="number" id="width" required>
                                    </div>
                                    <div class="col-sm-6"></div>
                                </div>
                                <div class="row mt-3 pt-2">
                                    <div class="col-sm-2">
                                        <p>Height</p>
                                    </div>
                                    <div class="col-sm-4">
                                        <input v-model="height" class="w-75 border border-secondary" type="number" id="height" required>
                                    </div>
                                    <div class="col-sm-6"></div>
                                </div>
                                <div class="row mt-3 pt-2">
                                    <div class="col-sm-2">
                                        <p>Weight (In ml)</p>
                                    </div>
                                    <div class="col-sm-4">
                                        <input v-model="weight" class="w-75 border border-secondary" type="number" id="weight" required>
                                    </div>
                                    <div class="col-sm-6"></div>
                                </div>
                                <div class="row mt-3 pt-2">
                                    <div class="col-sm-2">
                                        <p>Price</p>
                                    </div>
                                    <div class="col-sm-4">
                                        <input v-model="price" class="w-75 border border-secondary" type="number" id="price" required>
                                    </div>
                                    <div class="col-sm-6"></div>
                                </div>
                                <div class="row mt-3 pt-2">
                                    <div class="col-sm-2">
                                        <p>Quantity</p>
                                    </div>
                                    <div class="col-sm-4">
                                        <input v-model="qty" class="w-75 border border-secondary" type="number" id="quantity" required>
                                    </div>
                                    <div class="col-sm-6"></div>
                                </div>
                                <div class="row mt-3">
                                    <div class="col-sm-2">
                                        <p>Product Photo</p>
                                    </div>
                                    <div class="col-sm-4">
                                        <input type="file" id="formFile" accept="image/png, image/gif, image/jpeg">
                                    </div>
                                    <div class="col-sm-6"></div>
                                </div>
                                <div class="row mt-3 mb-4">
                                     <div class="col-sm-2">
                                        <p>Tag</p>
                                    </div>
                                    <div class="col-sm-4 dropdown">
                                        <button class="btn btn-secondary dropdown-toggle text-uppercase" type="button" id="tagDropDown" data-bs-toggle="dropdown" aria-expanded="false">
                                            Choose tag
                                        </button>
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><a class="dropdown-item" @click="changeTag('women')">Women</a></li>
                                            <li><a class="dropdown-item" @click="changeTag('men')">Men</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-4"></div>
                                    <div class="col-sm-4">
                                        <button type="submit" class="btn w-75 pt py-2 px-3 text-uppercase" id = "submit">Add product</button>
                                    </div>
                                    <div class="col-sm-4"></div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            name: '',
            description: '',
            weight: '',
            length: '',
            height: '',
            width: '',
            price: '',
            qty: '',
            tag: ''
        }
    },
    methods: {
        changeTag(string){
            let dropdown = document.getElementById('tagDropDown')
            dropdown.innerText = string.trim()
            this.tag = string.trim()
        },
        async submit(event){
            event.preventDefault()
            try {
                console.log(this.name)
                this.$fire.firestore.collection("products").add({
                    name: this.name, 
                    description: this.description,
                    weight: this.weight,
                    length: this.length,
                    height: this.height,
                    width: this.width,
                    price: this.price,
                    qty: this.qty,
                    tag: this.tag,
                    display: 'listed'
                })
                this.$router.push('/products')
            } catch (e) {
                alert(e)
            }
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

.section-title{
    font-size: 1.4rem;
    border-bottom: 1px solid;
    border-color: #312828;
}
</style>