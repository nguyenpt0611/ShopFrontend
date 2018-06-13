<div id="login-user">
  <div class="main">
    <div class="container">
      <div class="row main flex-column">
        <div class="login-heading">
          <div class="login-title text-center">
            <h1 class="title">
              <a href="https://freedoo.vnpt.vn/">
              <img src="../assets/images/logo_sso.png"></a>
            </h1>
          </div>
          <div class="login-title text-center">
            <h2 class="title-info">ĐĂNG NHẬP</h2>
          </div>
        </div>
        <div class="login-error text-center">
          <h5 class="title-error"></h5>
        </div>
        <form id="modal-login-form" action="" method="post">
          <input value="" name="YII_CSRF_TOKEN" type="hidden">
          <div class="container">
          <div class="row main-login main-center">
            <div class="form-group">
              <div class="cols-sm-10">
                <input class="form-control form-design" name="WloginForm[username]" id="WloginForm_username" placeholder="Tên đăng nhập" autofocus="" type="text">
                <input class="form-control" name="pid" id="pid" value="001" type="hidden">
              </div>
            </div>
            <div class="form-group">
              <div class="cols-sm-10">
                <input class="form-control form-design" name="WloginForm[password]" id="WloginForm_pasword" placeholder="Mật khẩu" autocomplete="off" type="password">
              </div>
            </div>
            <div class="error_form" style="display: none;margin: 0px 0px 5px 0px;"></div>
            <div class="text-success success_form" style="display: none;margin: 0px 0px 5px 0px;"></div>
            <div class="form-group ">
              <a href="" id="forget_password" style="font-size: 14px;">Quên mật khẩu?</a>
            </div>
            <div class="login-element-form " style="margin-top: 40px;">
              <div class="form-group login-register">
                <input class="btn btn-primary btn-lg btn-block login-button button-sso-login" name="yt0" value="Đăng nhập" type="submit">
              </div>
              <div class="login-register">
                <a href="" class="btn btn-primary btn-lg btn-block login-button button-sso-login a_href">Đăng ký</a>
              </div>
            </div>
          </div>
        </div>
        </form>
      </div>
    </div>
  </div>
</div>
