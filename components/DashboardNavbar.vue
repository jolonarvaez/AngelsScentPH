<template>
<div class="col-xs mx-4">
    <ul class="nav flex-column account-info shadow text-uppercase medium text-right">
        <ul class="nav flex-column account-info shadow text-uppercase medium text-right py-2 pl-3">
            <li class="nav-item">
                <span class="navbar-brand">Products</span>
            </li>
            <li class="nav-item light regular">
                <a class="nav-link" href="">Product <br>Inventory</a>
            </li>
            <li class="nav-item regular">
                <a class="nav-link" href="">Add Product</a>
            </li>
            <li class="nav-item">
                <span class="navbar-brand">Orders<br> and Sales</span>
            </li>
            <li class="nav-item regular">
                <a class="nav-link" href="/dashboard/orders">Orders</a>
            </li>
            <li class="nav-item regular">
                <a class="nav-link" href="/dashboard/sales">Sales Data</a>
            </li>  
            <li class="nav-item regular">
                <a class="nav-link" href="#">Log out</a>
            </li>
        </ul>
    </ul>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>

.nav-link, .navbar-brand{
    color: #79808F;
}

.active{
    color: black;
}

.account-list, .account-info{
    background-color: white;
    border-radius: 10px;
}
</style>