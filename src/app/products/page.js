import ProductCard from "./_components/Card";

const products = async () => {
  const products = await fetch(
    `https://node-20250302.vercel.app/api/products`
  ).then((res) => res?.json());

  return (
    <div>
     
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
};

export default products;
