import React from "react";
import contactFormStyles from './styles/contactForm.module.scss'

const ContactForm = () => {
    return (
        <div id="contactForm" className={contactFormStyles.form} >
            <form name="contact" method="post" action="/success" data-netlify="true" data-netlify-honeypot="bot-field">
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="form-name" value="contact" />
                <div className={contactFormStyles.contactForm}>
                    <label htmlFor="name">First name:</label>
                    <input type="text" name="first name" id="firstName" placeholder="Please enter your first name." required />
                </div>
                <div className={contactFormStyles.contactForm}>
                    <label htmlFor="name">Last name:</label>
                    <input type="text" name="last name" id="lastName" placeholder="Your last name is also required." required />
                </div>
                <div className={contactFormStyles.contactForm} >  
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" required placeholder="Your email address, please." />
                </div>
                <div className={contactFormStyles.contactFormMessage}>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" id="formMessage" rows="6" placeholder="What would you like to share with me? :)" required />
                </div>
                <br/>
                <div className="actions" >
                    <div className={contactFormStyles.alignButtons}>
                        <button type="reset" value="Clear">Clear</button>
                        <button type="submit" value="Send Message">Send</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ContactForm;