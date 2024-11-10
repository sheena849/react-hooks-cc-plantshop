import React, { useState } from "react";

// NewPlantForm component to add a new plant
function NewPlantForm({ onAddPlant }) {
  // Setting initial state for the form inputs
  const [formData, setFormData] = useState({
    name: "",   // The name of the plant
    image: "",  // The image URL for the plant
    price: "",  // The price of the plant
  });

  // Function to handle changes in form inputs
  const handleChange = (e) => {
    const { name, value } = e.target; // Get the input name and value
    setFormData({ ...formData, [name]: value }); // Update form data with the new input value
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    onAddPlant(formData); // Pass the form data to the parent (PlantPage) to add the new plant
    setFormData({ name: "", image: "", price: "" }); // Clear the form inputs after submission
  };

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        {/* Input for the plant name */}
        <input 
          type="text" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
          placeholder="Plant name" 
        />
        
        {/* Input for the image URL */}
        <input 
          type="text" 
          name="image" 
          value={formData.image} 
          onChange={handleChange} 
          placeholder="Image URL" 
        />
        
        {/* Input for the price */}
        <input 
          type="number" 
          name="price" 
          value={formData.price} 
          onChange={handleChange} 
          step="0.01" 
          placeholder="Price" 
        />
        
        {/* Submit button to add the new plant */}
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
