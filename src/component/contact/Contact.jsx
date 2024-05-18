import React from 'react';
import "./contact.scss";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";

const variants = {
    initial: {
        y: 500,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.1,
        },
    },
};
const Contact = () => {

    const ref = useRef();
    const formRef = useRef();
    const isInView = useInView(ref, { margin: "-100px" });

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_5s2nhjn', 'template_ekpphii', formRef.current, {
            publicKey: 'QiSTeFkpR2TGnwMYK',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
    return (
        <motion.div
            ref={ref}
            className="contact"
            variants={variants}
            initial="initial"
            whileInView="animate">
            <motion.div
                className="textContainer"
                variants={variants}>
                <motion.h1 variants={variants}>Let's work together</motion.h1>
                <motion.div className="item" variants={variants}>
                    <h2>Mail</h2>
                    <span>c256zhan@uwaterloo.ca</span>
                </motion.div>
                <motion.div className="item" variants={variants}>
                    <h2>Address</h2>
                    <span>208 Sunview St. Waterloo, Ontario</span>
                </motion.div>
                <motion.div className="item" variants={variants}>
                    <h2>Phone</h2>
                    <span>+1 519-998-4984</span>
                </motion.div>
            </motion.div>
            <motion.div className="formContainer">
                <motion.div className="aniSvg"
                    initial={{ opacity: 1 }}
                    whileInView={{ opacity: 0 }}
                    transition={{ delay: 2, duration: 1 }}>
                    <svg width="800px" height="800px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <motion.path
                            initial={{ pathLength: 0 }}
                            animate={isInView && { pathLength: 1 }}
                            transition={{ duration: 3 }}
                            d="M512 960c-92.8 0-160-200-160-448S419.2 64 512 64s160 200 160 448-67.2 448-160 448z m0-32c65.6 0 128-185.6 128-416S577.6 96 512 96s-128 185.6-128 416 62.4 416 128 416z" fill="#050D42" />
                        <motion.path
                            initial={{ pathLength: 0 }}
                            animate={isInView && { pathLength: 1 }}
                            transition={{ duration: 3 }} d="M124.8 736c-48-80 92.8-238.4 307.2-363.2S852.8 208 899.2 288 806.4 526.4 592 651.2 171.2 816 124.8 736z m27.2-16c33.6 57.6 225.6 17.6 424-97.6S905.6 361.6 872 304 646.4 286.4 448 401.6 118.4 662.4 152 720z" fill="#050D42" />
                        <motion.path

                            initial={{ pathLength: 0 }}
                            animate={isInView && { pathLength: 1 }}
                            transition={{ duration: 3 }} d="M899.2 736c-46.4 80-254.4 38.4-467.2-84.8S76.8 368 124.8 288s254.4-38.4 467.2 84.8S947.2 656 899.2 736z m-27.2-16c33.6-57.6-97.6-203.2-296-318.4S184 246.4 152 304 249.6 507.2 448 622.4s392 155.2 424 97.6z" fill="#050D42" />
                            <motion.path
                            
                            initial={{ pathLength: 0 }}
                            animate={isInView && { pathLength: 1 }}
                            transition={{ duration: 3 }} d="M512 592c-44.8 0-80-35.2-80-80s35.2-80 80-80 80 35.2 80 80-35.2 80-80 80zM272 312c-27.2 0-48-20.8-48-48s20.8-48 48-48 48 20.8 48 48-20.8 48-48 48zM416 880c-27.2 0-48-20.8-48-48s20.8-48 48-48 48 20.8 48 48-20.8 48-48 48z m448-432c-27.2 0-48-20.8-48-48s20.8-48 48-48 48 20.8 48 48-20.8 48-48 48z" fill="#2F4BFF" /></svg>
                </motion.div>
                <motion.form 
                ref={formRef} 
                onSubmit = {sendEmail}
                initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 3, duration: 0.3 }}>
                    <input type="text" placeholder="Please enter your name"  name = "name"/>
                    <input type="email" required placeholder="Please enter your email" name = "email" />
                    <textarea placeholder="Message me and Let's connect!" rows={8} name = "message"></textarea>
                    <button>Submit 😊</button>
                </motion.form>

            </motion.div>
        </motion.div>
    )
}

export default Contact
