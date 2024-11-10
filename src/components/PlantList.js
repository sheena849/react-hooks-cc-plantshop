// PlantList.js
import React from "react";
import PlantCard from "./PlantCard";

// PlantList component to display a list of plant cards
function PlantList({ plants, onUpdatePrice }) {
  return (
    // Render a list of PlantCard components, passing down each plant and the onUpdatePrice function
    <ul className="cards">
      {/* Iterate over the 'plants' array and render a PlantCard for each plant */}
      {plants.map((plant) => (
        <PlantCard
          key={plant.id} // Use plant ID as the unique key for each card
          plant={plant} // Pass plant data to the PlantCard component
          onUpdatePrice={onUpdatePrice} // Pass onUpdatePrice function to handle price updates
        />
      ))}
    </ul>
  );
}

export default PlantList;






