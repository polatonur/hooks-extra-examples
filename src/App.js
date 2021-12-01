import "./App.css";
import { ErrorBoundary } from "react-error-boundary";
import React, { useState, useEffect } from "react";

const Facts = () => {
  const [facts, setFacts] = useState({
    status: "idle",
    data: null,
    error: null,
  });
  const [animal, se]
  useEffect(() => {
    setFacts((prev) => ({ ...prev, status: "pending" }));
    fetch("https://cat-fact.herokuapp.com/facts")
      .then((response) => response.json())
      .then((data) =>
        setFacts((prev) => ({ ...prev, data, status: "resolved" }))
      )
      .catch((error) => setFacts((prev) => ({ ...prev, status: "rejected" })));
  }, []);

  return <div>Hey yo</div>;
};

function App() {
  return (
    <div className="App">
      <h1>Cat Facts</h1>
      <ErrorBoundary>
        <Facts />
      </ErrorBoundary>
    </div>
  );
}

export default App;
