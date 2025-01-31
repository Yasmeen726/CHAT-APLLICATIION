# CHAT-APLLICATIION

*COMPANY*:CODTECH IT SOLUTIONS

*NAME*:YASMEEN BEGUM

*INTERN ID*:CT12KOX

*DOMAIN*:FULLSTACK DEVELOPMENT

*DURATION*: 8 WEAKS

*MENTOR*:NEELA SANTHOSH

##Task Description:

This task involves building a simple real-time chat application using web technologies like HTML, CSS, JavaScript, Node.js, Express, and Socket.IO. The application allows users to exchange text messages in real-time.

Core Functionality:

User Interface (HTML, CSS): The front-end of the application is built using HTML to structure the page and CSS to style it.  The interface includes:

A display area to show the chat messages.   
An input field for users to type their messages.
A button to send the messages.   
A display area to show the number of currently connected users.
An input field for the user to enter their name (or use a default "anonymous" name).
Client-Side Logic (JavaScript): Client-side JavaScript handles user interactions and communication with the server:

Captures the user's message and name.
Sends the message data (including name and timestamp) to the server using Socket.IO.
Receives chat messages from the server (broadcast to all clients).
Displays the received messages in the chat display area.
Updates the display of the number of connected clients.
Uses moment.js to format the message timestamps.
Implements basic input validation (e.g., prevents sending empty messages).
Prevents Cross-Site Scripting (XSS) vulnerabilities by using textContent instead of innerHTML when displaying messages.
Server-Side Logic (Node.js, Express, Socket.IO): The server-side component, built with Node.js, Express, and Socket.IO, manages the real-time communication between clients:

Sets up an HTTP server using Express.
Establishes WebSocket connections using Socket.IO.
Handles client connections and disconnections.
Listens for "message" events from clients.
Broadcasts received messages to all connected clients using Socket.IO's emit and broadcast functionalities.
Keeps track of the number of connected clients and emits the updated count to all clients.
Serves the static files (HTML, CSS, JavaScript) to the clients.   
Serves the Socket.IO client library to the clients so they can connect to the server.
Real-time Communication (Socket.IO): Socket.IO is the key technology for enabling real-time communication.  It allows the server to push updates to the clients without them having to constantly poll the server.  This allows for instant message delivery.

Data Handling (JSON): Messages are typically sent and received as JSON (JavaScript Object Notation) objects.  This is a lightweight and easily parsed format for exchanging data between the client and server.

Project Setup and Dependencies: The project uses npm (Node Package Manager) to manage dependencies.  The package.json file lists the project's dependencies (Express, Socket.IO, Moment.js) and provides scripts for starting the server.

Security:  A crucial aspect is preventing Cross-Site Scripting (XSS) attacks.  This is addressed by using textContent in the client-side JavaScript when displaying messages. This prevents any malicious HTML or JavaScript code in a message from being executed in other users' browsers.   

The task involves integrating these components seamlessly to create a functional and secure real-time chat application.  It requires a good understanding of web development fundamentals, server-side programming, and real-time communication concepts.  Proper error handling and efficient communication are essential for a good user experience.

#Output of the Task

![Image](https://github.com/user-attachments/assets/e5584754-1c5a-4974-a9e0-335efa5759ec)
