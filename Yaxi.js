
const Discord = require("discord.js");
const Yaxi = new Discord.Client();
//////// playing or dnd  streaming ////////
Yaxi.on("ready", () => {
  console.log(
    `Online In Servers`
  );
  let statuses = [
  
  `You only live once, so try to live for God.`,
 
  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    Yaxi.user.setActivity(STREAMING, {      
    type: "STREAMING", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
///////////////////////
Yaxi.on("ready", () => {
    var join = Yaxi.channels.get("994005265076727968"); /// id voice
    if (join) join.join();
  });
//////////////// tokn lera da bne 
Yaxi.login("OTIyMDc5NjE3Nzc3NTMyOTQ4.Gw-pTi.OnoZGu2BI7KO-5aoZD9_o6ifisJEGuo5gdbfgA");
