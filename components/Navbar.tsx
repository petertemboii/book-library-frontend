import Link from "next/link";

const Navbar = () => {
  return (
    <header>
      {/* Navigation bar . */}
      <nav className="w-full py-6 px-8 flex justify-center flex-wrap border-b border-solid border-gray-900">
        <div>
          {/* Logo linking to home page */}
          <Link href="/">
            <h1 className="font-bold text-5xl text-center lg:text-left">
              <span className="text-cyan-600">Book</span> Library{" "}
            </h1>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
