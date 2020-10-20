import React from "react";
import { Route, Switch } from "react-router-dom";
import Palette from "./Palette";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={() => <h1>PALLETS LIST GOES HERE</h1>} />
        <Route
          exact
          path="/palette/:id"
          render={() => <Palette palette={generatePalette(seedColors[4])} />}
        />
      </Switch>
    </div>
  );
}

export default App;
