import sizes from "./sizes";

export default {
  Palette: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  colors: {
    height: "90%",
  },
  goBack: {
    width: "20%",
    height: "50%",
    backgroundColor: "#000",
    position: "relative",
    margin: "0 auto",
    display: "inline-block",
    cursor: "pointer",
    marginBottom: "-3.5px",
    opacity: "1",
    [sizes.down("lg")]: {
      width: "25%",
      height: (props) => (props.fullPalette ? "20%" : "50%"),
    },
    [sizes.down("md")]: {
      width: "50%",
      height: (props) => (props.fullPalette ? "20%" : "50%"),
    },
    [sizes.down("xs")]: {
      width: "100%",
      height: (props) => (props.fullPalette ? "5%" : "10%"),
    },
  },
  backButton: {
    width: "100px",
    height: "30px",
    position: "absolute",
    display: "inline-block",
    top: "50%",
    left: "50%",
    marginLeft: "-50px",
    marginTop: "-15px",
    textAlign: "center",
    outline: "none",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    fontSize: "1rem",
    color:"#fff",
    lineHeight: "30px",
    textTransform: "uppercase",
    border: "none",
    cursor: "pointer",
  }
};