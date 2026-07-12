import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

function BackToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 700);
        };

        window.addEventListener("scroll", handleScroll);

        return () =>
            window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    if (!visible) return null;

    return (
        <button
            onClick={scrollToTop}
            className="
        fixed
        bottom-8
        right-8
        z-50
        flex
        h-14
        w-14
        items-center
        justify-center
        rounded-full
        bg-blue-700
        text-2xl
        text-white
        shadow-xl
        transition-all
        duration-300
        hover:scale-110
        hover:bg-blue-800
      "
            aria-label="Back to top"
        >
            <ArrowUp size={24} />
        </button>
    );
}

export default BackToTop;