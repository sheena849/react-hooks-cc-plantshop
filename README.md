
# Plant Store Admin App

A simple React application to manage plants in an online store. This app allows you to:
- View a list of plants
- Add new plants to the store
- Update plant details (like price and stock status)
- Search for plants by name
- Handle errors and display error messages

## Features

- **Search**: Filter plants by name using a search bar.
- **Add New Plant**: Add new plants by filling out a form with name, image URL, and price.
- **Update Price**: Update the price of an existing plant.
- **Toggle Stock Status**: Toggle between "In Stock" and "Sold Out" for each plant.
- **Delete Plant**: Delete a plant from the list.
- **Error Handling**: Display an error page if any operation fails.
- **"No Plant Found" Message**: Display a message when no plants match the search term.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14 or later)
- **npm** (Node Package Manager)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/plant-store-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd plant-store-app
   ```

3. Install the necessary dependencies:

   ```bash
   npm install
   ```

4. Ensure you have a local JSON server running. You can set it up by creating a `db.json` file with an initial structure like this:

   ```json
   {
     "plants": [
       {
         "id": 1,
         "name": "Ficus",
         "price": 19.99,
         "image": "https://example.com/ficus.jpg",
         "inStock": true
       },
       {
         "id": 2,
         "name": "Cactus",
         "price": 12.99,
         "image": "https://example.com/cactus.jpg",
         "inStock": false
       }
     ]
   }
   ```

5. Start your JSON server:

   ```bash
   json-server --watch db.json --port 3000
   ```

6. Run the React development server:

   ```bash
   npm start
   ```

7. The app should now be running on `http://localhost:3000`.

## Usage

### View Plants

The plant list will be displayed by default, with each plant's details including:
- Name
- Price
- Image
- Stock status (whether the plant is "In Stock" or "Sold Out")

### Add New Plant

To add a new plant, fill out the form at the top of the page with the following details:
- Name
- Image URL
- Price

Click the "Add Plant" button to submit the form and add the plant to the list.

### Update Plant Price

To update the price of a plant, click the "Update Price" button next to the plant. Enter the new price in the prompt that appears and the plant's price will be updated.

### Toggle Stock Status

To toggle the stock status of a plant (mark as "In Stock" or "Sold Out"), click the "In Stock" or "Sold Out" button next to the plant.

### Delete Plant

To delete a plant from the list, click the "Delete" button next to the plant. The plant will be removed from both the view and the backend.

### Search Plants

Use the search bar at the top to filter the plant list by name. As you type, the plant list will update to show only the plants whose names match the search term.

### Error Page

If there's an error (like a failed API request), the app will display an error page with a message like "Failed to load plants" or "Failed to delete plant".

### "No Plants Found" Message

If no plants match the search term, a message will display saying "Oops... No plant found".

## File Structure

- `src/`
  - `components/`
    - `PlantCard.js`: Displays individual plant details and actions (delete, update price, toggle stock).
    - `PlantList.js`: Renders a list of `PlantCard` components.
    - `NewPlantForm.js`: Form to add a new plant.
    - `Search.js`: Search bar for filtering plants by name.
    - `ErrorPage.js`: Displays an error message when something goes wrong.
    - `PlantPage.js`: Main page component that fetches and displays plant data, handles add, delete, update, and search functionality.
  - `App.js`: Root component, wraps the `PlantPage` component.
  - `index.js`: Entry point to the app.
- `public/`
  - `index.html`: HTML template for the React app.
- `db.json`: Local JSON server database file (for plant data).