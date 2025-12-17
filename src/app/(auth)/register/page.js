const register = () => {
  return (
    <div>
      <form className="flex flex-col justify-center items-center border-2 p-4 m-4 bg-amber-400 rounded-lg">
        <input
          type="text"
          placeholder="name"
          className="w-full border bg-blue-300"
        />
        <br />
        <input
          type="email"
          placeholder="email"
          className="w-full border bg-blue-300"
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          className="w-full border  bg-blue-300"
        />
        <br />
        <button type="submit" className="w-full border  bg-blue-300">
          Register
        </button>
      </form>
    </div>
  );
};

export default register;
