import React, { useState } from "react";

function MainPage() {
  const [value, setValue] = useState("");
  const [valueTop, setValueTop] = useState("");

  const handleOperator = (content) => {
    setValueTop((prevDisplay) => prevDisplay + value + content);
    setValue("");
  };

  const handleAllClear = () => {
    setValue("");
    setValueTop("");
  };


  const evalueExpresion = () => {
    try {
      setValue(eval(valueTop + value));
      setValueTop("");
    } catch (error) {
      setValue("syntax error");
    }
  };

  return (
    <>
      <div
        style={{ height: "100vh" }}
        className=" main d-flex justify-content-center align-items-center"
      >
        <div>
          <div className="calculator-div">
            <div className="input-div w-100 mb-3 p-3">
              <input className="input-area" type="text" id="display-top" value={valueTop} readOnly />
              <input className="output-area" type="text" value={value} />
            </div>

            <hr style={{ color: "white" }} />
            <div className="buttons">
              <input
                className="span-1 btn"
                style={{ backgroundColor: "rgb(206, 37, 158" }}
                type="button"
                value={"AC"}
                onClick={handleAllClear}
              />
              <button
                value={"DEL"}
                className="btn btn-danger"
                onClick={e=>setValue(value.slice(0,-1))}
              >
                <i
                  style={{ color: "#ffff" }}
                  class="fa-solid fa-delete-left fa-l"
                ></i>
              </button>
              <button
                value={"/"}
                className="btn btn-warning"
                onClick={() => handleOperator("/")}
              >
                <i className="fa-solid fa-divide"></i>
              </button>
              <input
                type="button"
                value={7}
                className="btn btn-light"
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="button"
                value={8}
                className="btn btn-light"
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="button"
                value={9}
                className="btn btn-light"
                onClick={(e) => setValue(value + e.target.value)}
              />
              <button
                value={"*"}
                className="btn btn-primary"
                onClick={() => handleOperator("*")}
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
              <input
                type="button"
                value={4}
                className="btn btn-light"
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="button"
                value={5}
                className="btn btn-light"
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="button"
                value={6}
                className="btn btn-light"
                onClick={(e) => setValue(value + e.target.value)}
              />
              <button
                value={"+"}
                className="btn btn-success"
                onClick={() => handleOperator("+")}
              >
                <i className="fa-solid fa-plus"></i>
              </button>
              <input
                type="button"
                value={1}
                className="btn btn-light"
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="button"
                value={2}
                className="btn btn-light"
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="button"
                value={3}
                className="btn btn-light"
                onClick={(e) => setValue(value + e.target.value)}
              />
              <button
                value={"-"}
                className="btn btn-info"
                onClick={() => handleOperator("-")}
              >
                <i className="fa-solid fa-minus"></i>
              </button>
              <input
                type="button"
                value={0}
                className="btn btn-light"
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="button"
                value={"."}
                className="btn btn-light"
                onClick={(e) => setValue(value + e.target.value)}
              />
              <button
                value={"="}
                className="span-2 btn"
                style={{ backgroundColor: "rgb(15, 241, 188)" }}
                onClick={evalueExpresion}
              >
                <i className="fa-solid fa-equals"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainPage;
