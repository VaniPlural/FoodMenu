"use strict";

let menu = {
  drinks: ["Water", "Tea", "Sweet Tea", "Coke", "Dr. Pepper", "Sprite"],
  entrees: ["Hamburger w/ Fries", "Grilled Cheese w/ Tater Tots", "Grilled Chicken w/ Veggies", "Chicken Fried Steak w/ Mashed Potatoes", "Fried Shrimp w/ Coleslaw", "Veggie Plate"],
  desserts: ["Cheesecake", "Chocolate Cake", "Snickerdoodle Cookie"]
};

window.onload = function() {
  const categorySelect = document.getElementById("categorySelect");
  const itemSelect = document.getElementById("itemSelect");

  // Event listener for category dropdown change
  categorySelect.addEventListener("change", function() {
    let selectedCategory = categorySelect.value;
    let items = menu[selectedCategory];
    
    // Clear previous items
    itemSelect.innerHTML = "";

    // Populate item dropdown with items from selected category
    items.forEach(function(item) {
      let option = document.createElement("option");
      option.text = item;
      option.value = item;
      itemSelect.appendChild(option);
    });
  });

  // Trigger change event to populate items initially
  categorySelect.dispatchEvent(new Event("change"));
};
