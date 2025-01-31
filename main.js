const socket = io();
const nameInput = document.getElementById('name-input');
const messageInput = document.getElementById('message-input');
const messageContainer = document.getElementById('message-container'); // Get the container element
const messageForm = document.getElementById('message-form');
const clientCountDisplay = document.getElementById('no-of-clients');

// Check if the elements exist before trying to use them (important!)
if (!nameInput || !messageInput || !messageContainer || !messageForm || !clientCountDisplay) {
    console.error("One or more elements are missing from the HTML.");
}


socket.on('connect', () => {
    console.log('Connected to server!');
});

messageForm.addEventListener('submit', (e) => {
    e.preventDefault();
    sendMessage();
});

socket.on('clients-total', (data) => {
    clientCountDisplay.textContent = `No. of Clients: ${data}`;
});

function sendMessage() {
    const name = nameInput.value || "anonymous";
    const message = messageInput.value;

    if (message.trim() === "") return;

    const data = {
        name: name,
        message: message,
        datetime: new Date().toISOString()
    };

    socket.emit('message', data);
    messageInput.value = '';
    displayMessage(data, true);
}

socket.on('chat-message', (data) => {
    console.log("Received message:", data);
    displayMessage(data);
});

function displayMessage(data, isOwnMessage = false) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message');
    if (isOwnMessage) {
        messageDiv.classList.add('own-message');
    }

    const formattedDatetime = moment(data.datetime).format('h:mm A - MMM D, YYYY');

    const nameSpan = document.createElement('span');
    nameSpan.classList.add('message-name');
    nameSpan.textContent = data.name + ":";

    const messageSpan = document.createElement('span');
    messageSpan.classList.add('message-text');
    messageSpan.textContent = data.message;

    const timeSpan = document.createElement('span');
    timeSpan.classList.add('message-time');
    timeSpan.textContent = formattedDatetime;

    messageDiv.appendChild(nameSpan);
    messageDiv.appendChild(messageSpan);
    messageDiv.appendChild(timeSpan);

    messageContainer.appendChild(messageDiv);
    messageContainer.scrollTop = messageContainer.scrollHeight;
}