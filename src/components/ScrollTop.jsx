import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

function ScrollTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 500);
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

  return (
    <>
      {show && (
        <button
          onClick={scrollToTop}
          className="
          fixed
          bottom-24
          right-6
          z-50
          w-14
          h-14
          rounded-full
          bg-[#052e16]
          border
          border-green-500/40
          text-green-400
          flex
          items-center
          justify-center
          shadow-xl
          hover:scale-110
          transition-all"
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
}

export default ScrollTop;