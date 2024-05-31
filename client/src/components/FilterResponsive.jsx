import React, { useState } from "react";
import { Filter } from "./Filter"; // Asumiendo que el componente Filter está en el mismo directorio

export const FilterResponsive = ({ onFilter }) => {
  const [showFilters, setShowFilters] = useState(false);

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div className="filter-responsive-container">
      <button className="filter-toggle-button" onClick={toggleFilters}>
        {showFilters ? "Cerrar Filtros" : "Filtros"}
      </button>
      {showFilters && (
        <div className="filter-menu">
          <Filter onFilter={onFilter} />
        </div>
      )}
    </div>
  );
};
