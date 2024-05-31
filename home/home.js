const database = firebase.database();

document.addEventListener('DOMContentLoaded', () => {
    const addTemplateBtn = document.getElementById('add-template-btn');

    addTemplateBtn.addEventListener('click', () => {
        const newRef = database.ref('imageurl').push();
        newRef.set('newData')
            .then(() => {
                alert('Data updated successfully!');
            })
            .catch((error) => {
                alert('Error updating data: ' + error.message);
            });
    });
});