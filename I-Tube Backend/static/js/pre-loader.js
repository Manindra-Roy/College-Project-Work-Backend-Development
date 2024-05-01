const preLoader = () => {
    setTimeout(() => {
      document.querySelector(".page-loading-animation").style.opacity = "0";
    }, 250);
    setTimeout(() => {
      document.querySelector(".page-loading-animation").style.display = "none";
    }, 500);
  };