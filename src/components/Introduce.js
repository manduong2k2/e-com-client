import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import bannerImage from '../images/abcd.jpeg';
const Introduce = () => {
  return (
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="overlay">
            <img style={{
              width:"70%"}}
              src={bannerImage}
              alt="Your Image Alt Text"
            />
            <h1 style={{position: "absolute", color: "grey"}}>
              CHÀO MỪNG BẠN ĐẾN VỚI ECOM
            </h1>
          </div>
          <br />
          <h4>Giới thiệu</h4>
          <p>
            Cảm ơn quý khách đã quan tâm đến sức khỏe, vóc dáng bản thân để Ecom
            Store (Ecomstore.com) có cơ hội được tiếp cận và hỗ trợ.
            <br />
            Ecom Store cảm ơn các bạn đã cho chúng tôi cơ hội trở thành người
            bạn đem đến những sản phẩm và trải nghiệm tuyệt vời từ đội ngũ tư
            vấn có chuyên môn và nhiệt huyết.
            <br />
            Lấy khách hàng là yếu tố quan trọng nhất, hiệu quả của sản phẩm đối
            với từng khách hàng là niềm vui của chúng tôi. Ecom Store luôn là
            địa chỉ tin cậy cho hàng triệu người tiêu dùng trong lĩnh vực dinh
            dưỡng thể hình, thể thao.
            <br />
            Ecom Store Nhà nhập khẩu và phân phối tư vấn dinh dưỡng thể hình,
            thể thao cao cấp chính hãng tại Việt Nam.
          </p>
          <h4>Chúng tôi sẽ giúp được gì cho bạn ??</h4>
          <p>
            Ecom Store vừa là nơi cung cấp nguồn thực phẩm dinh dưỡng bổ xung
            cho quý khách muốn tăng cường sức khỏe và thay đổi vóc dáng bao gồm:
            <br />
            – Tăng cân, tăng cơ.
            <br />
            – Tăng cơ, giảm mỡ.
            <br />
            – Tăng sức khỏe, sức bền.
            <br />
            – Hỗ trợ sức khỏe.
            <br />
            – Thời trang và phụ kiện.
            <br />
            Chúng tôi cũng sẽ là nơi hỗ trợ, tư vấn, theo sát các bạn trong suốt
            quá trình thay đổi bản thân. Hãy liên hệ ngay cho chúng tôi khi bạn
            cần!
            <br />
            Với phương châm "Bạn cần chúng tôi, chúng tôi cũng cần bạn", Ecom
            Store sẽ là địa chỉ tin cậy, uy tín để bạn thay đổi bản thân. Sản
            phẩm và dịch vụ luôn:
            <br />
            + Đúng cam kết, đúng chất lượng.
            <br />
            + Chất lượng phục vụ tốt nhất.
            <br />
            + Các chế độ ưu đãi tốt nhất.
            <br />
            + Giá cả phù hợp nhất.
            <br />
            Chúng tôi luôn lấy
            <b>“chất lượng sản phẩm và uy tín đối với khách hàng”</b> làm nòng
            cốt để phát triển sự nghiệp kinh doanh lâu dài. Ecom Store không
            ngừng tìm kiếm những dòng sản phẩm tốt nhất để đem tới cho khách
            hàng!
            <br />
            <b>Ecom Store</b> Mong muốn xây đựng một thương hiệu vững mạnh trên
            thị trường dinh dưỡng và làm đẹp.
            <br />
            <br />
            <b>Xin chân thành cảm ơn quý khách đã lựa chọn chúng tôi!</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Introduce;
