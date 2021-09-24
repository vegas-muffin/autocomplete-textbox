import "./App.css";
import HideabltText from "./HideableText";
import AutoCompleteText from "./AutoCompleteText";
import countries from "./countries";

function App() {
  return (
    <div className="App">
      <div className="App-Component">
        <AutoCompleteText items={countries} />
      </div>

      {/* <HideabltText text="Dynamic text" /> */}
    </div>
  );
}

export default App;
