const LoadingCard = () => {
  return (
    <div className="p-4 rounded-md shadow-md animate-pulse duration-150 ease-in-out">
      <h2 className="text-3xl font-bold bg-slate-500 w-70 h-14 rounded-md"></h2>
      <div className="flex items-center gap-2 py-2 my-2">
        <span className="bg-green-200 px-1 rounded-md w-30 h-8"></span>
        <span className="bg-blue-200 px-1 rounded-md w-30 h-8"> </span>
      </div>
      <p className=" bg-slate-500 w-20 h-5 rounded-md my-2"></p>
      <button className=" bg-blue-700 px-1 rounded-md my-2 py-2 w-30 h-6"></button>
    </div>
  );
};

const LoadingPage = () => {
  return (
    <div className="container mx-auto py-5 px-4">
      <div className="grid grid-cols-4 gap-4 p-4">
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
      </div>
    </div>
  );
};

export default LoadingPage;
