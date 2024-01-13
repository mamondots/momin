import { useEffect, useState } from "react";
import { BiUpArrowAlt } from "react-icons/bi";

const GoToTop = () => {
    const [isVisible, setIsVisible] = useState(false)
    const goTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    }

    const listenToScroll = () => {
        let heaightToHidden = 850
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

        if (winScroll > heaightToHidden) {
            setIsVisible(true)
        }
        else {
            setIsVisible(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", listenToScroll)
    }, [])
    return (
        <div>
            {isVisible && (
                <div className="fixed right-12 rounded-full text-xl  cursor-pointer top-[85vh] px-2 py-2 bg-[#91000D] shadow-md text-[#fff]" onClick={goTop}>
                    <p><BiUpArrowAlt /></p>
                </div>
            )}

        </div>
    );
};

export default GoToTop;