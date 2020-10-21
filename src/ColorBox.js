import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import chroma from "chroma-js";
import { withStyles } from "@material-ui/styles";
import "./ColorBox.css";

const styles = {
  ColorBox: {
    width: "20%",
    height: (props) => (props.fullPalette ? "25%" : "50%"),
    backgroundColor: (props) => props.background,
    margin: "0 auto",
    display: "inline-block",
    position: " relative",
    cursor: "pointer",
    marginBottom: "-3.5px",
    "&:hover button": {
      opacity: "1",
    },
  },
  textColor: {
    color: (props) =>
      chroma(props.background).luminance() > 0.5 ? "#000" : "#fff",
  },
  seeMore: {
    color: (props) =>
      chroma(props.background).luminance() > 0.5 ? "#000" : "#fff",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    position: "absolute",
    border: "none",
    right: "0px",
    bottom: "0px",
    width: "60px",
    height: "30px",
    textAlign: "center",
    lineHeight: "30px",
  },
  copyButton: {
    color: (props) =>
      chroma(props.background).luminance() > 0.5 ? "#000" : "#fff",
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
    lineHeight: "30px",
    textTransform: "uppercase",
    border: "none",
    cursor: "pointer",
    opacity: "0"
  },
};

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
    const { name, background, moreUrl, fullPalette, classes } = this.props;
    const { copied } = this.state;

    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div className={classes.ColorBox}>
          <div
            style={{ backgroundColor: background }}
            className={`copy-overlay ${copied && "show"}`}
          />
          <div className={`copy-msg ${copied && "show"}`}>
            <h1 className={classes.textColor}>Copied!</h1>
            <p className={classes.textColor}>{background}</p>
          </div>
          <div className="copy-container">
            <div className="box-content">
              <span className={classes.textColor}>{name}</span>
            </div>
            <button className={classes.copyButton}>Copy</button>
          </div>
          {fullPalette && (
            <Link to={moreUrl} onClick={(e) => e.stopPropagation()}>
              <span className={classes.seeMore}>More</span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}

export default withStyles(styles)(ColorBox);
