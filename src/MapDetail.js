// MapDetail.js
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { fetchGeminiData } from "./geminiService";
import "./styles/styles.css";

const MapDetail = ({ map, onBack }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const markdownText = await fetchGeminiData(map);
        setData(markdownText);
      } catch (err) {
        console.error("Error fetching Gemini data:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [map]);

  return (
    <>
      {/* Back button fixed in top-left of the viewport */}
      <div
        style={{
          position: "fixed",
          top: "20px",
          left: "20px",
          zIndex: 999,
        }}
      >
        <button onClick={onBack}>Back</button>
      </div>

      <div className="container">
        <h2>Best Agents and Compositions for {map}</h2>
        {loading && <div>Loading data for {map}...</div>}
        {error && <div>Error fetching data for {map}.</div>}
        {data && <ReactMarkdown>{data}</ReactMarkdown>}
      </div>
    </>
  );
};

export default MapDetail;
