<template>
  <div id="container">
    <div id="top-banner">
      <img
        src="../../public/assets/banner/e900a40750918c6ac267e946e051787f.jpg"
        alt=""
      />
    </div>
    <div class="header-languages">
      <a href="">CAREERS</a>
      <a href="">NEWS & OFFERS</a>
      <a href="">MY TICKETS</a>
      <router-link to="/login">ACCOUNT</router-link>
    </div>
    <div id="line">
      <div class="nav-content">
        <a class="CGV-logo" href="/"
          ><img src="../../public/assets/logo/cgvlogo.png" alt=""
        /></a>

        <ul id="nav-bar">
          <li class="movies">
            <a @click="displayList" href="#">MOVIES</a>
            <div v-if="isDisplay" class="coming-showing d-flex flex-column">
              <a href="/movies">Now showing</a>
              <a href="/comingsoon">Coming soon</a>
            </div>
          </li>
          <li class="theater"><a href="">THEATER</a></li>
          <li><a href="">MEMBERSHIP</a></li>
          <li><a href="">CULTUREPLEX</a></li>
        </ul>
        <div class="content-right">
          <img src="../../public/assets/logo/kenhcine.gif" alt="" />
          <img src="../../public/assets/logo/buy_tickets.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      isDisplay:false
    }
  },
  methods:{
    displayList () {
      this.isDisplay = !this.isDisplay
    }
  }
};
</script>

<style>
#line {
  position: relative;
  width: 100%;
  margin: 0 auto;
  background: url(../../public/assets/slide/bg-top.png) repeat-x scroll left
    bottom transparent;
  background-size: 10px 135px;
  height: 135px;
}
#container {
  text-align: center;
}
#top-banner {
  margin: auto;
}

.coming-showing {
  position: absolute;
  background-color: #2c2c2c;
  padding: 20px;
  border-radius: 5px;
}

#nav-bar .coming-showing > a {
  color: white;
}
#nav-bar .coming-showing > a:first-child {
  margin-bottom: 20px;
}
.header-languages a {
  text-decoration: none;
  color: rgb(73 73 73);
  margin: 0 15px;
}

#line > ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
#line > ul > li {
  margin: 30px 0;
}
#nav-bar {
  position: relative;
  list-style: none;
  display: flex;
  flex-direction: row;
  padding: 0;
}
#nav-bar > li {
  margin: 0 25px;
}
#nav-bar a {
  text-decoration: none;
  color: black;
  font-weight: bold;
  letter-spacing: 1px;
}
.nav-content {
  position: absolute;
  top: 28%;
  left: 24%;
  display: flex;
  align-items: center;
}
.CGV-logo {
  margin-bottom: 30px;
}
.content-right img {
  margin-bottom: 38px;
}
</style>
