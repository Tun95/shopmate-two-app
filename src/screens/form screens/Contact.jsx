import { useFormik } from "formik";
import React, { useRef, useState } from "react";

import JoditEditor from "jodit-react";
import { Helmet } from "react-helmet-async";
import "./style.scss";
import { contactSchema } from "../../components/schemas/Index";

function Contact() {
  const editor = useRef(null);
  const [desc, setDesc] = useState("");
  const onSubmit = (values, actions) => {
    setTimeout(() => {
      actions.resetForm();
    }, 1000);
  };
  const {
    values,
    errors,
    handleBlur,
    touched,
    isSubmitting,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      description: "",
    },
    validationSchema: contactSchema,
    onSubmit,
  });
  console.log(errors);
  return (
    <div className="form_container">
      <Helmet>
        <title>Contact us</title>
      </Helmet>
      <div className="form_box_content">
        <form action="" onSubmit={handleSubmit}>
          <div className="inner-form">
            <h2 className="form_header">Contact Us</h2>
            <div className="featured_box">
              <div className="featured">
                <div className="icon">
                  <i className="fa-brands fa-facebook-messenger messenger"></i>
                </div>
                <div className="content">
                  <span className="name">
                    <label htmlFor="name">Store:</label>
                    <div className="">Shopmate store</div>
                  </span>
                  <div className="via_contact">
                    <label htmlFor="via">Via Messenger:</label>
                    <div className="contact_btn_social">
                      <a
                        className="messenger"
                        href="jfjfhj"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa-brands fa-facebook-messenger"></i>{" "}
                        Messenger
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="featured">
                <div className="icon">
                  <i className="fa-brands fa-whatsapp whatsapp"></i>
                </div>
                <div className="content">
                  <span className="name">
                    <label htmlFor="name">Store:</label>
                    <div className="">Shopmate Store</div>
                  </span>
                  <div className="via_contact">
                    <label htmlFor="via">Via Whatsapp:</label>
                    <div className="contact_btn_social">
                      <a
                        className="whatsapp"
                        href="jfjfhj"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa-brands fa-whatsapp"></i> Whatsapp
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact_form_group">
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.name && touched.name ? "input-error" : ""}
                  id="name"
                  placeholder="Enter your name"
                />
                {errors.name && touched.name && (
                  <p className="error">{errors.name}</p>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="email">Eamil:</label>
                <input
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.email && touched.email ? "input-error" : ""}
                  id="email"
                  placeholder="Enter your email"
                />
                {errors.email && touched.email && (
                  <p className="error">{errors.email}</p>
                )}
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="subject">Title:</label>
              <input
                type="subject"
                value={values.subject}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.subject && touched.subject ? "input-error" : ""
                }
                id="subject"
                placeholder="Your message title"
              />
              {errors.subject && touched.subject && (
                <p className="error">{errors.subject}</p>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="desc">Message:</label>
              <JoditEditor
                className="editor"
                id="desc"
                ref={editor}
                // value={desc}
                // config={config}
                tabIndex={1} // tabIndex of textarea
                // onBlur={(newContent) => setDesc(newContent)} // preferred to use only this option to update the content for performance reasons
                // onChange={(newContent) => {}}
                value={values.description}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.description && touched.description && (
                <p className="error">{errors.description}</p>
              )}
            </div>
            <div className="form-btn">
              <button disabled={isSubmitting} className="form_submit_btn">
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
