import React, { useState } from "react";
import Select from "react-select";
import { optionsAge, optionsGender, optionsType } from "../utils/OptionSelect.js";

export const Filter = ({ onFilter }) => {
  const [selectedRace, setSelectedRace] = useState(null);
  const [selectedAge, setSelectedAge] = useState(null);
  const [selectedGender, setSelectedGender] = useState(null);
  const [searchTerm, setSearchTerm] = useState(null);

  const handleFilter = () => {
    onFilter({
      race: selectedRace?.value || null,
      age: selectedAge?.value || null,
      gender: selectedGender?.value || null,
      type: searchTerm?.value || null,
    });
  };

  return (
    <>
      <div className="filter-container">
        <div className="selector">
          <h3>Tipo</h3>
          <Select 
          options={optionsType} 
             className="select"
              value={searchTerm}
              onChange={setSearchTerm}

             />
        </div>
        <div className="selector">
          
          <div className="age">
            <h3>Edad</h3>
            <Select
              options={optionsAge}
              value={selectedAge}
              onChange={setSelectedAge}
              className="select"
            />
          </div>
          <div className="gender">
            <h3>Género</h3>
            <Select
              options={optionsGender}
              value={selectedGender}
              onChange={setSelectedGender}
              className="select"
            />
          </div>
        </div>
        <button className="filter-button-search" onClick={handleFilter}>
          Filtrar
        </button>
      </div>
      <div className="filtrado">
        <p>Filtrado por:</p>
        {selectedAge && <p className="select-option">{selectedAge.label}</p>}
        {selectedGender && <p className="select-option">{selectedGender.label}</p>}
        {searchTerm && <p className="select-option">{searchTerm.label}</p>}
      </div>
    </>
  );
};
