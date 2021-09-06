<template>
<div>
    <div id="contact"><button type="button" class="btn btn-info btn" data-toggle="modal" data-target="#contact-modal">Show Contact Form</button></div>
    <div id="contact-modal" class="modal fade" role="dialog">
        <div class="modal-dialog modal-xl ">
            <div class="modal-content">
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
                            <input class="w-75" type="text" id="productName" required>
                        </div>
                    </div>
                    <div class="row mt-3 pt-2">
                        <div class="col-sm-3">
                            <p>Product Description</p>
                        </div>
                        <div class="col-sm-9">
                            <textarea id="productDesc" class="form-control" rows="3"></textarea>
                        </div>
                    </div>
                    <div class="row mt-3 pt-2">
                        <div class="col-sm-3">
                            <p>Dimensions</p>
                        </div>
                        <div class="col-sm-9">
                            <input class="w-75" type="text" id="dimensions" required>
                        </div>
                    </div>
                    <div class="row mt-3 pt-2">
                        <div class="col-sm-3">
                            <p>Weight</p>
                        </div>
                        <div class="col-sm-9">
                            <input class="w-75" type="text" id="weight" required>
                        </div>
                    </div>
                    <div class="row mt-3 pt-2">
                        <div class="col-sm-3">
                            <p>Weight (In ml)</p>
                        </div>
                        <div class="col-sm-9">
                            <input class="w-75" type="text" id="weight" required>
                        </div>
                    </div>
                    <div class="row mt-3 pt-2">
                        <div class="col-sm-3">
                            <p>Price</p>
                        </div>
                        <div class="col-sm-9">
                            <input class="w-75" type="text" id="price" required>
                        </div>
                    </div>
                    <div class="row mt-3 pt-2">
                        <div class="col-sm-3">
                            <p>Quantity</p>
                        </div>
                        <div class="col-sm-9">
                            <input class="w-75" type="text" id="quantity" required>
                        </div>
                    </div>
                    <div class="row mt-3 pt-2">
                        <div class="col-sm-3">
                            <p>Status</p>
                        </div>
                        <div class="col-sm-3">
                            <select class="form-select">
                                <option value="1" selected>LISTED</option>
                                <option value="2">NOT LISTED</option>
                            </select>
                        </div>
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
</style>