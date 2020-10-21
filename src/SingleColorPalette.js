import React, { Component } from "react";
import { Link } from "react-router-dom";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";

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
    const { paletteName, emoji, id } = this.props.palette;

    const colorShadesBoxes = this._shades.map((color) => (
      <ColorBox
        key={color.name.replace(/ /g, "")}
        name={color.name}
        background={color[format]}
        showLink={false}
      />
    ));
    return (
      <div className="SingleColorPalette Palette">
        <Navbar handleChange={this.changeFormat} slidebar={false} />

        <div className="Palette-colors">
          {colorShadesBoxes}
          <Link to={`/palette/${id}`}>
            <div className="go-back ColorBox">
              <p className="back-button">Go Back</p>
            </div>
          </Link>
        </div>

        <PaletteFooter emoji={emoji} paletteName={paletteName} />
      </div>
    );
  }
}

export default SingleColorPalette;
