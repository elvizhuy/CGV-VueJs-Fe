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
        <a href="">ACCOUNT</a>
    </div>
    <div id="line">
      <ul>
        <li><hr /></li>
        <li><hr /></li>
        <li><hr /></li>
      </ul>
       <div class="nav-content">
        <a class="CGV-logo" href=""><img src="../../public/assets/logo/cgvlogo.png" alt="" /></a>
      
      <ul id="nav-bar">
        <li><a href="">MOVIES</a></li>
        <li><a href="">THEATER</a></li>
        <li><a href="">MEMBERSHIP</a></li>
        <li><a href="">CULTUREPLEX</a></li>
        <li><a href=""></a></li>
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
export default {};
</script>

<style>
#container{
    text-align: center;
}
#top-banner {
  margin: auto;
}
.header-languages a{
 text-decoration: none;
 color: rgb(73 73 73);
 margin: 0 15px;
}
#line {
    position: relative;
  border-top: 7px solid red;
  border-bottom: 7px solid red;
}
hr {
  background-color: #999999;
  height: 1px;
}
#line>ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
#line>ul>li {
  margin: 30px 0;
}
#nav-bar {
  list-style: none;
  display: flex;
  flex-direction: row;
  padding: 0;
}
#nav-bar>li {
  margin: 0 25px;
}
#nav-bar a {
  text-decoration: none;
  color: black;
  font-weight: bold;
  letter-spacing: 1px;
}
.nav-content{
    position: absolute;
    top: 22%;
    left: 24%;
    display: flex;
    align-items: center;
    
}
.CGV-logo{
  margin-bottom: 30px;
}
.content-right img {
    margin-bottom: 38px;
}

</style>
