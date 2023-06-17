export const getRandomColors = () => {
    const colors = ["red", "yellow", "green"];
    const randomIdx = Math.floor(Math.random() * colors.length);
    return colors[randomIdx];
  };

export 
const getColorVariation = (color) => {
  switch (color) {
    case "red":
      return {
        background: "#ffe7e7",
        color: "#f39494",
      };
    case "yellow":
      return {
        color: "#f4d472",
        background: "#fdf8e8",
      };
    case "green":
      return {
        color: "#58dbb9",
        background: "#e5faf5",
      };
    default:
      return {};
  }
};


  
  // useEffect(() => {
  //   const handleCache = () => {
  //     localStorage.removeItem("submittedData");
  //   };

  //   window.addEventListener("beforeunload", handleCache);

  //   return () => {
  //     window.removeEventListener("beforeunload", handleCache);
  //     localStorage.removeItem("submittedData");
  //   };
  // }, [submittedData]);