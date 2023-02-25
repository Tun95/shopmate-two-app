import React, { useRef, useState } from "react";
import JoditEditor from "jodit-react";
import PublishIcon from "@mui/icons-material/Publish";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import DeleteIcon from "@mui/icons-material/Delete";
import men2 from "../../assets/men2.png";
import { Helmet } from "react-helmet-async";

function NewProduct({ colors, sizes, brands }) {
  const editor = useRef(null);

  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [keygen, setKeygen] = useState("");
  const [countInStock, setCountInStock] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [desc, setDesc] = useState("");
  const [gender, setGender] = useState([]);
  const [category, setCategory] = useState([]);
  const [color, setColor] = useState([]);
  const [size, setSize] = useState([]);
  const [brand, setBrand] = useState([]);
  const [image, setImage] = useState("");
  const [images, setImages] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  const uploadFileHandler = (e) => {
    e.preventDefault();
  };

  const deleteFileHandler = (e) => {
    e.preventDefault();
  };

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 210,
      },
    },
  };
  return (
    <>
      <Helmet>
        <title>Add New Product</title>
      </Helmet>
    <div className="container">
      <div className="product_edit">
        <div className="box_shadow mtb">
          <div className="productTitleContainer">
            <h2 className="productTitle featured uppercase">New Product </h2>
          </div>

          <div className="productBottom mtb">
            <form action="" onSubmit={submitHandler}>
              <div className="productForm">
                <div className="productFormLeft_styles">
                  <div className="productFormLeft productFormLeft-one">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      maxLength="23"
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Novelty TShirt"
                    />
                    <label htmlFor="slug">Slug</label>
                    <input
                      type="text"
                      id="slug"
                      value={slug}
                      onChange={(e) => setSlug(e.target.value)}
                      placeholder="Novelty-TShirt"
                    />
                    <label htmlFor="keygen">Keygen</label>
                    <input
                      type="text"
                      id="keygen"
                      value={keygen}
                      onChange={(e) => setKeygen(e.target.value)}
                      placeholder="Men BK3569"
                    />
                    <label htmlFor="qty">Quantity</label>
                    <input
                      type="text"
                      id="qty"
                      value={countInStock}
                      onChange={(e) => setCountInStock(e.target.value)}
                      placeholder="123"
                    />
                  </div>
                  <div className="productFormLeft productFormLeft-Two">
                    <label htmlFor="gender">Gender</label>
                    <FormControl variant="filled" size="small" id="formControl">
                      <Select
                        labelId="mui-simple-select-label"
                        id="mui_simple_select"
                        value={gender}
                        label={gender}
                        SelectDisplayProps={{
                          style: { paddingTop: 8, paddingBottom: 8 },
                        }}
                        MenuProps={MenuProps}
                        onChange={(e) => setGender(e.target.value)}
                      >
                        {/* {genderselect.map((g, index) => ( */}
                        <MenuItem>gender</MenuItem>
                        {/* ))} */}
                      </Select>
                    </FormControl>
                    <label htmlFor="category" className="ccatb-des">
                      Category
                    </label>
                    <FormControl variant="filled" size="small" id="formControl">
                      {/* <InputLabel id="mui-simple-select-label">
                        Category
                      </InputLabel> */}
                      <Select
                        labelId="mui-simple-select-label"
                        id="mui_simple_select"
                        multiple
                        MenuProps={MenuProps}
                        SelectDisplayProps={{
                          style: { paddingTop: 8, paddingBottom: 8 },
                        }}
                        value={category}
                        label={category}
                        onChange={(e) => setCategory(e.target.value)}
                      >
                        {/* {categories?.map((c, index) => ( */}
                        <MenuItem>category</MenuItem>
                        {/* ))} */}
                      </Select>
                    </FormControl>
                    <label htmlFor="color" className="ccatb-des">
                      Color
                    </label>
                    <FormControl variant="filled" size="small" id="formControl">
                      {/* <InputLabel id="mui-simple-select-label">
                        Color
                      </InputLabel> */}
                      <Select
                        labelId="mui-simple-select-label"
                        id="mui_simple_select"
                        multiple
                        MenuProps={MenuProps}
                        SelectDisplayProps={{
                          style: { paddingTop: 8, paddingBottom: 8 },
                        }}
                        value={color}
                        label={color}
                        onChange={(e) => setColor(e.target.value)}
                      >
                        {colors?.map((c, index) => (
                          <MenuItem key={index} value={c.color}>
                            <img
                              src={c.color}
                              alt={c.color}
                              className="color_image_size"
                            />
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    <label htmlFor="img" className="ccatb-des">
                      Image
                    </label>
                    <input
                      type="text"
                      id="img"
                      value={image}
                      onChange={(e) => setImage(e.target.value)}
                      placeholder="/imgs/kid1.png"
                    />
                  </div>
                  <div className="productFormLeft productFormLeft-three">
                    <label htmlFor="size">Size</label>
                    <FormControl variant="filled" size="small" id="formControl">
                      {/* <InputLabel id="mui-simple-select-label">Size</InputLabel> */}
                      <Select
                        labelId="mui-simple-select-label"
                        id="mui_simple_select"
                        multiple
                        MenuProps={MenuProps}
                        SelectDisplayProps={{
                          style: { paddingTop: 8, paddingBottom: 8 },
                        }}
                        value={size}
                        label={size}
                        onChange={(e) => setSize(e.target.value)}
                      >
                        {sizes?.map((s, index) => (
                          <MenuItem key={index} value={s.size}>
                            {s.size}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    <label htmlFor="brand" className="ccatb-des">
                      Brand
                    </label>
                    <FormControl variant="filled" size="small" id="formControl">
                      <Select
                        labelId="mui-simple-select-label"
                        id="mui_simple_select"
                        multiple
                        MenuProps={MenuProps}
                        SelectDisplayProps={{
                          style: { paddingTop: 8, paddingBottom: 8 },
                        }}
                        value={brand}
                        label={brand}
                        onChange={(e) => setBrand(e.target.value)}
                      >
                        {brands?.map((b, index) => (
                          <MenuItem key={index} value={b.brand}>
                            {b.brand}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    <label htmlFor="price">Price</label>
                    <input
                      type="text"
                      id="price"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      placeholder="23"
                    />
                    <label htmlFor="discount">Discount</label>
                    <input
                      type="text"
                      id="discount"
                      value={discount}
                      onChange={(e) => setDiscount(e.target.value)}
                      placeholder="10"
                    />
                  </div>
                </div>
                <div className="productFormRight mtb">
                  <div className="productUpload box_shadow">
                    <img src={men2} alt="" className="productUploadImg" />
                    {/* {image === loadingUpload && <LoadingBox></LoadingBox>} */}
                    <label htmlFor="file">
                      <PublishIcon
                        className="upload-btn"
                        onChange={uploadFileHandler}
                      />
                    </label>
                    <input
                      onChange={uploadFileHandler}
                      type="file"
                      id="file"
                      style={{ display: "none" }}
                    />
                  </div>
                  <div className="productUpload box_shadow mtb">
                    <div className="productUploadImg-delete">
                      {images.map((x) => (
                        <div key={x}>
                          <img
                            src={x}
                            alt=""
                            className="productUploadImg wtdh-imgs"
                          />
                          <DeleteIcon
                            onClick={() => deleteFileHandler(x)}
                            className="deleteImages"
                          />
                        </div>
                      ))}
                    </div>
                    <label htmlFor="files" className="products-images-upload">
                      {/* {images.length === 0 && <MessageBox>No Image</MessageBox>} */}
                      {/* {images && loadingUpload && <LoadingBox></LoadingBox>} */}
                      <PublishIcon
                        className="upload-btn images-list-l"
                        onChange={(e) => uploadFileHandler(e, true)}
                      />
                    </label>
                    <input
                      style={{ display: "none" }}
                      type="file"
                      id="files"
                      onChange={(e) => uploadFileHandler(e, true)}
                    />
                  </div>
                </div>
              </div>
              <div className="lower_test">
                <label htmlFor="">Description</label>
                <JoditEditor
                  className="editor"
                  id="desc"
                  ref={editor}
                  value={desc}
                  // config={config}
                  tabIndex={1} // tabIndex of textarea
                  onBlur={(newContent) => setDesc(newContent)} // preferred to use only this option to update the content for performance reasons
                  onChange={(newContent) => {}}
                />
              </div>
              <button className="productButton main_btn mtb ">Add New</button>
            </form>
          </div>
        </div>
      </div>
    </div></>
  );
}

export default NewProduct;
