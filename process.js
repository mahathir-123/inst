document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const userData = { username, password };

    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById('error-message').textContent = data;
    })
    .catch(error => {
        document.getElementById('error-message').textContent = 'An error occurred.';
    });
});
