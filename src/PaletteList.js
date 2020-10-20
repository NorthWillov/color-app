import React, { Component } from "react";
import MiniPalette from "./MiniPalette";
import { Link } from "react-router-dom";

class PaletteList extends Component {
  render() {
    const { palettes } = this.props;

    return (
      <div className="PaletteList">
        {palettes.map((p) => (
          <MiniPalette  {...p}/>
        ))}
      </div>
    );
  }
}

export default PaletteList;
{/* <p key={p.id}>
            <Link to={`/palette/${p.id}`}>{p.paletteName}</Link>
          </p> */}