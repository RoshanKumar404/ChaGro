import io from 'socket.io-client';

//const SOCKET_URL = `http://${ipAddress}:${port}`; 
const SOCKET_URL= 'http://192.168.1.75:8000'

class WSService {
    // constructor() {
    //     this.socket = null;
    // }

    async initializeSocket() {
        try {
            this.socket = io(SOCKET_URL, {
                transports: ['websocket']
            });

            console.log("Initializing socket", this.socket);

            
            this.socket.on('connect', () => {
                console.log("Socket connected");
            });

            this.socket.on('data', (data) => { 
                console.log("Received data:", data);
            });

            this.socket.on('disconnect', () => {
                console.log("Socket disconnected");
            });

            this.socket.on('error', (error) => {
                console.log("Socket error:", error);
            });

        } catch (error) {
            console.log("Socket initialization error:", error);
        }
    }

    emit(event, data = {}) {
        if (this.socket) {
            this.socket.emit(event, data);
        } else {
            console.log("Socket is not initialized");
        }
    }
    
    on(event, cb) {
        if (this.socket) {
            this.socket.on(event, cb);
        } else {
            console.log("Socket is not initialized");
        }
    }

    removeListener(listenerName) {
        if (this.socket) {
            this.socket.removeListener(listenerName);
        } else {
            console.log("Socket is not initialized");
        }
    }
}

const socketService = new WSService();

export default socketService;
