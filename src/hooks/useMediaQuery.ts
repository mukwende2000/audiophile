import { useState, useEffect } from "react";

function useMediaQuery(query: string): boolean {
  const [isMatching, setIsMatching] = useState<boolean>(false);

  useEffect(() => {
    const currentViewport = window.matchMedia(query);
    function updateMedia() {
      setIsMatching(currentViewport.matches);
    }
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return isMatching;
}
export default useMediaQuery;
