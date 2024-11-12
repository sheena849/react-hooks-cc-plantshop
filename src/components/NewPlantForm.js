import React, { useState } from "react";

function NewPlantForm({ onAddPlant }) {
  // Setting initial state for the form inputs
  const [formData, setFormData] = useState({
    name: "",   
    image: "",  
    price: "", 
  });

  // Function to handle changes in form inputs
  const handleChange = (e) => {
    const { name, value } = e.target; 
    setFormData({ ...formData, [name]: value }); 
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); 
    onAddPlant(formData);
    setFormData({ name: "", image: "", price: "" }); 
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
