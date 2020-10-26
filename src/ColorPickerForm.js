import React, { Component } from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import Button from "@material-ui/core/Button";
import styles from "./styles/ColorPickerFormStyles";
import { withStyles } from "@material-ui/core/styles";
import { ChromePicker } from "react-color";

class ColorPickerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currColor: "teal",
      newColorName: "",
    };
    this.updateCurrentColor = this.updateCurrentColor.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    ValidatorForm.addValidationRule("isColorUnique", (value) =>
      this.props.colors.every(({ color }) => color !== this.state.currColor)
    );

    ValidatorForm.addValidationRule("isColorNameUnique", (value) =>
      this.props.colors.every(
        ({ name }) => name.toLowerCase() !== value.toLowerCase()
      )
    );
  }

  updateCurrentColor(newColor) {
    this.setState({ currColor: newColor.hex });
  }

  handleChange(evt) {
    this.setState({ newColorName: evt.target.value });
  }
  handleSubmit() {
    const newColor = {
      color: this.state.currColor,
      name: this.state.newColorName,
    };
    this.props.addNewColor(newColor);
    this.setState({ newColorName: "" });
  }

  render() {
    const { paletteIsFull, classes } = this.props;
    const { currColor, newColorName } = this.state;

    return (
      <div className={classes.root}>
        <ChromePicker
          color={currColor}
          onChangeComplete={this.updateCurrentColor}
          className={classes.picker}
        />
        <ValidatorForm onSubmit={this.handleSubmit}>
          <TextValidator
            value={newColorName}
            className={classes.colorNameInput}
            onChange={this.handleChange}
            name="newColorName"
            variant="filled"
            margin="normal"
            placeholder="Color Name"
            validators={["required", "isColorNameUnique", "isColorUnique"]}
            errorMessages={[
              "Enter a color name",
              "Color name must be unique",
              "Color is in use",
            ]}
          />
          <Button
            style={{ background: currColor }}
            type="submit"
            variant="contained"
            color="primary"
            disabled={paletteIsFull}
            className={classes.addColor}
          >
            {paletteIsFull ? "Palette is Full" : "Add Color"}
          </Button>
        </ValidatorForm>
      </div>
    );
  }
}

export default withStyles(styles)(ColorPickerForm);
