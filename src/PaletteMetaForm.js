import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function PaletteMetaForm(props) {
  const [open, setOpen] = React.useState(false);
  const [newPaletteName, setNewPaletteName] = React.useState("");

  useEffect(() => {
    ValidatorForm.addValidationRule("isPaletteNameUnique", (value) =>
      props.palettes.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      )
    );
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (evt) => {
    setNewPaletteName(evt.target.value);
  };

  const handleSubmit = () => {
    const newPalette = {
      paletteName: newPaletteName,
      id: newPaletteName.toLowerCase().replace(/ /g, "-"),
      emoji: "",
      colors: props.colors,
    };
    props.savePalette(newPalette);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
          <ValidatorForm onSubmit={handleSubmit}>
            <TextValidator
              label="Palette Name"
              value={newPaletteName}
              name="newPaletteName"
              onChange={handleChange}
              validators={["required", "isPaletteNameUnique"]}
              errorMessages={[
                "Enter a color name",
                "Palette name must be unique",
              ]}
            />
            <Button variant="contained" color="primary" type="submit">
              Save Palette
            </Button>
          </ValidatorForm>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
