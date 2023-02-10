import Nav from "./components/Nav";

function App() {
  return (
    <div className="bg-gradient bg-no-repeat bg-cover bg-center bg-fixed h-full">
      <Nav />
      <div className="flex lg:flex-row flex-col flex-wrap justify-evenly pt-32 items-center">
        <div className="text-white flex flex-col w-6/12 items-start lg:px-16 space-y-10">
          <h1 className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold leading-tight text-start">
            {"Become "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-pink-500 to-violet-500 whitespace-nowrap">
              {"Super Productive "}
            </span>
            {"in programming by our tutorials!"}
          </h1>
          <h3 className="text-violet-400 lg:text-2xl text-xl">
            {`By participating in our courses, you can also join our private
            discord servers.`}
          </h3>
          <div className="flex flex-col items-stretch space-y-8 bg-slate-800 rounded-xl w-full p-7">
            <div className="space-y-3">
              <h5 className="text-2xs text-blue-300 font-semibold">
                {"Signup for our newsletter"}
              </h5>
              <input
                placeholder="yourmail@somewhere.com"
                className="w-full shadow appearance-none border text-xl p-2 rounded text-gray-700 focus:ring hover:scale-105 transition-all ease-linear duration-200"
                type="email"
              />
            </div>
            <button className="self-start bg-gradient-to-r from-purple-600  via-indigo-600 to-green-600 px-4 py-2 rounded hover:scale-105 transition-all duration-150 hover:from-pink-600 hover:to-green-600">
              {"Sign Up"}
            </button>
          </div>
        </div>
        <div className="lg:w-5/12 w-8/12 -rotate-6 hover:rotate-6 hover:scale-105 focus:rotate-6 focus:scale-105 transition-all duration-700 py-24">
          <img
            className="w-full"
            src="../public/macbook.svg"
            alt="blank web page"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
