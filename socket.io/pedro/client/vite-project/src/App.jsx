import { useEffect, useRef, useState } from 'react';
import { io as Client } from 'socket.io-client';

const socket = Client.connect('http://localhost:5000');

function App() {
  const [message, setMessage] = useState('');
  const [room, setRoom] = useState('');
  const [messages, setMessages] = useState([]);
  const msgInputRef = useRef(null);

  const sendMessage = () => {
    console.log(message);
    console.log(socket.id);
    socket.emit('send_message', { message, room });
    msgInputRef.current.value = '';
  };

  const joinRoom = () => {
    socket.emit('join_room', { room });
  };

  useEffect(() => {
    socket.on('receive_message', (data) => {
      setMessages((msgs) => [...msgs, data.message]);
    });
  }, [socket]);

  return (
    <div className="flex flex-col w-[98%] md:w-1/3 mx-auto mt-5 items-start space-y-2">
      <div className="flex gap-2 w-full justify-between">
        <input
          type="text"
          placeholder="Room"
          className="border focus-within:outline-none rounded p-1 w-[74%]"
          onBlur={(e) => setRoom(e.target.value)}
        />
        <button
          type="button"
          className="bg-indigo-500 px-4 py-[6px] text-white rounded"
          onClick={joinRoom}
        >
          Join Room
        </button>
      </div>
      <input
        type="text"
        placeholder="Message"
        className="border focus-within:outline-none w-full rounded p-1"
        onBlur={(e) => setMessage(e.target.value)}
        ref={msgInputRef}
      />
      <button
        type="button"
        className="bg-indigo-500 px-4 py-[6px] text-white rounded"
        onClick={sendMessage}
      >
        Send Message
      </button>
      <div className="mt-4 w-full">
        {messages.length > 0 &&
          messages.map((m, idx) => {
            return (
              <p
                className={`border rounded-full py-4 text-center mt-2 ${
                  idx % 2 === 0
                    ? 'bg-indigo-400 text-white'
                    : 'bg-teal-400 text-white'
                }`}
                key={Math.random()}
              >
                {m}
              </p>
            );
          })}
      </div>
    </div>
  );
}

export default App;
