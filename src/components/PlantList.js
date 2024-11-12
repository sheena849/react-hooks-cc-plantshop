// PlantList.js
import React from "react";
import PlantCard from "./PlantCard";

// PlantList component to display a list of plant cards
function PlantList({ plants, onUpdatePrice }) {
  return (
    // Render a list of PlantCard components, passing down each plant and the onUpdatePrice function
    <ul className="cards">
      {plants.map((plant) => (
        <PlantCard
          key={plant.id} 
          plant={plant} 
          onUpdatePrice={onUpdatePrice} 
        />
      ))}
    </ul>
  );
}

export default PlantList;






