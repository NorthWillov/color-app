import React from "react";
import chroma from "chroma-js";
import DeleteIcon from "@material-ui/icons/Delete";
import { withStyles } from "@material-ui/styles";

const styles = {
  root: {
    width: "20%",
    height: "25%",
    backgroundColor: (props) => props.color,
    margin: "0 auto",
    display: "inline-block",
    position: " relative",
    cursor: "pointer",
    marginBottom: "-3.5px",
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

function DraggableColorBox(props) {
  const { classes, name, handleClick } = props;

  return (
    <div className={classes.root}>
      <div className={classes.boxContent}>
        <span>{name}</span>
        <span>
          <DeleteIcon className={classes.deleteIcon} onClick={handleClick}/>
        </span>
      </div>
    </div>
  );
}

export default withStyles(styles)(DraggableColorBox);
