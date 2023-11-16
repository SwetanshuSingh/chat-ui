import { useEffect, useState } from "react";
import "../styles/Chat.css";

export default function Chat({ chats }) {
   
  console.log(chats);

  let [date, setDate] = useState('');
  
  async function print(){
    const dateTimeString = await chats[0].time;
    const datePart = new Date(dateTimeString).toLocaleDateString();
    setDate(datePart);
  }

  useEffect(() =>{
    print();
  });

  return(
    <section className="Chat">
      <div className="date">
        <h6>{date}</h6>
      </div>
      <div className="messages">

      {
        chats ? chats.reverse().map((chat) => {return <div className="message">
        <div className="profile"><img src={chat.sender.image} alt="profile" /></div>
        <div className="text"><p>{chat.message}</p></div>
      </div>})
      : <h3>Loading</h3>
      }

      
      </div>
      <div className="chat-reply">
        <input type="text" placeholder="Reply to @Rohit Yadav"/>
        <i className="ri-attachment-2"></i>
        <i className="ri-send-plane-line"></i>
      </div>
    </section>
  ) 
}
