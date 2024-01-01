import { getRandomMeme } from "../memes";
import { Player } from "./types";

export class GameController {
    private _players: Player[] = [];

    public connectPlayer(player: Player) {
        this._players.push(player);
    }

    public endTurn() {
        for (const player of this._players) {
            player.memes.push(getRandomMeme());
            player.ws.send(JSON.stringify({ action: "game.answers", answers: player.memes }))
        }
    }
}