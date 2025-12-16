const review = async ({ params }) => {
  const productId = (await params).productId;
  const reviewId = (await params).reviewId;
  return (
    <div>
      <h1 className="text-4xl">productId: {productId}</h1>
      <h2 className="text-2xl"> reviewId: {reviewId}</h2>
    </div>
  );
};

export default review;
