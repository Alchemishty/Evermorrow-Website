import { useRef } from "react";
import "./gameCard.css";

export default function GameCard({
  imgPath,
  gameLink,
  onGameCardEnter,
  onGameCardExit,
}) {
  const boundingRef = useRef(null);
  return (
    // <a className="gamecard" href={gameLink} target="_blank">
    <a className="gamecard" target="_blank">
      <div
        className="gamecard-inner"
        onMouseLeave={() => (boundingRef.current = null)}
        onMouseEnter={(ev) => {
          boundingRef.current = ev.currentTarget.getBoundingClientRect();
        }}
        onMouseMove={(ev) => {
          if (!boundingRef.current) return;
          const x = ev.clientX - boundingRef.current.left;
          const y = ev.clientY - boundingRef.current.top;
          const xPercentage = x / boundingRef.current.width;
          const yPercentage = y / boundingRef.current.height;
          const xRotation = (xPercentage - 0.5) * 7;
          const yRotation = (0.5 - yPercentage) * 7;

          ev.currentTarget.style.setProperty("--x-rotation", `${yRotation}deg`);
          ev.currentTarget.style.setProperty("--y-rotation", `${xRotation}deg`);
          ev.currentTarget.style.setProperty("--x", `${xPercentage * 100}%`);
          ev.currentTarget.style.setProperty("--y", `${yPercentage * 100}%`);
        }}
      >
        <div className="gamecard-overlay gamecard-edge" />
        <div className="gamecard-overlay gamecard-middle" />
        <div className="gamecard-overlay gamecard-edge" />
        <img
          className="gamecard-image"
          src={imgPath}
          onMouseEnter={onGameCardEnter}
          onMouseOut={onGameCardExit}
        />
      </div>
    </a>
  );
}
