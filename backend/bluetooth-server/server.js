const WebSocket = require('ws');
const { SerialPort } = require('serialport');
const { ReadlineParser } = require('@serialport/parser-readline');

const wss = new WebSocket.Server({ port: 4000 }); // Create WebSocket server on port 4000

// Setup serial communication with Arduino
const port = new SerialPort({
  path: 'COM6', // Ensure this is the correct port
  baudRate: 38400, // Match this with the Arduino Serial.begin(9600);
});

// Use a readline parser to read data line-by-line from the serial port
const parser = new ReadlineParser();
port.pipe(parser);

// When data is received from Arduino
parser.on('data', (data) => {
  console.log('Received from Arduino: ', data);
  
  // Broadcast the data to all connected WebSocket clients
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(data); // Send data from Arduino to client
    }
  });
});

// WebSocket connection handler
wss.on('connection', (ws) => {
  console.log('Client connected');

  // When a message is received from the client
  ws.on('message', (message) => {
    console.log('Received from client: ', message);
    
    // Send the message to Arduino
    sendToArduino(message);
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

// Function to send data to Arduino
function sendToArduino(message) {
  console.log('Sending to Arduino: ', message);
  port.write(message + '\n'); // Send message to Arduino over serial
}

// Handle port opening event
port.on('open', () => {
  console.log('Serial Port Opened');

  // Example: Send 'Hello Arduino' after 2 seconds
  setTimeout(() => {
    sendToArduino("Hello Arduino I'm connected")
  }, 2000);
});

// Handle port errors
port.on('error', (err) => {
  console.log('Error: ', err);
});
