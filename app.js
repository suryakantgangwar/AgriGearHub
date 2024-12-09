// Dummy data for equipment
const equipmentData = [
    {
      id: 1,
      name: "Tractor",
      description: "Powerful and reliable tractor for plowing, planting, and more.",
      price: 150,
      image: "images/tractor.jpg",
    },
    {
      id: 2,
      name: "Harvester",
      description: "Efficient harvester for all types of crops.",
      price: 250,
      image: "images/harvester.jpg",
    },
    {
      id: 3,
      name: "Plough",
      description: "Durable plough to prepare your fields.",
      price: 50,
      image: "images/plough.jpg",
    },
  ];
  
  // Function to render equipment cards
  function renderEquipment() {
    const equipmentGrid = document.getElementById("equipmentGrid");
  
    // Clear existing content
    equipmentGrid.innerHTML = "";
  
    // Loop through equipment data and create cards
    equipmentData.forEach((equipment) => {
      const card = document.createElement("div");
      card.className = "card";
  
      card.innerHTML = `
        <img src="${equipment.image}" alt="${equipment.name}">
        <h3>${equipment.name}</h3>
        <p>${equipment.description}</p>
        <p><strong>Price: $${equipment.price}/day</strong></p>
        <button onclick="bookEquipment(${equipment.id})">Book Now</button>
      `;
  
      equipmentGrid.appendChild(card);
    });
  }
  
  // Function to handle booking
  function bookEquipment(equipmentId) {
    const selectedEquipment = equipmentData.find(
      (equipment) => equipment.id === equipmentId
    );
    alert(`You have booked the ${selectedEquipment.name}.`);
  }
  
  // Render the equipment cards on page load
  document.addEventListener("DOMContentLoaded", renderEquipment);
  