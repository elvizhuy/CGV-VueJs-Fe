<template>
  <div class="container d-flex justify-content-center align-items-center">
    <div class="log-in">
      <ul class="nav nav-pills">
        <li class="nav-item">
          <router-link class="login-signup" to="/login">LOGIN</router-link>
        </li>
        <li class="nav-item">
          <router-link class="login-signup" to="/signup">SIGN UP</router-link>
        </li>
      </ul>
      <form action="" method="post">
        <div class="form-detail">
          <label for="">Email</label>
          <input class="form-control" type="email" placeholder="enter email" />
        </div>

        <div class="form-detail">
          <label for="">Password</label>
          <input
            class="form-control"
            type="password"
            placeholder="enter password"
          />
        </div>
        <button type="submit" id="login-btn">LOGIN</button>
        <div class="forgot-pass mt-3">
          <router-link to="/">Forgot your password?</router-link>
        </div>
      </form>
    </div>

    <div class="login-carousel">
      <div
        id="carouselExampleAutoplaying"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="../../public/assets/login/1-en-2.jpg"
              class="d-block w-100"
              alt=""
            />
          </div>
          <div class="carousel-item">
            <img
              src="../../public/assets/login/2-en.jpg"
              class="d-block w-100"
              alt=""
            />
          </div>
          <div class="carousel-item">
            <img
              src="../../public/assets/login/3-en.jpg"
              class="d-block w-100"
              alt=""
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span id="prev-icon"><i class="fa-solid fa-angle-left"></i></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span id="next-icon"><i class="fa-solid fa-angle-right"></i></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.container {
  width: 1430px;
  margin-top: 50px;
}
.login-carousel {
  width: 440px;
}
.log-in {
  width: 500px;
  height: 520px;
  padding: 0 10px;
  margin-right: 20px;
  border-right: 1px solid #dadada;
}
#login-btn {
  width: 99%;
  background-color: rgb(231, 26, 15);
  border: none;
  border-radius: 3px;
  padding: 12px 0;
  color: white;
  font-size: 16px;
  letter-spacing: 1px;
}
label {
  font-weight: bold;
  margin-bottom: 7px;
}
.log-in .nav {
  background-color: rgb(231, 26, 15);
  border-radius: 3px;
  padding: 10px;
  margin-bottom: 20px;
}
.nav-item {
  font-size: 20px;
  margin: 5px 25px;
}
.nav-item > .login-signup {
  color: white;
  text-decoration: none;
}
.form-detail {
  margin-bottom: 20px;
}
.forgot-pass {
  text-align: center;
}
.carousel-control-prev,
.carousel-control-next {
  background-color: black;
}
#next-icon,
#prev-icon {
  color: red;
  width: 40px;
  height: 50px;
  line-height: 50px;
  text-align: center;
}
#next-icon:hover,
#prev-icon:hover {
  background: black;
  color: white;
  border-radius: 4px;
}
</style>
