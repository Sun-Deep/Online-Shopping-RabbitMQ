import { useState } from "react";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const OrderModal = () => {
    return (
      <div className="modal">
        <div className="modal-header">
          <h3>Please Fill The Form</h3>
          <button onClick={() => setIsModalOpen(false)}>X</button>
        </div>
        <div className="modal-content">
          <label htmlFor="firstname">First Name</label> <br />
          <input type="text" name="firstname" /> <br />
          <label htmlFor="lastname">Last Name</label> <br />
          <input type="text" name="lastname" /> <br />
          <label htmlFor="phone">Phone</label> <br />
          <input type="text" name="phone" /> <br />
          <label htmlFor="email">Email</label> <br />
          <input type="email" name="email" />
          <button> Submit </button> <br />
        </div>
        <div className="modal-footer"></div>
      </div>
    );
  };

  return (
    <>
      <div className={isModalOpen ? "container fade" : "container"}>
        <div className="top-header">
          <p className="logo">SS</p>
          <p className="sub-heading"> sandeep studio</p>
        </div>
        <div className="main-content">
          <h1 className="hero-text top-text">moto</h1>
          <img src="/1.png" alt="" />
          <h1 className="hero-text bottom-text">riders</h1>
          <div className="feature">
            <div>
              <p className="feature-title">Engine</p>
              <p className="feature-value">
                250cc liquid-cooled 4-stroke, 4 volves
              </p>
            </div>
            <div>
              <p className="feature-title">Suspension</p>
              <p className="feature-value">KYB Speed-Sensetive inverted fork</p>
            </div>
            <div>
              <p className="feature-title">Trail</p>
              <p className="feature-value">4.7 in</p>
            </div>
          </div>
        </div>

        <div className="order-now">
          <button onClick={() => setIsModalOpen(true)}>Order Now</button>
        </div>
      </div>
      {isModalOpen ? <OrderModal /> : null}
    </>
  );
}
