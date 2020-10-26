import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function PaletteMetaForm(props) {
  const [open, setOpen] = React.useState(true);
  const [newPaletteName, setNewPaletteName] = React.useState("");

  useEffect(() => {
    ValidatorForm.addValidationRule("isPaletteNameUnique", (value) =>
      props.palettes.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      )
    );
  });

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
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Choose A Palette Name</DialogTitle>
      <ValidatorForm onSubmit={handleSubmit}>
        <DialogContent>
          <DialogContentText>
            Please enter a name for your new beautiful palette. Make sure it's
            unique!
          </DialogContentText>

          <TextValidator
            label="Palette Name"
            value={newPaletteName}
            name="newPaletteName"
            onChange={handleChange}
            fullWidth
            margin="normal"
            validators={["required", "isPaletteNameUnique"]}
            errorMessages={[
              "Enter a color name",
              "Palette name must be unique",
            ]}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button variant="contained" color="primary" type="submit">
            Save Palette
          </Button>
        </DialogActions>
      </ValidatorForm>
    </Dialog>
  );
}
