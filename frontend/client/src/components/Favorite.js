import React, {useState, useEffect} from 'react';
import axios from "axios";

import { SNSClient
 , PublishCommand
 } from "@aws-sdk/client-sns";

  //Credentials
  const credential = {
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey:process.env.SECRET_ACCESS_KEY,
  };
// Import required AWS SDK clients and commands for Node.js
const snsClient = new SNSClient({ region: 'us-east-1' , credentials: credential});


//when favorite button is clicked, a message is sent to the subscriber
export default function Favorite(props) {
  const [email, setEmail] = useState('')

  const sendSns = async ()  =>{
    
    // const params = {
    //   Protocol: 'email' /* required */,
    //   TopicArn: "arn:aws:sns:us-east-1:385315034184:MSDProject:2ca82c5b-338f-41ae-a88e-41f9f39e50e6", 
    //   Endpoint: email, //EMAIL_ADDRESS
    // };

     //parameter for publishing message
     const params = {
      Message: "Your stream has been favorited",
      Subject: "Message sent to you",
      TopicArn: "arn:aws:sns:us-east-1:385315034184:MSDProject"
  };
  
     try {
      //  console.log(email)
       const data = await snsClient.send(new PublishCommand(params));
       // const data = await snsClient.send(new SubscribeCommand(params));
      console.log("Success.",  data);
      // return data;
    } catch (err) {
      console.log( err.stack);
    }
  }


 useEffect(() =>{
   let stream;
   (async function(){
     stream = await axios.get('http://localhost:3001/stream/display/' + props.match.params.id)
     setEmail(stream.data[0].email)
   
    })()
console.log(process.env.ACCESS_KEY_ID)
  //  sendSns()
 },[])
  return (
    <div>
      {!email ? "Loading..." : email}
  
    </div>
  )
}
