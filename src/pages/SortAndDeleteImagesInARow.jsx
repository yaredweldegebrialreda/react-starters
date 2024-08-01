import React, { useState } from "react";
import { dumpData } from "../constants/no5";
import "../styles/sortAndDeleteImages.css";

const SortAndDeleteImagesInARow = () => {
  const [data, setData] = useState(dumpData);
  const [sorted, setSorted] = useState(false);

  const handleSort = () => {
    if (sorted) {
      setData(dumpData);
    } else {
      setData([...data].sort((a, b) => a.fname.localeCompare(b.fname)));
    }
    setSorted(!sorted);
  };
  const handleDelete = (index) => {
    setData(data.filter((_, i) => i !== index));
  };

  return (
    <div style={{ margin: 8 }}>
      <button onClick={handleSort}>Sort</button>
      <div className="container">
        {data?.map((data, index) => {
          return (
            <div className="item" key={index}>
              <img src={data.imageUrl} alt="flower" />
              <div>
                <div>{data.fname}</div>
                <p>{data.lname}</p>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SortAndDeleteImagesInARow;
