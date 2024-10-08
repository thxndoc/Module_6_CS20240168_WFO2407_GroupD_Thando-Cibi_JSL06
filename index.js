// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]
};

// Function to display menu items by category
function displayMenuItems(menu) {
    // Get the menu container element from the HTML
    const menuContainer = document.getElementById("menu");
    // Loop through each category and its items in the menu object
    for (const [category, items] of Object.entries(menu)) {
        // Create an element to represent the category
        const categoryElement = document.createElement("h3");
        // Set the text content of the category element to the category name
        categoryElement.textContent = category;
        // Append the category element to the menu container
        menuContainer.appendChild(categoryElement);
        // Create an element to represent a list of items
        const list = document.createElement("ul");
        // Append a list of items element to the menu container
        menuContainer.appendChild(list);
        // Loop through the items in the category and create list items
        items.forEach(item => {
            // Create a list item element
            const listItems = document.createElement("li");
            // Set the text content of the list item element to the item name
            listItems.textContent = item;
            // Attach a click event listener to the list item to add it to the order
            listItems.addEventListener("click", () => addToOrder(item));
            // Append the list item to the list of items
            list.appendChild(listItems);
        });
    }
}

 // Calculate and update the total price
function updateTotalPrice(price) {
    let total = 0;
    return function() {
        total += price;
        return total.toFixed(2);
    } 
};

const itemPrice = 60;
const newTotal = updateTotalPrice(itemPrice);

// Callback function for adding an item to the order
function addToOrder(itemName) {
    // Get the order items list and the order total element from the HTML
    const orderItems = document.getElementById("order-items");
    const orderTotal = document.getElementById("order-total");
    // Create a list item for the order
    const orderListItems = document.createElement("li");
    // Set the text content of the list item to the item name
    orderListItems.textContent = itemName;
    // Append the list item to the order items list
    orderItems.appendChild(orderListItems);
    //console.log(newTotal()); //remember to call the function
    // Update the text content of the order total element with the new total
    orderTotal.textContent = newTotal();
}
// Function to initialize the menu system
function initMenuSystem(menu) {
    // Call the function to display menu items
    return displayMenuItems(menu);
}

// Start the menu system by calling the init function
initMenuSystem(menu);
