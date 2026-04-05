import "./index.css";
import { useState } from "react";

export const ContactForm = () => {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handlesubmit = (e) => {  // value forward to the backend

        e.preventDefault();
        const contactData = {
            user,
            password,
            message

        };
        console.log(contactData);  // data pass to the backend
    };
    return (
        <div className="container">
            <div className="card">
                <h1>Contact Form</h1>
                <form onSubmit={handlesubmit}>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        name="username"
                        required
                        autoComplete="off"
                        value={user}  // controlled input
                        onChange={(e) => setUser(e.target.value)}  // controlled input

                    />

                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        required
                        autoComplete="off"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}

                    />

                    <label htmlFor="message">Message</label>
                    <input
                        type="text"
                        name="message"
                        required
                        autoComplete="off"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}

                    />

                    <button type="submit">Send Message</button>
                </form>
            </div>
        </div>
    );
};