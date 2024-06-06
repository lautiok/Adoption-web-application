import React, { useState } from "react";
import Select from "react-select";
import {
  optionsAge,
  optionsGender,
  optionsType,
} from "../utils/OptionSelect.js";

export const Filter = ({ onFilter }) => {
  const [selectedRace, setSelectedRace] = useState(null);
  const [selectedAge, setSelectedAge] = useState(null);
  const [selectedGender, setSelectedGender] = useState(null);
  const [searchTerm, setSearchTerm] = useState(null);

  const [filteredRace, setFilteredRace] = useState(null);
  const [filteredAge, setFilteredAge] = useState(null);
  const [filteredGender, setFilteredGender] = useState(null);
  const [filteredTerm, setFilteredTerm] = useState(null);

  const handleFilter = () => {
    const filters = {
      race: selectedRace?.value || null,
      age: selectedAge?.value || null,
      gender: selectedGender?.value || null,
      type: searchTerm?.value || null,
    };
    onFilter(filters);
    
    setFilteredRace(selectedRace);
    setFilteredAge(selectedAge);
    setFilteredGender(selectedGender);
    setFilteredTerm(searchTerm);
  };

  return (
    <main>
      <div className="filter-container">
        <div className="selector">
          <div className="tipo">
            <h3 className="selector-title">Tipo</h3>
            <Select
              placeholder="Todos los tipos"
              options={optionsType}
              className="select"
              value={searchTerm}
              onChange={setSearchTerm}
            />
          </div>
          <div className="age">
            <h3 className="selector-title">Edad</h3>
            <Select
              placeholder="Todas las edades"
              options={optionsAge}
              value={selectedAge}
              onChange={setSelectedAge}
              className="select"
            />
          </div>
          <div className="gender">
            <h3 className="selector-title">Género</h3>
            <Select
              placeholder="Todos los generos"
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
        {filteredAge && <p className="select-option">{filteredAge.label}</p>}
        {filteredGender && (
          <p className="select-option">{filteredGender.label}</p>
        )}
        {filteredTerm && <p className="select-option">{filteredTerm.label}</p>}
      </div>
    </main>
  );
};
