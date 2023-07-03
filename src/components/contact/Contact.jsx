import { BsWhatsapp } from 'react-icons/bs';
import './Contact.css';
import { HiOutlineMail } from 'react-icons/hi'
import { RiMessengerLine } from 'react-icons/ri'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_9ry2puh', 'template_7mctfs4', form.current, 'qdjYfo7MNLWyD3udv')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset()
    };


    return (
        <section id='contact'>
            <h5>Get in touch</h5>
            <h2>Contact Us</h2>


            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <HiOutlineMail className='contact__option-ixon' />
                        <h4>Email</h4>
                        <h5 className='text-light'>srmeraj9@gmail</h5>
                        <a href='mailto:srmeraj9@gmail.com'>Send a message</a>
                    </article>
                    <article className="contact__option">
                        <RiMessengerLine className='contact__option-ixon' />
                        <h4>Messanger</h4>
                        <h5 className='text-light'>srmeraj1</h5>
                        <a href='https://m.me/srmeraj1'>Send a message</a>
                    </article>
                    <article className="contact__option">
                        <BsWhatsapp className='contact__option-ixon' />
                        <h4>Whatsapp</h4>
                        <h5 className='text-light'>+880 17504-353-06</h5>
                        <a href='https://api.whatsapp.com/send?+8801750434306'>Send a message</a>
                    </article>
                </div>

                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Your Full Name' required />
                    <input type="email" name='email' placeholder='Your mail' required />
                    <textarea name="message" placeholder='Your Message' rows="10" required></textarea>
                    <button type='submit' className='btn btn-primary'> Send Message </button>
                </form>
            </div>

        </section>
    );
};

export default Contact;