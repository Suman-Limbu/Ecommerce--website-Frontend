
const ProductCard = ({product}) => {
  return (
    <div>
      <h2>{product.name}</h2>
      <span> {product.brand}</span>
      <span> {product.category}</span>
      <p>Rs.{product.price}</p>
      
    
    </div>
  )
}

export default ProductCard;