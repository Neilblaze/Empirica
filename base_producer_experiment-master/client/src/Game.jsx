import { Chat, useGame } from "@empirica/core/player/classic/react";
import React, { useState } from "react";

import { Profile } from "./Profile";
import { Stage } from "./Stage";
import Drawer from "./components/Drawer";

export function Game() {
  const game = useGame();
  const { playerCount } = game.get("treatment");

  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChatDrawer = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div className="h-full w-full flex">
      <div className="h-full w-full flex flex-col">
        <Profile />
        <div className="h-full flex items-center justify-center">
          <Stage />
        </div>
      </div>

      {playerCount > 1 && (
        <>
          <button onClick={toggleChatDrawer}>Open Chat</button>
          <Drawer isOpen={isChatOpen} callback={toggleChatDrawer} position="right">
            <Chat scope={game} attribute="chat" />
          </Drawer>
        </>
      )}
    </div>
  );
}
