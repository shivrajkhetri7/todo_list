import React, { useState } from "react";
import "./App.css";

function App() {
  const [list, setList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInput = (event) => {
    setInputValue(event.target.value);
  };

  const handleAdd = () => {
    if (list.length < 5) {
      if (inputValue.trim() !== "") {
        setList([...list, inputValue]);
        setInputValue("");
      }
    } else {
      alert("No more add element ");
    }
  };

  const clearList = () => {
    setList([]);
  };

  const removeItem = (itemIndex) => {
    let newList = list.filter((item, index) => {
      if (itemIndex != index) return item;
    });
    setList(newList);
  };

  return (
    <div className="App">
      <section className="todo-list-container">
        <h5>TODO List</h5>
        <div className="search-inputs">
          <input
            type="text"
            className="input-feild"
            name="name"
            placeholder="Enter name"
            value={inputValue}
            onChange={handleInput}
          />
          <button className="btn-search" onClick={handleAdd}>
            Add
          </button>
        </div>
        <table className="table">
          <colgroup>
            <col />
            <col />
          </colgroup>
          <thead>
            <tr>
              <th>Name</th>
              <th>{}</th>
            </tr>
          </thead>
          <tbody>
            {list.map((item, index) => (
              <tr key={index}>
                <td>{item} </td>
                <td>
                  <button
                    className="btn-clear"
                    onClick={() => {
                      removeItem(index);
                    }}
                  >
                    Remove
                  </button>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="btn-clear" onClick={clearList}>
          Clear List
        </button>
      </section>
    </div>
  );
}

export default App;
