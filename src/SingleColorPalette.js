import React, { Component } from "react";
import ColorBox from "./ColorBox";

class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      format: "rgb",
    };
    this._shades = this.gatherShades(this.props.palette, this.props.colorId);
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

  render() {
    const colorShadesBoxes = this._shades.map((color) => (
      <ColorBox
        key={color.id}
        name={color.name}
        background={color.hex}
        showLink={false}
      />
    ));
    return (
      <div className="Palette">
        <div className="Palette-colors">{colorShadesBoxes}</div>≈
      </div>
    );
  }
}

export default SingleColorPalette;
