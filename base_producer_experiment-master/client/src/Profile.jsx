import {
  usePlayer,
  useRound,
  useStage,
} from "@empirica/core/player/classic/react";
import React from "react";
import { Avatar } from "./components/Avatar";
import { Timer } from "./components/Timer";

export function Profile({ productName }) {
  const player = usePlayer();
  const round = useRound();
  const stage = useStage();

  const score = player.get("score") || 0;
  const roundName = round?.get("name") || "";

  return (
    <div className="min-w-lg md:min-w-2xl mt-2 mx-auto px-3 py-2 text-gray-500 rounded-md grid grid-cols-3 items-center border-.5 border-purple-500">
      <div className="leading-tight ml-1">
        <div className="text-gray-600 font-semibold">{roundName}</div>
        <div className="text-empirica-500 font-medium">{productName}</div>
      </div>

      <Timer />

      <div className="flex space-x-3 items-center justify-end">
        <div className="flex flex-col items-center">
          <div className="text-xs font-semibold uppercase tracking-wide leading-none text-gray-400">
            Score
          </div>
          <div className="text-3xl font-semibold !leading-none tabular-nums">
            {Math.floor(score)}
          </div>
        </div>
        <div className="h-11 w-11">
          <Avatar player={player} />
        </div>
      </div>
    </div>
  );
}
