import React, { useState } from 'react'
import Title from './Title'
import assets from '../assets/assets'
import toast from 'react-hot-toast'
import { motion } from 'framer-motion'

const ContactUs = () => {
    // A state to track the loading/result status
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();

        //  Setting the status to sending
        setResult("Sending....");
        toast.loading("Sending your message...", { id: "form-toast" });

        const formData = new FormData(event.target);

        formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                // if we get response 
                setResult("Form Submitted Successfully");
                toast.success('Thank you for your submission!', { id: "form-toast" });
                event.target.reset();
            } else {
                // if Error 
                console.log("Error", data);
                setResult(data.message);
                toast.error(data.message, { id: "form-toast" });
            }
        } catch (error) {
            console.error("Submit error", error);
            setResult("Something went wrong. Try again.");
            toast.error("Form submission failed", { id: "form-toast" });
        }
    };

    return (
        <div id='Contactus' className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white '>
            <Title title=' Reach out to us ' desc=' From strategy to execution, we craft digital solution that move your business forward ' />

            <motion.form 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                onSubmit={onSubmit} className='grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full '>

                <div>
                    <p className='mb-2 text-sm font-medium'>Your name</p>
                    <div className='flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-transparent'>
                        <img src={assets.person_icon} alt="" className="w-4 object-contain" />
                        <input name='name' type="text" placeholder='Enter your name' className='w-full p-3 text-sm outline-none bg-transparent' required />
                    </div>
                </div>

                <div>
                    <p className='mb-2 text-sm font-medium'>Email id</p>
                    <div className='flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-transparent'>
                        <img src={assets.email_icon} alt="" className="w-4 object-contain" />
                        <input name='email' type="email" placeholder='Enter your email ' className='w-full p-3 text-sm outline-none bg-transparent' required />
                    </div>
                </div>

                <div className='sm:col-span-2'>
                    <p className='mb-2 text-sm font-medium'>Message</p>
                    <textarea name='message' rows={8} placeholder='Enter your message ' className='w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-transparent' required></textarea>
                </div>

                <div className="sm:col-span-2 flex flex-col gap-4">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        disabled={result === "Sending...."}
                        type="submit"
                        className='w-max flex items-center gap-2 bg-primary text-white text-sm px-10 py-3 rounded-full cursor-pointer transition-all disabled:bg-gray-400'>
                        {result === "Sending...." ? "Sending..." : "Submit"}
                        <img src={assets.arrow_icon} className='w-4' alt="" />
                    </motion.button>
                    <p className="text-xs text-gray-500">{result}</p>
                </div>

            </motion.form>
        </div>
    )
}

export default ContactUs