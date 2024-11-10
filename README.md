
# Plantsy App

Welcome to **Plantsy**! This is a simple plant store management app built with React. In this app, you can add, update, search, and delete plants, and even mark them as "In Stock" or "Sold Out". It's a great way to practice React and learn how to interact with APIs!

---

## Features

- **View Plants**: See a list of all the available plants with their names, images, and prices.
- **Add a Plant**: You can add a new plant to the store by providing the plant's name, image URL, and price.
- **Update Plant Price**: You can update the price of any plant from the plant card.
- **Search for Plants**: You can search for plants by name and filter the list based on your search.
- **Toggle Stock Status**: You can toggle the stock status of any plant. This will mark the plant as "In Stock" or "Sold Out".
- **Delete a Plant**: If you no longer want a plant in the store, you can delete it with just one click.

---

## Requirements

Before you run this project, make sure you have the following installed:

- [Node.js](https://nodejs.org/en/download/) (which comes with npm)
- [JSON Server](https://github.com/typicode/json-server) for mocking a backend API (we'll use it to simulate database operations).

---

## Installation

### Step 1: Clone the Repository

First, clone the project to your local machine:

```bash
git clone https://github.com/your-username/plantsy-app.git
```

### Step 2: Install Dependencies

Navigate into the project directory and install the necessary dependencies:

```bash
cd plantsy-app
npm install
```

### Step 3: Set Up the JSON Server

This project uses a fake API provided by [JSON Server](https://github.com/typicode/json-server). To start the server, you'll need to make sure you have a `db.json` file (which is in the public folder or your API directory).

Start the JSON server by running:

```bash
npm run server
```

This will start the mock API at `http://localhost:3000`.

### Step 4: Start the React App

Now that the JSON Server is running, you can start the React app:

```bash
npm start
```

Your app will now be available at `http://localhost:3000`. You should see the plant store where you can manage plants!

---

## Folder Structure

Here’s a quick overview of how the project is organized:

```
/src
  /components
    Header.js         # Displays the app header
    PlantCard.js      # Displays individual plant details
    PlantForm.js      # Form to add a new plant
    PlantList.js      # Lists all the plants
    Search.js         # The search bar component
    ErrorPage.js      # Displays an error page (e.g. plant not found)
  App.js              # Main app component that ties everything together
  App.css             # Global styles for the app
/public
  /images             # Folder with plant images (for reference in the JSON data)
  index.html          # Main HTML file for the React app
  db.json             # Mock database for plants (handled by JSON Server)
```

---

## API Endpoints

The app interacts with a mock API via JSON Server. Here are the available endpoints:

- `GET /plants`: Get all plants.
- `POST /plants`: Add a new plant to the store.
- `PATCH /plants/:id`: Update the price of an existing plant.
- `DELETE /plants/:id`: Delete a plant from the store.

---

## How to Use the App

### 1. Search for Plants
There’s a search bar at the top of the page. Type in the name of a plant, and the list of plants will be filtered based on your search. It’s case-insensitive, so you don’t have to worry about uppercase or lowercase letters.

### 2. Add a New Plant
Click on the "Add Plant" button, and a form will appear. Enter the following details for the new plant:
- **Name**: The name of the plant (e.g., "ZZ Plant").
- **Image URL**: The URL for the plant's image (e.g., `https://example.com/zz-plant.jpg`).
- **Price**: The price of the plant (e.g., `19.99`).

Once you submit the form, the plant will be added to the list.

### 3. Update Plant Prices
Each plant card has an input field where you can change the price. After entering a new price, click the "Update Price" button to save the changes.

### 4. Toggle Stock Status
Each plant card has a button that toggles the stock status between "In Stock" and "Sold Out". Click on it to update the status.

### 5. Delete a Plant
Click the "Delete" button on any plant card to remove it from the list.

---

## Example Data

Here’s an example of how the plant data might look in your mock database (`db.json`):

```json
{
  "plants": [
    {
      "id": "1",
      "name": "ZZ Plant",
      "image": "./images/zz-plant.jpg",
      "price": 27.00
    },
    {
      "id": "2",
      "name": "Pothos",
      "image": "./images/pothos.jpg",
      "price": 12.11
    },
    {
      "id": "3",
      "name": "Monstera Deliciosa",
      "image": "./images/monstera.jpg",
      "price": 25.99
    }
  ]
}
```

---

## Future Improvements

This is just the beginning! There are many things you can do to improve the app, such as:

- Add user authentication so that users can log in and manage their own plant store.
- Improve the UI and styling to make it look more modern and polished.
- Allow users to filter plants based on categories (e.g., "Indoor", "Outdoor").
- Implement pagination to handle large datasets of plants.

---

## Contributing

This project is open to contributions. If you’d like to contribute, feel free to:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-xyz`).
3. Make your changes and commit them (`git commit -am 'Add feature xyz'`).
4. Push to your branch (`git push origin feature-xyz`).
5. Open a pull request.
