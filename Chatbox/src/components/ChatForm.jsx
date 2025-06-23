 import {useRef} from 'react';

const ChatForm = ({chatHistory, setChatHistory, genarateBotResponse}) => {
    const inputRef = useRef();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const userMessage = inputRef.current.value.trim();
        if (!userMessage) return;
        inputRef.current.value = "";

        // Update chat history with the user message
        setChatHistory((history) => [...history, {role: "user", text: userMessage}]);
        
        //Delay 600 as before showing "Thinking.."and genearating response
        setTimeout(() => {
            // Add a thinking placeholder for the bot's response
            setChatHistory((history) => [...history, {role: "model", text: "Thinking..."}]);

            genarateBotResponse([...chatHistory, {role: "user", text: `Using the details provided above, please address this query: ${userMessage}`}]);
        }, 600);
    };

    return (
        <form action="#" className="chat-form" onSubmit={handleFormSubmit} style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
            <input 
                ref={inputRef} 
                type="text" 
                placeholder="Message..." 
                className="message-input" 
                required 
                style={{ flex: 1, padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
            />
            <button type="submit" className="material-symbols-outlined" style={{ marginLeft: '5px', padding: '10px', backgroundColor: '#6200ea', color: '#fff', border: 'none', borderRadius: '5px'}}>
                Go!
            </button>
        </form>
    );
};

export default ChatForm;
