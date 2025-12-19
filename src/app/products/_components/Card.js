const ProductCard = ({ product }) => {
  return (
    <div className="p-4 rounded-md shadow-md">
      <h2 className="text-3xl font-bold">{product.name}</h2>
      <div className="flex items-center gap-2 py-2">
        <span className="bg-green-200 px-1 rounded-md"> {product.brand}</span>
        <span className="bg-blue-200 px-1 rounded-md"> {product.category}</span>
      </div>
      <p>Rs.{product.price}</p>
      <button className=" bg-blue-700 text-blue-50 px-1 rounded-md my-2 py-1">Add to cart +</button>
    </div>
  );
};

export default ProductCard;
