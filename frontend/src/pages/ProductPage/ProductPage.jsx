import ProductCard from "../../components/ProductCard/ProductCard"
import products_data from "../../data/products_data/product_data"
import './ProductPage.css'

export default function ProductPage(){
    return(
        <>
        <h1>Product Page</h1>
        <div className='row row-cols-2 row-cols-md-3 g-4 w-100'>
            {
                products_data.map((products,index)=>(
                    <ProductCard product={products}/>
                ))
            }
            
        </div>
        </>
    )

}