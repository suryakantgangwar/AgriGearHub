document.addEventListener("DOMContentLoaded", () => {
    const userManagementLink = document.getElementById("user-management-link");
    const contentManagementLink = document.getElementById("content-management-link");
    const contentArea = document.getElementById("content-area");
    const logoutBtn = document.getElementById("logout-btn");
  
    // Load User Management Section
    userManagementLink.addEventListener("click", (e) => {
      e.preventDefault();
      contentArea.innerHTML = `
        <h2>User Management</h2>
        <p>Here you can view, edit, and delete users.</p>
        <button onclick="showUsers()">Load Users</button>
        <ul id="user-list"></ul>
      `;
    });
  
    // Load Content Management Section
    contentManagementLink.addEventListener("click", (e) => {
      e.preventDefault();
      contentArea.innerHTML = `
        <h2>Content Management</h2>
        <p>Here you can add, edit, or delete content.</p>
      `;
    });
  
    // Logout Button Functionality
    logoutBtn.addEventListener("click", () => {
      alert("Logging out...");
      window.location.reload();
    });
  });
  
  // Mock function to load users
  function showUsers() {
    const userList = document.getElementById("user-list");
    const users = ["John Doe", "Jane Smith", "Alice Johnson"];
    userList.innerHTML = users.map(user => `<li>${user}</li>`).join("");
  }
  