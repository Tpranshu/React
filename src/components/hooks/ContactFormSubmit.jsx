import "./index.css";
import { useState } from "react";

export const ContactFormSubmit = () => {
    const [contact, setContact] = useState({
        username: "",
        password: "",
        message: "",
    })
    const handleclick = (e) => {
        const { name, value } = e.target;
        setContact((prev) => ({
            ...prev, [name]: value,
        }));
    }
    const handlesubmit = (event) => {
        event.preventDefault();
        console.log(contact);
    }
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
                        value={contact.username}
                        onChange={handleclick}

                    />

                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        required
                        autoComplete="off"
                        value={contact.password}
                        onChange={handleclick}

                    />

                    <label htmlFor="message">Message</label>
                    <input
                        type="text"
                        name="message"
                        required
                        autoComplete="off"
                        value={contact.message}
                        onChange={handleclick}
                    />

                    <button type="submit">Send Message</button>
                </form>
            </div>
        </div>
    );
};