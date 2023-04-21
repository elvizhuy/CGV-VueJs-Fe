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
      <router-link :to="{name:'app.login'}">ACCOUNT</router-link>
    </div>
    <div id="line">
      <div class="nav-content">
        <router-link class="CGV-logo" :to="{name:'app.home'}"
          ><img src="../../public/assets/logo/cgvlogo.png" alt=""
        /></router-link>

        <ul id="nav-bar">
          <li class="movies">
            <a @mouseover="displayList" href="#">MOVIES</a>
            <div v-if="isDisplay" class="coming-showing d-flex flex-column text-start" @mouseleave="hide">
              <router-link class="mb-3" :to="{name:'app.movies'}">Now showing</router-link>
              <router-link :to="{name:'app.coming-soon'}">Coming soon</router-link>
            </div>
          </li>
          <li class="theater"><a href="#" @mouseenter.stop="displayCinemaList">THEATER</a>
            <div v-if="isCinemaDisplay" id="theater" class="coming-showing d-flex flex-column text-start" @mouseleave="hide">
              <router-link :to="{name:'app.cinema'}">All cinemas</router-link>
              <router-link to="">Special Cinema</router-link>
              <router-link to="">3D Cinema</router-link>
            </div>
          </li>
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
      isDisplay:false,
      isCinemaDisplay:false
    }
  },
  methods:{
    move(event){
      console.log(event.clientX, event.clientY);
    },
    hide(){
      this.isCinemaDisplay = false
      this.isDisplay = false
    },
    displayList () {
      this.isDisplay = !this.isDisplay
      this.isCinemaDisplay = false
    },
    displayCinemaList () {
      this.isCinemaDisplay = !this.isCinemaDisplay
      this.isDisplay = false
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
#theater a:first-child{
  height: 40px;
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
