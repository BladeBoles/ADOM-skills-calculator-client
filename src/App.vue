<template>
  <div id="app">
    <div id="nav">
      <router-link id="router-home" to="/skill-calculator"
        >Skill Calculator</router-link
      >
      |
      <router-link id="router-about" to="/skill-picker"
        >Skill Picker
      </router-link>
      <span> |</span>
      <router-link id="router-about" to="/new-skill-picker"
        >New Skill Picker</router-link
      >
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#router-home {
  padding-right: 20px;
}

#router-about {
  padding-left: 20px;
}

#nav {
  padding: 30px;
  display: flex;
  justify-content: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

span {
  padding-left: 20px;
}
</style>
