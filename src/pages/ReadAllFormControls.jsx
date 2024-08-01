import React, { useState } from "react";
import { countryOptions, optionsList } from "../constants/no1";
import "../styles/readFormControls.css";

const ReadAllFormControls = () => {
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    skills: [],
    country: "",
    randomOptions: [],
    description: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };
  const handleSkillsSelect = (event) => {
    const { checked, value } = event.target;
    if (checked) {
      if (!skills.includes(value)) {
        setFormData({ ...formData, skills: [...formData.skills, value] });
      }
    } else {
      const skillsCopy = [...formData.skills];
      skillsCopy.splice(skillsCopy.indexOf(value), 1);
      setFormData({ ...formData, skills: skillsCopy });
    }
  };

  const handleRandomOptionsSelect = (event) => {
    const { options } = event.target;

    const selectedValues = Array.from(options)
      .filter((option) => option.selected)
      .map((option) => option.value);

    setFormData({ ...formData, randomOptions: selectedValues });
  };

  console.log(formData);
  const { name, gender, skills, country, randomOptions, description } =
    formData;
  return (
    <>
      <div className="wrapper">
        <div>
          <label>Name: </label>
          <br />
          <label>Gender: </label>
          <br />
          <label>Skills: </label>
          <br />
          <label>Country: </label>
          <br />
          <label>Random Options: </label>
          <br />
          <label>Description: </label>
          <br />

          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </div>
        <div>
          <input type="text" name="name" value={name} onChange={handleChange} />
          <br />
          <input
            type="radio"
            name="gender"
            value="male"
            radioGroup="group1"
            onChange={handleChange}
          />
          Male
          <input
            type="radio"
            name="gender"
            value="female"
            radioGroup="group1"
            onChange={handleChange}
          />
          Female
          <br />
          <input
            type="checkbox"
            name="skills"
            value="java"
            onChange={handleSkillsSelect}
          />
          Java
          <input
            type="checkbox"
            name="skills"
            value="javascript"
            onChange={handleSkillsSelect}
          />
          Javascript
          <br />
          <select name="country" onChange={handleChange}>
            {countryOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <br />
          <select
            name="randomOptions"
            onChange={handleRandomOptionsSelect}
            multiple={true}
          >
            {optionsList.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <br />
          <textarea
            type="text"
            name="description"
            value={description}
            onChange={handleChange}
          />
          <br />
        </div>

        <hr color="black" />
      </div>
      {submitted && (
        <div>
          <div
            style={{
              color: "black",
              fontWeight: "bold",
              textDecoration: "underline",
            }}
          >
            Selected values
          </div>
          Name: {name} <br />
          Gender: {gender} <br />
          Skills: {skills?.join(",")} <br />
          Country: {country} <br />
          randomOptions: {randomOptions?.join(",")} <br />
          description: {description} <br />
        </div>
      )}
    </>
  );
};

export default ReadAllFormControls;
