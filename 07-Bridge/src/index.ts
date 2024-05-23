import Facebook from "./plataforms/Facebook";
import Twitch from "./plataforms/Twitch";
import Youtube from "./plataforms/Youtube";
import IPlataform from "./plataforms/interface/IPlatform";
import AdvancedLive from "./transmissions/AdvancedLive";
import Live from "./transmissions/Live";

function startLive(platform: IPlataform){
    console.log("Aguarde...");
    const live = new Live(platform);
    live.broadcasting();
    live.result();
}

function startAdvancedLive(platform: IPlataform){
    console.log("Aguarde...");
    const live = new AdvancedLive(platform);
    live.broadcasting();
    live.result();
    live.subtitles();
    live.comments();
    console.log("-----------------------------------");
}

startAdvancedLive(new Twitch());