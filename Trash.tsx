import { Button, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import socketServices from './src/utils/websocketclient';



export default function App() {
  const [message, setMessage] = useState('');
  const [data,setdata]=useState([])

  useEffect(() => {
    socketServices.initializeSocket();
  }, []);

  useEffect(()=>{
    socketServices.on('chat message',(msg)=>{
      console.log("msg recieved", msg);
      //let addMessage=[...data]
      //setdata(addMessage.concat(msg))
      const newText= msg.text;
      setdata(lastmsg =>[...lastmsg, newText]);
      
    }
  
  )
  },[])

  const sender = () => {
    if (message.trim() !== '') {
      
      socketServices.emit('chat message', { text: message });
      console.log("message sent");
      
      setMessage('');
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={{ textAlign: "center", fontSize: 28, fontWeight: "bold", marginBottom: 10 }}>ChaGro</Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={styles.input}>
            <TextInput  
              placeholder='Type your message...'
              value={message}
              multiline={true}
              numberOfLines={4}
              onChangeText={(text) => setMessage(text)}
            />
          </View>
          <View style={styles.sendButton}>
            <Button title='Send' onPress={sender} />
          </View>
         
        </View>
        {data.map((val, i) => {
  return <Text key={i} style={{fontSize:18, fontWeight:"bold"}}>{val}</Text>; // Add a key prop to each Text component
})}
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  input: {
    borderWidth: 2,
    borderColor: "#3be287",
    borderRadius: 9,
    flex: 0.8,
    marginBottom:10,
  },
  sendButton: {
    borderRadius: 5,
    flex: 0.15,
    justifyContent: 'center'
  }
});
