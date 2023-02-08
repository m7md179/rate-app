import "./App.css";
import { useState } from "react";
import "./NumButton";
import NumButton from "./NumButton";
import Theme from "./theme";
function App() {
  const [NumberValue, setNumberValue] = useState("");
  const [themeValue, setThemeValue] = useState("one");

  return (
    <div
      className={
        themeValue === "one" ? "body" : themeValue === "two" ? "body2" : "body3"
      }
    >
      <div className="App">
        <div
          className={
            themeValue === "one"
              ? "tag"
              : themeValue === "two"
              ? "tag2"
              : "tag3"
          }
        >
          <h2>calc</h2>
          <div className="theme-tag">
            <p>THEME</p>
            <div className="theme-selector">
              <div className="theme-nums">
                <p>1</p>
                <p>2</p>
                <p>3</p>
              </div>
              <div
                className={
                  themeValue === "one"
                    ? "theme"
                    : themeValue === "two"
                    ? "theme2"
                    : "theme3"
                }
              >
                <Theme
                  themeValue={themeValue}
                  onClick={() => setThemeValue("one")}
                  isActive={themeValue === "one"}
                />
                <Theme
                  themeValue={themeValue}
                  onClick={() => setThemeValue("two")}
                  isActive={themeValue === "two"}
                />
                <Theme
                  themeValue={themeValue}
                  onClick={() => setThemeValue("three")}
                  isActive={themeValue === "three"}
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className={
            themeValue === "one"
              ? "screen"
              : themeValue === "two"
              ? "screen2"
              : "screen3"
          }
        >
          <h1>{"" + NumberValue}</h1>
        </div>
        <div
          className={
            themeValue === "one"
              ? "num-cont"
              : themeValue === "two"
              ? "num-cont2"
              : "num-cont3"
          }
        >
          <div className="numpad">
            <NumButton
              value={7}
              onClick={() => setNumberValue(NumberValue.concat("7"))}
              isActive={NumberValue === "7"}
              themeValue={themeValue}
            />
            <NumButton
              value={8}
              onClick={() => setNumberValue(NumberValue.concat("8"))}
              isActive={NumberValue === "8"}
              themeValue={themeValue}
            />
            <NumButton
              value={9}
              onClick={() => setNumberValue(NumberValue.concat("9"))}
              isActive={NumberValue === "9"}
              themeValue={themeValue}
            />
            <div
              className={
                themeValue === "one"
                  ? "del"
                  : themeValue === "two"
                  ? "del2"
                  : "del3"
              }
            >
              <NumButton
                value={"DEL"}
                onClick={() => setNumberValue(NumberValue.slice(0, -1))}
                isActive={NumberValue === "DEL"}
                themeValue={themeValue}
              />
            </div>
            <NumButton
              value={4}
              onClick={() => setNumberValue(NumberValue.concat("4"))}
              isActive={NumberValue === "4"}
              themeValue={themeValue}
            />
            <NumButton
              value={5}
              onClick={() => setNumberValue(NumberValue.concat("5"))}
              isActive={NumberValue === "5"}
              themeValue={themeValue}
            />
            <NumButton
              value={6}
              onClick={() => setNumberValue(NumberValue.concat("6"))}
              isActive={NumberValue === "6"}
              themeValue={themeValue}
            />
            <NumButton
              value={"+"}
              onClick={() => setNumberValue(NumberValue + "+")}
              isActive={NumberValue === "+"}
              themeValue={themeValue}
            />
            <NumButton
              value={1}
              onClick={() => setNumberValue(NumberValue.concat("1"))}
              isActive={NumberValue === "1"}
              themeValue={themeValue}
            />
            <NumButton
              value={2}
              onClick={() => setNumberValue(NumberValue.concat("2"))}
              isActive={NumberValue === "2"}
              themeValue={themeValue}
            />
            <NumButton
              value={3}
              onClick={() => setNumberValue(NumberValue.concat("3"))}
              isActive={NumberValue === "3"}
              themeValue={themeValue}
            />
            <NumButton
              value={"-"}
              onClick={() => setNumberValue(NumberValue + "-")}
              isActive={NumberValue === "-"}
              themeValue={themeValue}
            />
            <NumButton
              value={"."}
              onClick={() => setNumberValue(NumberValue.concat("."))}
              isActive={NumberValue === "."}
              themeValue={themeValue}
            />
            <NumButton
              value={0}
              onClick={() => setNumberValue(NumberValue.concat("0"))}
              isActive={NumberValue === "0"}
              themeValue={themeValue}
            />
            <NumButton
              value={"/"}
              onClick={() => setNumberValue(NumberValue + "/")}
              isActive={NumberValue === "/"}
              themeValue={themeValue}
            />

            <NumButton
              value={"x"}
              onClick={() => setNumberValue(NumberValue + "*")}
              isActive={NumberValue === "x"}
              themeValue={themeValue}
            />
          </div>
          <div
            className={
              themeValue === "one"
                ? "re-eq"
                : themeValue === "two"
                ? "re-eq2"
                : "re-eq3"
            }
          >
            <div
              className={
                themeValue === "one"
                  ? "reset"
                  : themeValue === "two"
                  ? "reset2"
                  : "reset3"
              }
            >
              <NumButton
                value={"RESET"}
                onClick={() => setNumberValue("")}
                isActive={NumberValue === "RESET"}
                themeValue={themeValue}
              />
            </div>
            <NumButton
              value={"="}
              onClick={() => setNumberValue(eval(NumberValue))}
              isActive={NumberValue === "="}
              themeValue={themeValue}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
