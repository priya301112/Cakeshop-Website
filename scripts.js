document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    showModal();
});

document.querySelector('.close-button').addEventListener('click', function() {
    closeModal();
});

window.addEventListener('click', function(event) {
    if (event.target == document.getElementById('modal')) {
        closeModal();
    }
});

function showModal() {
    document.getElementById('modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}
