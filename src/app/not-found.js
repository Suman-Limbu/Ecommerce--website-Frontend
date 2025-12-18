
const notFound = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <p className="text-3xl font-bold text-red-600 font-sans">404</p>
      <h1 className="text-4xl font-bold">Not found</h1>
      <a href="/" className="mt-3 text-blue-700 hover:underline">Go back to Home</a>
    </div>
  );
};

export default notFound;
