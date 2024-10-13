import { useState } from "react";
import { fetchChatResponse } from "./chatbot";
import "./chat.css";
const GenerateChat = () => {
    const [prompt, setPrompt] = useState('');
    const [chat, setChat] = useState([]);
    const [currentChat, setCurrentChat] = useState({
        status: false,
        user: ''
    })
    const handleChat = async () => {
        try {
            setCurrentChat({ status: true, user: prompt });
            const response = await fetchChatResponse(prompt);

            if (response.text) {
                setChat(item => [...item, {
                    user: prompt,
                    ai: response.text
                }])
            }
        }
        catch (err) {
            alert("Can't connect to the AI chatbot")
        }
        setCurrentChat({ status: false, user: '' });
        setPrompt('')
    }
    return (
        <>
            <main className="w-100 chatbot" >
                <section className="chat-section">
                    {
                        chat.map(item => (
                            <section className="chat-group">
                                <div className="chat-user d-flex">
                                    <div></div>
                                    <div>{item.user}</div>
                                </div>
                                <div className="chat-ai d-flex">
                                    <div>{item.ai}</div>
                                    <div></div>
                                </div>
                            </section>
                        ))
                    }
                    {
                        currentChat.status &&
                        <section className="chat-group">
                            <div className="chat-user d-flex">
                                <div></div>
                                <div>{currentChat.user}</div>
                            </div>
                            <div className="chat-ai d-flex ">
                                <div className="display-6 ">...</div>
                            </div>
                        </section>

                    }
                </section>
                <section className="chat-input w-100 d-flex">
                    <input
                        type="text"
                        onChange={e => setPrompt(e.target.value)}
                        value={prompt}
                        placeholder="Write your queries in the AI"
                        className="text-box"
                    />
                    <button onClick={() => handleChat()} className="text-button">
                        Ask
                    </button>
                </section>
            </main>
        </>
    )
}
export default GenerateChat;