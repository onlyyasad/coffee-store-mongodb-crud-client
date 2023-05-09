import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <div style={{ backgroundImage: `url("https://i.ibb.co/6n3QGCQ/13.jpg")` }}>
                <div className="container mx-auto p-8">
                    <div>
                        <img className="w-16" src="https://i.ibb.co/5cBVQ3K/logo1.png" alt="" />
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                        <div>
                            <h2 className="font-rancho text-4xl font-bold text-[#331A15] my-2">Espresso Emporium</h2>
                            <p>Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
                            <div className='flex my-8 gap-4'>
                                <button><FaFacebook /></button>
                                <button><FaTwitter /></button>
                                <button><FaInstagram /></button>
                                <button><FaLinkedin /></button>
                            </div>
                            <h2 className="font-rancho text-4xl font-bold text-[#331A15] my-2">Get in Touch</h2>
                            <div>
                                <div className='flex items-center gap-2 mb-2'><FaPhoneAlt /> <p>+88 01533 333 333</p> </div>
                                <div className='flex items-center gap-2 mb-2'><FaEnvelope /> <p>info@gmail.com</p> </div>
                                <div className='flex items-center gap-2 mb-2'><FaMapMarkerAlt /> <p>72, Wall street, King Road, Dhaka</p> </div>
                            </div>
                        </div>
                        <div className='lg:ps-28'>
                            <h2 className="font-rancho text-4xl font-bold text-[#331A15] my-2">Connect with Us</h2>
                            <div className='flex flex-col gap-2'>
                                <input className='p-2' type="text" name="" id="" placeholder='Name' />
                                <input className='p-2' type="text" name="" id="" placeholder='Email' />
                                <textarea className='p-2' name="" id="" cols="15" rows="5" placeholder='Message'></textarea>
                                <button className="btn normal-case text-xl rounded-none bg-[#E3B577] text-[#242222] hover:text-white hover:border hover:border-white font-rancho" type="submit">Send Message</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ backgroundImage: `url("https://i.ibb.co/YPS9b1b/24.jpg")` }}>
                <h2 className='text-center text-white font-rancho py-2 text-xl'>Copyright Espresso Emporium ! All Rights Reserved</h2>

            </div>
        </div>
    );
};

export default Footer;