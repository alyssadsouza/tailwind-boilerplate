import Toggle from "./Toggle";

function Header({ dark, setDark }) {
  return (
    <div className="flex flex-row justify-between items-center w-full h-16 border-gray-100 dark:border-gray-800 border-b absolute top-0">
      <img src="./vite.svg" className="mx-4" />
      <div className="flex flex-row justify-between items-center w-full">
        <div className="mx-2">
          <a
            href="#"
            className="mx-2 text-gray-400 text-sm hover:text-indigo-600 dark:hover:text-indigo-400 transition-all"
          >
            About
          </a>
          <a
            href="#"
            className="mx-2 text-gray-400 text-sm hover:text-indigo-600 dark:hover:text-indigo-400 transition-all"
          >
            How it Works
          </a>
        </div>
        <div className="mx-2 flex flex-row justify-between items-center">
          <Toggle dark={dark} setDark={setDark} />
          <a
            href="#"
            className="mx-2 border border-gray-200 dark:border-gray-700 dark:hover:border-indigo-500 p-2 rounded-lg text-gray-400 text-sm dark:hover:text-indigo-400 hover:text-indigo-600 hover:border-indigo-500 transition-all"
          >
            Log In
          </a>
          <a
            href="#"
            className="mx-2 border border-gray-200 dark:border-gray-700 dark:hover:border-indigo-500 p-2 rounded-lg text-gray-400 text-sm dark:hover:text-indigo-400 hover:text-indigo-600 hover:border-indigo-500 transition-all"
          >
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
