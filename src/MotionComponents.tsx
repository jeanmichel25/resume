import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from "framer-motion";

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