<template>
    <div>
        <div class="prodreview-header text-center regular text-uppercase py-2">
            Product Review
        </div>
        <div class="container-fluid d-flex flex-column regular text-uppercase">
            <div class="message-box mt-4 mb-2 p-3 mx-auto w-75">
                <NuxtLink class="text-uppercase return regular" to="/orderdetail">
                Return To Order Details
                </NuxtLink>
                <div class="prodreview-mainmessage regular text-uppercase py-2">
                THANK YOU FOR SUPPORTING ANGEL’S SCENT.
                </div>
                <div class="prodreview-submessage regular">
                If you would like to review our products, please submit it here. We hope to hear from you!
                </div>
            </div>
            <div class="shadow prodreview-box mt-4 mb-2 p-3 mx-auto w-75">
                <table class="table text-center text-uppercase my-2">
                    <thead>
                        <tr>
                            <th scope="col">Product</th>
                            <th scope="col">Rating</th>
                            <th scope="col">Review</th>
                        </tr>
                    </thead>
                    <tbody class="regular">
                        <tr>
                            <td class="align-middle">
                                <div>Adelaide</div>
                                <div>10ML</div>
                            </td>
                            <td class="align-middle">
                                <div class="dropdown">
                                    <a class="btn btn-sm dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                                            Choose Rating
                                    </a>

                                    <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuLink">
                                        <li><a class="dropdown-item" href="#">1</a></li>
                                        <li><a class="dropdown-item" href="#">2</a></li>
                                        <li><a class="dropdown-item" href="#">3</a></li>
                                        <li><a class="dropdown-item" href="#">4</a></li>
                                        <li><a class="dropdown-item" href="#">5</a></li>
                                    </ul>
                                </div> 
                            </td>
                            <td>
                                <form class="px-4">
                                    <div class="row px-4 my-3 pb-1">
                                        <div class="col">
                                            <textarea class="form-control w-80" placeholder="" id="productReview" style="height: 130px" required></textarea>
                                        </div>
                                        <div class="d-flex justify-content-center">
                                            <button type="submit" class="shadow-sm text-uppercase btn btn-light submit-btn regular mt-2 px-4 py-2">Submit Review</button>
                                            </div>
                                    </div>
                                </form>
                            </td>
                        </tr>
                            </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

textarea{
    font-size: 0.8rem;
}

.return{
    color: #79808F;
    font-size: 0.8rem;
}

.prodreview-header{
    font-size: 1.5rem;
    border-style: solid;
    border-width: 2px 0;
    border-color: #E5E5E5;
}

.prodreview-mainmessage{
    font-size: 1.5rem;
}

.prodreview-submessage{
    font-size: 1rem;
}

.prodreview-box{
    background-color: #FAFAFA;
    border-radius: 10px;
}

.message-box{
    border-radius: 10px;
}

.submit-btn{
    background-color: #9F9A96;
    border-color: #9F9A96;
    color: white;
}

</style>
