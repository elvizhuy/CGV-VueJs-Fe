<template>
  <TheHeader></TheHeader>
  <div class="container-reg d-flex justify-content-center align-items-center">
    <div class="register">
      <ul class="nav nav-pills">
        <li class="nav-item">
          <router-link class="login-signup" :to="{name:'app.login'}">LOGIN</router-link>
        </li>
        <li class="nav-item">
          <router-link class="login-signup" :to="{name:'app.register'}">SIGN UP</router-link>
        </li>
      </ul>
      <div>
        <form action="" method="post">
          <div class="form-detail">
            <label for="">Name</label>
            <input class="form-control" type="text" name="name" v-model="user.name" placeholder="enter name"/>
          </div>
          <div class="form-detail">
            <label for="">Email</label>
            <input class="form-control" type="email" name="email" v-model="user.email" placeholder="enter email"/>
          </div>
          <div class="form-detail">
            <label for="">Phone number</label>
            <input
                class="form-control"
                type="text"
                name="phone" v-model="user.phone"
                placeholder="enter phone number"
            />
          </div>
          <div class="form-detail">
            <label for="">Password</label>
            <input
                class="form-control"
                type="password"
                name="password" v-model="user.password"
                placeholder="enter password"
            />
          </div>

          <div id="date-of-birth" class="form-detail">
            <label for="">Date of birth</label>
            <div class="select-dob d-flex align-items-center flex-row">
              <select class="form-select" name="date" v-model="user.date" id="">
                <option v-for="(Number, index) in Days" :key="index" value="">
                  {{ Number }}
                </option>
              </select>
              <select class="form-select" name="month" v-model="user.month" id="">
                <option v-for="(Number, index) in months" :key="index" value="">
                  {{ Number }}
                </option>
              </select>
              <select class="form-select" name="year" v-model="user.year" id="">
                <option v-for="(Number, index) in Year" :key="index" value="">
                  {{ Number }}
                </option>
              </select>
            </div>
          </div>

          <div class="form-detail d-flex flex-row">
            <input
                class="form-check-input me-2 border border-secondary"
                type="radio"
                value="Male"
                name="gender"
                v-model="user.gender"
            />
            <label class="me-3" for="">Male</label>
            <input
                class="form-check-input me-2 border border-secondary"
                type="radio"
                value="Female"
                name="gender"
                v-model="user.gender"
            />
            <label for="">Female</label>
          </div>

          <div class="form-detail">
            <label for="">Region</label>
            <div class="select-dob d-flex align-items-center flex-row">
              <select id="regions" class="form-select" name="region" v-model="region">
                <option v-for="(region, index) in Region" :key="index" value="">
                  {{ region }}
                </option>
              </select>
            </div>
          </div>

          <div class="form-detail">
            <label for="">Prefer Site</label>
            <div class="select-dob d-flex align-items-center flex-row">
              <select id="sites" class="form-select" name="prefer_site" v-model="user.prefer_site">
                <option v-for="(site, index) in Site" :key="index" value="">
                  {{ site }}
                </option>
              </select>
            </div>
          </div>

          <button type="submit" id="login-btn">REGISTER</button>
        </form>
      </div>
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
  <TheFooter></TheFooter>
</template>

<script>
import {createNamespacedHelpers} from "vuex";
import TheHeader from "@/components/TheHeader";
import TheFooter from "@/components/TheFooter";

const {mapState} = createNamespacedHelpers("dateOfBirth");
export default {
  data() {
    return {
      user: {
        name: '',
        email: '',
        phone: '',
        password: '',
        date: '',
        month: '',
        year: '',
        gender: '',
        region: '',
        prefer_site: '',
      },
      notification: ''
    }
  },
  computed: {
    ...mapState({
      Days: "DaysDate",
      months: "Months",
      Year: "Years",
      Region: "Regions",
      Site: "Sites",
      // Year: (state) => state.dateOfBirth.Years,
    }),
  },
  components: {
    TheHeader, TheFooter,
  }
  , methods: {
    registration() {
      this.$store.dispatch('register', this.user)
          .then(() => {

          });
    }
  }
};
</script>

<style scoped>
.container-reg {
  width: 1430px;
  height: 850px;
  margin: 50px auto;

}

.login-carousel {
  width: 440px;
}

.register {
  width: 500px;
  height: 100%;
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

.form-detail .form-select {
  width: 100px;
  margin-right: 15px;
}

.register #regions,
.register #sites {
  width: 100%;
}

.register .nav {
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
