import React from "react";
import "./styles/styles.css";
import { Github, Linkedin } from "lucide-react";

const maps = [
  "Bind",
  "Haven",
  "Split",
  "Ascent",
  "Icebox",
  "Breeze",
  "Fracture",
  "Pearl",
  "Lotus",
  "Sunset",
  "Abyss",
];

const Home = ({ onSelectMap }) => {
  return (
    <div className="container">
      <h1>VALORANT AI</h1>
      <p className="description">
        This AI-powered application helps you find the best agents and team
        compositions for each Valorant map. Select a map to get AI-driven
        recommendations based on optimal strategies used by professional
        players.
      </p>

      <h2>Select a Valorant Map</h2>
      <div className="map-grid">
        {maps.map((map) => (
          <button
            key={map}
            className="map-button"
            onClick={() => onSelectMap(map)}
          >
            {map}
          </button>
        ))}
      </div>

      <footer>
        <div>Developer Info:</div>
        <div className="social-links">
          <a
            href="https://github.com/ashutoshswamy"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <Github size={24} />
            <span>ashutoshswamy</span>
          </a>
          <a
            href="https://linkedin.com/in/ashutoshswamy"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <Linkedin size={24} />
            <span>ashutoshswamy</span>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
