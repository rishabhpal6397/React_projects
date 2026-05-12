import { useState } from "react";
import Header from "./component/Header";
import Entry from "./component/Entry";
import data from "./data";

const App = () => {
  const [count, setCount] = useState(0);

  const entryElements = data.map((entry) => {
    return(
      <Entry
        key={entry.id}
        {...entry}
      />
    );
  });

  return(
    <>
      <Header />
      <main className="container">
        {entryElements}
      </main>

    </>
  )
}

export default App;