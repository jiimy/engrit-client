import { useEffect, useState, RefObject } from "react";
import { throttle } from "lodash";


export const useHeaderVisible = (ref: RefObject<HTMLDivElement>) => {
  const [isHeaderVisible, setIsHeaderVisible] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);

   const handleScroll = throttle(() => {
    if (ref.current) {
      const currentScrollY = ref.current.scrollTop; // 요소의 scrollTop 가져오기

      if (currentScrollY > lastScrollY && currentScrollY > 40) {
        setIsHeaderVisible(false); // 스크롤 다운
      } else {
        setIsHeaderVisible(true); // 스크롤 업
      }
      setLastScrollY(currentScrollY);
    }
  }, 0); // NOTE: 수정필요?

  useEffect(() => {
    const element = ref.current;
    if (element) {
      element.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (element) {
        element.removeEventListener("scroll", handleScroll);
      }
    };
  }, [ref, lastScrollY]);

  return isHeaderVisible;
};
