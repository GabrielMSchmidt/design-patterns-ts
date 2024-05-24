import PlayStation from "./consoles/PlayStation";
import XBox from "./consoles/XBox";
import IConsole from "./consoles/interfaces/IConsole";
import AdvancedPlay from "./games/AdvancedPlay";
import Play from "./games/Play";

function startPlay(consoles: IConsole): void{
    console.log("Aguarde...");
    const play = new Play(consoles);
    play.playing();
    play.result();
    console.log("-------------------------");
}

function startAdvancedPlay(consoles: IConsole): void{
    console.log("Aguarde...");
    const play = new AdvancedPlay(consoles);
    play.playing();
    play.result();
    play.challange();
    console.log("-------------------------");
}

startPlay(new XBox());
startAdvancedPlay(new PlayStation());

