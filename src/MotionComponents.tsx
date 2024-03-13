import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';

interface Props {
    children: JSX.Element;
    width?: "fit-content" | "100%";
}

export const RevealText = ({children, width = "fit-content"}: Props) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});

    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView, mainControls]);

    return (
        <div ref={ref} style={{ position: "relative", width, overflow: "hidden"}}>
            <motion.div
                variants={{
                    hidden: {opacity: 0, y:75},
                    visible: {opacity: 1, y:0},
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.1}}
            >
                {children}
            </motion.div>
        </div>
    );
};

export const DelayedReveal = ({children, width = "fit-content"}: Props) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});

    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView, mainControls]);

    return (
        <div ref={ref} style={{ position: "relative", width, overflow: "hidden"}}>
            <motion.div
                variants={{
                    hidden: {opacity: 0, y:75},
                    visible: {opacity: 1, y:0},
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 5.1}}
            >
                {children}
            </motion.div>
        </div>
    );
};

export const VeryDelayedReveal = ({children, width = "fit-content"}: Props) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});

    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView, mainControls]);

    return (
        <div ref={ref} style={{ position: "relative", width, overflow: "hidden"}}>
            <motion.div
                variants={{
                    hidden: {opacity: 0, y:75},
                    visible: {opacity: 1, y:0},
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 5.2}}
            >
                {children}
            </motion.div>
        </div>
    );
};

export const SlideIn = ({children, width = "fit-content"}: Props) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});

    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView, mainControls]);

    return (
        <div ref={ref} style={{ position: "relative", width, overflow: "hidden"}}>
            <motion.div
                variants={{
                    hidden: {opacity: 0, x: 100},
                    visible: {opacity: 1, x: 0},
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.25}}
            >
                {children}
            </motion.div>
        </div>
    );
}

export const WriteText = ({children, width = "fit-content"}: Props) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});

    return (
        <div ref={ref} style={{ position: "relative", width, overflow: "hidden"}}>
            <div className='more-details'>
                {isInView && <TypeAnimation
                sequence={[
                    "Here's a little more about me.",
                    200,
                    "Here's a little more about me..",
                    200,
                    "Here's a little more about me...",
                ]}
                wrapper="span"
                speed={50}
                cursor={false}
                className="small-text"
                repeat={0}
                />}
            </div>
        </div>
    );
};

export const Languages = ({children, width = "fit-content"}: Props) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});

    return (
        <div ref={ref} style={{ position: "relative", width, overflow: "hidden"}}>
            {isInView && <TypeAnimation
              sequence={[
                2000,
                "I speak العربية",
                200,
                "I speak arabic",
                200,
                "I speak arabic, english et Français",
                200,
                "I speak arabic, english and french"
              ]}
              wrapper="span"
              speed={50}
              cursor={false}
              className="small-text"
              repeat={0}
            />}
        </div>
    );
};