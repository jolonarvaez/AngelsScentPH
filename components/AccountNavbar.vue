<template>
<div class="col-2">
    <ul class="nav flex-column account-info shadow text-uppercase medium text-end py-2">
        <li class="nav-item">
            <a class="nav-link" aria-current="page" href="/account">Account <br>Information</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="/orderlist">Order List</a>
        </li>
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