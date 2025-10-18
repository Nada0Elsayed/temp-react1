import { useEffect , useState} from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";

function Productdetails() {
    const apiurl = "https://fakestoreapi.com/products";

    const [product, setProducts] = useState([]);
    const params = useParams();
    
    useEffect(() => {
        fetch(`${apiurl}/${params.productid}`)
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
            });
    }, []);

    return (
        <Product product={product} showbutton={false} />
            );
}
export default Productdetails;