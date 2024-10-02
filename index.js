const dynamicText = document.getElementById('dynamic');

// Array of text options to rotate through
const textOptions = [
    '<span>Fixly</span> fuels fast fixes for every challenge!',
    '<span>Fixly</span> finds fast fixes for tricky tasks!',
    '<span>Fixly</span> fosters flawless fixes for curious creators!'
];

let index = 0;

// Function to update the text every 5 seconds
function updateText() {
    index = (index + 1) % textOptions.length;  // Loop back to the first option when reaching the end
    dynamicText.innerHTML = textOptions[index];  // Update the content
}

// Update text every 5 seconds (5000 milliseconds)
setInterval(updateText, 10000);






  const scriptURL = 'https://script.google.com/macros/s/AKfycbxsLvuSz0Dz-b5wPPfTi5MRs86tGuW6QZXFR2UBXK5H8tuEa5Lb6qWvvHHAXs0d-oQT/exec';  // Replace with your Web App URL
const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', e => {
  e.preventDefault();

  const formData = new FormData(form);

  fetch(scriptURL, {
    method: 'POST',
    body: formData,
  })
  .then(response => {
    formMessage.style.display = 'block';
    formMessage.style.color = 'green';
    formMessage.innerHTML = 'Your message has been submitted successfully!';
    form.reset();  // Reset form after submission
  })
  .catch(error => {
    formMessage.style.display = 'block';
    formMessage.style.color = 'red';
    formMessage.innerHTML = 'There was an error submitting your message. Please try again.';
  });
});



// Get modal element and button
const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("openModal");
const closeModalBtn = document.querySelector(".close");

// Open modal on button click
openModalBtn.addEventListener("click", () => {
    modal.style.display = "block";
});

// Close modal when clicking the "X"
closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close modal when clicking outside the content
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
