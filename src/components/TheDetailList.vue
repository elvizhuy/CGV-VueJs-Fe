<template>
    <div class="container">
        <div class="main-section-info">
    <ul>
      <li><a class="theater" href="">cgv theater</a></li>
      <li><a class="now-sh" href="">now showing</a></li>
      <li><a class="special" href="">cgv special</a></li>
      <li><a class="event" href="">cgv gift</a></li>
      <li><a class="ticket" href="">my ticket info</a></li>
      <li><a class="dc" href="">discount info</a></li>
      <li><a class="login" href="">create account quick</a></li>
    </ul>
  </div>
  <hr class="me-auto ms-auto mt-0" width="80%"/>
  <hr class="me-auto ms-auto mt-0" width="80%"/> 
    </div>
 
</template>

<script>
export default {};
</script>

<style>
.main-section-info {
  background: white;
  display: flex;
  justify-content: center;
}
.main-section-info ul {
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: row;
}
.main-section-info li {
  margin: 0 10px;
}
.main-section-info ul li a {
  background-image: url(../../public/assets/slide/bg-header-transparent-home\ 2.png);
  display: block;
  height: 90px;
  text-indent: -9999px;
  width: 139px;
}
.main-section-info ul li a.theater {
  background-position: 10px 0;
}
.main-section-info ul li a.now-sh {
  background-position: -140px 0;
}
.main-section-info ul li a.special {
  background-position: -280px 0;
}
.main-section-info ul li a.event {
  background-position: -420px 0;
}
.main-section-info ul li a.ticket {
  background-position: -560px 0;
}
.main-section-info ul li a.dc {
  background-position: -700px 0;
}
.main-section-info ul li a.login {
  background-position: -830px 0;
}

</style>
