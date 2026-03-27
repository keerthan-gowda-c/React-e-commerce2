import './ProductCard.css';

const ProductCard = ({ product }) => {

    return (
        <>
        <div className="card product-card" >
           
  <img src={product.thumbnail} class="card-img-top product-img" alt="..."/>
            

  <div class="card-body">
    <h5 class="card-title">{product.product_title}</h5>
    <p class="card-text"> {product.product_description}</p>
    <p class="card-text"> {product.product_price}</p>
    <div className='buttons'>
    <a href="#" class="btn btn-warning">Add to Bag</a>
    <a href="#" class="btn btn-success">Order Now</a>
    </div>
  </div>
</div>

        </>
    )
}

export default ProductCard;