<div id="package-register">
  <div id="main-content">
    <div class="page_detail">
      <section class="block_actions">
        <div class="container">
          <div class="row">
            <div class="box">
              <div class="service">
                <a href="">
                  <div class="item">
                    <div class="icon_ss border_right">
                      <img src="~assets/images/icon_sv_sim.png" class="icon_menu">
                      <span class="title uppercase">Sim số</span>
                    </div>
                  </div>
                </a>
              </div>
              <div class="service no_pad">
                <a href="">
                  <div class="item">
                    <div class="border_right">
                      <img src="~assets/images/icon_sv_package.png" class="icon_menu">
                      <span class="title uppercase">Gói cước</span>
                    </div>
                  </div>
                  <div class="line_bottom line_pack"></div>
                </a>
              </div>
              <div class="service">
                <a href="">
                  <div class="item">
                    <div class="icon_topup border_right">
                      <img src="~assets/images/icon_sv_topup.png" class="icon_menu">
                      <span class="title uppercase">Nạp thẻ</span>
                    </div>
                  </div>

                </a>
              </div>

              <div class="service_lg">
                <a href="">
                  <div class="item">
                    <div class="icon_card  border_right">
                      <img src="~assets/images/icon_sv_roaming.png" class="icon_menu">
                      <span class="title uppercase">Gói cước roaming</span>
                    </div>
                  </div>
                </a>
              </div>

              <div class="service">
                <a href="">
                  <div class="item">
                    <div class="icon_card">
                      <img src="~assets/images/icon_sv_card.png" class="icon_menu">
                      <span class="title uppercase">CĐ TB Trả sau</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="ss-bg">
        <div class="container">
          <div class="row checkout-process">
            <div class="col-md-4 order-2 no_pad_sm no_pad_xs">
              <div id="main_right_section" style="position: relative; top: auto; width: 350px;">
                <div class="adr-oms card panel" id="panel_order">
                  <div class="header">
                    <h3 class="title uppercase">
                      Thông tin đơn hàng
                    </h3>

                    <div class="line"></div>
                  </div>
                  <div class="body">
                    <!-- end table_order_header -->
                    <table class="adr-oms table table_order_items">
                      <tbody>
                      <tr class="border_bottom">
                        <td class="fl">
                          <span class="txt_label">
                              Thuê bao mua gói cước:
                          </span>
                        </td>
                        <td class="fr txt_value">
                          <span id="order_phone"></span>
                        </td>
                      </tr>
                      <tr class="border_bottom">
                        <td class="fl">
                          <span class="txt_label">
                              Tên gói cước:
                          </span>
                        </td>
                        <td class="fr txt_value">
                          <span id="order_product">{{package.title}}</span>
                        </td>
                      </tr>
                      <tr class="border_bottom">
                        <td class="fl">
                          <span class="txt_label">
                              Giá gói:
                          </span>
                        </td>
                        <td class="fr txt_value">
                          <span id="order_amount">{{package.price_amount}}</span>đ
                        </td>
                      </tr>
                      <tr>
                        <td class="fl lbl_amount">
                          <span class="txt_label">
                              Tổng giá trị đơn hàng
                          </span>
                        </td>
                        <td class="fr txt_value col_amount">
                          <span id="order_total_amount">{{package.price_amount}}</span>đ
                        </td>
                      </tr>
                      <!-- end row -->
                      </tbody>
                    </table>
                  </div>
                </div>
                <!-- end #panel_order -->
              </div>
            </div>
            <div class="col-md-8 order-1 no_pad">
              <div id="main_left_section">
                <div class="form_title">
                  Đăng ký gói cước: <span>{{package.title}}</span>
                </div>
                <form class="form" id="register_package" action="" method="post">
                  <div class="form-group">
                    <label class="label_text" for="WOrders_phone_contact">Nhập số điện thoại</label>
                    <input class="textbox_lg" maxlength="255"
                           name="WOrders[phone_contact]" id="WOrders_phone_contact" type="text">
                    <div class="help-block error" id="WOrders_phone_contact_em_" style="display:none"></div>
                  </div>
                  <div class="form-group">
                    <label class="label_text" for="WOrders_promo_code">Mã giới thiệu/Mã khuyến mại</label>
                    <input class="textbox_lg" maxlength="255" name="WOrders[promo_code]" id="WOrders_promo_code"
                           type="text">
                    <div class="help-block error" id="WOrders_promo_code_em_" style="display:none"></div>
                  </div>
                  <div class="form-group">
                    <div id="captcha_place_holder" class="g-recaptcha">
                      <div style="width: 304px; height: 78px;">
                        <div>
                          <iframe
                            src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LdnWS4UAAAAAAyy0Odc6bAuWs8wEm6BD9A6h66t&amp;co=aHR0cHM6Ly9mcmVlZG9vLnZucHQudm46NDQz&amp;hl=vi&amp;v=v1528135568984&amp;size=normal&amp;cb=imgvc3tiafia"
                            role="presentation" scrolling="no"
                            sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"
                            width="304" height="78" frameborder="0"></iframe>
                        </div>
                        <textarea id="g-recaptcha-response" name="g-recaptcha-response" class="g-recaptcha-response"
                                  style="width: 250px; height: 40px; border: 1px solid #c1c1c1; margin: 10px 25px; padding: 0px; resize: none;  display: none; "></textarea>
                      </div>
                    </div>
                    <div class="help-block error" id="WOrders_captcha_em_" style="display:none"></div>
                  </div>
                  <div class="space_10"></div>
                  <div class="package_info text-center">
                    <button @click="goBack()" type="button" class="btn btn_register uppercase" >Quay lại</button>
                    <input class="btn btn_register uppercase" name="yt0" value="Tiếp tục" type="submit">
                  </div>
                </form>
                <div class="space_10"></div>
              </div>
            </div>
            <!-- end #main_right_section -->
            <div class="space_30"></div>
          </div>
        </div>
      </section>
      <div id="confirm_register" class="modal fade">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <a class="close" data-dismiss="modal">×</a>
              <h4 class="text-center">Xác nhận</h4>
            </div>
            <div class="modal-body">
              <div id="msg_confirm_register">
              </div>
              <div class="space_30"></div>
              <div class="text-center">
                <a class="btn btn_green" id="btn_reg_package" href="#">Xác nhận</a>
                <a class="btn btn_green" data-dismiss="modal" href="#">Bỏ qua</a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
