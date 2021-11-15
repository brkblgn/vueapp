<template>
    <div class="page page-center">
      <div class="container-tight py-4">
        <div class="card card-md">
          <div class="card-body">
            <h2 class="card-title text-center mb-4">Create new account</h2>
            <div class="mb-3">
              <label class="form-label">Name</label>
              <input type="text" class="form-control" placeholder="Enter name" v-model="this.new_register.firstName">
            </div>
            <div class="mb-3">
              <label class="form-label">Email address</label>
              <input type="email" class="form-control" placeholder="Enter email" v-model="this.new_register.email">
            </div>
            <div class="mb-3">
              <label class="form-label">Password</label>
              <div class="input-group input-group-flat">
                <input type="password" class="form-control"  placeholder="Password"  autocomplete="off" v-model="this.new_register.password">
                <span class="input-group-text">
                  <a href="#" class="link-secondary" title="Show password" data-bs-toggle="tooltip"><!-- Download SVG icon from http://tabler-icons.io/i/eye -->
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><circle cx="12" cy="12" r="2" /><path d="M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7" /></svg>
                  </a>
                </span>
              </div>
            </div>
            <div class="mb-3">
              <label class="form-check">
                <input type="checkbox" class="form-check-input"/>
                <span class="form-check-label">Agree the <a href="./terms-of-service.html" tabindex="-1">terms and policy</a>.</span>
              </label>
            </div>
            <div class="form-footer">
              <button class="btn btn-primary w-100" @click ="this.register()" >Create new account</button>
            </div>
          </div>
        </div>
        <div  class="text-center text-muted mt-3" >
            Already have account?
        <router-link to="./auth">
         <a tabindex="-1">Sign in</a>
        </router-link>
        </div>
      </div>
    </div>
    <!-- Libs JS -->
    <!-- Tabler Core -->
</template>

<script>
 import axios from "axios"

export default {
  data() {
    return {
      new_register: {
        firstName: null,
        lastName: null,
        email: null,
        password: null,
      },
      isUser: false,
    };
  },
    methods: {
      register() {
        axios
        .post("http://bb.linux.com.tr:3000/register", { firstName: this.new_register.firstName, password: this.new_register.password, password2: this.new_register.password, email: this.new_register.email })
        .then((response) => {
        console.log(response);
        localStorage.setItem('token', response.data.token)
          this.$router.push('./')
        })
      },
  },
}
</script>
