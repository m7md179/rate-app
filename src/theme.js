import "./theme.css";
function Theme({ themeValue, onClick, isActive }) {
  return (
    <div>
      <button
        id={themeValue}
        name="theme"
        onClick={onClick}
        isActive={isActive}
        className={
          themeValue === "one"
            ? "theme-one"
            : themeValue === "two"
            ? "theme-two"
            : "theme-three"
        }
        autoFocus={isActive ? "autoFocus" : ""}
      ></button>
    </div>
  );
}

export default Theme;
