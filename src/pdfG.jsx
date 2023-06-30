import React, { useState, useEffect } from "react";
import "./App.css";
import MyDocument from "./pdf";
import { usePDF } from "@react-pdf/renderer";

function PdfG({page}) { 
  const [startTime, setStartTime] = useState(null);
  const [loadingTime, setLoadingTime] = useState(null);
  
  const MyDoc = <MyDocument page={page} />;
  const [instance] = usePDF({ document: MyDoc });
   
  useEffect(() => {
    if (instance.loading) {
      setStartTime(new Date().getTime());
    }
  }, [instance.loading]);
 
  useEffect(() => {
    if (!instance.loading && startTime) {
      setLoadingTime(((new Date().getTime() - startTime) / 1000).toFixed(2));
    }
  }, [instance.loading, startTime]);

  return (
    <div className="App">
      <h1>{instance.url}</h1>
      {instance.loading ? (
        <>
        <p>Carregando...</p> 
         </>
      ) : (
        <a href={instance.url} download="test.pdf">
          Download
        </a>
      )}
      <br/>
      {loadingTime ? `Tempo gasto : ${loadingTime}s` : ""}
    </div>
  );
}

export default PdfG;
