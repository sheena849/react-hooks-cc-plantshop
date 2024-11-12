import React, { useState, useEffect } from "react";
import Search from "./Search";
import PlantCard from "./PlantCard";
import NewPlantForm from "./NewPlantForm";
import ErrorPage from "./ErrorPage";

function PlantPage() {
  // State for storing plants, search term, and error messages
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); 
  const [error, setError] = useState(null); 

  // Fetch plants data when the component first loads
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json()) 
      .then(setPlants) 
      .catch((err) => setError("Failed to load plants")); 
  }, []); 

  // Handles adding a new plant
  const handleAddPlant = (newPlant) => {
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPlant), 
    })
      .then((res) => res.json()) 
      .then((addedPlant) => setPlants([...plants, addedPlant])) 
      .catch(() => setError("Failed to add plant")); 
  };

  // Deletes a plant by ID
  const handleDelete = (id) => {
    fetch(`http://localhost:6001/plants/${id}`, { method: "DELETE" }) 
      .then(() => setPlants(plants.filter((plant) => plant.id !== id))) 
      .catch(() => setError("Failed to delete plant"));
  };

  // Updates a plant's stock status (inStock or sold out)
  const handleUpdateStock = (id) => {
    const updatedPlant = plants.find((plant) => plant.id === id); 
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "PATCH", // Update request
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ inStock: !updatedPlant.inStock }),
    })
      .then((res) => res.json())
      .then((updated) =>
        setPlants(plants.map((plant) => (plant.id === id ? updated : plant))) 
      )
      .catch(() => setError("Failed to update plant stock")); 
  };

  // Updates a plant's price
  const handleUpdatePrice = (id) => {
    const newPrice = prompt("Enter the new price:");
    if (newPrice && !isNaN(newPrice)) {
      fetch(`http://localhost:6001/plants/${id}`, {
        method: "PATCH", 
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ price: parseFloat(newPrice) }), 
      })
        .then((res) => res.json()) 
        .then((updatedPlant) => {
          setPlants(
            plants.map((plant) =>
              plant.id === id ? { ...plant, price: updatedPlant.price } : plant 
            )
          );
        })
        .catch(() => setError("Failed to update plant price")); 
    } else {
      alert("Please enter a valid price.");
    }
  };

  // Filters plants based on the search term
  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase()) 
  );

  // If there's an error, display the ErrorPage component
  if (error) {
    return <ErrorPage message={error} />;
  }

  // If no plants match the search term, display a message
  if (filteredPlants.length === 0) {
    return (
      <div className="no-plants">
        <h2>Oops... No plant found</h2> 
      </div>
    );
  }

  return (
    <main>
      {/* Search component to filter plants */}
      <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      {/* NewPlantForm to add a new plant */}
      <NewPlantForm onAddPlant={handleAddPlant} />
      {/* List of plant cards, passing necessary functions to each card */}
      <ul className="cards">
        {filteredPlants.map((plant) => (
          <PlantCard
            key={plant.id}
            plant={plant}
            onDelete={handleDelete}
            onUpdateStock={handleUpdateStock}
            onUpdatePrice={handleUpdatePrice} 
          />
        ))}
      </ul>
    </main>
  );
}

export default PlantPage;







