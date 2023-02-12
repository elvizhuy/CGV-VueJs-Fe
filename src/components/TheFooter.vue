<template>
  <div class="footer-all-branch">
    <div class="container-fluid section-smuse">
      <ul class="smuse-list d-flex justify-content-center m-0 p-2">
        <li>
          <a class="dx">dx</a>
        </li>
        <li>
          <a class="imax">imax</a>
        </li>
        <li>
          <a class="starium">starium</a>
        </li>
        <li>
          <a class="gold-class">gold-class</a>
        </li>
        <li>
          <a class="lamour">lamour</a>
        </li>
        <li>
          <a class="sweet">sweet</a>
        </li>
        <li>
          <a class="dolby-atmos">dolby-atmos</a>
        </li>
        <li>
          <a class="premium-cinema"> premium-cinema </a>
        </li>
        <li>
          <a class="screenx">screenx</a>
        </li>
        <li>
          <a class="cine-foret">cine-foret</a>
        </li>
        <li>
          <a class="cine-livingroom"> cine-livingroom </a>
        </li>
        <li>
          <a class="cine-suite">cine-suite</a>
        </li>
      </ul>
    </div>

    <div class="container d-flex justify-content-center">
      <div class="footer-contact row">
        <div class="col-3">
          <h3>CGV Vietnam</h3>
          <ul>
            <li><a href="">About Us</a></li>
            <li><a href="">e-CGV</a></li>
            <li><a href="">Gift Card</a></li>
            <li><a href="">Career</a></li>
            <li><a href="">Contact CGV</a></li>
          </ul>
        </div>
        <div class="col-3">
          <h3>Terms and Conditions</h3>
          <ul>
            <li><a href="">Conditions of Website Use</a></li>
            <li><a href="">Terms of Use</a></li>
            <li><a href="">Payment Policy</a></li>
            <li><a href="">Privacy Policy</a></li>
            <li><a href="">F.A.Q</a></li>
          </ul>
        </div>
        <div class="col-3 cgv-follow-us">
          <h3>Follow Us</h3>
          <ul class="follow d-flex">
            <li><a class="follow-fb" href=""></a></li>
            <li><a class="follow-yt" href=""></a></li>
            <li><a class="follow-instagram" href=""></a></li>
            <li><a class="follow-zalo" href=""></a></li>
          </ul>
          <div class="cgv-permission">
            <img src="../../public/assets/logo/cong-thuong.png" alt="" />
          </div>
        </div>
        <div class="col-3">
          <h3>Customer Service</h3>
          <ul>
            <p href="">
              Hotline: 1900 6017
              <br />
              Working hours: 8:00 - 22:00 (Monday to Sunday, including Public
              Holidays)
              <br />
              Email support: <a href="">Daniel@gmail.com</a>
            </p>
          </ul>
        </div>
      </div>
    </div>
<div class="line"></div>
    <div class="company-contact-info">
      <div class="company-info container mt-2">
        <h3 class="text-center">COMPANY CJ CGV VIETNAM</h3>
        <p>
          Business registration certificate: 0303675393, registered for the
          first time on 31/7/2008, registered for the fifth change on
          14/10/2015, issued by HCMC Department of Planning and Investment.
        </p>
        <p>
          Address: Floor 2, Rivera Park Saigon - No. 7/28 Thanh Thai street,
          Ward 14, District 10, HCMC.
        </p>
        <p>Hotline: 1900 6017</p>
        <p>COPYRIGHT 2017 CJ CGV. All RIGHTS RESERVED .</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.smuse-list {
  list-style: none;
}
.section-smuse {
  border-bottom: 3px solid black;
  border-top: 3px solid black;
}
.footer-all-branch {
  margin-top: 40px;
  background: url(../../public/assets/logo/bg-bottom-footer.jpg) repeat-x scroll
    center bottom rgba(0, 0, 0, 0);
  margin-top: 30px;
  padding-bottom: 120px;
  width: 100%;
}
.section-smuse ul li a {
  background-image: url(../../public/assets/logo/brand-type-film-footer_ver2.png);
  background-repeat: no-repeat;
  background-size: cover;
  display: block;
  height: 28px;
  text-indent: -99999px;
  white-space: nowrap;
}
.section-smuse li > a.dx {
  background-position: -391px 6px;
  width: 45px;
}
.section-smuse li > a.imax {
  background-position: -160px 5px;
  width: 77px;
}
.section-smuse li > a.starium {
  background-position: -236px 5px;
  width: 57px;
}

.section-smuse li > a.gold-class {
  background-position: -292px 4px;
  width: 105px;
}
.section-smuse li > a.lamour {
  background-position: -82px 3px;
  width: 83px;
}
.section-smuse li > a.sweet {
  background-position: 2px 3px;
  width: 86px;
}
.section-smuse li > a.dolby-atmos {
  background-position: -577px 3px;
  width: 33px;
}

.section-smuse li > a.premium-cinema {
  background-position: -435px 2px;
  width: 115px;
}

.section-smuse li > a.screenx {
  background-position: -604px -2px;
  width: 74px;
}

.section-smuse li > a.cine-foret {
  background-position: -675px 3px;
  width: 113px;
}

.section-smuse li > a.cine-livingroom {
  background-position: -785px 3px;
  width: 110px;
}
.section-smuse li > a.cine-suite {
  background-position: -891px 2px;
  width: 73px;
}
.footer-contact .col-3 ul {
  list-style: none;
  padding: 0;
}

.footer-contact .col-3 h3 {
  color: #636363;
  font-size: 14px;
  font-weight: bold;
}
.footer-contact, .company-contact-info {
  width: 1050px;
  margin: auto;
}
.footer-contact .col-3 ul li a,
p {
  text-decoration: none;
  color: #636363;
  font-size: 14px;
  line-height: 22px;
}
.line{
  border-top: 3px solid black;
}
.cgv-follow-us ul li a {
  background: url(../../public/assets/logo/bg-social-footer-40.png) repeat
    scroll 0 0 rgba(0, 0, 0, 0);
  display: block;
  height: 39px;
  text-indent: -9999px;
  width: 39px;
}
.cgv-follow-us ul li a.follow-fb {
  background-position: -9px -3px;
}
.cgv-follow-us ul li a.follow-yt {
  background-position: -54px -3px;
}
.cgv-follow-us ul li a.follow-instagram {
  background-position: -98px -3px;
}
.cgv-follow-us ul li a.follow-zalo {
  background-position: -191px -3px;
}
.company-contact-info .company-info>p {
  margin: 0;
}
.company-info>h3{
  color: #636363;
  font-size: 18px;
  font-weight: bold;
}
</style>
