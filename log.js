document.addEventListener("DOMContentLoaded", () => {
    const apiKey = '1aa734dd-5f27-406d-b240-6736940a67eb';
    const basketName = 'Prism';
    const apiUrl = `https://getpantry.cloud/apiv1/pantry/${apiKey}/basket/${basketName}`;

    const loginForm = document.getElementById("submit"); // ✅ form ID set as "submit"
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const errorMessage = document.getElementById("error-message");

    loginForm.addEventListener("submit", async (evt) => {
        evt.preventDefault();

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if (!username || !password) {
            errorMessage.textContent = "Please fill in all fields.";
            errorMessage.style.display = "block";
            return;
        }

        try {
            const response = await fetch(apiUrl, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                console.error('Failed to retrieve existing data:', response.statusText);
                errorMessage.textContent = "Failed to retrieve user data.";
                errorMessage.style.display = "block";
                return;
            }

            const existingData = await response.json();

            if (
                existingData[username] &&
                existingData[username].password === password
            ) {
                console.log('Login successful');
                setTimeout(() => {
                    window.location.href = 'lobby.html';
                }, 2000);
            } else {
                errorMessage.textContent = "Invalid username or password.";
                errorMessage.style.display = "block";
            }
        } catch (error) {
            console.error('Error verifying user credentials:', error);
            errorMessage.textContent = "An error occurred. Please try again.";
            errorMessage.style.display = "block";
        }
    });
});

