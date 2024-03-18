import React, { useEffect, useState } from 'react';
import axios from '../api/axios';
import { useParams } from 'react-router-dom';
import css from '../assets/css_admin/updateprod.module.css';

export const Updateprod = () => {
  const [product, setProduct] = useState({});
  const[notfication,setNotfication]=useState();
  const params = useParams();
  const product_id = params.id;

  useEffect(() => {
    axios.get('/admin/products/' + product_id)
      .then((resp) => setProduct(resp.data))
      .catch((err) => console.log(err));
  }, [product_id]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleUpdate = async (event) => {
    event.preventDefault();
    const data = {
      title: product.title,
      price: product.price,
      category_id: product.category_id,
      description: product.description,
      image: product.image,
    };

    try {
      const update = await axios.put('admin/updateproduct/' + product_id, data);
      setNotfication(update?.data.messege);

    } catch (e) {
      console.log(e.response.data.errors);
    }
  };

  return (

    <div className={css.parent}>

      <p className={css.head}>Update Product</p>
      {notfication && <div className={css.notf}>{notfication}</div> }


      <form onSubmit={handleUpdate}>

        <div className={css.row_two}>
          <div className={css.col}>
            <label>Title</label>
            <input type="text" name="title"  value={product.title || ''} onChange={handleInput} />
          </div>
        </div>
        <div className={css.row_two}>
          <div className={css.col}>
            <label>Price</label>
            <input type="text" name="price" value={product.price || ''} onChange={handleInput} />
          </div>
        </div>
        <div className={css.row_two}>
          <div className={css.col}>
            <label>Category ID</label>
            <input type="text" name="category_id" value={product.category_id || ''} onChange={handleInput} />
          </div>
        </div>
        <div className={css.row_two}>
          <div className={css.col}>
            <label>Image</label>
            <input type="text"  name="image" value={product.image || ''} onChange={handleInput} />
          </div>
        </div>
        <div className={css.row_three}>
          <label>Description</label>
          <textarea name="description" value={product.description || ''} onChange={handleInput} rows="4" cols="50" />
        </div>
        <button type="submit">Update</button>
      </form>

    </div>
  );
};
