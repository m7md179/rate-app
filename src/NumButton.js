import "./numbutton.css";
function NumButton({ value, onClick, isActive, themeValue }) {
  return (
    <div>
      <button
        id={value}
        onClick={onClick}
        isActive={isActive}
        className={
          themeValue === "one"
            ? "button"
            : themeValue === "two"
            ? "button2"
            : "button3"
        }
      >
        {value}
      </button>
    </div>
  );
}

export default NumButton;
