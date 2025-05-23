// Array of random facts or trivia
const facts = [
    "Did you know? Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still edible.",
    "Did you know? Octopuses have three hearts, and two of them stop beating when they swim.",
    "Did you know? Bananas are berries, but strawberries are not.",
    "Did you know? A day on Venus is longer than a year on Venus.",
    "Did you know? Wombat poop is cube-shaped to prevent it from rolling away.",
    "Did you know? The Eiffel Tower can grow more than six inches during the summer due to heat expansion.",
    "Did you know? Sharks existed before trees. Sharks have been around for more than 400 million years.",
    "Did you know? The shortest war in history lasted 38 to 45 minutes between Britain and Zanzibar in 1896.",
    "Did you know? Sloths can hold their breath longer than dolphins — up to 40 minutes.",
    "Did you know? There are more stars in the universe than grains of sand on all the Earth's beaches."
];

// Function to display a random fact
function displayRandomFact() {
    const factElement = document.getElementById("fact");
    const randomIndex = Math.floor(Math.random() * facts.length);
    factElement.textContent = facts[randomIndex];
}

// Call the function to display a fact when the page loads
displayRandomFact();

document.addEventListener("DOMContentLoaded", () => {
    const loginButton = document.getElementById("loginButton");
    const registerButton = document.getElementById("registerButton");
    const buttonContainer = document.getElementById("buttonContainer");
    const formContainer = document.getElementById("formContainer");

    // Function to display the login form
    loginButton.addEventListener("click", () => {
        buttonContainer.style.display = "none"; // Hide buttons
        formContainer.style.display = "block"; // Show form container
        formContainer.innerHTML = `
            <form id="loginForm" class="form">
                <h2>Login</h2>
                <label for="loginUsername">Username:</label>
                <input type="text" id="loginUsername" name="username" required>
                <label for="loginPassword">Password:</label>
                <input type="password" id="loginPassword" name="password" required>
                <button type="submit" class="button">Login</button>
                <button type="button" class="button" id="backButton">Back</button>
            </form>
        `;
        addLoginFormListener();
        addBackButtonListener();
    });

    // Function to display the register form
    registerButton.addEventListener("click", () => {
        buttonContainer.style.display = "none"; // Hide buttons
        formContainer.style.display = "block"; // Show form container
        formContainer.innerHTML = `
            <form id="registerForm" class="form">
                <h2>Register</h2>
                <label for="registerUsername">Username:</label>
                <input type="text" id="registerUsername" name="username" required>
                <label for="registerPassword">Password:</label>
                <input type="password" id="registerPassword" name="password" required>
                <label for="confirmPassword">Confirm Password:</label>
                <input type="password" id="confirmPassword" name="confirmPassword" required>
                <button type="submit" class="button">Register</button>
                <button type="button" class="button" id="backButton">Back</button>
            </form>
        `;
        addRegisterFormListener();
        addBackButtonListener();
    });

    // Function to handle the back button
    function addBackButtonListener() {
        const backButton = document.getElementById("backButton");
        backButton.addEventListener("click", () => {
            formContainer.style.display = "none"; // Hide form container
            buttonContainer.style.display = "flex"; // Show buttons
        });
    }

    // Function to handle login form submission
    function addLoginFormListener() {
        const loginForm = document.getElementById("loginForm");
        loginForm.addEventListener("submit", (event) => {
            event.preventDefault(); // Prevent page reload
            const username = document.getElementById("loginUsername").value;
            const password = document.getElementById("loginPassword").value;

            const storedPassword = localStorage.getItem(username);
            if (storedPassword === password) {
                alert("Login successful!");
                displayMainPage(username); // Redirect to main page
            } else {
                alert("Invalid username or password.");
            }
        });
    }

    // Function to handle register form submission
    function addRegisterFormListener() {
        const registerForm = document.getElementById("registerForm");
        registerForm.addEventListener("submit", (event) => {
            event.preventDefault(); // Prevent page reload
            const username = document.getElementById("registerUsername").value;
            const password = document.getElementById("registerPassword").value;
            const confirmPassword = document.getElementById("confirmPassword").value;

            if (password !== confirmPassword) {
                alert("Passwords do not match!");
                return;
            }

            if (localStorage.getItem(username)) {
                alert("User already exists!");
            } else {
                localStorage.setItem(username, password);
                alert("Registration successful!");
                displayMainPage(username); // Redirect to main page
            }
        });
    }

    // Function to display the main page
    function displayMainPage(username) {
        window.location.href = "homepage.html"; // Redirect to the home page
    }
});



