import React, { Component } from "react";
import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";
import styles from "./styles/PaletteListStyles";
import { withStyles } from "@material-ui/styles";
import { CSSTransition, TransitionGroup } from "react-transition-group";

class PaletteList extends Component {
  goToPalette(id) {
    this.props.history.push(`/palette/${id}`);
  }

  render() {
    const { palettes, classes, deletePalette } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1>React Colors</h1>
            <Link to="/palette/new">Create Palette</Link>
          </nav>
          <TransitionGroup className={classes.palettes}>
            {palettes.map((p) => (
              <CSSTransition key={p.id} classNames="fade" timeout={500}>
                <MiniPalette
                  {...p}
                  handleClick={() => this.goToPalette(p.id)}
                  key={p.id}
                  id={p.id}
                  deletePalette={deletePalette}
                />
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);
