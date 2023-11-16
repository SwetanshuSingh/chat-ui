import '../styles/ChatScreen.css';
import { getChatData } from '../api/chatData';
import { useState } from 'react';
import { useEffect } from 'react';
import Chat from './Chat';



export default function ChatScreen(){

    const [tripDetails, setTripDetails] = useState({});

    useEffect(() => {
        async function getIntialData(){
            const response = await fetch("https://qa.corider.in/assignment/chat?page=0");
            const data = await response.json();
            setTripDetails(data);
        }
        getIntialData();
    }, []);

    //console.log(tripDetails.chats);

    return(
        <div className="ChatScreen">

        <section className='trip-details'>
            <div className="title">

            <div className="container">
            <i className="ri-arrow-left-line"></i>
            <h4>{tripDetails.name}</h4>
            </div>
            <i className="ri-edit-box-line"></i>
            
            </div>
            <div className="details">
                <div className="img"><img src="/images/Group 5.png" alt="" /></div>
                <div className="text-area">
                    <span><h4 className='light'>From</h4> <h4>{tripDetails.from}</h4></span>
                    <span><h4 className='light'>To</h4> <h4>{tripDetails.to}</h4></span>
                </div>
                <i className="ri-more-2-line"></i>
            </div>
        </section>
        <Chat chats = {tripDetails.chats}/>

        </div>
    )
}