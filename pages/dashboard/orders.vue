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
                            Orders
                        </div>
                        <div class="d-flex flex-column">
                            <div class="rounded dashboard-bg p-2 mt-4">
                                <div class="section-title medium text-uppercase py-3">
                                   Pending Orders
                                </div>
                                <div class="table-responsive">
                                    <table class="table align-middle table-hover text-center text-uppercase regular">
                                        <thead>
                                            <tr>
                                                <th scope="col">Order Number</th>
                                                <th scope="col">Date</th>
                                                <th scope="col">Payment Status</th>
                                                <th scope="col">Order Status</th>
                                                <th scope="col">Total</th>
                                                <th scope="col">Customer Name</th>
                                                <th scope="col">Choose Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>27006</td>
                                                <td>07-14-21</td>
                                                <td>Paid</td>
                                                <td>Shipping</td>
                                                <td>₱70.00</td>
                                                <td>Choi Soobin</td>
                                                <td class="d-flex flex-column"> 
                                                    <div class="dropdown">
                                                        <a class="btn btn-sm dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                                            Choose Action
                                                        </a>

                                                        <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuLink">
                                                            <li><a class="dropdown-item" href="#">Mark as Paid</a></li>
                                                            <li><a class="dropdown-item" href="#">Mark as Shipping</a></li>
                                                            <li><a class="dropdown-item" href="#">Mark as Cancelled</a></li>
                                                        </ul>
                                                    </div>       
                                                    <button type="button" class="text-uppercase btn save-btn btn-outline-light mx-3 my-2">Save Changes</button>                               
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>270106</td>
                                                <td>07-13-21</td>
                                                <td>Paid</td>
                                                <td>Unfulfuilled</td>
                                                <td>₱70.00</td>
                                                <td>Choi Soobin</td>
                                                <td class="d-flex flex-column"> 
                                                    <div class="dropdown">
                                                        <a class="btn btn-sm dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                                            Choose Action
                                                        </a>

                                                        <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuLink">
                                                            <li><a class="dropdown-item" href="#">Mark as Paid</a></li>
                                                            <li><a class="dropdown-item" href="#">Mark as Shipping</a></li>
                                                            <li><a class="dropdown-item" href="#">Mark as Cancelled</a></li>
                                                        </ul>
                                                    </div>       
                                                    <button type="button" class="text-uppercase btn save-btn btn-outline-light mx-3 my-2">Save Changes</button>                               
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table> 
                                </div>
                                <div class="text-uppercase text-center medium table-link">
                                    <NuxtLink to="/dashboard/pendingorders"><a>show all pending orders</a></NuxtLink>
                                </div>
                            </div>
                            <div class="rounded dashboard-bg p-2 mt-4">
                                <div class="section-title medium text-uppercase py-3">
                                   Fulfilled Orders
                                </div>
                                <div class="table-responsive">
                                    <table class="table table-hover text-center text-uppercase regular">
                                        <thead>
                                            <tr>
                                                <th scope="col">Order Number</th>
                                                <th scope="col">Date</th>
                                                <th scope="col">Payment Status</th>
                                                <th scope="col">Order Status</th>
                                                <th scope="col">Total</th>
                                                <th scope="col">Customer Name</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>27006</td>
                                                <td>07-14-21</td>
                                                <td>Paid</td>
                                                <td>Shipping</td>
                                                <td>₱70.00</td>
                                                <td>Choi Soobin</td>
                                            </tr>
                                            <tr>
                                                <td>270106</td>
                                                <td>07-13-21</td>
                                                <td>Paid</td>
                                                <td>Unfulfuilled</td>
                                                <td>₱70.00</td>
                                                <td>Choi Soobin</td>
                                            </tr>
                                        </tbody>
                                    </table> 
                                </div>
                                <div class="text-uppercase text-center medium table-link">
                                    <NuxtLink to="/dashboard/fulfilledorders"><a href="/dashboard/fulfilledorders">show all fulfilled orders</a></NuxtLink>
                                </div>
                            </div>
                            <div class="rounded dashboard-bg p-2 mt-4">
                                <div class="section-title medium text-uppercase py-3">
                                   Cancelled Orders
                                </div>
                                <div class="table-responsive">
                                    <table class="table table-hover text-center text-uppercase regular">
                                        <thead>
                                            <tr>
                                                <th scope="col">Order Number</th>
                                                <th scope="col">Date</th>
                                                <th scope="col">Payment Status</th>
                                                <th scope="col">Order Status</th>
                                                <th scope="col">Total</th>
                                                <th scope="col">Customer Name</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>27006</td>
                                                <td>07-14-21</td>
                                                <td>Paid</td>
                                                <td>Shipping</td>
                                                <td>₱70.00</td>
                                                <td>Choi Soobin</td>
                                            </tr>
                                            <tr>
                                                <td>270106</td>
                                                <td>07-13-21</td>
                                                <td>Paid</td>
                                                <td>Unfulfuilled</td>
                                                <td>₱70.00</td>
                                                <td>Choi Soobin</td>
                                            </tr>
                                        </tbody>
                                    </table> 
                                </div>
                                <div class="text-uppercase text-center medium table-link">
                                    <NuxtLink to="/dashboard/cancelledorders"><a>show all cancelled orders</a></NuxtLink>
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

</style>
