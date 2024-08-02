const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+2349123703753";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_02_08_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDQwLFxuICAgICAgICAyMixcbiAgICAgICAgMjI2LFxuICAgICAgICA4MSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDMyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDI1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTYzLFxuICAgICAgICA0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgODMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTc4LFxuICAgICAgICA4MyxcbiAgICAgICAgOTUsXG4gICAgICAgIDgzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIzLFxuICAgICAgICAxODQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMzksXG4gICAgICAgIDM5LFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDk4LFxuICAgICAgICA4MixcbiAgICAgICAgOSxcbiAgICAgICAgOTIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgOSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNixcbiAgICAgICAgMjEwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDAsXG4gICAgICAgIDU5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDkyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDExMixcbiAgICAgICAgMjUxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDYzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDgwLFxuICAgICAgICAxNyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDMwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTY0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDkzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTAwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgODYsXG4gICAgICAgIDEyLFxuICAgICAgICAxODksXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNyxcbiAgICAgICAgODgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDI3LFxuICAgICAgICAxODUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDU0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxODMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTExLFxuICAgICAgICA2MCxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICAyMDksXG4gICAgICAgIDE2NixcbiAgICAgICAgMjQyLFxuICAgICAgICAxMjksXG4gICAgICAgIDg3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDU5LFxuICAgICAgICAxNyxcbiAgICAgICAgNDksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjE2LFxuICAgICAgICA3MSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDc4LFxuICAgICAgICA4NSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNjksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTE2LFxuICAgICAgICA4MyxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTcsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQsXG4gICAgICAgIDExLFxuICAgICAgICAxOCxcbiAgICAgICAgNzcsXG4gICAgICAgIDUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjIsXG4gICAgICAgIDkzLFxuICAgICAgICA4OCxcbiAgICAgICAgMTgzLFxuICAgICAgICA4MyxcbiAgICAgICAgOTYsXG4gICAgICAgIDc1LFxuICAgICAgICA3MixcbiAgICAgICAgOTUsXG4gICAgICAgIDExMCxcbiAgICAgICAgNTgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNTAsXG4gICAgICAgIDc3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNzgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMTksXG4gICAgICAgIDQ5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIsXG4gICAgICAgIDY3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDg1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgNDlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NyxcbiAgICAgICAgMjIsXG4gICAgICAgIDc1LFxuICAgICAgICAyMCxcbiAgICAgICAgMyxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTUxLFxuICAgICAgICA4NyxcbiAgICAgICAgMzksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNjAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMzQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDU1LFxuICAgICAgICA1MixcbiAgICAgICAgMjM3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDk5LFxuICAgICAgICA2MCxcbiAgICAgICAgOTksXG4gICAgICAgIDExOCxcbiAgICAgICAgMjMyLFxuICAgICAgICA1MCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNDksXG4gICAgICAgIDE1OCxcbiAgICAgICAgNTUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxODcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMjksXG4gICAgICAgIDEzMCxcbiAgICAgICAgNTIsXG4gICAgICAgIDM1LFxuICAgICAgICAyNyxcbiAgICAgICAgMTk0LFxuICAgICAgICA1OSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDcxLFxuICAgICAgICA2NixcbiAgICAgICAgMjksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEzOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTk4LFxuICBcImFkdlNlY3JldEtleVwiOiBcImVkcnc2dHA3ZVJWbWxEQXFMNmc4V0huNkoyQlN5M25PM2xSMnVMeDFBQkE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInh0cnY5d3JVUlRTVWNIaklpZUZtVkFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYTJiOWYyMDMtMDJkNS00NWQ0LWFlNTktNGVkMzVkYTc5N2ZkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyNyxcbiAgICAgIDE1MCxcbiAgICAgIDE2OCxcbiAgICAgIDI0OCxcbiAgICAgIDc5LFxuICAgICAgMTQ4LFxuICAgICAgNzAsXG4gICAgICA2OSxcbiAgICAgIDI0LFxuICAgICAgMTM2LFxuICAgICAgMTA1LFxuICAgICAgMjQ4LFxuICAgICAgMTc1LFxuICAgICAgNzksXG4gICAgICAxMDUsXG4gICAgICA0NixcbiAgICAgIDc1LFxuICAgICAgMjIzLFxuICAgICAgMTU0LFxuICAgICAgODhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjMwLFxuICAgICAgMTExLFxuICAgICAgMTEwLFxuICAgICAgMTA1LFxuICAgICAgNTIsXG4gICAgICAxMTYsXG4gICAgICAxNDIsXG4gICAgICAxOTIsXG4gICAgICA4MixcbiAgICAgIDc1LFxuICAgICAgMjUsXG4gICAgICAyNTIsXG4gICAgICAxMTgsXG4gICAgICAxNzMsXG4gICAgICAyLFxuICAgICAgMTM0LFxuICAgICAgMzIsXG4gICAgICAxOTksXG4gICAgICAxODYsXG4gICAgICAyNDdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMUFZWjRDOU1cIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxMjM3MDM3NTM6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTUzMjkyMTMwNzcxMDY0OjNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTVdCeElVREVMQ2l0TFVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJocHJIWVFHZ0h6QXZZTCtnWG4zemlJWGVuaGkxd2RxZGYvZ1RpcE92dFFVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImNLazJ5elF6Rk05SU1uV1RtcG94QmVJNXhTR2hNVHZ0TlpnR1NNbG00aFlpdTN3NXFweTFFRkc0ZzQremIzVHFrMWZ4VTlNN1ErdUh0L2l1TGk2SkJnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjRBTTRQWUVraXhodkJBYmEvKzJsbE40Q1F6cGZONHBiWVJ3T0JHNzBQdkt4RUtlbHVsM01hTlBEOVFZRnduQnA3V2NPVnNSWWpBY0RMNEpsMjVRZWhRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxMjM3MDM3NTM6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjYxODE2M1xufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
