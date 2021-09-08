<template>
    <div>
        <div class="dashboard-header text-center text-uppercase py-2 regular">
            Dashboard
        </div>
        <div class="container-fluid ">
            <div class="row py-3">
                <DashboardNavbar />
                <div class="col-10">
                    <div class="shadow container-fluid data-bg float-left p-3 w-75">
                        <div class="table-header medium text-uppercase py-3">
                                Add product
                        </div>
                        <div id="content" class="container-fluid d-flex flex-column regular text-uppercase p-3 w-100 bg justify-content-center ">
                            <div class="row mt-3 pt-2 d-flex">
                                <div class="col-sm-2">
                                    <p>Product Name</p>
                                </div>
                                <div class="col-sm-4">
                                    <input class="w-100 border border-secondary" type="text" id="productName" required>
                                </div>
                                <div class="col-sm-6"></div>
                            </div>
                            <div class="row mt-3 pt-2">
                                <div class="col-sm-2">
                                    <p>Product Description</p>
                                </div>
                                <div class="col-sm-5">
                                    <textarea id="productDesc" class="form-control border border-secondary" rows="3"></textarea>
                                </div>
                                <div class="col-sm-5"></div>
                            </div>
                            <div class="row mt-3 pt-2">
                                <div class="col-sm-2">
                                    <p>Length</p>
                                </div>
                                <div class="col-sm-4">
                                    <input class="w-100 border border-secondary" type="text" id="length" required>
                                </div>
                                <div class="col-sm-6"></div>
                            </div>
                            <div class="row mt-3 pt-2">
                                <div class="col-sm-2">
                                    <p>Width</p>
                                </div>
                                <div class="col-sm-4">
                                    <input class="w-100 border border-secondary" type="text" id="width" required>
                                </div>
                                <div class="col-sm-6"></div>
                            </div>
                            <div class="row mt-3 pt-2">
                                <div class="col-sm-2">
                                    <p>Height</p>
                                </div>
                                <div class="col-sm-4">
                                    <input class="w-100 border border-secondary" type="text" id="height" required>
                                </div>
                                <div class="col-sm-6"></div>
                            </div>
                            <div class="row mt-3 pt-2">
                                <div class="col-sm-2">
                                    <p>Weight (In ml)</p>
                                </div>
                                <div class="col-sm-4">
                                    <input class="w-100 border border-secondary" type="text" id="weight" required>
                                </div>
                                <div class="col-sm-6"></div>
                            </div>
                            <div class="row mt-3 pt-2">
                                <div class="col-sm-2">
                                    <p>Price</p>
                                </div>
                                <div class="col-sm-4">
                                    <input class="w-100 border border-secondary" type="text" id="price" required>
                                </div>
                                <div class="col-sm-6"></div>
                            </div>
                            <div class="row mt-3 pt-2">
                                <div class="col-sm-2">
                                    <p>Quantity</p>
                                </div>
                                <div class="col-sm-4">
                                    <input class="w-100 border border-secondary" type="text" id="quantity" required>
                                </div>
                                <div class="col-sm-6"></div>
                            </div>
                            <div class="row">
                                <div class="col-sm-2">
                                    <p>Product Photo</p>
                                </div>
                                <div class="col-sm-4">
                                    <input type="file" id="formFile" accept="image/png, image/gif, image/jpeg" required>
                                </div>
                                <div class="col-sm-6"></div>
                            </div>
                            <div class="row">
                                <div class="col-sm-4"></div>
                                <div class="col-sm-4 d-flex justify-content-center my-5">
                                    <button type="submit" class="btn w-75 pt py-2 px-3 save-btn btn-outline-light text-uppercase" id = "submit">Add product</button>
                                    
                                </div>
                                <div class="col-sm-4"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.btn{
    background-color: #9F9A96;
    color: white;
    border-radius: 8px;
}
</style>