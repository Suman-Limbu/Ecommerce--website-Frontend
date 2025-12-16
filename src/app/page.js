
const Home = async () => {
  const data= await fetch("https://node-20250302.vercel.app/api/products").then(res=>res.json());
// console.log(data);
  return (
    <div>
      <h1 className="text-2xl font-semibold">HomePage</h1></div>
  )
}

export default Home