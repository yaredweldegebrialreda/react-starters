import React, { useState } from "react";
import { flowers } from "../constants/no4";
import "../styles/convertListToTable.css";

const ConvertListToTable = () => {
  const [isListView, setIsListView] = useState(true);

  return (
    <div>
      {isListView ? (
        <ul>
          {flowers.map((flower) => {
            return (
              <li key={flower.type}>{`${flower.type} - ${flower.color}`}</li>
            );
          })}
        </ul>
      ) : (
        <table>
          {flowers.map((flower) => {
            return (
              <tr>
                <td>{flower.type}</td>
                <td>{flower.color}</td>
              </tr>
            );
          })}
        </table>
      )}
      <button
        onClick={() => {
          setIsListView(!isListView);
        }}
        style={{ marginLeft: 10 }}
      >
        Convert List to Table
      </button>
    </div>
  );
};

export default ConvertListToTable;
