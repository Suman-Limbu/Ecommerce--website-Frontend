import ProductCard from "./_components/Card";
export const metadata={
title:"Products",
keywords:["products","laptops","mobiles"]
}

const products = async () => {
  const products = await fetch(
    `https://node-20250302.vercel.app/api/products`
  ).then((res) => res?.json());

  return (
   <div className="container mx-auto py-5 px-4">
     <div className="grid grid-cols-4 gap-4 p-4">
     
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
   </div>
  );
};

export default products;
