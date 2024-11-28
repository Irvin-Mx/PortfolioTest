//Header component
const Header = () => {
  return (
    <header className="flex flex-col h-screen">
      <h2 className="text-center items-center p-4 font-mono text-lg">
        Victor Martinez
      </h2>

      <nav className="flex justify-center h-10">
        <ul className="flex w-1/2 justify-evenly">
          <li className="">Projects</li>
          <li className="">Contact</li>
        </ul>
      </nav>

      <section className="h-5/6">
        <div className="h-5/6">
          <h4 className=" text-sm h-1/5 flex items-end">
            Hi, my name is
          </h4>
          <h2 className=" text-6xl animate-animate text-red-700">
            Victor Martinez
          </h2>
          <h1 className="text-4xl">
            Your nerdy friend that loves coding creative solutions for amazing projects.
          </h1>
        </div>
        <p className=" bg-red-700">
          Full Stack Web Developer
        </p>
      </section>
    </header>
  );
};

//Export component
export default Header;
