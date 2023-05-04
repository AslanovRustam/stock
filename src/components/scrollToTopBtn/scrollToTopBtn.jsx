import { useState, useEffect } from "react";
import s from "./scrollToTopBtn.module.css";

export default function ScrollToTopBtn() {
  const [showBtn, setShowBtn] = useState(false);
  useEffect(() => {
    const handleScrollBtn = () => {
      window.pageYOffset > 300 ? setShowBtn(true) : setShowBtn(false);
    };
    window.addEventListener("scroll", handleScrollBtn);
    return () => {
      window.removeEventListener("scroll", handleScrollBtn);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {showBtn && (
        <div className={s.scrollToTop} onClick={handleScrollToTop}>
          Top
        </div>
      )}
    </>
  );
}
