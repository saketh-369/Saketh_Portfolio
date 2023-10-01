
document.addEventListener("DOMContentLoaded", function() {
    // Get references to the button and dropdown content
    var button = document.querySelector(".topnav-button");
    var dropdownContent = document.querySelector(".dropdown-content");
  
    // Function to hide the dropdown
    function hideDropdown() {
      dropdownContent.style.display = "none";
    }
  
    // Add a click event listener to the button
    button.addEventListener("click", function() {
      // Toggle the display property of the dropdown content
      if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "flex";
      } 
      else {
        dropdownContent.style.display = "block";
      }
    });
  
    // Get references to individual options within the dropdown content
    var options = dropdownContent.querySelectorAll("a");
  
    // Add click event listeners to each option
    options.forEach(function(option) {
      option.addEventListener("click", function() {
        // Reset (hide) the dropdown content
        hideDropdown();
      });
    });
  
    // Check viewport width with a media query
    var mediaQuery = window.matchMedia("(min-width: 576px)");
  
    // Add an event listener to respond to changes in viewport width
    mediaQuery.addEventListener("change", function(event) {
      if (event.matches) {
        // If viewport width is at least 576px, hide the dropdown
        hideDropdown();
      }
    });
  
    // Initially check viewport width and hide the dropdown if necessary
    if (mediaQuery.matches) {
      hideDropdown();
    }
  });
  

  

  document.addEventListener('DOMContentLoaded', function () {
    // Attach the click event listener once the button exists in the DOM
    document.getElementById('download').addEventListener('click', function () {
        // Specify the relative path to the PDF in the "assets" folder
        const pdfUrl = 'assets/oops.pdf';

        // Open the PDF in a new tab
        window.open(pdfUrl, '_blank');
    });
});

  


   