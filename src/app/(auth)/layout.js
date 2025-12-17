const layout = ({children}) => {
  return (
    <div>
    <h1 className="text-4xl text-fuchsia-600 flex justify-center"> Welcome to Dokan</h1>
    <p className="text-center">lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
    </p>
    {children}
    </div>
  )
}

export default layout;