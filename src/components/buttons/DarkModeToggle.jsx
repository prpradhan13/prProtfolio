import useTheme from "../../utils/useTheme";
import { AiFillMoon } from "react-icons/ai";
import { MdLightMode } from "react-icons/md";

const DarkModeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-black text-black dark:text-white float-right"
    >
      {theme === "dark" ? <MdLightMode /> : <AiFillMoon />}
    </button>
  );
};

export default DarkModeToggle;
