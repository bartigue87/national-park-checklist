import React from "react";
import Header from "./components/Header";
import parks from "./parks";
import Card from "./components/Card";

function App() {
  const park = parks.map((park) => {
    return <Card key={park.title} {...park} />;
  });
  console.log(park);
  return (
    <div className="App">
      <Header />
      {park}
    </div>
  );
}

export default App;
