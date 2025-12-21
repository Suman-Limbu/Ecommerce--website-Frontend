async function getProductById(productId) {
  const product = await fetch(
    `https://node-20250302.vercel.app/api/products/${productId}`
  )
    .then((res) => res?.json())
    .catch((error) => {
      throw new Error("Failed to fetch product data");
    });
  return product;
}

export const generateMetadata = async ({ params }) => {
  const productId = (await params).productId;
  const product = await getProductById(productId);
  return {
    title: product?.name,
    keywords: `${product?.name}, ${product?.brand} ,${product?.category}`,
  };
};

const productId = async ({ params }) => {
  const productId = (await params).productId;
  const product = await getProductById(productId);

  return (
    <div>
      productId: {productId}
      <ul>
        <li>product Name: {product?.name}</li>
        <li>product Price: {product?.price}</li>
        <li>product brand: {product?.brand}</li>
        <li>product description: {product?.description}</li>
      </ul>
    </div>
  );
};

export default productId;
