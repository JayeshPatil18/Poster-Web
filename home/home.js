var initializeApp = require('firebase/app')

const database = initializeApp.database();

document.addEventListener('DOMContentLoaded', () => {
    const addTemplateBtn = document.getElementById('add-template-btn');

    addTemplateBtn.addEventListener('click', () => {
        // Get the URL of the image from an input field or any other source
        const imageUrl = "URL_OF_YOUR_IMAGE"; // Replace with the actual URL of the image

        // Push the image URL to the 'imageurls' node in the database
        const newRef = database.ref('imageurls').push();
        newRef.set(imageUrl)
            .then(() => {
                alert('Image URL added to the database successfully!');
            })
            .catch((error) => {
                alert('Error adding image URL to the database: ' + error.message);
            });
    });
});