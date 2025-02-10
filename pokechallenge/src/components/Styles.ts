const mainColor = "blackAlpha.800";
// const secColor = "blakcAlpha.400";
// const thirColor = "blackAlpha.100";

export const dashStyles = {
  container: {
    height: "100vh",
    width: "100vw",
    backgroundColor: mainColor,
    color: "white",
    alignItems: "flex-end",
  },
};

export const navStyles = {
  container: {
    position: "fixed" as const,
    left: 0,
    top: 0,
    height: "100vh",
    // width: "50px",
    background: "red",
    zIndex: 1000,
    p: 3,
  },
};

export const gridStyles = {
  container: {
    w: "calc(100vw - 75px)",
    backgroundColor: "green",
    border: "1px solid black",
    h: "100vh",
  },
};
