import { useRef } from "react";
import "./service.scss";
import { motion, useInView } from "framer-motion";


const variants = {
    initial: {
        x: -500,
        y: 100,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.1
        }
    }
}
const Service = () => {
    const ref = useRef();
    const isInView = useInView(ref, { margin: "-100px" });
    return (
        <motion.div className="service"
            variants={variants}
            initial="initial"
            ref={ref}
            animate={"animate"}>
            <motion.div className="textContainer" variants={variants}>
                <p>
                    "Creativity is seeing what others see <br />
                    and thinking what no one else ever thought." --- Albert Einstein.
                </p>
                <hr />
            </motion.div>
            <motion.div className="titleContainer" variants={variants}>
                <div className="title">
                    <img src="/AI.webp" alt="" />
                    <motion.h1 whileHover={{  color: "orange"}}><b>Unique</b></motion.h1><h1>Ideas </h1>
                </div>
                <div className="title">
                    <motion.h1 whileHover={{  color: "orange"}} ><b>For My</b></motion.h1> <h1>Future. </h1>
                    <button><a href="https://www.linkedin.com/in/charliezhangck/">WHAT I DO?</a></button>
                </div>
            </motion.div>
            <motion.div className="listContainer" variants={variants}>
                <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
                    <h2>ANPR </h2>
                    <img src="auto.jpeg" alt="" />
                    <a className = "imgButton" href="https://www.shaip.com/blog/automatic-number-plate-recognition-anpr/">
                        <button className = "cButton" >Go</button></a>
                </motion.div>
                <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
                    <h2>Text Generation</h2>
                    <img src="text.jpeg" alt=""/>
                    <a className = "imgButton" href="https://spectra.mathpix.com/article/2022.09.00106/text-generation-models---introduction-and-a-demo-using-the-gpt-j-model">
                        <button className = "cButton" >Go</button></a>
                
                </motion.div>
                <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
                    <h2> Exercise Correc</h2>
                    <img src="public/exercise.webp" alt=""/>
                    <a className = "imgButton" href="https://venturebeat.com/ai/exer-launches-ai-based-fitness-coach-on-your-mobile-phone/ ">
                        <button className = "cButton" >Go</button></a>
                
                </motion.div>
                <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
                    <h2>Front End</h2>
                    <img src="mern.png" alt=""/>
                    <a className = "imgButton" href="https://www.boardinfinity.com/blog/mern-stack-what-is-it/">
                        <button className = "cButton" >Go</button></a>
                
                </motion.div>

            </motion.div>
        </motion.div>
    );
};

export default Service
