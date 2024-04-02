function Header() {
  return (
    <header className="sticky top-0 z-30 w-full border-b border-transparent max-md:border-gray-100 bg-gray/50 backdrop-blur-xl md:border-gray-100">
      <nav className="flex items-center justify-between w-full p-4 mx-auto max-w-7xl md:px-8">
        <div>
          <a href="/">
            WKK
            <img src="" alt="" />
          </a>
        </div>
        <ul className="flex items-center gap-6 list-none">
          <li>
            <a
              href=""
              className="font-medium text-gray-600 transition-all hover:text-gray-900 active:text-gray-600"
              target="_self"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href=""
              className="font-medium text-gray-600 transition-all hover:text-gray-900 active:text-gray-600"
              target="_self"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href=""
              className="font-medium text-gray-600 transition-all hover:text-gray-900 active:text-gray-600"
              target="_self"
            >
              About
            </a>
          </li>
          <li>
            <a
              href=""
              className="font-medium text-gray-600 transition-all hover:text-gray-900 active:text-gray-600"
              target="_self"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
