"use client"
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
    const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("api/form", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: form.name,
                    email: form.email,
                    phone: form.phone,
                    message: form.message,
                }),
            });

            if (response.status === 200) {
                setForm({ name: "", email: "", phone: "", message: "" });
                setStatus("success");
            } else {
                setStatus("error");
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <ToastContainer />
            <form onSubmit={handleSubmit}>
                <div className="border border-gray-300 p-8 rounded-lg shadow-lg w-full sm:w-[80%] md:w-[60%] lg:w-[50%] xl:w-[40%] mx-auto mb-8">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-lg font-medium mb-2">
                            Name
                            <input type="text" onChange={handleChange} value={form.name} name="name" id="name" placeholder="Enter Your Name Here" className="mt-2 p-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                        </label>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-lg font-medium mb-2">
                            Email
                            <input type="email" onChange={handleChange} value={form.email} name="email" id="email" placeholder="Enter Your Email Here" className="mt-2 p-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                        </label>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="phone" className="block text-lg font-medium mb-2">
                            Phone Number
                            <input type="tel" onChange={handleChange} value={form.phone} name="phone" id="phone" placeholder="Enter Your Phone Number Here" className="mt-2 p-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                        </label>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-lg font-medium mb-2">
                            Message
                            <textarea name="message" onChange={handleChange} value={form.message} id="message" placeholder="Enter Your Message Here" className="mt-2 h-32 p-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500" required ></textarea>
                        </label>
                    </div>
                    <div>
                        {status === "success" && toast('🦄 Thank you for Your Response!', {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                           
                        })}
                        {status === "error" && toast('🦄 There was an error with your response. Please recheck and submit it again.!', {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                           
                        })}
                    </div>
                    <div>
                        <button type="submit" className="w-full sm:w-auto h-10 text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Send Message</button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default ContactForm
