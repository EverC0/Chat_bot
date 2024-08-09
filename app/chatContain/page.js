"use client"
import{Box, Button, Container, Stack, TextField, Typography} from '@mui/material'
import { useState } from "react";

const Page = () => {


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

        // <Container>
        <Box 
          display="flex"
          flexDirection="column"
          width="100%"
          minHeight="110vh"
          justifyContent="flex-start"
          alignItems="center"
          sx={{
            '@media (max-width: 600px)': {
              width: '100%', // Adjust width for small screens
            },
          }}
        >

        <Box
          width="25%"
          height="9vh"
          display="flex"
          justifyContent="center"
          alignItems="center"
          border="2px solid black"
          borderRadius="5px"
          mb={3}
          marginTop={2}
          boxShadow="0px 4px 15px rgba(255, 255, 255, 0.2)" // Adjusted shadow for visibility against black background
          bgcolor="inherit"
          sx={{
            '@media (max-width: 600px)': {
              width: '90%', // Adjust width for small screens
              height: '8vh', // Adjust height if needed
            },
          }}
        >
          <Typography
            margin={2}
            fontWeight="bold"
            fontSize="24px"
            letterSpacing="1px"
            color="#C0C0C0" 
            
          >
            Chat Bot
          </Typography>
        </Box>

      
            <Box 
              width="100vw"
              height="70vh"
              display="flex"
              flexDirection= "column"
              justifyContent="center"
              alignItems="center"
              >
                {/*  */}
                <Stack 
                  width="70%"
                  flexGrow={1}
                  display="flex"
                  flexDirection="column"
                  border="2px solid black"
                  borderRadius="5px"
                  overflow="hidden"
                  sx={{
                    '@media (max-width: 600px)': {
                      width: '90%', // Adjust width for small screens
                    },
                  }}
              
                  boxShadow="0px 4px 15px rgba(255, 255, 255, 0.2)"
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
                            sx={{
                            color:"#eeeeee",
                            borderRadius:4,
                            p:3,
                            boxShadow:"initial",
                            // fontWeight:"lighter",
                            textShadow:"2px 2px 5px rgba(0, 0, 0, 0.5)" }}
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
                      sx={{color:'#eeeeee'}}
                      onChange={(e) => setMessage(e.target.value)}/>
                    <Button 
                      variant='contained'
                      onClick={sendMessage}
                      sx={{color:'#C0C0C0'}}
                      > 
                      Send 
                    </Button>
                  </Stack>
        
                </Stack>
        
            </Box>
          </Box>
       
      )

}

export default Page
