// Get the "Contact us" button element
const contactButton = document.getElementById("contact-button");

// Add a click event listener to the button
contactButton.addEventListener("click", function() {
  // Redirect the user to an empty page
  window.location.href = "empty-page.html";
});

// Get the "Home" button element on the empty page
const homeButton = document.getElementById("home-button");

// Add a click event listener to the button
homeButton.addEventListener("click", function() {
  // Redirect the user back to the original page
  window.history.back();
});

// Function to show thank you message
function showThankYou() {
  // Show the thank you message
  const thankYouElement = document.createElement("div");
  thankYouElement.classList.add("thank-you2");
  thankYouElement.innerText = "Thank you for your purchase!";
  document.body.appendChild(thankYouElement);
  thankYouElement.style.display = "block";

  // Hide the thank you message after 1.5 seconds
  setTimeout(() => {
    thankYouElement.style.display = "none";
  }, 1600);
}

// Add event listener to submit button to trigger showThankYou function
const submitBtn = document.querySelector('input[type="submit"]');
submitBtn.addEventListener('click', showThankYou);

// Add event listeners to navigation buttons to redirect to corresponding pages
const homeBtn = document.querySelector('.home-button2');
homeBtn.addEventListener('click', function() {
  window.location.href = 'index.html';
});

const aboutBtn = document.querySelectorAll('.about2');
aboutBtn.forEach(btn => {
  btn.addEventListener('click', function() {
    window.location.href = 'about.html';
  });
});

const cartBtn = document.querySelector('.cart2');
cartBtn.addEventListener('click', function() {
  window.location.href = 'cart.html';
});

// Get the Youtube logo element by its class
const youtubeLogo = document.querySelector('.youtube-logo');

// Add a click event listener to the logo element
youtubeLogo.addEventListener('click', function() {
  // Redirect the user to Youtube.com in a new page
  window.open('https://www.youtube.com/channel/UCS5Ad7SzG7Lzl9fpRanq4xg', '_blank');
});
