import Image from '../../../../content/components/Home/main_imgs/divider.jpg';
import './Contact.css';
import './Contact_responsive.css';

const Contact = () => {
    return(
        <section className="contact">
            <div className="page-header">
                <div className='container'>
                    <div className="page-header-content">
                        <h1>Contact</h1>
                        <h4><a href="/">Home</a> / Contact</h4>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className="contact-content grid-2-cols">
                    <div className="section-header">
                        <div className='section-header-desc'>
                            <h2 className='bg-header'>OUR PLACE</h2>
                        </div>
                        <span>WE'RE HERE TO HELP</span>
                        <h1>Get Your Project Done</h1>
                        <img className='header-line' alt='header-line' src={Image} />
                        <p className='header-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet libero id nisi euismod, sed porta est consectetur.</p>
                        <p className='description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div className='grid-3-cols'>
                            <div className='contact-us-1'>
                                <div className='contact-us'>
                                    <h4>Work Inquiries</h4>
                                    <p>(800) 123-4567</p>
                                </div>
                                <div className='contact-us'>
                                    <h4>Careers & Press</h4>
                                    <p>(800) 123-4567</p>
                                </div>
                            </div>

                            <div className='contact-us-2'>
                                <div className='contact-us'>
                                    <h4>Address</h4>
                                    <p>12345 Porto Blvd.</p>
                                    <p>Suite 1500</p>
                                    <p>Los Angeles, California</p>
                                    <p>90000</p>
                                </div>
                                <div className='contact-us'>
                                    <h4>Email</h4>
                                    <p>mail@example.com</p>
                                </div>
                            </div>

                            <div className='contact-us-3'>
                                <div className='contact-us'>
                                    <h4>Business Hours</h4>
                                    <p>Mon – Sat 9:00am –</p>
                                    <p>6:00pm</p>
                                    <p>Sunday – CLOSED</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='contact-form'>
                        <h2>Send a Message</h2>
                        <form>
                            <input type='text' placeholder='Name*' required />
                            <input type='email' placeholder='E-mail*' required />
                            <input type='photo' placeholder='Phone*' required />
                            <textarea id="message" placeholder='Message*' name="message" rows="8" cols="64"></textarea>
                            <button className='btn btn-dark'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Contact;