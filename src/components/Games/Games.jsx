import "./games.css";
import GameCard from "./GameCard";

export default function Games({ onGameCardEnter, onGameCardExit }) {
  const gamesList = [
    {
      imgPath: "/revealing.png",
      gameLink: "",
    },
    {
      imgPath: "/revealing.png",
      gameLink: "",
    },
  ];

  return (
    <div className="games">
      <div className="games-header">
        <p className="games-title">
          Our <span className="blue-text">Games</span>
        </p>
      </div>
      <div className="games-cards">
        {gamesList.map((game) => {
          return (
            <GameCard
              key={game.imgPath}
              imgPath={game.imgPath}
              gameLink={game.gameLink}
              onGameCardEnter={onGameCardEnter}
              onGameCardExit={onGameCardExit}
            />
          );
        })}
      </div>
    </div>
  );
}
