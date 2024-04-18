import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
const OrderHistory = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get("http://jul2nd.ddns.net/api/orders", {
          headers: {
            Authorization: "Bearer " + getCookie("token"),
          },
        });
        setOrders(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching cart items:", error);
        setLoading(false);
      }
    };
    fetchOrders();
  }, []);
  function getCookie(name) {
    const value = "; ";
    const parts = document.cookie.split(value);
    for (let i = 0; i < parts.length; i++) {
      const part = parts[i].split("=");
      if (part.length === 2 && name === part[0]) {
        return part[1];
      }
    }
    return "";
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {orders.length === 0 ? (
        <div className="container text-center text-black">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h3 className="mt-5">Bạn chưa từng mua gì hết</h3>
            <p className="lead" style={{margin: "30px auto"}}>
              Hãy đến trang chủ và mua những gì bạn muốn &#128538;
            </p>
            <Link to="/" className="btn btn-primary" style={{margin: "10px auto"}}
              >Đến trang chủ</Link>
          </div>
        </div>
      </div>
      ) : (
        <div className="container form-container">
          <h2>Lịch sử mua hàng</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Mã hoá đơn</th>
                <th>Ngày</th>
                <th>
                    Chi tiết
                </th>
                <th>Tổng</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr className="productItem">
                  <td>{order.id}</td>
                  <td>{order.date}</td>
                  <td>{order.items.map((item)=>(
                    <tr>
                        <td>{item.product.name}</td>
                        <td>{item.product.stock}</td>
                        <td>{item.product.price}</td>
                        <td><img src={item.product.image}></img></td>
                    </tr>
                  ))}</td>
                  <td>
                    <label>
                      <span readonly>
                        {order.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}{" "}đ
                      </span>
                    </label>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
export default OrderHistory;
