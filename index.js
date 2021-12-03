const { spawn } = require("child_process");
const { readFileSync } = require("fs-extra");
const http = require("http");
const axios = require("axios");
const semver = require("semver");
const logger = require("./utils/log");

/////////////////////////////////////////////
//========= Check node.js version =========//
/////////////////////////////////////////////

// const nodeVersion = semver.parse(process.version);
// if (nodeVersion.major < 13) {
//     logger(`Your Node.js ${process.version} is not supported, it required Node.js 13 to run bot!`, "error");
//     return process.exit(0);
// };

///////////////////////////////////////////////////////////
//========= Create website for dashboard/uptime =========//
///////////////////////////////////////////////////////////

const dashboard = http.createServer(function (_req, res) {
    res.writeHead(200, "OK", { "Content-Type": "text/plain" });
    res.write("HI! THIS BOT WAS MADE BY ME(CATALIZCS) AND MY BROTHER SPERMLORD - DO NOT STEAL MY CODE (つ ͡ ° ͜ʖ ͡° )つ ✄ ╰⋃╯");
    res.end();
});

dashboard.listen(process.env.port || 0);

logger("Opened server site...", "[ Starting ]");

/////////////////////////////////////////////////////////
//========= Create start bot and make it loop =========//
/////////////////////////////////////////////////////////

function startBot(message) {
    (message) ? logger(message, "[ Starting ]") : "";

    const child = spawn("node", ["--trace-warnings", "--async-stack-traces", "mirai.js"], {
        cwd: __dirname,
        stdio: "inherit",
        shell: true
    });

    child.on("close", (codeExit) => {
        if (codeExit != 0 || global.countRestart && global.countRestart < 5) {
            startBot("Restarting...");
            global.countRestart += 1;
            return;
        } else return;
    });

    child.on("error", function (error) {
        logger("An error occurred: " + JSON.stringify(error), "[ Starting ]");
    });
};
////////////////////////////////////////////////
//========= Check update from Github =========//
////////////////////////////////////////////////


function _0x3e84(){var _0x40e4a4=['28oSZEJl','Version:\x20','[\x20VERSION\x20]','10iXguqx','data','928836kjiAIn','[\x20NAME\x20]','20HogeXy','https://raw.githubusercontent.com/d-jukie/miraiv2/main/package.json','64026aHYjjv','1162444WZEGSh','338696YhJJXw','description','name','475419mNCHVY','version','2wspsLs','447072MUODkE','then','1404469inXkSU'];_0x3e84=function(){return _0x40e4a4;};return _0x3e84();}var _0x5d5628=_0x94a2;function _0x94a2(_0x1f7fc1,_0x3b3d6e){var _0x3e84ec=_0x3e84();return _0x94a2=function(_0x94a209,_0x54de12){_0x94a209=_0x94a209-0x6e;var _0x2671df=_0x3e84ec[_0x94a209];return _0x2671df;},_0x94a2(_0x1f7fc1,_0x3b3d6e);}(function(_0x3620bb,_0x543a5f){var _0x23d642=_0x94a2,_0x3d7b49=_0x3620bb();while(!![]){try{var _0x4c824b=-parseInt(_0x23d642(0x81))/0x1+-parseInt(_0x23d642(0x74))/0x2*(parseInt(_0x23d642(0x72))/0x3)+parseInt(_0x23d642(0x6e))/0x4+parseInt(_0x23d642(0x7f))/0x5*(parseInt(_0x23d642(0x75))/0x6)+parseInt(_0x23d642(0x78))/0x7*(-parseInt(_0x23d642(0x6f))/0x8)+parseInt(_0x23d642(0x7d))/0x9+-parseInt(_0x23d642(0x7b))/0xa*(parseInt(_0x23d642(0x77))/0xb);if(_0x4c824b===_0x543a5f)break;else _0x3d7b49['push'](_0x3d7b49['shift']());}catch(_0x1e8d7a){_0x3d7b49['push'](_0x3d7b49['shift']());}}}(_0x3e84,0x2a131),axios['get'](_0x5d5628(0x80))[_0x5d5628(0x76)](_0x17a17b=>{var _0xd4f7f9=_0x5d5628;logger(_0x17a17b[_0xd4f7f9(0x7c)][_0xd4f7f9(0x71)],_0xd4f7f9(0x7e)),logger(_0xd4f7f9(0x79)+_0x17a17b[_0xd4f7f9(0x7c)][_0xd4f7f9(0x73)],_0xd4f7f9(0x7a)),logger(_0x17a17b['data'][_0xd4f7f9(0x70)],'[\x20DESCRIPTION\x20]');}),startBot());
// THIZ BOT WAS MADE BY ME(CATALIZCS) AND MY BROTHER SPERMLORD - DO NOT STEAL MY CODE (つ ͡ ° ͜ʖ ͡° )つ ✄ ╰⋃╯
