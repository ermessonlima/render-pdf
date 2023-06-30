import "./App.css";
import MyDocument from "./pdf";

import { useState } from "react";

import PdfG from "./pdfG";

function App() {
  const [pdf, setPdf] = useState(null);
  const [numberOfPages, setNumberOfPages] = useState(1);

  const handleNumberOfPagesChange = (event) => {
    setNumberOfPages(event.target.value);
  };
  return (
    <div className="App">
      {pdf && <PdfG page={numberOfPages} />}
      {!pdf && (
        <>
        <label>
          Numero de Cards: 
        </label>
          <input
            type="number"
            value={numberOfPages}
            onChange={handleNumberOfPagesChange}
            placeholder="Number of pages"
          />

          <button
            onClick={() => {
              setPdf(true);
            }}
          >
            Gerar PDF
          </button>
        </>
      )}
    </div>
  );
}

export default App;
