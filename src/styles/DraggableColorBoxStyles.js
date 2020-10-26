import chroma from "chroma-js";
import sizes from "./sizes";

export default {
  root: {
    width: "20%",
    height: "25%",
    backgroundColor: (props) => props.color,
    margin: "0 auto",
    display: "inline-block",
    position: " relative",
    cursor: "pointer",
    marginBottom: "-4.9px",
    "&:hover svg": {
      transform: "scale(1.5)",
    },
    [sizes.down("lg")]: {
      width: "25%",
      height: "20%",
      marginBottom: "-5px",
    },
    [sizes.down("md")]: {
      width: "50%",
      height: "10%",
    },
    [sizes.down("sm")]: {
      width: "100%",
      height: "5%",
     },
  },
  boxContent: {
    color: (props) => (chroma(props.color).luminance() > 0.5 ? "#000" : "#fff"),
    position: "absolute",
    width: "100%",
    left: "0px",
    bottom: "0px",
    padding: "0 5px 0 5px",
    letterSpacing: "1px",
    textTransform: "uppercase",
    fontSize: "12px",
    display: "flex",
    justifyContent: "space-between",
    [sizes.down("sm")]: {
      marginBottom: "-2px"
     },
  },
  deleteIcon: {
    transition: "all 0.3s ease-in-out",
  },
};
