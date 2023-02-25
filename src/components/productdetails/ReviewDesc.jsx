import React from "react";
import wristWatch from "../../img/slide-1.png";
import { Link } from "react-router-dom";
function ReviewDesc() {
  return (
    <>
      <section className=" background review-section ">
        <div className="rev ">
          <div className="rev-style">
            <div className="rev-head c_flex">
              <h3>
                Reviews <span>(3)</span>
              </h3>
              <span>
                <Link to="/review">Write a review</Link>
              </span>
            </div>
            <div className="review-details">
              <div className="rev-header c_flex">
                <div className="a_flex">
                  <div className="img">
                    <img src={wristWatch} alt="" />
                  </div>
                  <div className="name-stars ">
                    <div className="name">Tunji Josh</div>
                    <div className="rate">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                  </div>
                </div>
                <div className="date">Jul 29, 2022</div>
              </div>
              <div className="comment">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consectetur neque, quidem harum tempore, laboriosam modi magni
                  sapiente, illum pariatur dolorum nemo! Magnam quaerat ducimus,
                  delectus vero ipsum facere quis ipsam fuga? Obcaecati odio
                  porro, eveniet, ipsum quidem dolorum doloremque ea mollitia
                  aliquid nulla error temporibus eaque beatae soluta modi
                  consequatur tempore voluptatibus earum rerum facere,
                  praesentium deserunt tenetur expedita. Ducimus.
                </p>
              </div>
              <div className="like">
                0<i className="fa fa-thumbs-up"></i>
              </div>
            </div>
            <div className="review-details">
              <div className="rev-header c_flex">
                <div className="a_flex">
                  <div className="img">
                    <img src={wristWatch} alt="" />
                  </div>
                  <div className="name-stars ">
                    <div className="name">Tunji Josh</div>
                    <div className="rate">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                  </div>
                </div>
                <div className="date">Jul 29, 2022</div>
              </div>
              <div className="comment">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consectetur neque, quidem harum tempore, laboriosam modi magni
                  sapiente, illum pariatur dolorum nemo! Magnam quaerat ducimus,
                  delectus vero ipsum facere quis ipsam fuga? Obcaecati odio
                  porro, eveniet, ipsum quidem dolorum doloremque ea mollitia
                  aliquid nulla error temporibus eaque beatae soluta modi
                  consequatur tempore voluptatibus earum rerum facere,
                  praesentium deserunt tenetur expedita. Ducimus.
                </p>
              </div>
              <div className="like">
                0<i className="fa fa-thumbs-up"></i>
              </div>
            </div>
            <div className="review-details">
              <div className="rev-header c_flex">
                <div className="a_flex">
                  <div className="img">
                    <img src={wristWatch} alt="" />
                  </div>
                  <div className="name-stars ">
                    <div className="name">Tunji Josh</div>
                    <div className="rate">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                  </div>
                </div>
                <div className="date">Jul 29, 2022</div>
              </div>
              <div className="comment">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consectetur neque, quidem harum tempore, laboriosam modi magni
                  sapiente, illum pariatur dolorum nemo! Magnam quaerat ducimus,
                  delectus vero ipsum facere quis ipsam fuga? Obcaecati odio
                  porro, eveniet, ipsum quidem dolorum doloremque ea mollitia
                  aliquid nulla error temporibus eaque beatae soluta modi
                  consequatur tempore voluptatibus earum rerum facere,
                  praesentium deserunt tenetur expedita. Ducimus.
                </p>
              </div>
              <div className="like">
                0<i className="fa fa-thumbs-up"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ReviewDesc;
