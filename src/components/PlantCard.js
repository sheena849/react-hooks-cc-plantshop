import React from "react";


function PlantCard({ plant, onDelete, onUpdateStock, onUpdatePrice }) {
  return (
    <li className="card">
      {/* Display plant image */}
      <img src={plant.image} alt={plant.name} />
      
      {/* Display plant name */}
      <h4>{plant.name}</h4>
      
      {/* Display plant price */}
      <p>Price: ${plant.price}</p>
      
      {/* Button to delete plant, calls onDelete function with plant ID */}
      <button onClick={() => onDelete(plant.id)}>Delete</button> 
      {/* Button to toggle stock status between "In Stock" and "Sold Out" */}
      <button onClick={() => onUpdateStock(plant.id)}>
        {plant.inStock ? "Sold Out" : "In Stock"} 
      </button>
      
      {/* Button to update plant price */}
      <button onClick={() => onUpdatePrice(plant.id)}>Update Price</button> 
    </li>
  );
}

export default PlantCard;














