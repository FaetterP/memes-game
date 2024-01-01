import { sendToAll } from "..";
import { ExtWebSocket } from "../types";

async function startGame(ws: ExtWebSocket, payload: any) {
    sendToAll({ action: "game.startGame" });
}

async function sendAnswer(ws: ExtWebSocket, payload: any) {
    if(!ws.player.memes.includes(payload.answer)){
        ws.send('{"error":"answer not found"}');
        return;
    }

    sendToAll({ action: "game.sendedAnswer", sender:ws.player.id });
}

async function endTurn(ws: ExtWebSocket, payload: any) {
    ws.game.endTurn();
    sendToAll({ action: "game.endTurn" });
}

export default { handlers: { startGame, sendAnswer, endTurn } };