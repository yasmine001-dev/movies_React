import axios, { Axios } from "axios";
import React, { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import Spinner from "./Spinner";
//https://api.themoviedb.org/3/person/popular?api_key=5f578814d42d6ed8b4a30a18ff0e580c

export default function Actors() {
  const [actors, setActors] = useState([]);

  async function getActors() {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/person/popular?api_key=5f578814d42d6ed8b4a30a18ff0e580c`,
    );
    console.log(data.results);
    setActors(data.results);
  }

  useEffect(() => {
    getActors();
  }, []);
  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Actors</h1>
      <div style={styles.layout}>
        <aside style={styles.sidebar}>
          <ul style={styles.list}>
            {["Hollywood", "Bollywood", "MiddleEast"].map((item) => (
              <li key={item} style={styles.listItem}>
                <Link
                  to={item.toLowerCase()}
                  style={styles.link}
                  onMouseEnter={(e) => {
                    e.target.style.background = "rgba(255,255,255,0.08)";
                    e.target.style.paddingLeft = "20px";
                    e.target.style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = "transparent";
                    e.target.style.paddingLeft = "14px";
                    e.target.style.color = "rgba(255,255,255,0.65)";
                  }}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </aside>

        <main style={styles.outlet}>
          <div style={styles.grid}>
            {actors.length > 0 ? (
              actors.map((actor) => (
                <div
                  key={actor.name}
                  style={styles.card}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.background = "rgba(255,255,255,0.07)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                  }}
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                    alt={actor.original_name}
                    style={styles.image}
                  />
                  <div style={styles.info}>
                    <h2 style={styles.name}>{actor.name}</h2>
                    <p style={styles.popularity}>
                      ⭐ {actor.popularity?.toFixed(1)}
                    </p>
                  </div>
                </div>
              ))
            ) : (
<div className="d-flex justify-content-center align-items-center">
  <Spinner />
</div>            )}
          </div>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#0f0f0f",
    color: "#fff",
    fontFamily: "'Georgia', serif",
    padding: "32px",
    boxSizing: "border-box",
  },
  title: {
    fontSize: "2rem",
    fontWeight: "400",
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    marginBottom: "28px",
    color: "#fff",
    borderBottom: "1px solid rgba(255,255,255,0.12)",
    paddingBottom: "16px",
  },
  layout: {
    display: "flex",
    gap: "0",
    minHeight: "70vh",
  },
  sidebar: {
    width: "25%",
    borderRight: "1px solid rgba(255,255,255,0.1)",
    paddingRight: "24px",
  },
  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: "4px",
  },
  listItem: {
    margin: 0,
  },
  link: {
    display: "block",
    padding: "10px 14px",
    color: "rgba(255,255,255,0.65)",
    textDecoration: "none",
    fontSize: "0.95rem",
    letterSpacing: "0.06em",
    borderRadius: "6px",
    transition: "all 0.2s ease",
    textTransform: "uppercase",
  },
  outlet: {
    width: "75%",
    paddingLeft: "32px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
    gap: "16px",
  },
  card: {
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "10px",
    overflow: "hidden",
    transition: "all 0.25s ease",
    cursor: "pointer",
  },
  image: {
    width: "100%",
    aspectRatio: "2/3",
    objectFit: "cover",
    display: "block",
  },
  info: {
    padding: "10px 12px",
  },
  name: {
    fontSize: "0.85rem",
    fontWeight: "500",
    color: "#fff",
    margin: "0 0 4px",
    letterSpacing: "0.03em",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  popularity: {
    fontSize: "0.75rem",
    color: "rgba(255,255,255,0.45)",
    margin: 0,
  },
};
