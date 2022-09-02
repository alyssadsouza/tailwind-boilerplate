import { useState } from "react";
import Header from "./components/Header";

function App() {
  const [dark, setDark] = useState(false);

  return (
    <div className={`${dark ? "dark" : ""}`}>
      <div
        className={`App flex flex-col justify-center w-full min-h-screen text-gray-800 dark:bg-gray-900 dark:text-white`}
      >
        <Header dark={dark} setDark={setDark} />
        <h1 className="text-center w-full text-5xl font-bold">
          Tailwind Boilerplate
        </h1>
      </div>
    </div>
  );
}

export default App;
