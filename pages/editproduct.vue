<template>
<div>
    <div id="contact"><button type="button" class="btn btn-info btn" data-toggle="modal" data-target="#contact-modal">Show Contact Form</button></div>
    <div id="contact-modal" class="modal fade" role="dialog">
        <div class="modal-dialog modal-xl round">
            <div class="modal-content round">
                <div class="container-fluid d-flex flex-column regular text-uppercase p-5 w-100 bg">
                    <div class="row">
                        <div class="col-sm-3">
                            <p>Product Photo</p>
                        </div>
                        <div class="col-sm-9">
                            <input type="file" id="formFile" accept="image/png, image/gif, image/jpeg" required>
                        </div>
                    </div>
                    <div class="row mt-3 pt-2">
                        <div class="col-sm-3">
                            <p>Product Name</p>
                        </div>
                        <div class="col-sm-9">
                            <input class="w-75 border border-secondary" type="text" id="productName" required>
                        </div>
                    </div>
                    <div class="row mt-3 pt-2">
                        <div class="col-sm-3">
                            <p>Product Description</p>
                        </div>
                        <div class="col-sm-9">
                            <textarea id="productDesc" class="form-control border border-secondary" rows="3"></textarea>
                        </div>
                    </div>
                    <div class="row mt-3 pt-2">
                        <div class="col-sm-3">
                            <p>Length</p>
                        </div>
                        <div class="col-sm-9">
                            <input class="w-75 border border-secondary" type="text" id="length" required>
                        </div>
                    </div>
                    <div class="row mt-3 pt-2">
                        <div class="col-sm-3">
                            <p>Width</p>
                        </div>
                        <div class="col-sm-9">
                            <input class="w-75 border border-secondary" type="text" id="width" required>
                        </div>
                    </div>
                    <div class="row mt-3 pt-2">
                        <div class="col-sm-3">
                            <p>Height</p>
                        </div>
                        <div class="col-sm-9">
                            <input class="w-75 border border-secondary" type="text" id="height" required>
                        </div>
                    </div>
                    <div class="row mt-3 pt-2">
                        <div class="col-sm-3">
                            <p>Weight (In ml)</p>
                        </div>
                        <div class="col-sm-9">
                            <input class="w-75 border border-secondary" type="text" id="weight" required>
                        </div>
                    </div>
                    <div class="row mt-3 pt-2">
                        <div class="col-sm-3">
                            <p>Price</p>
                        </div>
                        <div class="col-sm-9">
                            <input class="w-75 border border-secondary" type="text" id="price" required>
                        </div>
                    </div>
                    <div class="row mt-3 pt-2">
                        <div class="col-sm-3">
                            <p>Quantity</p>
                        </div>
                        <div class="col-sm-9">
                            <input class="w-75 border border-secondary" type="text" id="quantity" required>
                        </div>
                    </div>
                    <div class="row mt-3 pt-2">
                        <div class="col-sm-3">
                            <p>Status</p>
                        </div>
                        <div class="col-sm-3">
                            <select class="form-select border border-secondary">
                                <option value="1" selected>LISTED</option>
                                <option value="2">NOT LISTED</option>
                            </select>
                        </div>
                    </div>
                    <div class="row mt-3 pt-5 w-100 d-flex justify-content-center">
                        <button type="submit" class="btn btn-lg btn-block w-50 save-btn btn-outline-light text-uppercase" id = "submit">Save Changes</button>
                    </div>
                    
                </div>
            </div>
	    </div>
    </div>
</div>
</template>

<style scoped>
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