<template>
  <helloworld>

    <nav class="container">

      <a href="/"><img alt="Contatos" id="logo"
          src="https://play-lh.googleusercontent.com/D-haUsSx771Pt4brCyFEJUNKZaC8NUsD2bMB-ZL_yE2LnYdmt3YbgfZwDDM9B-wBHw"></a>

      <img v-on:click="opemMenu" alt="abrir menu" id="menu-button"
        src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/menu.svg">

      <div v-on:click="closeMenu" id="menu-overlay" v-if="menuActive"></div>

      <div id="menu-items" :class="{ active: menuActive }">

        <!-- <img alt="Contatos" id="logo"
          src="https://play-lh.googleusercontent.com/D-haUsSx771Pt4brCyFEJUNKZaC8NUsD2bMB-ZL_yE2LnYdmt3YbgfZwDDM9B-wBHw"> -->

        <ul>
          <li><a href="Home">
              <h1> <b>Home</b> </h1>
            </a></li>
          <li><a href="grupos">
              <h1> <b>Grupos</b> </h1>
            </a></li>
          <li><a href="novoContato">
              <h1> <b>novo Contato</b> </h1>
            </a></li>
          
        </ul>

      </div>
    </nav>
  </helloworld>
</template>

<script>

export default {
  name: 'HelloWorld',
  data() {
    return {
      menuActive: false,
    }
  },
  methods: {
    opemMenu: function () {
      this.menuActive = true;
    },
    closeMenu: function () {
      this.menuActive = false;
    }
  },
}
</script>

<style scoped>
helloworld {
  background-color: var(--color-background-nav);
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}

nav {
  display: flex;
  justify-content: space-between;
  height: 60px;
  align-items: center;
}

#logo {
  width: 60px;
}

#menu-button {
  width: 50px;
}

#menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 40%;
  height: 100vh;
  background-color: #000000;
  opacity: 0.8;
}

#menu-logo {
  width: 100px;
  margin-top: 30px;
  margin-bottom: 10px;
  width: 30;
}

#menu-items {
  position: fixed;
  top: 0;
  right: 0;
  background-color: var(--color-background-nav);
  width: 60%;
  height: 100vh;
  display: none;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

#menu-items.active {
  display: flex;
}

ul {
  list-style: none;
  text-align: center;
}

ul li {
  margin: 20px 0px;
}

ul li a {
  color: var(--color-text-light);
}

@media (min-width:700px) {

  #menu-button,
  #menu-logo,
  #menu-overlay {
    display: none;
  }

  #menu-items {
    display: flex;
    position: static;
    height: 60px;
    width: auto;
  }

  ul {
    display: flex;
    height: 60px;
    align-items: center;
  }

  ul li {
    margin: 0;
    margin-left: 20px;
  }
}
</style>