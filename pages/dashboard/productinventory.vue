<template>
    <div class="dashboard-bg">
        <div class="dashboard-header text-center text-uppercase py-2 regular">
            Dashboard
        </div>
        <div class="container-fluid">
            <div class="row py-3">
                <DashboardNavbar />
                <div class="col-10">
                    <div class="shadow container-fluid data-bg p-3">
                        <div class="table-header medium text-uppercase py-3">
                            Product Inventory
                        </div>
                        <div class="d-flex flex-column">
                            <div class="">
                                <div class="table-responsive">
                                    <table class="table align-middle table-hover text-center text-uppercase regular">
                                        <thead>
                                            <tr>
                                                <th scope="col">Product</th>
                                                <th scope="col">Image</th>
                                                <th scope="col">Description</th>
                                                <th scope="col">Length</th>
                                                <th scope="col">Width</th>
                                                <th scope="col">Height</th>
                                                <th scope="col">Weight</th>
                                                <th scope="col">Price</th>
                                                <th scope="col">Qty</th>
                                                <th scope="col">Status</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr class="my-5">
                                                    <td><ins>ADELAIDE</ins></td>
                                                    <td>
                                                        <div class="image d-flex">
                                                            <img src="~/assets/product.jpg" class="mx-auto" style="width: 7.5rem;">
                                                        </div>
                                                    </td>
                                                    <td class="text-truncate" style="max-width: 1rem;">SMELLS LIKE BURBERRY OR SMTH</td>
                                                    <td>15’’</td>
                                                    <td>11’’</td>
                                                    <td>12’’</td>
                                                    <td>10 ML</td>
                                                    <td>₱60.00</td>
                                                    <td>15</td>
                                                    <td>Listed</td>
                                                    <td>
                                                        <div class="d-flex flex-column justify-content-center">
                                                           <button class="btn mb-2 text-uppercase btn save-btn btn-outline-light">Edit</button>
                                                            <button class="btn mb-2 text-uppercase btn save-btn btn-outline-light">Delete</button>
                                                        </div>
                                                        
                                                    </td>
                                            </tr>
                                           
                                            <tr class="my-5">
                                                    <td><ins>ADELAIDE</ins></td>
                                                    <td>
                                                        <div class="image d-flex">
                                                            <img src="~/assets/product.jpg" class="mx-auto" style="width: 7.5rem;">
                                                        </div>
                                                    </td>
                                                    <td class="text-truncate" style="max-width: 1rem;">SMELLS LIKE THE SONG OF THE YEAR</td>
                                                    <td>15’’</td>
                                                    <td>11’’</td>
                                                    <td>12’’</td>
                                                    <td>50 ML</td>
                                                    <td>₱250.00</td>
                                                    <td>15</td>
                                                    <td>Hidden</td>
                                                    <td>
                                                        <div class="d-flex flex-column justify-content-center">
                                                           <button class="btn mb-2 text-uppercase save-btn btn-outline-light">Edit</button>
                                                            <button class="btn mb-2 text-uppercase save-btn btn-outline-light">Delete</button>
                                                        </div>
                                                        
                                                    </td>
                                            </tr>
                                        </tbody>
                                    </table> 
                                </div>
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
.btn{
    background-color: #9F9A96;
    color: white;
}
.account-list, .account-info{
    background-color: white;
    border-radius: 10px;
}

.dashboard-bg{
    background-color: #FAFAFA;
}

.dashboard-header{
    font-size: 1.5rem;
    border-style: solid;
    border-width: 2px 0;
    background-color:white;
    border-color: #E5E5E5;
}

.table-header{
    font-size: 1.5rem;
    border-bottom: 1px solid;
    border-color: #312828;
}

.section-title{
    font-size: 1.4rem;
}

.section-body{
    color: #79808F;
    font-size: 0.8rem;
}

.data-bg{
    background-color: white;
    border-radius: 10px;
}

table{
    font-size: 0.85rem;
}

a{
    color: #79808F;
}
a:hover, a:focus, a:active {
      text-decoration: none;
      color: inherit;
}
button:hover{
    background-color: white;
    color: black;
}
</style>
