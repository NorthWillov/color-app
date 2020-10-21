import React from "react";
import { Route, Switch } from "react-router-dom";
import Palette from "./Palette";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";
import PaletteList from "./PaletteList";

function App() {
  function findPalette(id) {
    return seedColors.find(function (palette) {
      return palette.id === id;
    });
  }

  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          render={(routeProps) => (
            <PaletteList palettes={seedColors} {...routeProps} />
          )}
        />
        <Route
          exact
          path="/palette/:id"
          render={(routeProps) => (
            <Palette
              palette={generatePalette(findPalette(routeProps.match.params.id))}
            />
          )}
        />
        <Route exact path="/palette/:palleteId/:colorId" render={() => <h1>Singe Color Page here</h1>} />
      </Switch>
    </div>
  );
}

export default App;
