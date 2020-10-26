import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import styles from "./styles/DraggableColorBoxStyles";
import { withStyles } from "@material-ui/styles";
import { SortableElement } from "react-sortable-hoc";


const DraggableColorBox = SortableElement((props) => {
  const { classes, name, handleClick } = props;

  return (
    <div className={classes.root}>
      <div className={classes.boxContent}>
        <span>{name}</span>
        <span>
          <DeleteIcon className={classes.deleteIcon} onClick={handleClick} />
        </span>
      </div>
    </div>
  );
});

export default withStyles(styles)(DraggableColorBox);
