import chroma from "chroma-js";

export default {
  root: {
    width: "20%",
    height: "25%",
    backgroundColor: (props) => props.color,
    margin: "0 auto",
    display: "inline-block",
    position: " relative",
    cursor: "pointer",
    marginBottom: "-4.8px",
    "&:hover svg": {
      transform: "scale(1.5)",
    },
  },
  boxContent: {
    color: (props) => (chroma(props.color).luminance() > 0.5 ? "#000" : "#fff"),
    position: "absolute",
    width: "100%",
    left: "0px",
    bottom: "0px",
    padding: "10px",
    letterSpacing: "1px",
    textTransform: "uppercase",
    fontSize: "12px",
    display: "flex",
    justifyContent: "space-between",
  },
  deleteIcon: {
    transition: "all 0.3s ease-in-out",
  },
};