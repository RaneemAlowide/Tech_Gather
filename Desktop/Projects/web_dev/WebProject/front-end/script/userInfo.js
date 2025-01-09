function getData() {
  // clear any existing data
  const dataContainer = document.getElementById("dataContainer");
  while (dataContainer.firstChild) {
    dataContainer.removeChild(dataContainer.lastChild);
  }
  // refresh
  fetch("/view")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      data.forEach(function (item) {
        let dataDiv = document.createElement("div"); // Create a div for each data item

        // Style the div
        dataDiv.style.color = "black";
        dataDiv.style.border = "1px solid #ddd";
        dataDiv.style.padding = "8px";
        dataDiv.style.margin = "8px 0";
        dataDiv.style.borderRadius = "4px";
        dataDiv.style.fontFamily = "Courier New'";
        dataDiv.style.fontSize = "16px";
        dataDiv.style.backgroundColor = " #e8b09c36";
        dataDiv.style.direction="none";

        
        // Set the text content or inner HTML of the div
        dataDiv.textContent = `${item.FirstName} - ${item.email} - ${item.message}`;
        // If you need HTML content (e.g., for links), use innerHTML carefully to avoid XSS attacks
        dataDiv.innerHTML = `Name:${item.FirstName}<br>Message:${item.message}`;

        // Append the div to the container
        dataContainer.appendChild(dataDiv);
      });
    })
    .catch(function (error) {
      console.error("Error:", error);
      alert("An error occurred!");
    });
}
getData();


