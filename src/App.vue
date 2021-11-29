<template>
  <div id="nav">
    123
    <router-link to="/">Home</router-link> |
    <router-link to="/page2">Page2</router-link>
  </div>
  <router-view/>
</template>

<style lang="scss">
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
