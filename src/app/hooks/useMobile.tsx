import { useEffect, useState } from "react";

export function getWindowWidth(): number {
    if (typeof window === "undefined") {
        return 0;
    }

    return window.innerWidth;
}

export default function useMobile(): number {
    const [windowWidth, setWindowWidth] = useState(getWindowWidth());

    useEffect(() => {
        function handleResize() {
            setWindowWidth(getWindowWidth());
        }

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return windowWidth;
}
