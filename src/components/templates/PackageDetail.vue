<div id="main-content">
  <div id="packages" class="page_detail">
    <section class="ss-bg">
      <section class="ss-box1">
        <div class="container no_pad_xs">
          <div class="ss-box1-right-all">
            <div class="package_info">
              <div class="container">
                <div class="row">
                  <div class="col-md-4 no_pad_left">
                    <div class="card">
                      <img :src="'https://mobifreedo.herokuapp.com'+(package.img)" alt="image">
                    </div>
                  </div>
                  <div class="col-md-8">
                    <div class="title">{{package.title}}</div>
                    <div class="txt_lg lbl_color_blue">{{package.price_amount}}</div>
                    <div class="short_des" v-if="package.highlights">
                      <p v-for="hightlight of package.highlights.split('\n')" :key="hightlight">- {{hightlight}}</p>
                    </div>
                    <div class="row_btn">
                      <router-link :to="{name: 'PackageRegister', params:{name:package.title}}"
                                   class="btn btn_green">Đăng ký ngay</router-link>
                    </div>
                  </div>
                  <div class="space_1"></div>
                </div>
              </div>
            </div>
            <div class="space_10"></div>
            <div class="full_description">
              <div class="title">Thông tin chi tiết</div>
              <div class="description">
                <p v-html="package.content"></p>
              </div>
            </div>
          </div>
          <div class="space_30"></div>
          <div class="ss-box1-right-all">
            <div class="ss-box1-right-title">
              <div class="ss-box1-left-top-tit border_bottom">
                <span class="uppercase">Gói cước cùng loại</span>
              </div>
            </div>
            <div class="list_package">
              <div class="package_other">
                <div class="content">
                  <div class="block_package block_package_other">
                    <div v-if="related_package && related_package.length" class="row">
                      <div class="col-sm-4" v-for="item of related_package" v-bind:key="item">
                        <div class="item_package">
                          <div class="title">
                            <router-link :to="{name: 'PackageDetail', params:{name:item.title}}">
                              <h4>{{item.title}}</h4>
                              <p>{{item.subtitle}}</p>
                            </router-link>
                          </div>
                          <div class="item_package_separator"></div>
                          <div class="package_description">
                            <div class="call_des">
                              <div class="row">
                                <div v-if="item.highlights.split('\n')[0]" class="col-3">
                                            <span class="package_icon">
                                                <img src="~assets/images/package_icon_phonewave.png">
                                            </span>
                                </div>
                                <div class="col-9">
                                  <div class="content">
                                    <p>{{item.highlights.split('\n')[0]}}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div v-if="item.highlights.split('\n')[1]" class="data_des">
                              <div class="row">
                                <div class="col-3">
                                            <span class="package_icon">
                                                <img src="~assets/images/package_icon_phone.png">
                                            </span>
                                </div>
                                <div class="col-9">
                                  <div class="content">
                                    <p>{{item.highlights.split('\n')[1]}}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="price">
                            {{item.price_amount}}<sup>đ</sup><span>/{{item.interval}}</span>
                          </div>
                          <div class="item_package_separator"></div>
                          <div class="action text-center">
                            <router-link :to="{name: 'PackageRegister', params:{name:item.title}}"
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
          <div class="space_30"></div>
        </div>
      </section>
    </section>
    <!--end section #ss-bg -->
  </div>
  <div id="confirm" class="modal fade">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <a class="close" data-dismiss="modal">×</a>
        </div>
        <div class="modal-body text-center">
          <p class="font_16">
            Gói cước ưu đãi này chỉ dành riêng cho Cộng tác viên dùng SIM Freedoo. Nếu bạn là CTV hãy đăng nhập hoặc gia
            nhập cùng Freedoo để sở hữu gói cước này.
          </p>
          <div class="space_30"></div>
          <div class="text-center">
            <a class="btn btn_green" href="https://freedoo.vnpt.vn/sso/login/002">Gia nhập với chúng tôi</a> <a
            class="btn btn_green" href="https://freedoo.vnpt.vn/sso/login/001">Đăng nhập</a></div>
        </div>
      </div>
    </div>
  </div>
  <!--<script>
    function showAllPackage(selector) {
      $(selector).closest('.block_package').find('div.row-plus').each(function () {
        $(this).removeClass('hidden');
      });
      $(selector).addClass('hidden');
      $(selector).closest('.action').find('.btn-prev').first().removeClass('hidden');
    }

    function shortenPackage(selector) {
      $(selector).closest('.block_package').find('div.row-plus').each(function () {
        $(this).addClass('hidden');
      });
      $(selector).addClass('hidden');
      $(selector).closest('.action').find('.btn-next').first().removeClass('hidden');
    }

  </script>-->
</div>
