import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getDatabase, ref, push, onChildAdded } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyC2Rzo8QWPTtam4KtlfV2EaT3wf8corGro",
  authDomain: "line-chat-app-1c6ee.firebaseapp.com",
  projectId: "line-chat-app-1c6ee",
  storageBucket: "line-chat-app-1c6ee.firebasestorage.app",
  messagingSenderId: "244301193406",
  appId: "1:244301193406:web:d5c668bca7fa1ba6257eef"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const chatRef = ref(db, "messages");

const chat = document.getElementById('chat');
const input = document.getElementById('message');

function sendMessage() {
  const text = input.value.trim();
  if (!text) return;
  push(chatRef, { text });
  input.value = '';
}

onChildAdded(chatRef, snapshot => {
  const msg = snapshot.val();
  const div = document.createElement('div');
  div.className = 'message';
  div.textContent = msg.text;
  chat.appendChild(div);
  chat.scrollTop = chat.scrollHeight;
});
