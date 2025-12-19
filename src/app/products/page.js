const products = async () => {
  const products = await fetch(
    `https://node-20250302.vercel.app/api/products`
  ).then((res) => res?.json());

  return (
    <table>
      <thead>
        <tr>
          <th className="text-left">Product Name</th>
          <th className="text-left">Brand</th>
          <th className="text-left">Category</th>
          <th className="text-left">Price</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td className="text-left">{product.name}</td>
            <td className="text-left">{product.brand}</td>
            <td className="text-left">{product.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default products;
