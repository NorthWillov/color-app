import React, { Component } from "react";
import { Link } from "react-router-dom";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";
import { withStyles } from "@material-ui/styles";

const styles = {
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
    position: " relative",
    cursor: "pointer",
    marginBottom: "-3.5px",
    opacity: "1",
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

class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      format: "hex",
    };
    this._shades = this.gatherShades(this.props.palette, this.props.colorId);
    this.changeFormat = this.changeFormat.bind(this);
  }

  gatherShades(palette, colorId) {
    let shades = [];
    for (let key in palette.colors) {
      shades = shades.concat(
        palette.colors[key].filter((color) => color.id === colorId)
      );
    }
    return shades.slice(1);
  }

  changeFormat(val) {
    this.setState({ format: val });
  }

  render() {
    const { format } = this.state;
    const { classes } = this.props;
    const { paletteName, emoji, id } = this.props.palette;

    const colorShadesBoxes = this._shades.map((color) => (
      <ColorBox
        key={color.name.replace(/ /g, "")}
        name={color.name}
        background={color[format]}
        fullPalette={false}
      />
    ));
    return (
      <div className={classes.Palette}>
        <Navbar handleChange={this.changeFormat} slidebar={false} />

        <div className={classes.colors}>
          {colorShadesBoxes}
          <Link to={`/palette/${id}`}>
            <div className={classes.goBack}>
              <p className={classes.backButton}>Go Back</p>
            </div>
          </Link>
        </div>

        <PaletteFooter emoji={emoji} paletteName={paletteName} />
      </div>
    );
  }
}

export default withStyles(styles)(SingleColorPalette);
