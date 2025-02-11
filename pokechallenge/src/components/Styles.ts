const mainColor = "blackAlpha.800";
const secColor = "blackAlpha.400";
const thirColor = "blackAlpha.100";
const bCol = "#2e2e2e";

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
    background: mainColor,
    borderRight: `1px solid ${bCol}`,
    zIndex: 1000,
    p: 3,
  },
  drawerCont: {
    background: "black",
    opacity: 1,
    borderRight: `1px solid ${bCol}`,
    color: "white",
  },
  drawerBody: {
    background: secColor,
    color: "white",
  },
  single: {
    w: "fit-content",
    my: 1,
    borderRadius: "10px",
    border: `1px solid ${bCol}`,
    px: 2,
    py: 1,
    cursor: "pointer" as const,
    _hover: {
      background: "whiteAlpha.100",
      color: "white",
      transition: "all 0.3s ease",
      transform: "scale(1.05)",
    },
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
    w: "100%",
    flexWrap: "wrap" as const,
    alignItems: "center",
    justifyContent: "space-between" as const,
    h: "100vh",
    overflowY: "scroll" as const,
    pb: 20,
    sx: {
      "&::-webkit-scrollbar": {
        display: "none",
      },
    },
  },
  card: {
    ...commonStyle,
    h: "200px",
    maxW: "204px",
    minW: "200px",
    flexDir: "column" as const,
    alignItems: "center" as const,
    justifyContent: "center" as const,
    m: 5,
    p: 5,
    border: `1px solid ${bCol}`,
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
    bgColor: secColor,
  },
};

export const modalStyles = {
  bodyCont: {
    flexDir: "column" as const,
    w: "full",
    color: "white",
    alignItems: "center",
  },
  modalCont: {
    bgColor: mainColor,
    border: `1px solid ${bCol}`,
  },
  statCont: {
    flexDir: "column" as const,
    fontSize: "12px",
    color: "white",
    alignItems: "flex-start" as const,
    w: "full",
    alignSelf: "center",
  },
  singleStatCont: {
    w: "full",
    justifyContent: "space-between",
  },
  topCont: {
    justifyContent: "space-between",
    w: "full",
  },
  heading: {
    fontSize: "20px",
    w: "full",
    mb: 2,
  },
  bottomCont: {
    w: "full",
  },
  abilCont: {
    flexDir: "column" as const,
    fontSize: "12px",
    w: "50%",
  },
  typesCont: {
    flexDir: "column" as const,
    fontSize: "12px",
    w: "50%",
  },
  typeSingleCont: {
    cursor: "pointer" as const,
  },
  closeButton: {
    bgColor: mainColor,
    border: `1px solid ${bCol}`,
  },
};

export const pageStyles = {
  container: {
    position: "fixed" as const,
    bottom: "20px",
    left: "calc(50vw)",
    sx: {
      WebkitUserSelect: "none", // Safari
      MozUserSelect: "none", // Firefox
      msUserSelect: "none", // IE10+/Edge
      userSelect: "none", // Standard
    },
  },
  arrow: {
    h: "50px",
    w: "50px",
    borderRadius: "100px",
    border: `1px solid ${bCol}`,
    background: mainColor,
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    mx: 1,
    _hover: {
      background: secColor,
      transform: "scale(1.05)",
      transition: "all 0.3s ease",
    },
  },
};
