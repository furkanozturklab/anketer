import { animate } from "framer-motion";

export const animateOnLoad = async (ref, changePosition = "default", time = 1) => {

    await animate(ref, { scale: 0.8, filter: "blur(2px)" }, { duration: 0 })
    switch (changePosition) {
        case "top":
            await animate(ref, { top: ["-100vh", "0vh"] }, { duration: time });
            break;
        case "bottom":
            await animate(ref, { top: ["0vh", "100vh"] }, { duration: time });
            break;
        default:
            break;
    }
    await animate(ref, { scale: [0.8, 1], filter: ['blur(2px)', 'blur(0px)'] }, { duration: 1 });
};


export const animateOnExit = async (ref, changePosition = "default", time = 1) => {
    await animate(ref, { scale: [1, 0.8], filter: ['blur(0px)', 'blur(2px)'] }, { duration: time });
    switch (changePosition) {
        case "top":
            await animate(ref, { top: ["0vh", "-100vh"] }, { duration: time });
            break;
        case "bottom":
            ref.style.top = ''
            await animate(ref, { top: ["0vh", "100vh"]} ,{ duration: time });
            break;

        default:
            break;
    }
};

