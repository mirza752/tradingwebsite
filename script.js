// Advanced JavaScript for Full Functionality and User Experience

// Select elements
const loginSection = document.getElementById('login-section');
const mainSection = document.getElementById('main-section');
const loginForm = document.getElementById('login-form');
const taskContainer = document.querySelector('.task-container');

// Function to simulate loading animation
function showLoading(message) {
    const loadingDiv = document.createElement('div');
    loadingDiv.id = 'loading';
    loadingDiv.textContent = message;
    loadingDiv.style = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 20px;
        background: rgba(0, 0, 0, 0.8);
        color: white;
        font-size: 1.2rem;
        border-radius: 8px;
    `;
    document.body.appendChild(loadingDiv);

    setTimeout(() => {
        loadingDiv.remove();
    }, 2000);
}

// Handle login form submission
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        showLoading('Logging in...');

        // Simulate login process
        setTimeout(() => {
            alert(`Welcome, ${username}!`);

            // Hide login and show main section
            loginSection.classList.add('hidden');
            mainSection.classList.remove('hidden');
        }, 2000);
    } else {
        alert('Please enter both username and password.');
    }
});

// Add interactivity to task cards
if (taskContainer) {
    taskContainer.addEventListener('click', (e) => {
        const card = e.target.closest('.task-card');
        if (card) {
            const taskName = card.querySelector('h3').textContent;
            const profit = card.querySelector('p').textContent;
            
            const confirmSelection = confirm(
                `You selected: \n${taskName}\n${profit}\nDo you want to proceed?`
            );

            if (confirmSelection) {
                alert(`Task "${taskName}" started! Check your progress.`);
            }
        }
    });
}

// Add dynamic task generation
const tasks = [
    { name: "Invest $100", profit: "Earn $120" },
    { name: "Invest $500", profit: "Earn $650" },
    { name: "Invest $1000", profit: "Earn $1300" },
    { name: "Invest $5000", profit: "Earn $7000" },
    { name: "Invest $10000", profit: "Earn $15000" },
];

function renderTasks() {
    if (taskContainer) {
        taskContainer.innerHTML = tasks
            .map(
                (task) => `
                <div class="task-card">
                    <h3>${task.name}</h3>
                    <p>${task.profit}</p>
                </div>`
            )
            .join('');
    }
}

// Call renderTasks on page load
renderTasks();

// Advanced feature: Dark mode toggle
const darkModeToggle = document.createElement('button');
darkModeToggle.textContent = 'Toggle Dark Mode';
darkModeToggle.style = `
    position: fixed;
    top: 10px;
    right: 10px;
    padding: 10px 20px;
    background: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;
document.body.appendChild(darkModeToggle);

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Dark mode styling
const style = document.createElement('style');
style.textContent = `
    .dark-mode {
        background-color: #333;
        color: #f9f9f9;
    }

    .dark-mode .task-card {
        background-color: #444;
        color: #fff;
    }

    .dark-mode header {
        background-color: #555;
    }
`;
document.head.appendChild(style);
