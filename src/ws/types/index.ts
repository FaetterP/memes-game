import { WebSocket } from "ws";
import { GameController } from "../GameController";

export type Player = {
    ws: ExtWebSocket;
    id: string;
    memes: { name: string, imageUrl: string }[]
}

export declare class ExtWebSocket extends WebSocket {
    game: GameController;
    isAlive: boolean;
    player: Player;
}