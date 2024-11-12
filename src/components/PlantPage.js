import React, { useState, useEffect } from "react";
import Search from "./Search";
import PlantCard from "./PlantCard";
import NewPlantForm from "./NewPlantForm";
import ErrorPage from "./ErrorPage";

function PlantPage() {
  // State for storing plants, search term, and error messages
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // Search term for filtering plants
  const [error, setError] = useState(null); // State to store any error messages

  // Fetch plants data when the component first loads
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json()) // Parse the response as JSON
      .then(setPlants) // Set the fetched plants data to state
      .catch((err) => setError("Failed to load plants")); // Catch and handle any errors
  }, []); // Empty dependency array means this runs once after the initial render

  // Handles adding a new plant
  const handleAddPlant = (newPlant) => {
    fetch("http://localhost:6001/plants", {
      method: "POST", // Sending data to the server
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPlant), // Send new plant data in JSON format
    })
      .then((res) => res.json()) // Parse the response as JSON
      .then((addedPlant) => setPlants([...plants, addedPlant])) // Update state with the new plant
      .catch(() => setError("Failed to add plant")); // Handle errors
  };

  // Deletes a plant by ID
  const handleDelete = (id) => {
    fetch(`http://localhost:6001/plants/${id}`, { method: "DELETE" }) // Send a DELETE request to the server
      .then(() => setPlants(plants.filter((plant) => plant.id !== id))) // Remove deleted plant from state
      .catch(() => setError("Failed to delete plant")); // Handle errors
  };

  // Updates a plant's stock status (inStock or sold out)
  const handleUpdateStock = (id) => {
    const updatedPlant = plants.find((plant) => plant.id === id); // Find the plant by its ID
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "PATCH", // Update request
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ inStock: !updatedPlant.inStock }), // Toggle inStock status
    })
      .then((res) => res.json()) // Parse the updated plant response
      .then((updated) =>
        setPlants(plants.map((plant) => (plant.id === id ? updated : plant))) // Update the state with the new stock status
      )
      .catch(() => setError("Failed to update plant stock")); // Handle errors
  };

  // Updates a plant's price
  const handleUpdatePrice = (id) => {
    const newPrice = prompt("Enter the new price:"); // Prompt the user for a new price
    if (newPrice && !isNaN(newPrice)) {
      fetch(`http://localhost:6001/plants/${id}`, {
        method: "PATCH", // Update request
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ price: parseFloat(newPrice) }), // Send updated price to server
      })
        .then((res) => res.json()) // Parse the updated plant response
        .then((updatedPlant) => {
          setPlants(
            plants.map((plant) =>
              plant.id === id ? { ...plant, price: updatedPlant.price } : plant // Update the plant price in state
            )
          );
        })
        .catch(() => setError("Failed to update plant price")); // Handle errors
    } else {
      alert("Please enter a valid price."); // Alert if the price is invalid
    }
  };

  // Filters plants based on the search term
  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase()) // Check if the plant name matches the search term
  );

  // If there's an error, display the ErrorPage component
  if (error) {
    return <ErrorPage message={error} />;
  }

  // If no plants match the search term, display a message
  if (filteredPlants.length === 0) {
    return (
      <div className="no-plants">
        <h2>Oops... No plant found</h2> {/* Display message if no plants match */}
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
            onUpdatePrice={handleUpdatePrice} // Pass the update function for price
          />
        ))}
      </ul>
    </main>
  );
}

export default PlantPage;







