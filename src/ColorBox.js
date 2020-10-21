import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import chroma from "chroma-js";
import "./ColorBox.css";

class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      copied: false,
    };
    this.changeCopyState = this.changeCopyState.bind(this);
  }

  changeCopyState() {
    this.setState({ copied: true }, () => {
      setTimeout(() => this.setState({ copied: false }), 1500);
    });
  }

  render() {
    const { name, background, moreUrl, showLink } = this.props;
    const { copied } = this.state;
    const textColor = chroma(background).luminance() > 0.5 ? "#000" : "#fff";
    const textShadowColor = chroma(background).luminance() > 0.5 ? "#fff" : "#000";
    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div style={{ backgroundColor: background }} className="ColorBox">
          <div
            style={{ backgroundColor: background }}
            className={`copy-overlay ${copied && "show"}`}
          />
          <div
            style={{ color: textColor }}
            className={`copy-msg ${copied && "show"}`}
          >
            <h1 style={{ textShadow: `1px 2px ${textShadowColor}` }}>Copied!</h1>
            <p>{background}</p>
          </div>
          <div className="copy-container">
            <div style={{ color: textColor }} className="box-content">
              <span>{name}</span>
            </div>
            <button style={{ color: textColor }} className="copy-button">
              Copy
            </button>
          </div>
          {showLink && (
            <Link to={moreUrl} onClick={(e) => e.stopPropagation()}>
              <span style={{ color: textColor }} className="see-more">
                More
              </span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}

export default ColorBox;
