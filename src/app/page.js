const Home = async() => {
  const data= await fetch('https://node-20250302.vercel.app/api/products/data').then(res=>res.json());
console.log(data);
  return (
    <div>HomePage</div>
  )
}

export default Home