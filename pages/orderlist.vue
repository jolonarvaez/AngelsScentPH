<template>
    <div class="h-100">
        <div class="account-header text-center text-uppercase py-2 regular">
            Account
        </div>
        <div class="container-fluid account-bg">
            <div class="row py-3">
                <div class="col-xs mx-4">
                    <ul class="nav flex-column account-info shadow text-uppercase medium text-right py-2">
                        <li class="nav-item">
                            <a class="nav-link" href="/account">Account <br>Information</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/orderlist">Order List</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Log Out</a>
                        </li>
                    </ul>
                </div>

                <div class="col-md">
                    <div class="regular m-auto">
                        <div class="d-flex flex-column mx-3">
                             <div class="shadow account-info p-3 mb-4">
                                <div class="section-title medium text-uppercase mb-3">Order List</div>
                                <div class="container-fluid my-2 account-section">
                                    <div class="table-responsive">
                                        <table class="table table-hover text-center text-uppercase">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Order Num</th>
                                                    <th scope="col">Date</th>
                                                    <th scope="col">Payment Status</th>
                                                    <th scope="col">Order Status</th>
                                                    <th scope="col">Total</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>120600</td>
                                                    <td>07-15-21</td>
                                                    <td>PAID</td>
                                                    <td>UNFULFILLED</td>
                                                    <td>P310.00</td>
                                                </tr>
                                                <tr>
                                                    <td>030819</td>
                                                    <td>07-13-21</td>
                                                    <td>PAID</td>
                                                    <td>FULFILLED</td>
                                                    <td>P250.00</td>
                                                </tr>
                                                <tr>
                                                    <td>270006</td>
                                                    <td>07-14-21</td>
                                                    <td>PAID</td>
                                                    <td>SHIPPING</td>
                                                    <td>P60.00</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div class="shadow account-info p-3 mb-4">
                                <div class="medium text-uppercase mb-2">Shipping Information</div>
                                <div class="container-fluid d-flex flex-column">
                                    <div class="section-body text-uppercase">
                                        CHOI SOOBIN
                                    </div>
                                    <div class="section-body text-uppercase w-50">
                                        1234 MAGIC ST. 9 QUARTER PLATFORM AND SMTH CROWN PUMA 0X1 LOVESONG IF 
                                        YOUR ADRESS SMTH IS TOO LONG.... HONESTLY 3 LINES WORTH SMTH
                                    </div>
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

.account-bg{
    background-color: #FAFAFA;
}

.account-list, .account-info{
    background-color: white;
    border-radius: 10px;
}

.account-header{
    font-size: 1.5rem;
    border-style: solid;
    border-width: 2px 0;
    border-color: #E5E5E5;
}

.section-title{
    font-size: 1.5rem;
}

.section-body{
    color: #79808F;
    font-size: 0.8rem;
}

.nav-link{
    color: #79808F;
}

.active{
    color: black;
}

</style>
