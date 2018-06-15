export default {
data() {
  return {
    roaming_packages: {
      freedoo: [
        {
          id: 1,
          name: 'FHAPPY',
          type: 'Gói trả trước',
          src: 'fhappy-banner.png',
          call_content: '1.000 phút gọi nội mạng VinaPhone',
          data_content: '60 GB Data tốc độ cao',
          description: `<p>Quy định về sử dụng gói cước:<br>
                          ·&nbsp; &nbsp; Đăng ký gói cước:<br>
                          &nbsp; &nbsp; &nbsp;Qua Web<br>
                          ·&nbsp; &nbsp; Hủy gói cước:<br>
                          &nbsp; &nbsp; &nbsp;Qua Web<br>
                          &nbsp; &nbsp; &nbsp;Qua SMS (cú pháp HUY_&lt;tên gói&gt; gửi 900)<br>
                          -&nbsp; &nbsp; Tra cứu: Qua SMS:<br>
                          Lưu lượng thoại/sms: TRACUU_TENGOI gửi 900<br>
                          Tra cứu data: DATA gửi 888Thuê bao phải còn Tài khoản chính tối thiểu theo quy định đủ để gọi, nhắn tin, truy cập GPRS và còn thời hạn sử dụng.<br>
                          Thời hạn sử dụng:<br>
                          30 ngày kể từ thời điểm kích hoạt thành công.<br>
                          Giá cước: 79.000đ/30 ngày (Giá cước đã bao gồm VAT)</p>`,
          price: '49.0000',
          period: 'tháng'
        },
        {
          id: 2,
          name: 'FCLUB',
          type: 'Gói trả trước',
          call_content: '1.500 phút gọi nội mạng VinaPhone',
          data_content: '90 GB Data tốc độ cao',
          price: '79.0000',
          period: 'tháng'
        }
      ],
      others: [
        {
          id: 1,
          name: 'MOBILETV',
          type: '',
          content: ["Dịch vụ cho phép toàn bộ thuê bao (trả sau, trả trước) của Vinaphone có thể xem TiVi trực tiếp (Live TV) trên máy di động của mình mọi lúc, mọi nơi sử dụng mạng GPRS/EDGE hoặc 3G/4G."],
          price: '10.0000',
          period: 'tháng'
        },
        {
          id: 2,
          name: 'DICHVUTHUOC',
          type: '',
          content: ["- Cung cấp thông tin y tế, sức khỏe, bệnh dịch và phòng/chữa bệnh hữu ích phục vụ cho việc bảo vệ sức khỏe cộng đồng, gia đình và cá nhân.",
            "- Cung cấp video, clip về bản tin Y tế nổi bật trong ngày, những nghiên cứu y khoa mới nhất..."
          ],
          price: '1.000',
          period: 'ngày'
        },
        {
          id: 3,
          name: '90PHUT',
          type: '',
          content: ["TRẬN CẦU VÀNG",
            "Cung cấp thông tin mỗi ngày về một trận đấu bóng đá đỉnh cao được nhiều người trông đợi với những bình luận chính xác được chuyên gia hàng đầu nhận định như kèo phụ sáng nhất, phạt góc, bóng rung, ném biên...."
          ],
          price: '2.0000',
          period: 'ngày'
        },
        {
          id: 4,
          name: 'KIDSAFE',
          type: '',
          content: ["Dịch vụ Kidsafe là dịch vụ giúp cho cha/mẹ là các thuê bao của Vinaphone có thể quản lý việc sử dụng điện thoại di động của con mình một cách hiệu quả và có ích."],
          price: '7.0000',
          period: 'tuần'
        },
        {
          id: 5,
          name: 'VCLIP',
          type: '',
          content: ["Khách hàng đăng ký gói cước VIP tháng của dịch vụ vClip được trở thành thành viên VIP trên trang http://clip.vn trong 30 ngày có giá trị tương đương 60.000VNĐ/tháng: Xem phim tốc độ cao, có bản quyền, chất lượng full HD, không quảng cáo. "],
          price: '30.0000',
          period: 'tháng'
        },
        {
          id: 6,
          name: 'CEME',
          type: '',
          content: ["CeeMe là ứng dụng kết nối giữa người hâm mộ với thần tượng, người nổi tiếng thuộc đa dạng các lĩnh vực (giải trí, thể thao, kinh tế, chính trị, khoa học…). "],
          price: '10.0000',
          period: 'tuần'
        },
      ]
    }
  }
}
}
