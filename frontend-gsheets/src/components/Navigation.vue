<template>
    <div class="navigation" id="nav">
      <router-link to="/" exact>Home</router-link> |
      <router-link to="/web" exact>Website</router-link> | 
      <router-link to="/form" exact>Form</router-link> |
      <router-link to="/list-form" exact>List Form</router-link> |  
      <router-link to="/profile" exact>Profile</router-link>
    </div>
</template>

<script>
export default {
  name: 'Navigation'
}
</script>

<style scoped>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>