import React from "react";
import "./styles.scss";
import img from "../../img/thumbnail.png";

function OurStores() {
  return (
    <div className="container info_form">
      <div className="product mtb">
        <div className="locations">
          <div className="locations_header box_shadow">
            <h2 className="uppercase">Our Stores</h2>
          </div>
          <div className="store_list">
            <div className="list box_shadow">
              <div className="left">
                <div className="f_flex">
                  <div className="img">
                    <img src={img} alt="" />
                  </div>
                  <div className="left_info">
                    <span className="info">
                      <label htmlFor="name">Store:</label>
                      <h3>Shopmate Store</h3>
                    </span>
                    <span className="info">
                      <label htmlFor="location">LOCATION:</label>
                      <br />
                      <small>Odogunyan area opp. oando filling station</small>
                    </span>
                    <span className="info">
                      <label htmlFor="name">Working hours:</label>
                      <p>Mon to Fri. 6am to 8pm</p>
                    </span>
                    <span className="info">
                      <label htmlFor="name">Contact:</label>
                      <p>+23412345678</p>
                      <p>admin@gmail.com</p>
                    </span>
                  </div>
                </div>
              </div>
              <div className="right">
                <div className="map"></div>
              </div>
            </div>
            <div className="list box_shadow">
              <div className="left">
                <div className="f_flex">
                  <div className="img">
                    <img src={img} alt="" />
                  </div>
                  <div className="left_info">
                    <span className="info">
                      <label htmlFor="name">Store:</label>
                      <h3>Shopmate Store</h3>
                    </span>
                    <span className="info">
                      <label htmlFor="location">LOCATION:</label>
                      <br />
                      <small>Odogunyan area opp. oando filling station</small>
                    </span>
                    <span className="info">
                      <label htmlFor="name">Working hours:</label>
                      <p>Mon to Fri. 6am to 8pm</p>
                    </span>
                    <span className="info">
                      <label htmlFor="name">Contact:</label>
                      <p>+23412345678</p>
                      <p>admin@gmail.com</p>
                    </span>
                  </div>
                </div>
              </div>
              <div className="right">
                <div className="map"></div>
              </div>
            </div>
            <div className="list box_shadow">
              <div className="left">
                <div className="f_flex">
                  <div className="img">
                    <img src={img} alt="" />
                  </div>
                  <div className="left_info">
                    <span className="info">
                      <label htmlFor="name">Store:</label>
                      <h3>Shopmate Store</h3>
                    </span>
                    <span className="info">
                      <label htmlFor="location">LOCATION:</label>
                      <br />
                      <small>Odogunyan area opp. oando filling station</small>
                    </span>
                    <span className="info">
                      <label htmlFor="name">Working hours:</label>
                      <p>Mon to Fri. 6am to 8pm</p>
                    </span>
                    <span className="info">
                      <label htmlFor="name">Contact:</label>
                      <p>+23412345678</p>
                      <p>admin@gmail.com</p>
                    </span>
                  </div>
                </div>
              </div>
              <div className="right">
                <div className="map"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurStores;
