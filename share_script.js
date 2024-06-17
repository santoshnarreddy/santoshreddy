document.addEventListener('DOMContentLoaded', function() {
    const browseButton = document.getElementById('browse-button');
    const imageUpload = document.getElementById('image-upload');
    const imagePreview = document.getElementById('image-preview');
    const editButton = document.getElementById('edit-button');
    const shareForm = document.getElementById('share-form');
    const popup = document.getElementById('popup');
    const popupMessage = document.getElementById('popup-message');
    const popupClose = document.getElementById('popup-close');


    // Open the file input when the Browse button is clicked
    browseButton.addEventListener('click', () => {
        imageUpload.click();
    });

    // Display the image preview when a file is selected
    imageUpload.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                imagePreview.innerHTML = `<img src="${event.target.result}" alt="Image Preview" style="max-width: 100%; max-height: 100%;">`; // Display the image
                imagePreview.style.display = 'block'; // Show the preview
            };
            reader.readAsDataURL(file); // Convert file to data URL
        }
    });

    // Allow user to edit description, location, and image
    editButton.addEventListener('click', () => {
        imagePreview.style.display = 'none'; // Hide the preview
        imagePreview.innerHTML = ''; // Clear the content
        imageUpload.value = ''; // Clear the file input
    });
     // Simulate form submission and popup notification
     shareForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent default form submission
        
        // Simulate a successful server response
        const isSuccess = true; // Set to false to simulate a failure

        if (isSuccess) {
            popupMessage.innerText = "Image uploaded successfully!";
            popup.style.display = 'block'; // Show the popup
        } else {
            popupMessage.innerText = "File not uploaded. Try again.";
            popup.style.display = 'block'; // Show the popup
        }
    });

    // Close the popup when the "Close" button is clicked
    popupClose.addEventListener('click', function() {
        popup.style.display = 'none'; // Hide the popup
    });
});

