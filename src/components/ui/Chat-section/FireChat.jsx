import React, { useRef, useState } from 'react';
import './FireChat.css';

import firebase from 'firebase/compat/app'; 
import 'firebase/compat/firestore';
import 'firebase/compat/auth'; 

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { uid as gen } from 'uid';

firebase.initializeApp({
  apiKey: "AIzaSyBoucZPsXLY4aefJV7kSmlATJEurH8H8z8",
  authDomain: "quiver-app-fd15c.firebaseapp.com",
  projectId: "quiver-app-fd15c",
  storageBucket: "quiver-app-fd15c.appspot.com",
  messagingSenderId: "605176447874",
  appId: "1:605176447874:web:bbb9d1cad5cd9382bac59b"
})

const auth = firebase.auth();
const firestore = firebase.firestore();


function FireChat() {

  const [user] = useAuthState(auth);

  return (
    <div className="live-sec animate__animated animate__fadeIn">
      <header>
        <SignOut />
      </header>

      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>

    </div>
  );
}

function SignIn() {

    const signInWithGoogle = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider);
    }
  
    return (
      <>
        <button className="sign-in" onClick={signInWithGoogle}><i className="ri-google-fill"></i>Sign in with Google </button>
        <div className="in-info">
          <p >Please be kind, considerate and civil with all other quiver members</p>
        </div>
      </>
    )
}

function SignOut() {
    return auth.currentUser && (
      <button className="sign-out" onClick={() => auth.signOut()}> <i className="ri-logout-box-line"></i> Sign Out</button>
    )
}


function ChatRoom() {
    const dummy = useRef();
    const messagesRef = firestore.collection('messages');
    const query = messagesRef.orderBy('createdAt').limit(100);
  
    const [messages] = useCollectionData(query, { idField: 'id' });
  
    const [formValue, setFormValue] = useState('');
  
  
    const sendMessage = async (e) => {
      e.preventDefault();
  
      const { uid, photoURL } = auth.currentUser;
  
      await messagesRef.add({
        text: formValue,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        uid,
        key:gen(),
        photoURL
      })
  
      setFormValue('');
      dummy.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  
    return (<>
      <main>
  
        {messages && messages.map(msg => <ChatMessage key={msg.key} message={msg} />)}
  
        <div ref={dummy}></div>
  
      </main>
  
      <form onSubmit={sendMessage}>
  
        <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="message quiver chat..." />
  
        <button type="submit" disabled={!formValue}><i className="ri-send-plane-2-line"></i></button>
  
      </form>
    </>)
}

function ChatMessage(props) {
    const { text, uid, photoURL } = props.message;
  
    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
  
    return (<>
      <div className={`message ${messageClass}`}>
        <img src={photoURL || 'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png'} alt="profile" referrerPolicy="no-referrer" />
        <p>{text}</p>
      </div>
    </>)
  }
  
export default FireChat;