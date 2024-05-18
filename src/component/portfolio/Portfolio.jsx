import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";

const items = [
    {
        id: 1,
        title: "E-Commerce Store",
        img: "/sneaker.webp",
        desc: "A E-Commerce project -- Charlie Sneaker Store, using HTML, CSS and Javascript",
        link: "https://github.com/CharlieNotChilly?tab=repositories"
    },
    {
        id: 2,
        title: "Human-centric Artificial Intelligence",
        img: "/ML1.jpeg",
        desc: "Published on International Conference on Machine Learning and Automation on Oct. 18, 2023, indexed on CPCI.",
        link: "https://ace.ewapublishing.org/article/ee4ed631aaf34893bea7634a80e08d54"
    },
    {
        id: 3,
        title: "Tik Tok Fitness Influencer",
        img: "/fitness.JPG",
        desc: "Gained over 10,000 followers by creating targeted, original TikTok content with a machine learning pipeline",
        link: "https://www.tiktok.com/@charliefitnesstraining"
    },
    {
        id: 4,
        title: "In-And-Out Music",
        img: "/music.jpeg",
        desc: "A music app built with Mongo DB, Express.js, React.js, Node.js.",
        link: "https://github.com/CharlieNotChilly?tab=repositories"
    }
];

const Single = ({ item }) => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({ target: ref });
    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

    return (
        <section >
            <div className="container">
                <div className="wrapper">
                <div className="imageContainer" ref={ref}>
                <img src={item.img} alt="" />
                </div>
                <motion.div className="textContainer" style = {{y}} >
                    <h2>{item.title}</h2>
                    <p>{item.desc}</p>
                    <a href={item.link}><button>See Demo</button></a>
                </motion.div>
            </div>
            </div>
        </section>
    );
};

const Portfolio = () => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({ target: ref });
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });

    return (
        <div className="portfolio" ref={ref}>
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </div>
            {items.map((item) => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    );
};

export default Portfolio;
