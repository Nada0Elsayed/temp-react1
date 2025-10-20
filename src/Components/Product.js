import { Link } from "react-router-dom";
import "./Product.css"
function Product(props) {
    const { product, showbutton } = props;
    return (
      <div className="scard">
        <img
          src={product.image}
          className="card-img-top sm "
          alt={product.title}
        />
        {/* <div className="nn"> */}
          <h5 >{product.title}</h5>
          <p className="sp">
            {product.description}
          </p>
          <p>price:{product.price}$</p>
          {showbutton ? (
            <Link
              className="btn btn-primary "
              to={`/product/${product.id}`}
            >
              details
            </Link>
          ) : null}
        {/* </div> */}
      </div>
    );
}
export default Product;
