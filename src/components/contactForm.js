import React from "react";

const ContactForm = () => {
    return (
        <form name="contact" method="post" action="/success" data-netlify="true" data-netlify-honeypot="bot-field">
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
            <div>
                <label htmlFor="name">First name:</label>
                <input type="text" name="first name" id="firstName" />
            </div>
            <div>
                <label htmlFor="name">Last name:</label>
                <input type="text" name="last name" id="lastName" />
            </div>
            <div>
                <label htmlFor="email">Email address:</label>
                <input type="text" name="email" id="email" />
            </div>
            <div>
                <label htmlFor="message">Your message:</label>
                <textarea name="message" id="formMessage" rows="6" />
            </div>
            <ul className="actions">
                <li>
                    <input type="submit" value="Send Message"/>
                </li>
                <li>
                    <input type="reset" value="Clear" />
                </li>
            </ul>
        </form>
    )
}

export default ContactForm;