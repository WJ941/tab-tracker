<template>
  <div>
    <h1>Register</h1>
    <input 
    type="text"
    name="email"
    v-model="email"
    palceholder="email" />
    <br>
    <input 
    type="password"
    name="password"
    v-model="password"
    palceholder="password" />
    <br>
    <button type="submit"
            @click="register"> register</button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  name: 'register',
  data () {
    return {
      email: 'wangshaosen@gmail.com',
      password: 123456
    }
  },
  methods: {
    async register () {
      var res = await AuthenticationService.register({
        email: this.email,
        password: this.password})
      console.log(res.data)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
