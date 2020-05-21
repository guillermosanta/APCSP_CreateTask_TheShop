import React, { useState } from "react";
import "./styles.css";
import HomePage from "./components/pages/HomePage/HomePage";
import NoPage from "./components/pages/NoPage/NoPage";
import ShopPage from "./components/pages/ShopPage/ShopPage";
import DisplayResults from "./components/pages/DisplayResults/DisplayResults";

export default function App() {
  const [page, setPage] = useState(1);
  const [BananaPrize, setBananaPrize] = useState(0);
  const [ApplesPrize, setApplesPrize] = useState(0);
  const [GrapesPrize, setGrapesPrize] = useState(0);
  const [OrangesPrize, setOrangesPrize] = useState(0);
  const [totalPrize, setTotalPrize] = useState();

  const Continue = choice => {
    if (choice) {
      setPage(3);
    } else {
      setPage(2);
    }
  };

  const complete = p => {
    calculateTotal(p);
    calculateEnd({
      BananaPrize: BananaPrize,
      ApplesPrize: ApplesPrize,
      GrapesPrize: GrapesPrize,
      OrangesPrize: OrangesPrize
    });
    if (totalPrize !== undefined) {
      console.log();
      setPage(4);
    } else {
      setInterval(() => {
        if (totalPrize !== undefined) {
          setPage(4);
        }
      }, 100);
    }
  };
  const calculateTotal = p => {
    setBananaPrize(p.Bananas * 0.18);
    setApplesPrize(p.Apples * 0.22);
    setGrapesPrize(p.Grapes * 0.5);
    setOrangesPrize(p.Oranges * 1.5);
  };
  const calculateEnd = par => {
    console.log(par.BananaPrize);
    console.log(
      "All items",
      par.BananaPrize,
      ApplesPrize,
      ApplesPrize,
      GrapesPrize,
      OrangesPrize
    );
    setTotalPrize(BananaPrize + ApplesPrize + GrapesPrize + OrangesPrize);
  };
  return (
    <div className="App">
      {page === 1 && <HomePage Continue={Continue} />}
      {page === 2 && <NoPage />}
      {page === 3 && <ShopPage complete={complete} />}
      {page === 4 && <DisplayResults totalPrize={totalPrize} />}
    </div>
  );
}
