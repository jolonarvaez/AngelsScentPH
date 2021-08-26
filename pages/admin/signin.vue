<template>
<div class="container py-4 mb-2 d-flex justify-content-center">
    <div class="col-12 col-md-6 d-flex flex-column align-items-center">
      <div class="w-100 text-center text-uppercase display-5 mb-5 pb-3 border-bottom border-2 border-dark medium">
        Admin Sign in
      </div>
      <form ref="registerForm" action="" @submit="submit" class="w-100 d-flex flex-column align-items-center">

        <div class="mb-3 w-75">
          <input v-model="email" type="email" placeholder="Email" class="form-control" required>
        </div>

        <div class="mb-3 w-75">
          <input v-model="password" type="password" placeholder="Password" class="form-control" required>
        </div>

        <input type="submit" value="Sign in" class="btn btn-primary w-50 align-self-center">
      </form>

    </div>
  </div>
    
</template>

<script>
export default {
    
    data(){
        return{
            email: '',
            password: ''
        }
    },
    layout: "empty",
    methods: {
        async submit(event) {
        event.preventDefault()

        this.$store.commit('SET_NEWUSER', false)
        this.$store.commit('SET_ADMIN', true)

        try {
          const result = await this.$fire.auth.signInWithEmailAndPassword(this.email, this.password)
          this.$router.push('/dashboard/orders')
        } catch (e) {
          alert(e)
        }
      }
    }

}
</script>

<style scoped>

</style>
