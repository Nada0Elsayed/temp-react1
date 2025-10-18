import { useEffect,useState } from "react";
import Product from "./Product";
import "./Product.css"
import "../App.css"
function Productslist() {
    const apiurl = "https://fakestoreapi.com/products";
    const [products, setProducts] = useState([]);
    const [cag, setcag] = useState([]);

    const getproducts = () => {
        fetch(apiurl)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
    }
    
    const getcategories=()=>{fetch(`${apiurl}/categories`)
      .then((res) => res.json())
      .then((data) => {
        setcag(data);
      });
    }

    const getproductincat=(catname)=>{fetch(`${apiurl}/category/${catname}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
    }
    
    useEffect(() => {
        getproducts();
        getcategories();
    }, [])
    return (
      <>
        <h1 className="text-center p-3">Products List Component</h1>
        <div className="container">
          <button
            className="btn btn-info cat"
            onClick={() => {
              getproducts();
            }}
          >
            all
          </button>
          {cag.map((c) => {
            return (
              <button
                className="btn btn-info cat"
                onClick={() => {
                  getproductincat(c);
                }}
                key={c}
              >
                {c}
              </button>
            );
          })}
          <div className="b">
            {products.map((product) => {
              return (
                <div className="h" key={product.id}>
                  <Product product={product} showbutton={true} />
                </div>
              );
            })}
          
          </div>
        </div>
      </>
    );
}
export default Productslist;