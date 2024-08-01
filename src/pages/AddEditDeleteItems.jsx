import React, { useState } from "react";
import "../styles/addEditDeleteItems.css";

const AddEditDeleteItems = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: 0,
    quantity: 0,
  });
  const { name, price, quantity } = formData;
  const formIsNotEmpty = name && price && quantity;

  const [items, setItems] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const resetForm = () => {
    setFormData({
      name: "",
      price: 0,
      quantity: 0,
    });
  };
  const handleAddOrEditItem = (e) => {
    e.preventDefault();
    if (isEditing) {
      const updatedItems = items.map((item, i) =>
        i === currentItemIndex ? { ...item, ...formData } : item
      );
      setItems(updatedItems);
    } else {
      setItems([...items, formData]);
    }

    resetForm();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDeleteItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };
  const handleEditItem = (index) => {
    setIsEditing(true);
    const { name, price, quantity } = items[index];
    setFormData({
      name: name,
      price: price,
      quantity: quantity,
    });
    setCurrentItemIndex(index);
  };

  return (
    <div>
      <div>
        <form
          className="form"
          onSubmit={handleAddOrEditItem}
          style={{ display: "flex", gap: "1rem" }}
        >
          <div>
            Name:{" "}
            <input
              type="text"
              name="name"
              onChange={handleInputChange}
              value={name}
            />
          </div>
          <div>
            Price:{" "}
            <input
              type="number"
              name="price"
              onChange={handleInputChange}
              value={price}
            />
          </div>
          <div>
            Quantity:{" "}
            <input
              type="number"
              name="quantity"
              onChange={handleInputChange}
              value={quantity}
            />
          </div>
          <button type="submit" disabled={formIsNotEmpty === 0}>
            {isEditing && items.length > 0 ? "Edit" : "Add"}
          </button>
        </form>
      </div>
      <br />
      <div>
        <table style={{ width: "100%", padding: 20 }}>
          <thead className="table-wrapper">
            <tr className="header-row">
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>{"   "}</th>
              <th>{"  "}</th>
            </tr>
          </thead>
          <tbody className="table-body">
            {items?.map((item, index) => {
              return (
                <>
                  <tr
                    className="body-header-row"
                    style={{
                      backgroundColor:
                        index % 2 === 0 ? "lightGray" : "transparent",
                    }}
                    key={item.name}
                  >
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.quantity}</td>
                    <button onClick={() => handleEditItem(index)}>Edit</button>
                    <button onClick={() => handleDeleteItem(index)}>
                      Delete
                    </button>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddEditDeleteItems;
