import React from 'react'
import Title from './Title'
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';


const Contact = () => {


    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "441442a1-6a74-4deb-abab-04b9928b46f4");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("");
            toast.success("Form submitted successfully!")
            event.target.reset();
        } else {
            console.log("Error", data);
            toast.error(data.message)
            setResult("");
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: -500 }}
            transition={{ duration: .8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden' id='Contact'>
            <Title title={'Contact'} title2={'Us'} description={`Are you Ready to Make a Move? Let's start a project together today!`} />

            <form onSubmit={onSubmit} className="max-w-2xl mx-auto text-gray-600 pt-8">
                <div className="flex flex-wrap">
                    <div className="w-full md:w-1/2 text-left">
                        Your Name
                        <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' type="text" name='Name' placeholder='Your Name' required />
                    </div>
                    <div className="w-full md:w-1/2 text-left md:pl-4">
                        Your Email
                        <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' type="email" name='Email' placeholder='Your Email' required />
                    </div>
                </div>
                <div className="my-6 text-left">
                    Message
                    <textarea name="Message" placeholder='Add message...' required className='w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none'></textarea>
                </div>
                <button className='bg-blue-600 hover:bg-blue-500 transition-colors duration-500 text-white px-12 py-2 rounded-lg'>
                    {result ? result : "Send Message"}
                </button>
            </form>
        </motion.div>
    )
}

export default Contact
