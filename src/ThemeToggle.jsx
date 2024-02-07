import { useGlobalContext } from "./context";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext();
  return (
    <section className="toggle-container">
      <button className="theme-toggle-btn">
        {isDarkTheme ? (
          <BsFillSunFill className="toggle-icon" onClick={toggleDarkTheme} />
        ) : (
          <BsFillMoonFill className="toggle-icon" onClick={toggleDarkTheme} />
        )}
      </button>
    </section>
  );
};
export default ThemeToggle;
