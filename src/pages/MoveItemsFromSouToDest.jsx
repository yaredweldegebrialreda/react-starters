import React, { useState } from "react";
import "../styles/moveItems.css";

const MoveItemsFromSouToDest = () => {
  const [flowers, setFlowers] = useState(["rose", "lily", "daffodi"]);
  const [flowersOnRightSide, setFlowersOnRightSide] = useState([]);
  const [leftSideSelectedValues, setLeftSideSelectedValues] = useState([]);
  const [rightSideSelectedValues, setRightSideSelectedValues] = useState([]);

  const handleSelectFlower = (e) => {
    const { options, name } = e.target;

    const selectedvalues = Array.from(options)
      .filter((option) => option.selected)
      .map((option) => option.value);

    name === "leftSide"
      ? setLeftSideSelectedValues(selectedvalues)
      : setRightSideSelectedValues(selectedvalues);
  };

  // Functions for move one or whole from left to right and viceversa.
  const moveSingleItemToRight = () => {
    setFlowersOnRightSide([...flowersOnRightSide, ...leftSideSelectedValues]);
    setFlowers(
      flowers.filter((flower) => !leftSideSelectedValues.includes(flower))
    );
    setLeftSideSelectedValues([]);
  };

  const moveSingleItemToLeft = () => {
    setFlowers([...flowers, ...rightSideSelectedValues]);
    setFlowersOnRightSide(
      flowersOnRightSide.filter((f) => !rightSideSelectedValues.includes(f))
    );
    setRightSideSelectedValues([]);
  };
  const moveAllToRight = () => {
    setFlowersOnRightSide([...flowersOnRightSide, ...flowers]);
    setFlowers([]);
  };
  const moveAllToLeft = () => {
    setFlowers([...flowers, ...flowersOnRightSide]);
    setFlowersOnRightSide([]);
  };

  return (
    <div className="wrapper">
      <div>
        <select
          style={{ width: 100, height: 100 }}
          name="leftSide"
          onChange={handleSelectFlower}
          multiple={true}
        >
          {flowers?.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div>
        <button onClick={moveSingleItemToRight}> {">"}</button>
        <br />
        <button onClick={moveAllToRight}> {">>"}</button>
        <br />
        <button onClick={moveSingleItemToLeft}> {"<"}</button>
        <br />
        <button onClick={moveAllToLeft}> {"<<"}</button>
      </div>
      <div>
        <select
          style={{ width: 100, height: 100 }}
          name="rightSide"
          onChange={handleSelectFlower}
          multiple={true}
        >
          {flowersOnRightSide?.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default MoveItemsFromSouToDest;
