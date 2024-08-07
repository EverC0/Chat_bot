"use client"
import{Box, Button, Stack, TextField} from '@mui/material'
import { useState } from "react";

const page = () => {


    const [messages, setMessages] = useState([
        {role: 'assistant', content: "Hello! Thank you for reaching out to HeadStarter AI. How can I assist you today?"
        },
      ])
    
      const [message, setMessage] = useState('')
    
      const sendMessage = async () => {
        setMessage('')
        // Update the messages state by adding the user's new message
        // We use the spread operator `...messages` to include all previous messages in the array,
        // and then we add the new user message at the end of this array.
        // This creates a new array with all the old messages plus the new one, ensuring that
        // the state is updated immutably.
    
        // Make an API call to get the assistant's response
        setMessages( (messages) => 
          [...messages, 
            {role:'user', content: message}, 
            {role: 'assistant', content: ''} // so this so that assitant is waiting for the response
          ])
        const response = fetch('/api/chat', {
          method : 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          // Send the updated messages array, including the user's new message, to the API
          body: JSON.stringify([...messages, {role:'user', content: message}]),
        }).then(async (res) => {
          const reader = res.body.getReader()
          const decoder = new TextDecoder()
          let result = ''
          return reader.read().then(function processText({done, value}){
            if (done){
              return result
            }
            const text = decoder.decode(value || new Uint8Array(), {steam: true})
            setMessages((messages) => {
              let lastMessage = messages[messages.length - 1]
              let otherMessages = messages.slice(0, messages.length - 1)
    
              // so as the assiatnt returning the stream it will keep adding to the stream
              return [ ...otherMessages, {...lastMessage, content:lastMessage.content + text}]
    
            })
            return reader.read().then(processText)
          })
        })
        // for no streaming use
        // const data = await response.json()
        // // Update the messages state by adding the assistant's response
        // // Again, we use the spread operator `...messages` to include all previous messages,
        // // then add the assistant's response to the end of the array.
        // setMessages((messages) => 
        //   [...messages, {role:'assistant', content: data.message}])
      }
    
      return (
    
        <Box 
          width="100vw"
          height="100vh"
          display="flex"
          flexDirection= "column"
          justifyContent="center"
          alignItems="center"
          >
            {/*  */}
            <Stack 
              direction={'column'} 
              width="500px" 
              height="700px"
              border="1px solid black"
              p={2}
              spacing={3}
            >
              {/* The outermost Stack serves as the main container for your chat interface.
            It controls the overall layout and dimensions of the chat window, 
            including the area where the messages are displayed and the input field at the bottom */}
              <Stack 
                direction={'column'} 
                spacing={2} 
                flexGrow={1} 
                overflow="auto" 
                maxHeight="100%"
                >
                  {/* The inner Stack inside the outer Stack is specifically responsible 
                  for organizing and displaying the individual messages in a vertical list.  */}
                { messages.map((message, index) => (
    
                    <Box
                      key={index}
                      display="flex"
                      justifyContent={
                        message.role === 'assistant' ? 'flex-start' : 'flex-end'
                      }
                    >
                      {/* // If the role is 'assistant', align the message to the left ('flex-start')
                      // Otherwise, align the message to the right ('flex-end') */}
    
                        {/* Inner Box: Represents the actual message bubble with specific styling */}
    
                      <Box
                        bgcolor={ 
                          message.role === 'assistant' 
                          ? 'primary.main' 
                          : 'secondary.main'}
                        color="white"
                        borderRadius={12}
                        p={3}
                        boxShadow={"initial"}
                        >
                          {message.content}
                      </Box>
                    </Box>
                  ))}
              </Stack>
    
              <Stack direction={'row'} spacing={2}>
                <TextField 
                  label="Message" 
                  fullWidth
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}/>
                <Button 
                  variant='contained'
                  onClick={sendMessage}
                  > 
                  Send 
                </Button>
              </Stack>
    
            </Stack>
    
        </Box>
       
      )

}

export default page
