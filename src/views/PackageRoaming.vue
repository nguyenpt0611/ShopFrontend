<div id="package-roaming">
  <div id="wrapper" class="no-pad">
    <div id="main-content" class="">
      <div id="packages" class="page_detail">
        <div id="block_package_banner">
          <div class="package_banner_slider">
            <div class="item">
              <img src="../assets/images/package_banner_3-min.jpg" alt="image">
            </div>
          </div>
        </div>
        <section class="ss-bg">
          <section class="ss-box1">
            <div class="no_pad_xs">
              <div class="ss-box1-right-all">
                <div class="package_filter_area_container">
                  <div class="container">
                    <div class="list_category_package_container">
                      <ul id="list_category_package" role="tablist">
                        <li role="presentation" class="active">
                          <a href="#"
                             role="tab" data-toggle="tab" data-type="13">
                            <img src="../assets/images/package_hot.png">
                            HOT nhất </a>
                        </li>
                        <li role="presentation" class="">
                          <a href="#"
                             aria-controls="block_package_prepaid" role="tab"
                             data-toggle="tab" data-type="1">
                            <img src="../assets/images/package_prepaid.png">
                            Gói trả trước </a>
                        </li>
                        <li role="presentation" class="">
                          <a href="#"
                             aria-controls="block_package_postpaid" role="tab"
                             data-toggle="tab" data-type="2">
                            <img src="../assets/images/package_postpaid.png">
                            Gói trả sau </a>
                        </li>
                        <li role="presentation" class="">
                          <a href="#"
                             role="tab" data-toggle="tab" data-type="3">
                            <img src="../assets/images/package_data.png">
                            Gói data </a>
                        </li>
                        <li role="presentation" class="">
                          <a href="#"
                             role="tab" data-toggle="tab" data-type="4">
                            <img src="../assets/images/package_vas.png">
                            DV GTGT </a>
                        </li>
                        <li role="presentation" class="">
                          <a href="#"
                             aria-controls="block_package_flexible" role="tab"
                             data-toggle="tab" data-type="11">
                            <img src="../assets/images/package_flexible.png">
                            Gói linh hoạt </a>
                        </li>
                      </ul>
                    </div>
                    <div class="package_filter_area">
                      <div class="row">
                        <div class="col-sm-6">
                          <div class="msisdn_search_filter">
                            <form class="form">
                              <div class="row">
                                <div class="col-sm-12">
                                  <div class="title">
                                    <label>Gói cước của bạn</label>
                                  </div>
                                </div>
                                <!--<boo></boo>-->
                                <div class="col-sm-12">
                                  <div class="search">
                                    <input type="text" id="input_msisdn" class="form-control input-search"
                                           name="SearchPackageForm[msisdn]" maxlength="20"
                                           placeholder="Nhập SĐT để tìm gói cước ưu đãi dành riêng cho bạn">
                                    <button type="button" class="btn btn-search" id="btn_search_msisdn">
                                      <img src="../assets/images/package_search_icon.png">
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </form>
                            <div id="confirm_search_package" class="modal fade">
                              <div class="modal-dialog">
                                <div class="modal-content">
                                  <div class="modal-header">
                                    <a class="close" data-dismiss="modal">×</a>
                                  </div>
                                  <div class="modal-body text-center">
                                    <div class="text-center font_15">
                                      Vui lòng nhấn xác nhận để tìm gói cước ưu
                                      đãi dành riêng cho bạn
                                    </div>
                                    <div class="space_20"></div>
                                    <form class="form" id="confirm_search_package">
                                      <input value="" name="YII_CSRF_TOKEN" type="hidden">
                                      <div class="col-md-2"></div>
                                      <div class="col-md-8">
                                        <input name="SearchPackageForm[msisdn]"
                                               id="SearchPackageForm_msisdn"
                                               type="hidden">
                                        <div class="form-group">
                                          <div id="captcha_place_holder"
                                               class="g-recaptcha"
                                               data-sitekey="6LdnWS4UAAAAAAyy0Odc6bAuWs8wEm6BD9A6h66t">
                                            <div style="width: 304px; height: 78px;">
                                              <textarea id="g-recaptcha-response"
                                                        name="g-recaptcha-response"
                                                        class="g-recaptcha-response"
                                                        style="width: 250px; height: 40px; border: 1px solid #c1c1c1; margin: 10px 25px; padding: 0px; resize: none;  display: none; ">
                                              </textarea>
                                            </div>
                                          </div>
                                          <div class="help-block error"
                                               id="SearchPackageForm_captcha_em_"
                                               style="display:none">
                                          </div>
                                        </div>
                                      </div>
                                      <div class="col-md-2"></div>
                                      <div class="space_10"></div>
                                      <div class="package_info text-center">
                                        <input class="btn bg_btn" name="yt0"
                                               value="Xác nhận" type="submit">
                                      </div>
                                    </form>
                                    <div class="space_10"></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-sm-6 package_search_filter_separator">
                          <div class="package_search_filter">
                            <form class="form" id="searchpackage-form">
                              <input value="7cd73fd38b2653b2d0cb022c5f3c6d6911d2069f"
                                     name="YII_CSRF_TOKEN" type="hidden">
                              <div class="row">
                                <div class="col-sm-12">
                                  <div class="title">
                                    <label for="">Sắp xếp theo</label></div>
                                  <div class="sortGroup">
                                    <div class="sortType">
                                      <select name="SearchPackageForm[sortType]"
                                              id="SearchPackageForm_sortType">
                                        <option value="1">Giá gói</option>
                                        <option value="2">Tin nhắn nội mạng
                                        </option>
                                        <option value="3">Tin nhắn ngoại mạng
                                        </option>
                                        <option value="4">Gọi nội mạng</option>
                                        <option value="5">Gọi ngoại mạng
                                        </option>
                                        <option value="6">Data</option>
                                      </select></div>
                                    <div class="sortOrder">
                                      <select name="SearchPackageForm[sortOrder]"
                                              id="SearchPackageForm_sortOrder">
                                        <option value="DEFAULT">Mặc định
                                        </option>
                                        <option value="ASC">Tăng dần</option>
                                        <option value="DESC">Giảm dần</option>
                                      </select></div>

                                    <div id="loadingPackageImg"
                                         class="spinner hidden"></div>
                                  </div>


                                </div>

                                <div class="col-sm-12">
                                  <div class="search">
                                    <input class="form-control input-search"
                                           placeholder="Tìm gói theo tên"
                                           name="SearchPackageForm[key]"
                                           id="SearchPackageForm_key"
                                           maxlength="255" type="text">
                                    <input name="activeId" id="activeId" value="13"
                                           type="hidden">

                                    <button type="button" class="btn btn-search"
                                            onclick="filteringPackages()">
                                      <img src="../assets/images/package_search_icon.png">
                                    </button>

                                  </div>
                                </div>

                              </div>

                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="block_package_container">
                  <div id="packages_tabs" class="tab-content content">
                    <div role="tabpanel" class="tab-pane active" id="block_package_hot"
                         data-type="13">
                      <div class="package_freedoo">
                        <div class="container">
                          <div class="title text-center">
                            <h3>Các gói cước ưu đãi dành riêng cho thuê bao <span
                              style="color: #ed0677">Free</span><span
                              style="color: #0aa1df">doo</span></h3>
                          </div>
                          <div class="content">
                            <div class="block_package">
                              <div v-if="data.freedoo_packages && data.freedoo_packages.length" class="row">
                                <div class="col-sm-4" v-for="item of data.freedoo_packages" v-bind:key="item.id">
                                  <div class="item_package">
                                    <div class="title">
                                      <a href="#">
                                        <h4>{{item.name}}</h4>
                                        <p>{{item.type}}</p>
                                      </a>
                                    </div>
                                    <div class="item_package_separator"></div>
                                    <div class="package_description">
                                      <div class="call_des">
                                        <div class="row">
                                          <div class="col-3">
                <span class="package_icon">
                    <img src="../assets/images/package_icon_phonewave.png">
                </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              <p>{{item.call_content}}</p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      <div class="data_des">
                                        <div class="row">
                                          <div class="col-3">
                <span class="package_icon">
                    <img src="../assets/images/package_icon_phone.png">
                </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              <p>{{item.data_content}}</p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="price">
                                      {{item.price}}<sup>đ</sup><span>/{{item.period}}</span>
                                    </div>
                                    <div class="item_package_separator"></div>
                                    <div class="action text-center">
                                      <router-link :to="{name: 'PackageRegister', params:{name:item.name}}"
                                         class="btn btn-register">
                                        Đăng ký </router-link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="package_other">
                        <div class="container">
                          <div class="title text-center">
                            <h3>Các gói cước ưu đãi khác</h3>
                          </div>
                          <div class="content">
                            <div class="block_package block_package_other">
                              <div v-if="data.other_packages && data.other_packages.length" class="row">
                                <div class="col-sm-4" v-for="item of data.other_packages" v-bind:key="item.id">
                                  <div class="item_package">
                                    <div class="title">
                                      <a href="#">
                                        <h4>{{item.name}}</h4>
                                        <p>{{item.type}}</p>
                                      </a>
                                    </div>
                                    <div class="item_package_separator"></div>
                                    <div class="package_description">
                                      <div class="short_des">
                                        <div v-for="des of item.content" v-bind:key="item.id" class="row">
                                          <div class="col-3">
                                            <span class="package_icon">
                                                <img src="../assets/images/check.png"
                                                     style="width:19px; margin-left:1px">
                                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">{{des}}</div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="price">
                                      {{item.price}}<sup>đ</sup><span>/{{item.period}}</span>
                                    </div>
                                    <div class="item_package_separator"></div>
                                    <div class="action text-center">
                                      <router-link :to="{name: 'PackageRegister', params:{name:item.name}}"
                                                   class="btn btn-register">
                                        Đăng ký </router-link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!--<div role="tabpanel" class="tab-pane " id="block_package_prepaid" data-type="1">
                      <div class="package_freedoo">
                        <div class="container">
                          <div class="title text-center">
                            <h3>Các gói cước ưu đãi dành riêng cho thuê bao <span
                              style="color: #ed0677">Free</span><span
                              style="color: #0aa1df">doo</span></h3>
                          </div>
                          <div class="content">
                            <div class="block_package">
                              <div class="row">
                                <div class="col-sm-4">
                                  <div class="item_package">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          FHAPPY </h4>
                                        <p>Gói trả trước</p>

                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="call_des">
                                        <div class="row">
                                          <div class="col-3">
                        <span class="package_icon">
                            <img src="../assets/images/package_icon_phone.png">
                        </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              <p>1.000 phút gọi nội mạng
                                                VinaPhone</p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>


                                      <div class="data_des">
                                        <div class="row">
                                          <div class="col-3">
                        <span class="package_icon">
                            <img src="../assets/images/package_icon_phonewave.png">
                        </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              <p>60 GB Data tốc độ cao</p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>


                                    </div>


                                    <div class="price">
                                      49.000<sup>đ</sup><span>/tháng</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-sm-4">
                                  <div class="item_package">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          FCLUB </h4>
                                        <p>Gói trả trước</p>

                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="call_des">
                                        <div class="row">
                                          <div class="col-3">
                        <span class="package_icon">
                            <img src="../assets/images/package_icon_phone.png">
                        </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              <p>1.500 phút gọi nội mạng
                                                VinaPhone</p>
                                              <p>60 phút gọi ngoại
                                                mạng</p></div>
                                          </div>
                                        </div>
                                      </div>


                                      <div class="data_des">
                                        <div class="row">
                                          <div class="col-3">
                        <span class="package_icon">
                            <img src="../assets/images/package_icon_phonewave.png">
                        </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              <p>90 GB Data tốc độ cao</p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>


                                    </div>


                                    <div class="price">
                                      79.000<sup>đ</sup><span>/tháng</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="package_other">
                        <div class="container">
                          <div class="title text-center">
                            <h3>Các gói cước ưu đãi khác</h3>
                          </div>

                          <div class="content">
                            <div class="block_package block_package_other">

                              <div class="row">
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          B30 </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="call_des">
                                        <div class="row">
                                          <div class="col-3">
                        <span class="package_icon">
                            <img src="../assets/images/package_icon_phone.png">
                        </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              <p>100 phút gọi nội mạng
                                                VinaPhone</p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      <div class="sms_des">
                                        <div class="row">
                                          <div class="col-3">
                        <span class="package_icon">
                            <img src="../assets/images/package_icon_sms.png">
                        </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              <p>100 tin nhắn nội mạng</p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      <div class="data_des">
                                        <div class="row">
                                          <div class="col-3">
                                <span class="package_icon">
                                    <img src="../assets/images/package_icon_phonewave.png">
                                </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              <p>0,3 GB Data tốc độ
                                                cao</p></div>
                                          </div>
                                        </div>
                                      </div>


                                    </div>

                                    <div class="price">
                                      30.000<sup>đ</sup><span>/tháng</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          C50 </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="call_des">
                                        <div class="row">
                                          <div class="col-3">
                        <span class="package_icon">
                            <img src="../assets/images/package_icon_phone.png">
                        </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              <p>50 phút gọi nội mạng
                                                VinaPhone</p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      <div class="sms_des">
                                        <div class="row">
                                          <div class="col-3">
                        <span class="package_icon">
                            <img src="../assets/images/package_icon_sms.png">
                        </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              <p>50 tin nhắn nội mạng</p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>


                                    </div>

                                    <div class="price">
                                      5.000<sup>đ</sup><span>/ngày</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          CAPDOI </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí 1000 phút gọi
                                              cho thuê bao thành viên và
                                              ngược lại
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      20.000<sup>đ</sup><span>/Lượt</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="row">
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          B10 </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí 10 phút gọi
                                              nội mạng VinaPhone
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              10 SMS nội mạng VinaPhone
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              200 MB (vượt gói 75đ/50KB)
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      2.500<sup>đ</sup><span>/Lượt</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          S50 </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="sms_des">
                                        <div class="row">
                                          <div class="col-3">
                        <span class="package_icon">
                            <img src="../assets/images/package_icon_sms.png">
                        </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              <p>50 tin nhắn nội mạng</p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>


                                    </div>

                                    <div class="price">
                                      3.500<sup>đ</sup><span>/ngày</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          B100 </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí 250 phút gọi nội
                                              mạng VinaPhone
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              250 SMS nội mạng VinaPhone
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              gói MAX100
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      100.000<sup>đ</sup><span>/tháng</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="row row-plus hidden">
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          COMBO50 </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="call_des">
                                        <div class="row">
                                          <div class="col-3">
                        <span class="package_icon">
                            <img src="../assets/images/package_icon_phone.png">
                        </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              <p>200 phút gọi nội mạng
                                                VinaPhone</p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      <div class="sms_des">
                                        <div class="row">
                                          <div class="col-3">
                        <span class="package_icon">
                            <img src="../assets/images/package_icon_sms.png">
                        </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              <p>100 tin nhắn nội mạng</p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      <div class="data_des">
                                        <div class="row">
                                          <div class="col-3">
                                <span class="package_icon">
                                    <img src="../assets/images/package_icon_phonewave.png">
                                </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              <p>2 GB Data tốc độ cao</p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>


                                    </div>

                                    <div class="price">
                                      50.000<sup>đ</sup><span>/tháng</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          C15 </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí 15 phút gọi
                                              nội mạng VinaPhone
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              15 SMS nội mạng
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      2.500<sup>đ</sup><span>/Lượt</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          DT20 </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Thuê bao được miễn phí 1GB
                                              sử dụng trong 07 ngày/Cước
                                              vượt gói: 75đ/50KB
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      20.000<sup>đ</sup><span>/tuần</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="row row-plus hidden">
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          VD2 </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí 20 phút nội mạng
                                              VinaPhone
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              500MB (vượt gói 25đ/50KB)
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      2.000<sup>đ</sup><span>/ngày</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          B129 </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí các cuộc dưới 10
                                              phút nội mạng VinaPhone
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              30 phút gọi ngoại mạng
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              60 SMS nội mạng
                                              VinaPhone+gói MAX100
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      129.000<sup>đ</sup><span>/tháng</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          Gói VD89 </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí:
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              cuộc gọi nội mạng VinaPhone
                                              &lt;=20 phút
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              2GB Data/ngày (hết tốc độ
                                              cao dừng truy cập)
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              50 phút ngoại mạng
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      89.000<sup>đ</sup><span>/tháng</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="row row-plus hidden">
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          VD25K </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí các cuộc goi nội
                                              mạng Vinaphone &lt;= 10 phút
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              1 GB/ngày (hết tốc độ cao
                                              dừng truy cập)
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      25.000<sup>đ</sup><span>/ngày</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          B25KM </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí các cuộc goi nội
                                              mạng Vinaphone &lt;= 10 phút
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              50 phút cố định VNPT
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              1GB/ngày (hết tốc độ cao
                                              dừng truy cập)
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      25.000<sup>đ</sup><span>/tháng</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          VD10 </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí 10 phút nội mạng
                                              VinaPhone
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              100MB (vượt gói 75đ/50KB)
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      1.500<sup>đ</sup><span>/ngày</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="row row-plus hidden">
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          BXTRA </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="call_des">
                                        <div class="row">
                                          <div class="col-3">
                        <span class="package_icon">
                            <img src="../assets/images/package_icon_phone.png">
                        </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              <p>250 phút gọi nội mạng
                                                VinaPhone</p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      <div class="sms_des">
                                        <div class="row">
                                          <div class="col-3">
                        <span class="package_icon">
                            <img src="../assets/images/package_icon_sms.png">
                        </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              <p>250 tin nhắn nội mạng</p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      <div class="data_des">
                                        <div class="row">
                                          <div class="col-3">
                                <span class="package_icon">
                                    <img src="../assets/images/package_icon_phonewave.png">
                                </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              <p>2,4 GB Data tốc độ
                                                cao</p></div>
                                          </div>
                                        </div>
                                      </div>


                                    </div>

                                    <div class="price">
                                      70.000<sup>đ</sup><span>/tháng</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          VD50 </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Thuê bao được miễn phí gọi
                                              nội mạng VNP&lt;=10 phút
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              200 phút cố định VNPT
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              2GB Data/ngày (hết dung
                                              lượng dừng truy cập), sử
                                              dụng trong 07 ngày
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      50.000<sup>đ</sup><span>/tuần</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          B150 </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí các cuộc gọi nội
                                              mạng Vinaphone ≤ 10 phút
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              300 phút cố định VNPT
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              3,5GB (BIG90)
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      150.000<sup>đ</sup><span>/tháng</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="row row-plus hidden">
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          VD69 </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí:
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              cuộc gọi nội mạng VinaPhone
                                              &lt;=10 phút 2,4GB Data (hết
                                              tốc độ cao dừng truy cập)
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              30 phút ngoại mạng
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      69.000<sup>đ</sup><span>/tháng</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          VD79 </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí:
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              cuộc gọi nội mạng VinaPhone
                                              &lt;=10 phút
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              30 phút ngoại mạng
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              1GB Data/ngày (hết tốc độ
                                              cao dừng truy cập)
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      79.000<sup>đ</sup><span>/tháng</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          V2K </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí cuộc gọi nội mạng
                                              Vinaphone ≤ 10 phút
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      2.000<sup>đ</sup><span>/ngày</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="row row-plus hidden">
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          V20K </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí cuộc gọi nội mạng
                                              Vinaphone ≤ 10 phút
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              30 phút cố định VNPT
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              10 phút ngoại mạng.
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      20.000<sup>đ</sup><span>/tháng</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          VD3K </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí: các cuộc goi nội
                                              mạng Vinaphone &lt;= 10 phút
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              1 GB/ngày (hết tốc độ cao
                                              dừng truy cập)
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      3.000<sup>đ</sup><span>/ngày</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          VD400 </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí các cuộc goi nội
                                              mạng Vinaphone &lt;= 10 phút
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              200 phút cố định VNPT
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              300SMS trong nước
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              300 phút ngoại mạng
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              18GB(hết tốc độ cao dừng
                                              truy cập)
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      400.000<sup>đ</sup><span>/tháng</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="row row-plus hidden">
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          C89 </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="call_des">
                                        <div class="row">
                                          <div class="col-3">
                        <span class="package_icon">
                            <img src="../assets/images/package_icon_phone.png">
                        </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              <p>1.500 phút gọi nội mạng
                                                VinaPhone</p>
                                              <p>60 phút gọi ngoại
                                                mạng</p></div>
                                          </div>
                                        </div>
                                      </div>

                                      <div class="sms_des">
                                        <div class="row">
                                          <div class="col-3">
                        <span class="package_icon">
                            <img src="../assets/images/package_icon_sms.png">
                        </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              <p>60 tin nhắn nội mạng</p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>


                                    </div>

                                    <div class="price">
                                      89.000<sup>đ</sup><span>/tháng</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          VXTRA </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Cước gọi nội mạng, ngoại
                                              mạng: 690 đ/phút
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      1.000<sup>đ</sup><span>/ngày</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          V10MP </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí 10 phút gọi
                                              nội mạng VinaPhone sử dụng
                                              trong ngày.
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      1.000<sup>đ</sup><span>/ngày</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="row row-plus hidden">
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          B50SV </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="call_des">
                                        <div class="row">
                                          <div class="col-3">
                        <span class="package_icon">
                            <img src="../assets/images/package_icon_phone.png">
                        </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              <p>250 phút gọi nội mạng
                                                VinaPhone</p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      <div class="sms_des">
                                        <div class="row">
                                          <div class="col-3">
                        <span class="package_icon">
                            <img src="../assets/images/package_icon_sms.png">
                        </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              <p>250 tin nhắn nội mạng</p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      <div class="data_des">
                                        <div class="row">
                                          <div class="col-3">
                                <span class="package_icon">
                                    <img src="../assets/images/package_icon_phonewave.png">
                                </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              <p>2 GB Data tốc độ cao</p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>


                                    </div>

                                    <div class="price">
                                      50.000<sup>đ</sup><span>/tháng</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          VD40K </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí các cuộc goi nội
                                              mạng Vinaphone &lt;= 10 phút
                                              50 phút cố định VNPT
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              1 GB/ngày (hết tốc độ cao
                                              dừng truy cập)
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      40.000<sup>đ</sup><span>/tháng</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          C69 </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="call_des">
                                        <div class="row">
                                          <div class="col-3">
                        <span class="package_icon">
                            <img src="../assets/images/package_icon_phone.png">
                        </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              <p>1.500 phút gọi nội mạng
                                                VinaPhone</p>
                                              <p>30 phút gọi ngoại
                                                mạng</p></div>
                                          </div>
                                        </div>
                                      </div>

                                      <div class="sms_des">
                                        <div class="row">
                                          <div class="col-3">
                        <span class="package_icon">
                            <img src="../assets/images/package_icon_sms.png">
                        </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              <p>30 tin nhắn nội mạng</p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>


                                    </div>

                                    <div class="price">
                                      69.000<sup>đ</sup><span>/tháng</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="row row-plus hidden">
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          B50 </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="call_des">
                                        <div class="row">
                                          <div class="col-3">
                        <span class="package_icon">
                            <img src="../assets/images/package_icon_phone.png">
                        </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              <p>250 phút gọi nội mạng
                                                VinaPhone</p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      <div class="sms_des">
                                        <div class="row">
                                          <div class="col-3">
                        <span class="package_icon">
                            <img src="../assets/images/package_icon_sms.png">
                        </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              <p>250 tin nhắn nội mạng</p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>


                                    </div>

                                    <div class="price">
                                      50.000<sup>đ</sup><span>/tháng</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          KẾT BẠN </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí 2000 phút để gọi
                                              tới nhóm thuê bao VinaPhone
                                              hoặc cố định/Gphone VNPT(tối
                                              đa 05 số điện thoại/nhóm).
                                              2.000đ/sốđiện thoại (bao gồm
                                              đăng ký mới hoặc xóa và thêm
                                              số mới).
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      10.000<sup>đ</sup><span>/tháng</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          VD500 </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí các cuộc goi nội
                                              mạng Vinaphone &lt;= 10 phút
                                              200 phút cố định VNPT
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              300SMS trong nước
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              500 phút ngoại mạng
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              25GB (hết tốc độ cao dừng
                                              truy cập)
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      500.000<sup>đ</sup><span>/tháng</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="row row-plus hidden">
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          BPLUS </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="call_des">
                                        <div class="row">
                                          <div class="col-3">
                        <span class="package_icon">
                            <img src="../assets/images/package_icon_phone.png">
                        </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              <p>300 phút gọi nội mạng
                                                VinaPhone</p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      <div class="sms_des">
                                        <div class="row">
                                          <div class="col-3">
                        <span class="package_icon">
                            <img src="../assets/images/package_icon_sms.png">
                        </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              <p>300 tin nhắn nội mạng</p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      <div class="data_des">
                                        <div class="row">
                                          <div class="col-3">
                                <span class="package_icon">
                                    <img src="../assets/images/package_icon_phonewave.png">
                                </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              <p>2,5 GB Data tốc độ
                                                cao</p></div>
                                          </div>
                                        </div>
                                      </div>


                                    </div>

                                    <div class="price">
                                      100.000<sup>đ</sup><span>/tháng</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          VD2K </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí các cuộc goi nội
                                              mạng Vinaphone, &lt;= 10
                                              phút
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              1 GB/ngày (hết tốc độ cao
                                              dừng truy cập)
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      2.000<sup>đ</sup><span>/ngày</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          VD350 </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí các cuộc goi nội
                                              mạng Vinaphone &lt;= 10 phút
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              200 phút cố định VNPT
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              100SMS trong nước
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              200 phút ngoại mạng
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              11GB (hết tốc độ cao dừng
                                              truy cập)
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      350.000<sup>đ</sup><span>/tháng</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="row row-plus hidden">
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          VD100 </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Thuê bao được miễn phí gọi
                                              nội mạng VNP&lt;=10 phút
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              500 phút cố định VNPT
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              100 SMS nội mạng
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              3GB Data/ngày (hết dung
                                              lượng dừng truy cập), sử
                                              dụng trong 07 ngày
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      100.000<sup>đ</sup><span>/tuần</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          VD450 </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí các cuộc goi nội
                                              mạng Vinaphone &lt;= 10 phút
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              200 phút cố định VNPT
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              300SMS trong nước
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              400 phút ngoại mạng
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              18GB (hết tốc độ cao dừng
                                              truy cập)
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      450.000<sup>đ</sup><span>/tháng</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          B200 </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí các cuộc gọi nội
                                              mạng Vinaphone, ≤ 10 phút
                                              400 phút cố định VNPT
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              6GB (BIG120)
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      200.000<sup>đ</sup><span>/tháng</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="row row-plus hidden">
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          VD300 </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí các cuộc goi nội
                                              mạng Vinaphone &lt;= 10 phút
                                              200 phút cố định VNPT
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              100SMS trong nước
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              100 phút ngoại mạng
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              11GB(hết tốc độ cao dừng
                                              truy cập)
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      300.000<sup>đ</sup><span>/tháng</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          B250 </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí các cuộc gọi nội
                                              mạng Vinaphone ≤ 10 phút 500
                                              phút cố định VNPT
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              11GB (BIG200)
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      250.000<sup>đ</sup><span>/tháng</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          VD149 </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí các cuộc gọi nội
                                              mạng ≤ 30 phút
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              200 SMS trong nước
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              200 phút ngoại mạng
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              4GB/ngày (hết tốc độ cao
                                              dừng truy cập)
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      149.000<sup>đ</sup><span>/tháng</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="row row-plus hidden">
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          B100K </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí các cuộc gọi nội
                                              mạng Vinaphone ≤ 10 phút
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              200 phút cố định VNPT
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              2,4GB (BIG70)
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      100.000<sup>đ</sup><span>/tháng</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          V55K </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí cuộc gọi nội mạng
                                              Vinaphone ≤ 10 phút
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              50 phút cố định VNPT
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              20 phút ngoại mạng
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      55.000<sup>đ</sup><span>/tháng</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          T20KM </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Được cộng thêm 79.000đ vào
                                              tài khoản KM2
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      20.000<sup>đ</sup><span>/Lượt</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="row row-plus hidden">
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          TSAL </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí từ phút thứ 2 đến
                                              phút thứ 10 phút của tất cả
                                              các cuộc gọi đi di động
                                              VinaPhone, cố định VNPT tại
                                              Tỉnh, TP phát sinh cuộc gọi.
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      1.000<sup>đ</sup><span>/ngày</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          V10K </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí cuộc gọi nội mạng
                                              Vinaphone ≤ 10 phút
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      10.000<sup>đ</sup><span>/tháng</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          VD129 </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí các cuộc gọi nội
                                              mạng VNP ≤ 20 phút 100SMS
                                              trong nước
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              100 phút ngoại mạng
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              3GB/ngày (hết tốc độ cao
                                              dừng truy cập)
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      129.000<sup>đ</sup><span>/tháng</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="row row-plus hidden">
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          VD75K </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí các cuộc goi nội
                                              mạng Vinaphone &lt;= 10 phút
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              100 phút cố định VNPT
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              1 GB/ngày (hết tốc độ cao
                                              dừng truy cập).
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      75.000<sup>đ</sup><span>/tháng</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          B99 </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí các cuộc dưới 10
                                              phút nội mạng VinaPhone
                                              30 phút gọi ngoại mạng
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              60 SMS nội mạng VinaPhone
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Gói MAX.
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      99.000<sup>đ</sup><span>/tháng</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          T50KM </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Được cộng thêm 299.000đ vào
                                              tài khoản KM2
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      50.000<sup>đ</sup><span>/Lượt</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="row row-plus hidden">
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          V30K </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí cuộc gọi nội mạng
                                              Vinaphone ≤ 10 phút
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              30 phút cố định VNPT
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              20 phút ngoại mạng
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      30.000<sup>đ</sup><span>/tháng</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          VD99 </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí cuộc gọi nội mạng
                                              VinaPhone &lt;=10 phút
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              1GB Data/ngày (hết tốc độ
                                              cao dừng truy cập)
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      99.000<sup>đ</sup><span>/tháng</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          V40K </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí cuộc gọi nội mạng
                                              Vinaphone ≤ 10 phút
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              50 phút cố định VNPT
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              15 phút ngoại mạng
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      40.000<sup>đ</sup><span>/tháng</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="row action block_action text-center">
                                <a class="btn btn-prev hidden"
                                   onclick="shortenPackage(this)">
                                  <i class="fa fa-angle-double-up"></i>
                                </a>
                                <a class="btn btn-next" onclick="showAllPackage(this)">
                                  <i class="fa fa-angle-double-down"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>


                    </div>
                    <div role="tabpanel" class="tab-pane " id="block_package_postpaid"
                         data-type="2">
                      <div class="package_freedoo">
                        <div class="container">
                          <div class="title text-center">
                            <h3>Các gói cước ưu đãi dành riêng cho thuê bao <span
                              style="color: #ed0677">Free</span><span
                              style="color: #0aa1df">doo</span></h3>
                          </div>
                          <div class="content">
                            <div class="block_package">
                              <div class="row">
                                <div class="col-sm-4">
                                  <div class="item_package">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          FVIP </h4>
                                        <p>Gói trả sau</p>

                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Giá KM: 195.300đ/tháng đầu
                                              tiên
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              9Gb Data tốc độ cao
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí gọi nội mạng
                                              VinaPhone (tối đa 4000 phút)
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              300 Phút gọi ngoại mạng
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              300 SMS trong nước
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí 30 ngày cước RBT và
                                              MCA
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>


                                    <div class="price">
                                      279.000<sup>đ</sup><span>/tháng</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-sm-4">
                                  <div class="item_package">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          FCPLUS </h4>
                                        <p>Gói trả sau</p>

                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">

                                      <div class="package_ctv">
                                        Gói cước ưu đãi dành riêng cho CTV
                                      </div>


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Giá KM: 44.240đ/tháng đầu
                                              tiên
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              1Gb Data tốc độ cao
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              500 Phút gọi nội mạng
                                              VinaPhone
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              30 Phút gọi ngoại mạng
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              50 SMS nội mạng
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>


                                    <div class="price">
                                      63.200<sup>đ</sup><span>/tháng</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-sm-4">
                                  <div class="item_package">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          FPLUS </h4>
                                        <p>Gói trả sau</p>

                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Giá KM: 55.300đ/tháng đầu
                                              tiên
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              1Gb Data tốc độ cao
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              500 Phút gọi nội mạng
                                              VinaPhone
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              30 Phút gọi ngoại mạng
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              50 SMS nội mạng
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>


                                    <div class="price">
                                      79.000<sup>đ</sup><span>/tháng</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="row">
                                <div class="col-sm-4">
                                  <div class="item_package">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          FCVIP </h4>
                                        <p>Gói trả sau</p>

                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">

                                      <div class="package_ctv">
                                        Gói cước ưu đãi dành riêng cho CTV
                                      </div>


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Giá KM: 156.240đ/tháng đầu
                                              tiên
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              9Gb Data tốc độ cao
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí gọi nội mạng
                                              VinaPhone (tối đa 4000 phút)
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              300 Phút gọi ngoại mạng
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              300 SMS trong nước
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí 30 ngày cước RBT và
                                              MCA
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>


                                    <div class="price">
                                      223.200<sup>đ</sup><span>/tháng</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="package_other">
                        <div class="container">
                          <div class="title text-center">
                            <h3>Các gói cước ưu đãi khác</h3>
                          </div>

                          <div class="content">
                            <div class="block_package block_package_other">

                              <div class="row">
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          TP849 18 thang </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí 4.000 phút gọi nội
                                              mạng VinaPhone.
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí 1.000 phút gọi Cố
                                              định VNPT.
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí 500 phút ngoại
                                              mạng.
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              3GB/ngày.
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Chu kỳ sử dụng: 18 tháng
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      898.000<sup>đ</sup><span>/tháng</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          TP999 36 thang </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí 4.000 phút gọi nội
                                              mạng VinaPhone
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí 1.000 phút gọi Cố
                                              định VNPT
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí 600 phút ngoại mạng
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              4GB/ngày
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Chu kỳ sử dụng: 36 tháng
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      1.048.000<sup>đ</sup><span>/tháng</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          TP1500 24 thang </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí 5.000 phút gọi nội
                                              mạng VinaPhone.
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí 2.000 phút gọi Cố
                                              định VNPT.
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí 700 phút ngoại
                                              mạng.
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              5GB/ngày
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Chu kỳ sử dụng: 24 tháng
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      1.549.000<sup>đ</sup><span>/tháng</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="row">
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          TP999 18 thang </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí 4.000 phút gọi nội
                                              mạng VinaPhone.
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí 1.000 phút gọi Cố
                                              định VNPT.
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí 600 phút ngoại
                                              mạng.
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              4GB/ngày.
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Chu kỳ sử dụng: 18 tháng
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      1.048.000<sup>đ</sup><span>/tháng</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          VD399 36 thang </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí 2.000 phút gọi nội
                                              mạng VinaPhone (các cuộc gọi
                                              &lt;=10 phút)
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí 500 phút gọi Cố
                                              định VNPT (các cuộc gọi &lt;=10
                                              phút).
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              15GB, hết dung lượng hạ băng
                                              thông
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Chu kỳ sử dụng: 36 tháng
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      448.000<sup>đ</sup><span>/tháng</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          VD450 36 thang </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí 3.000 phút gọi nội
                                              mạng VinaPhone (các cuộc gọi
                                              &lt;=10 phút)
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí 500 phút gọi Cố
                                              định VNPT (các cuộc gọi &lt;=10
                                              phút).
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              1GB/ngày
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Chu kỳ sử dụng: 36 tháng
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      499.000<sup>đ</sup><span>/tháng</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="row row-plus hidden">
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          VD299 36 thang </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí 1.500 phút gọi nội
                                              mạng VinaPhone (các cuộc gọi
                                              &lt;=10 phút)
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí 500 phút gọi Cố
                                              định VNPT (các cuộc gọi &lt;=10
                                              phút).
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              7GB, hết dung lượng hạ băng
                                              thông
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Chu kỳ sử dụng: 36 tháng
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      348.000<sup>đ</sup><span>/tháng</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          TP299 18 thang </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí 1.000 phút gọi nội
                                              mạng VinaPhone (các cuộc gọi
                                              &lt;=10 phút)
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí 500 phút gọi Cố
                                              định VNPT (các cuộc gọi &lt;=10
                                              phút).
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              100 phút gọi ngoại mạng
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              5GB, hết dung lượng hạ băng
                                              thông
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Chu kỳ sử dụng: 18 tháng
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      348.000<sup>đ</sup><span>/tháng</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          TP649 36 thang </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí 3.000 phút gọi nội
                                              mạng VinaPhone.
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí 700 phút gọi Cố
                                              định VNPT.
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí 300 phút ngoại
                                              mạng.
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              1GB/ngày.
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Chu kỳ sử dụng: 36 tháng
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      698.000<sup>đ</sup><span>/tháng</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="row row-plus hidden">
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          TP649 24 thang </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí 3.000 phút gọi nội
                                              mạng VinaPhone.
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí 700 phút gọi Cố
                                              định VNPT.
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí 300 phút ngoại
                                              mạng.
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              1GB/ngày
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Chu kỳ sử dụng: 24 tháng
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      698.000<sup>đ</sup><span>/tháng</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          TP849 24 thang </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí 4.000 phút gọi nội
                                              mạng VinaPhone.
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí 1.000 phút gọi Cố
                                              định VNPT.
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí 500 phút ngoại
                                              mạng.
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              3GB/ngày
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Chu kỳ sử dụng: 24 tháng
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      898.000<sup>đ</sup><span>/tháng</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          VD99 36 thang </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí 1.000 phút gọi nội
                                              mạng VinaPhone (các cuộc gọi
                                              &lt;=10 phút)
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí 300 phút gọi Cố
                                              định VNPT (các cuộc gọi &lt;=10
                                              phút)
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              2GB, hết dung lượng hạ băng
                                              thông
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Chu kỳ sử dụng: 36 tháng
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      148.000<sup>đ</sup><span>/tháng</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="row row-plus hidden">
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          Talk21 24 thang </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí 500 phút gọi nội
                                              mạng VinaPhone (các cuộc gọi
                                              &lt;=10 phút)
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí 100 phút gọi Cố
                                              định VNPT (các cuộc gọi &lt;=10
                                              phút)
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Chu kỳ sử dụng: 24 tháng
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      70.000<sup>đ</sup><span>/tháng</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          Talk45 18 thang </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí 700 phút gọi nội
                                              mạng VinaPhone (các cuộc gọi
                                              &lt;=10 phút)
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí 200 phút gọi Cố
                                              định VNPT (các cuộc gọi &lt;=10
                                              phút)
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Chu kỳ sử dụng: 18 tháng
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      94.000<sup>đ</sup><span>/tháng</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          VD399 18 thang </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí 2.000 phút gọi nội
                                              mạng VinaPhone (các cuộc gọi
                                              &lt;=10 phút)
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí 500 phút gọi Cố
                                              định VNPT (các cuộc gọi &lt;=10
                                              phút).
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              15GB, hết dung lượng hạ băng
                                              thông
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Chu kỳ sử dụng: 18 tháng
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      448.000<sup>đ</sup><span>/tháng</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="row row-plus hidden">
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          TP349 18 thang </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí 2.000 phút gọi nội
                                              mạng VinaPhone (các cuộc gọi
                                              &lt;=10 phút)
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí 500 phút gọi Cố
                                              định VNPT (các cuộc gọi &lt;=10
                                              phút)
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              200 phút gọi ngoại mạng
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              9GB, hết dung lượng hạ băng
                                              thông
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Chu kỳ sử dụng: 18 tháng
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      398.000<sup>đ</sup><span>/tháng</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          VD450 24 thang </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí 3.000 phút gọi nội
                                              mạng VinaPhone (các cuộc gọi
                                              &lt;=10 phút)
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí 500 phút gọi Cố
                                              định VNPT (các cuộc gọi &lt;=10
                                              phút).
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              1GB/ngày
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Chu kỳ sử dụng: 24 tháng
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      499.000<sup>đ</sup><span>/tháng</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          TP549 24 thang </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí 3.000 phút gọi nội
                                              mạng VinaPhone.
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí 600 phút gọi Cố
                                              định VNPT.
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí 300 phút ngoại
                                              mạng.
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              20GB, hết dung lượng hạ băng
                                              thông
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Chu kỳ sử dụng: 24 tháng
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      598.000<sup>đ</sup><span>/tháng</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="row row-plus hidden">
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          TP1500 18 thang </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí 5.000 phút gọi nội
                                              mạng VinaPhone.
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí 2.000 phút gọi Cố
                                              định VNPT.
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí 700 phút ngoại
                                              mạng.
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              5GB/ngày.
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Chu kỳ sử dụng: 18 tháng
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      1.549.000<sup>đ</sup><span>/tháng</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          TP299 36 thang </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí 1.000 phút gọi nội
                                              mạng VinaPhone (các cuộc gọi
                                              &lt;=10 phút)
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí 500 phút gọi Cố
                                              định VNPT (các cuộc gọi &lt;=10
                                              phút)
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí 100 phút gọi ngoại
                                              mạng
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              5GB, hết dung lượng hạ băng
                                              thông
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Chu kỳ sử dụng: 36 tháng
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      348.000<sup>đ</sup><span>/tháng</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          VD299 24 thang </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí 1.500 phút gọi nội
                                              mạng VinaPhone (các cuộc gọi
                                              &lt;=10 phút)
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí 500 phút gọi Cố
                                              định VNPT (các cuộc gọi &lt;=10
                                              phút).
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              7GB, hết dung lượng hạ băng
                                              thông
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Chu kỳ sử dụng: 24 tháng
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      348.000<sup>đ</sup><span>/tháng</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="row row-plus hidden">
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          Talk45 36 thang </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí 700 phút gọi nội
                                              mạng VinaPhone (các cuộc gọi
                                              &lt;=10 phút)
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí 200 phút gọi Cố
                                              định VNPT (các cuộc gọi &lt;=10
                                              phút)
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Chu kỳ sử dụng: 36 tháng
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      94.000<sup>đ</sup><span>/tháng</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          VD349 18 thang </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí 2.000 phút gọi nội
                                              mạng VinaPhone (các cuộc gọi
                                              &lt;=10 phút)
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí 500 phút gọi Cố
                                              định VNPT (các cuộc gọi &lt;=10
                                              phút).
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              12GB, hết dung lượng hạ băng
                                              thông
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Chu kỳ sử dụng: 18 tháng
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      398.000<sup>đ</sup><span>/tháng</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          TP849 36 thang </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí 4.000 phút gọi nội
                                              mạng VinaPhone.
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí 1.000 phút gọi Cố
                                              định VNPT.
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí 500 phút ngoại
                                              mạng.
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              3GB/ngày.
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Chu kỳ sử dụng: 36 tháng
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      898.000<sup>đ</sup><span>/tháng</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="row row-plus hidden">
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          TP649 18 thang </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí 3.000 phút gọi nội
                                              mạng VinaPhone.
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí 700 phút gọi Cố
                                              định VNPT.
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí 300 phút ngoại
                                              mạng.
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              1GB/ngày
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Chu kỳ sử dụng: 18 tháng
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      698.000<sup>đ</sup><span>/tháng</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          TP349 36 thang </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí 2.000 phút gọi nội
                                              mạng VinaPhone (các cuộc gọi
                                              &lt;=10 phút)
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí 500 phút gọi Cố
                                              định VNPT (các cuộc gọi &lt;=10
                                              phút)
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí 200 phút gọi ngoại
                                              mạng
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              9GB/tháng, hết dung lượng hạ
                                              băng thông
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Chu kỳ sử dụng: 36 tháng
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      398.000<sup>đ</sup><span>/tháng</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          TP549 18 thang </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí 3.000 phút gọi nội
                                              mạng VinaPhone.
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí 600 phút gọi Cố
                                              định VNPT.
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí 300 phút ngoại
                                              mạng.
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              20GB, hết dung lượng hạ băng
                                              thông
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Chu kỳ sử dụng: 18 tháng
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      598.000<sup>đ</sup><span>/tháng</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="row row-plus hidden">
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          VD450 18 thang </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí 3.000 phút gọi nội
                                              mạng VinaPhone (các cuộc gọi
                                              &lt;=10 phút)
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí 500 phút gọi Cố
                                              định VNPT (các cuộc gọi &lt;=10
                                              phút).
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              1GB/ngày
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      499.000<sup>đ</sup><span>/tháng</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          VD99 18 thang </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí 1.000 phút gọi nội
                                              mạng VinaPhone (các cuộc gọi
                                              &lt;=10 phút)
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí 300 phút gọi Cố
                                              định VNPT (các cuộc gọi &lt;=10
                                              phút)
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              2GB/tháng
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Chu kỳ sử dụng: 18 tháng
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      148.000<sup>đ</sup><span>/tháng</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          TP549 36 thang </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí 3.000 phút gọi nội
                                              mạng VinaPhone.
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí 600 phút gọi Cố
                                              định VNPT.
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí 300 phút ngoại
                                              mạng.
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              20GB, hết dung lượng hạ băng
                                              thông
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      598.000<sup>đ</sup><span>/tháng</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="row row-plus hidden">
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          VD299 18 thang </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí 1.500 phút gọi nội
                                              mạng VinaPhone (các cuộc gọi
                                              &lt;=10 phút)
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí 500 phút gọi Cố
                                              định VNPT (các cuộc gọi &lt;=10
                                              phút).
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              7GB tốc độ cao
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Chu kỳ sử dụng: 18 tháng
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      348.000<sup>đ</sup><span>/tháng</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          VD399 24 thang </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí 2.000 phút gọi nội
                                              mạng VinaPhone (các cuộc gọi
                                              &lt;=10 phút)
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí 500 phút gọi Cố
                                              định VNPT (các cuộc gọi &lt;=10
                                              phút).
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              15GB, hết dung lượng hạ băng
                                              thông
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Chu kỳ sử dụng: 24 tháng
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      448.000<sup>đ</sup><span>/tháng</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          TP299 24 thang </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí 1.000 phút gọi nội
                                              mạng VinaPhone (các cuộc gọi
                                              &lt;=10 phút)
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí 500 phút gọi Cố
                                              định VNPT (các cuộc gọi &lt;=10
                                              phút)
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí 100 phút gọi ngoại
                                              mạng
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              5GB/tháng, hết dung lượng hạ
                                              băng thông
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      348.000<sup>đ</sup><span>/tháng</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="row row-plus hidden">
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          Talk21 36 thang </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí 500 phút gọi nội
                                              mạng VinaPhone (các cuộc gọi
                                              &lt;=10 phút) Miễn phí 100
                                              phút gọi Cố định VNPT (các
                                              cuộc gọi &lt;=10 phút)
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Chu kỳ sử dụng: 36 tháng
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      70.000<sup>đ</sup><span>/tháng</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          VD349 24 thang </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí 2.000 phút gọi nội
                                              mạng VinaPhone (các cuộc gọi
                                              &lt;=10 phút)
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí 500 phút gọi Cố
                                              định VNPT (các cuộc gọi &lt;=10
                                              phút).
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              12GB, hết dung lượng hạ băng
                                              thông
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Chu kỳ sử dụng: 24 tháng
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      398.000<sup>đ</sup><span>/tháng</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          TP1500 36 thang </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí 5.000 phút gọi nội
                                              mạng VinaPhone.
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí 2.000 phút gọi Cố
                                              định VNPT.
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí 700 phút ngoại
                                              mạng.
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              5GB/ngày
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Chu kỳ sử dụng: 36 tháng
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      1.549.000<sup>đ</sup><span>/tháng</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="row row-plus hidden">
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          VD99 24 thang </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí 1.000 phút gọi nội
                                              mạng VinaPhone (các cuộc gọi
                                              &lt;=10 phút)
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí 300 phút gọi Cố
                                              định VNPT (các cuộc gọi &lt;=10
                                              phút).
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              2GB, hết dung lượng hạ băng
                                              thông.
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Chu kỳ sử dụng: 24 tháng
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      148.000<sup>đ</sup><span>/tháng</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          Talk45 24 thang </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí 700 phút gọi nội
                                              mạng VinaPhone (các cuộc gọi
                                              &lt;=10 phút)
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí 200 phút gọi Cố
                                              định VNPT (các cuộc gọi &lt;=10
                                              phút).
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Chu kỳ sử dụng: 24 tháng
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      94.000<sup>đ</sup><span>/tháng</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          TP749 36 thang </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí 3.000 phút gọi nội
                                              mạng VinaPhone.
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí 1.000 phút gọi Cố
                                              định VNPT.
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí 400 phút ngoại
                                              mạng.
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              2GB/ngày
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Chu kỳ sử dụng: 36 tháng
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      798.000<sup>đ</sup><span>/tháng</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="row row-plus hidden">
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          TP749 18 thang </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí 3.000 phút gọi nội
                                              mạng VinaPhone.
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí 1.000 phút gọi Cố
                                              định VNPT.
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí 400 phút ngoại
                                              mạng.
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              2GB/ngày
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Chu kỳ sử dụng: 18 tháng
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      798.000<sup>đ</sup><span>/tháng</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          TP749 24 thang </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí 3.000 phút gọi nội
                                              mạng VinaPhone.
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí 1.000 phút gọi Cố
                                              định VNPT.
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí 400 phút ngoại
                                              mạng.
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              2GB/ngày.
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      798.000<sup>đ</sup><span>/tháng</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          TP999 24 thang </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí 4.000 phút gọi nội
                                              mạng VinaPhone.
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí 1.000 phút gọi Cố
                                              định VNPT.
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí 600 phút ngoại
                                              mạng.
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              4GB/ngày
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Chu kỳ sử dụng: 24 tháng
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      1.048.000<sup>đ</sup><span>/tháng</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="row row-plus hidden">
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          VD349 36 thang </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí 2.000 phút gọi nội
                                              mạng VinaPhone (các cuộc gọi
                                              &lt;=10 phút)
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí 500 phút gọi Cố
                                              định VNPT (các cuộc gọi &lt;=10
                                              phút).
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              12GB, hết dung lượng hạ băng
                                              thông
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Chu kỳ sử dụng: 36 tháng
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      398.000<sup>đ</sup><span>/tháng</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          TP349 24 thang </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí 2.000 phút gọi nội
                                              mạng VinaPhone (các cuộc gọi
                                              &lt;=10 phút)
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí 500 phút gọi Cố
                                              định VNPT (các cuộc gọi &lt;=10
                                              phút)
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí 200 phút gọi ngoại
                                              mạng
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              9GB/tháng, hết dung lượng hạ
                                              băng thông
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Chu kỳ sử dụng: 24 tháng
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      398.000<sup>đ</sup><span>/tháng</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          Talk21 18 thang </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí 500 phút gọi nội
                                              mạng VinaPhone (các cuộc gọi
                                              &lt;=10 phút)
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí 100 phút gọi Cố
                                              định VNPT (các cuộc gọi &lt;=10
                                              phút)
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Chu kỳ sử dụng: 18 tháng
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      70.000<sup>đ</sup><span>/tháng</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="row action block_action text-center">
                                <a class="btn btn-prev hidden"
                                   onclick="shortenPackage(this)">
                                  <i class="fa fa-angle-double-up"></i>
                                </a>
                                <a class="btn btn-next" onclick="showAllPackage(this)">
                                  <i class="fa fa-angle-double-down"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>


                    </div>
                    <div role="tabpanel" class="tab-pane " id="block_package_data" data-type="3">
                      <div class="package_other">
                        <div class="container">
                          <div class="title text-center">
                            <h3>Các gói cước ưu đãi khác</h3>
                          </div>
                          <div class="content">
                            <div class="block_package block_package_other">

                              <div class="row">
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          D2 </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>
                                    <div class="item_package_separator"></div>
                                    <div class="package_description">
                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                                            <span class="package_icon">
                                                <img src="../assets/images/check.png"
                                                     style="width:19px; margin-left:1px">
                                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              2GB dung lượng tốc độ cao
                                              (hết dung lượng ưu đãi ngừng
                                              truy cập internet).
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="price">
                                      10.000<sup>đ</sup><span>/Lượt</span>
                                    </div>
                                    <div class="item_package_separator"></div>
                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          BIGFD38 </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              1.8Gb Data tốc độ cao
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      38.000<sup>đ</sup><span>/tháng</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          FX38 </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Data mua thêm cho gói cước
                                              chính đang dùng
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              1.8Gb Data tốc độ cao
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      38.000<sup>đ</sup><span>/tháng</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="row">
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          BIGFD68 </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              3.8Gb Data tốc độ cao.
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      68.000<sup>đ</sup><span>/tháng</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          TD3 </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Sử dụng 3GB Data tốc độ cao
                                              từ 0h00 đến 5h59p59. Hết
                                              dung lượng dùng theo gói
                                              data đang sử dụng hoặc ngừng
                                              truy cập nếu không có gói
                                              data.
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      3.000<sup>đ</sup><span>/Lượt</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          ZALO7 </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí Data 7 ngày khi sử
                                              dụng dịch vụ Zalo
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      7.000<sup>đ</sup><span>/Lượt</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="row row-plus hidden">
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          ZALO30 </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí Data 30 ngày khi sử
                                              dụng dịch vụ Zalo
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      30.000<sup>đ</sup><span>/Lượt</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          D7 </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              1.2GB dung lượng tốc độ cao
                                              (hết dung lượng ưu đãi ngừng
                                              truy cập internet).
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      7.000<sup>đ</sup><span>/Lượt</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          TD5 </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Sử dụng miễn phí 100% dung
                                              lượng data không giới hạn
                                              tốc độ cao. từ 0h00 đến
                                              5h59p59
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      5.000<sup>đ</sup><span>/Lượt</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="row row-plus hidden">
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          BIGFD18 </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              800MB Data tốc độ cao.
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      18.000<sup>đ</sup><span>/tháng</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          FX18 </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Data mua thêm cho gói cước
                                              chính đang dùng
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              800MB Data tốc độ cao
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      18.000<sup>đ</sup><span>/tháng</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          ZALO1 </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Miễn phí Data trong 24 giờ
                                              khi sử dụng dịch vụ Zalo
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      1.000<sup>đ</sup><span>/Lượt</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="row row-plus hidden">
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          FX68 </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Data mua thêm cho gói cước
                                              chính đang dùng.
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              3.8Gb Data tốc độ cao.
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      68.000<sup>đ</sup><span>/tháng</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="row action block_action text-center">
                                <a class="btn btn-prev hidden"
                                   onclick="shortenPackage(this)">
                                  <i class="fa fa-angle-double-up"></i>
                                </a>
                                <a class="btn btn-next" onclick="showAllPackage(this)">
                                  <i class="fa fa-angle-double-down"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>


                    </div>
                    <div role="tabpanel" class="tab-pane " id="block_package_vas" data-type="4">
                      <div class="package_other">
                        <div class="container">
                          <div class="title text-center">
                            <h3>Các gói cước ưu đãi khác</h3>
                          </div>

                          <div class="content">
                            <div class="block_package block_package_other">

                              <div class="row">
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          MOBILETV </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Dịch vụ cho phép toàn bộ
                                              thuê bao (trả sau, trả
                                              trước) của Vinaphone có thể
                                              xem TiVi trực tiếp (Live TV)
                                              trên máy di động của mình
                                              mọi lúc, mọi nơi sử dụng
                                              mạng GPRS/EDGE hoặc 3G/4G.
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      10.000<sup>đ</sup><span>/tuần</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          VCLIP </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Dịch vụ Vclip: là một cổng
                                              cung cấp các tiện ích xem,
                                              tải, chia sẻ…….các nội dung
                                              liên quan đến Video clip cho
                                              các khách hàng là thuê bao
                                              mạng Vinaphone...
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      5.000<sup>đ</sup><span>/tuần</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          SONGKHOE </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Gói Sức khỏe mẹ và bé: Tư
                                              vấn Sức khỏe mẹ và bé, tra
                                              cứu thông tin về các bệnh
                                              thường gặp (triệu chứng,
                                              cách phòng tránh &amp; chữa
                                              trị…) nhanh nhạy, chính xác.
                                              Tra cứu lịch tiêm chủng, xem
                                              các video tư vấn sức khỏe mẹ
                                              và bé do các chuyên gia biên
                                              soạn.
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      7.000<sup>đ</sup><span>/tuần</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="row">
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          DICHVUTHUOC </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Cung cấp thông tin y tế, sức
                                              khỏe, bệnh dịch và
                                              phòng/chữa bệnh hữu ích phục
                                              vụ cho việc bảo vệ sức khỏe
                                              cộng đồng, gia đình và cá
                                              nhân...
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      5.000<sup>đ</sup><span>/tuần</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          BONGDA4G </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Bóng đá 4G là chương trình
                                              tập trung đi sâu cung cấp
                                              những thông tin về các giải
                                              đấu, các trận đấu nhanh nhất
                                              hot nhất, giúp cho khách
                                              hàng có những thông tin bổ
                                              ích về chiến thuật, lịch thi
                                              đấu, sơ đồ và các thông tin
                                              về cầu thủ trong các trận
                                              đấu.
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      7.000<sup>đ</sup><span>/tuần</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          CALLBLOCKING </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Call blocking là dịch vụ
                                              quản lý tổng thể các cuộc
                                              gọi đến máy điện thoại di
                                              động của các thuê bao mạng
                                              VinaPhone theo các tính năng
                                              của dịch vụ: Chặn cuộc gọi
                                              đến, Chuyển cuộc gọi đến,
                                              Nhận cuộc gọi đến.
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      10.000<sup>đ</sup><span>/tháng</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="row row-plus hidden">
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          DICHVUTHUOC </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              GÓI VIP
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              - Bản tin sức khỏe
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              - Video Y tế
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              - Bách khoa toàn thư về bệnh
                                              lý
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              - Tư vấn sức khỏe ....
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      10.000<sup>đ</sup><span>/tuần</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          DICHVUTHUOC </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              - Cung cấp thông tin y tế,
                                              sức khỏe, bệnh dịch và
                                              phòng/chữa bệnh hữu ích phục
                                              vụ cho việc bảo vệ sức khỏe
                                              cộng đồng, gia đình và cá
                                              nhân.
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              - Cung cấp video, clip về
                                              bản tin Y tế nổi bật trong
                                              ngày, những nghiên cứu y
                                              khoa mới nhất...
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      1.000<sup>đ</sup><span>/ngày</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          90PHUT </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              TRẬN CẦU VÀNG
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Cung cấp thông tin mỗi ngày
                                              về một trận đấu bóng đá đỉnh
                                              cao được nhiều người trông
                                              đợi với những bình luận
                                              chính xác được chuyên gia
                                              hàng đầu nhận định như kèo
                                              phụ sáng nhất, phạt góc,
                                              bóng rung, ném biên....
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      2.000<sup>đ</sup><span>/ngày</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="row row-plus hidden">
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          SONGKHOE </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Gói Phòng bệnh: Tư vấn cách
                                              phòng tránh các loại bệnh
                                              phổ biến. Giải đáp chuyên
                                              sâu về chế độ dinh dưỡng,
                                              cách chăm sóc sức khỏe dành
                                              cho người bị bệnh tiểu
                                              đường, béo phì, gout….
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      7.000<sup>đ</sup><span>/tuần</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          BONGDA4G </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Bóng đá 4G là chương trình
                                              tập trung đi sâu cung cấp
                                              những thông tin về các giải
                                              đấu, các trận đấu nhanh nhất
                                              hot nhất, giúp cho khách
                                              hàng có những thông tin bổ
                                              ích về chiến thuật, lịch thi
                                              đấu, sơ đồ và các thông tin
                                              về cầu thủ trong các trận
                                              đấu.
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      3.000<sup>đ</sup><span>/ngày</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          KIDSAFE </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Dịch vụ Kidsafe là dịch vụ
                                              giúp cho cha/mẹ là các thuê
                                              bao của Vinaphone có thể
                                              quản lý việc sử dụng điện
                                              thoại di động của con mình
                                              một cách hiệu quả và có ích.
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      7.000<sup>đ</sup><span>/tuần</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="row row-plus hidden">
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          JOBALERT </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Job Alert là dịch vụ cung
                                              cấp thông tin việc làm dành
                                              cho các đối tượng có như cầu
                                              tìm việc như Sinh Viên mới
                                              ra trường, và việc làm phổ
                                              thông đơn giản thời vụ, việc
                                              làm theo chuyên môn... Tổng
                                              hợp Miền Bắc.
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      3.000<sup>đ</sup><span>/ngày</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          90PHUT </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Dịch vụ 90PHUT là cổng thông
                                              tin giải trí chuyên biệt về
                                              bóng đá. Nơi cung cấp các
                                              tin tức chuyên sâu về thế
                                              giới bóng đá trong và ngoài
                                              sân cỏ như: Diễn biến trận
                                              đấu, lực lượng, thành tích
                                              đối đầu, kết quả và lịch thi
                                              đấu, thông tin chuyển nhượng
                                              ...
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      1.000<sup>đ</sup><span>/ngày</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          SONGKHOE </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Gói Điểm tin y tế: Cung cấp
                                              thông tin y tế &amp; chăm
                                              sóc sức khỏe với thông tin
                                              hoàn toàn tin cậy, từ nguồn
                                              cơ sở dữ liệu được cung cấp
                                              bởi những bác sĩ chuyên khoa
                                              và chuyên gia y tế có uy
                                              tín, đặc biệt là các thông
                                              tin cảnh báo dịch bệnh, sơ
                                              cứu cấp cứu…
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      7.000<sup>đ</sup><span>/tuần</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="row row-plus hidden">
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          JOBALERT </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Job Alert là dịch vụ cung
                                              cấp thông tin việc làm dành
                                              cho các đối tượng có như cầu
                                              tìm việc như Sinh Viên mới
                                              ra trường, và việc làm phổ
                                              thông đơn giản thời vụ, việc
                                              làm theo chuyên môn... Tổng
                                              hợp Miền Nam.
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      3.000<sup>đ</sup><span>/ngày</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          90PHUT </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              GIẢI MÃ TRẬN ĐẤU
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Cung cấp những con số thống
                                              kê, tỷ lệ đối đầu, phong độ
                                              gần đây để dự đoán diễn biến
                                              trận đấu, giải mã các tình
                                              huống có thể xảy ra trong
                                              trận đấu.
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      2.000<sup>đ</sup><span>/ngày</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          DICHVUTHUOC </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              GÓI VIP
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              - Bản tin sức khỏe
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              - Video Y tế
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              - Bách khoa toàn thư về bệnh
                                              lý
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              - Tư vấn sức khỏe ....
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      3.000<sup>đ</sup><span>/ngày</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="row row-plus hidden">
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          JOBALERT </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Job Alert là dịch vụ cung
                                              cấp thông tin việc làm dành
                                              cho các đối tượng có như cầu
                                              tìm việc như Sinh Viên mới
                                              ra trường, và việc làm phổ
                                              thông đơn giản thời vụ, việc
                                              làm theo chuyên môn... Tổng
                                              hợp Miền Trung.
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      3.000<sup>đ</sup><span>/ngày</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          VCLIP </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Khách hàng đăng ký gói cước
                                              VIP tháng của dịch vụ vClip
                                              được trở thành thành viên
                                              VIP trên trang
                                              http://clip.vn trong 30 ngày
                                              có giá trị tương đương
                                              60.000VNĐ/tháng: Xem phim
                                              tốc độ cao, có bản quyền,
                                              chất lượng full HD, không
                                              quảng cáo.
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      30.000<sup>đ</sup><span>/tháng</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          RBT </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Dịch vụ nhạc chờ cho người
                                              gọi
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      9.000<sup>đ</sup><span>/tháng</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="row row-plus hidden">
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          CEME </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              CeeMe là ứng dụng kết nối
                                              giữa người hâm mộ với thần
                                              tượng, người nổi tiếng thuộc
                                              đa dạng các lĩnh vực (giải
                                              trí, thể thao, kinh tế,
                                              chính trị, khoa học…).
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      10.000<sup>đ</sup><span>/tuần</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          MCA </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Dịch vụ thông báo cuộc gọi
                                              nhỡ
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      2.000<sup>đ</sup><span>/tuần</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-sm-4">
                                  <div class="item_package item_package_other">
                                    <div class="title">
                                      <a href="#">
                                        <h4>
                                          MOBILETV </h4>
                                        <p>&nbsp;</p>
                                      </a>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="package_description">


                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-3">
                            <span class="package_icon">
                                <img src="../assets/images/check.png"
                                     style="width:19px; margin-left:1px">
                            </span>
                                          </div>
                                          <div class="col-9">
                                            <div class="content">
                                              Dịch vụ cho phép toàn bộ
                                              thuê bao (trả sau, trả
                                              trước) của Vinaphone có thể
                                              xem TiVi trực tiếp (Live TV)
                                              trên máy di động của mình
                                              mọi lúc, mọi nơi sử dụng
                                              mạng GPRS/EDGE hoặc 3G/4G.
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    <div class="price">
                                      3.000<sup>đ</sup><span>/ngày</span>
                                    </div>

                                    <div class="item_package_separator"></div>

                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="row action block_action text-center">
                                <a class="btn btn-prev hidden"
                                   onclick="shortenPackage(this)">
                                  <i class="fa fa-angle-double-up"></i>
                                </a>
                                <a class="btn btn-next" onclick="showAllPackage(this)">
                                  <i class="fa fa-angle-double-down"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div role="tabpanel" class="tab-pane " id="block_package_flexible"
                         data-type="11">
                      <div class="package_freedoo">
                        <div class="container">
                          <div class="content">
                            <div class="block_package">
                              <div class="row">
                                <div class="col-sm-4">
                                  <div class="item_package">
                                    <div class="title">
                                      <a href="#">
                                        <h4>ĐĂNG KÝ THEO NGÀY</h4>
                                      </a>
                                    </div>
                                    <div class="item_package_separator"></div>
                                    <div class="package_description">
                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-12">
                                            <div class="content">
                                              <p>Khách hàng tùy ý lựa chọn
                                                các gói và mức giá phù
                                                hợp với mục đích sử
                                                dụng</p>
                                              <p>&nbsp;</p>
                                              <p>Gói cước theo ngày thời
                                                hạn sử dụng đến 24h cùng
                                                ngày đăng ký</p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="price" style="padding: 0;">
                                      Linh hoạt
                                    </div>
                                    <div class="item_package_separator"></div>
                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-sm-4">
                                  <div class="item_package">
                                    <div class="title">
                                      <a href="#">
                                        <h4>ĐĂNG KÝ THEO THÁNG</h4>
                                      </a>
                                    </div>
                                    <div class="item_package_separator"></div>
                                    <div class="package_description">
                                      <div class="short_des">
                                        <div class="row">
                                          <div class="col-12">
                                            <div class="content">
                                              <p>Khách hàng tùy ý lựa chọn
                                                các gói và mức giá phù
                                                hợp với mục đích sử
                                                dụng</p>
                                              <p>&nbsp;</p>
                                              <p>Gói cước theo ngày thời
                                                hạn sử dụng 30 ngày tính
                                                từ ngày đăng ký gói</p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="price" style="padding: 0">
                                      Linh hoạt
                                    </div>
                                    <div class="item_package_separator"></div>
                                    <div class="action text-center">
                                      <a href="#"
                                         class="btn btn-register">
                                        Đăng ký </a>
                                    </div>

                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>-->
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </div>
    </div>
    <!-- End id main-content -->
  </div>
</div>
