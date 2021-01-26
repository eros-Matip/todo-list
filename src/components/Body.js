import React, { useState } from "react";

function Body() {
  const [elements, setElements] = useState([]);
  const [input, setInput] = useState("");

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newElements = [...elements, input];
    setElements(newElements);
    setInput("");
  };

  const handleReset = () => {
    setElements([]);
  };

  const handleDelete = (indexToDelete) => {
    const newElements = elements.filter(
      (value, index) => indexToDelete !== index
    );

    setElements(newElements);
  };

  return (
    <div className="body">
      {elements.map((element, index) => (
        <div className="trash" key={index}>
          <p>{element}</p>
          <button onClick={() => handleDelete(index)}>
            <i className="fas fa-trash"></i>
          </button>
        </div>
      ))}
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={input}
            onChange={handleChange}
            placeholder="New task"
          />
          {input !== "" && (
            <button type="submit" className="btn-submit">
              Add task
            </button>
          )}
        </div>
        <div>
          <button type="button" className="btn-reset" onClick={handleReset}>
            reset
          </button>
        </div>
      </form>
    </div>
  );
}

export default Body;
