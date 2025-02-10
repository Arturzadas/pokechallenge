const mainColor = "blackAlpha.800";
// const secColor = "blakcAlpha.400";
const thirColor = "blackAlpha.100";

const commonStyle = {
  color: "white",
  background: mainColor,
  borderRadius: "20px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.05)",
};

export const dashStyles = {
  container: {
    maxW: "1920px",
    height: "100vh",
    width: "100vw",
    backgroundColor: mainColor,
    color: "white",
    alignItems: "flex-start",
    flexDir: "row" as const,
  },
};

export const navStyles = {
  container: {
    position: "relative" as const,
    left: 0,
    top: 0,
    height: "full",
    background: "red",
    zIndex: 1000,
    p: 3,
  },
};

export const gridStyles = {
  outContainer: {
    w: "full",
    backgroundColor: mainColor,
    justifyContent: "center",
    alignItems: "center",
    px: "5%",
  },
  container: {
    w: "calc(100vw - 75px)",
    flexWrap: "wrap" as const,
    alignItems: "center",
    justifyContent: "flex-start" as const,
    h: "100vh",
    overflowY: "scroll" as const,
  },
  card: {
    ...commonStyle,
    h: "200px",
    maxW: "20%",
    w: "full",
    minW: "200px",
    flexDir: "column" as const,
    alignItems: "center" as const,
    justifyContent: "center" as const,
    m: 5,
    p: 5,
    border: "1px solid #2e2e2e",
    transition: "all 0.3s ease",
    cursor: "pointer",
    _hover: {
      transform: "scale(1.02)",
      background: thirColor,
    },
  },
  image: {
    h: "70px",
    w: "70px",
  },
};
