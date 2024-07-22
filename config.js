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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348036399544";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_21_07_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICA2MixcbiAgICAgICAgMjI5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgOTksXG4gICAgICAgIDI0NCxcbiAgICAgICAgNzEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgODgsXG4gICAgICAgIDU2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTMsXG4gICAgICAgIDExMixcbiAgICAgICAgMjMzLFxuICAgICAgICA1OCxcbiAgICAgICAgODMsXG4gICAgICAgIDExNixcbiAgICAgICAgMjI3LFxuICAgICAgICA5MSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDkyLFxuICAgICAgICA5MyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMTc4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTE5LFxuICAgICAgICA2NCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNzksXG4gICAgICAgIDEyMixcbiAgICAgICAgNDYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTk2LFxuICAgICAgICAyOCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMyxcbiAgICAgICAgOTQsXG4gICAgICAgIDc5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjAxLFxuICAgICAgICA2NyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDkyLFxuICAgICAgICA2NixcbiAgICAgICAgMTYxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDQ1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE1NixcbiAgICAgICAgNzUsXG4gICAgICAgIDczLFxuICAgICAgICAxNixcbiAgICAgICAgNzIsXG4gICAgICAgIDU0LFxuICAgICAgICAxMTksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTIxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTYyLFxuICAgICAgICA1MCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjE4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTczLFxuICAgICAgICA4NCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDM2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTY5LFxuICAgICAgICAzOCxcbiAgICAgICAgNjcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTg1LFxuICAgICAgICA3NSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMDksXG4gICAgICAgIDExMyxcbiAgICAgICAgMTcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTIyLFxuICAgICAgICA5OCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMTksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjQyLFxuICAgICAgICAzOSxcbiAgICAgICAgMjE4LFxuICAgICAgICA5MyxcbiAgICAgICAgMTM3LFxuICAgICAgICAzNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICA3NyxcbiAgICAgICAgNjksXG4gICAgICAgIDU1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTU3LFxuICAgICAgICA3MSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjksXG4gICAgICAgIDE1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxODEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTY5LFxuICAgICAgICAzMixcbiAgICAgICAgMTkxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTM5LFxuICAgICAgICA0OSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDU3LFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM5LFxuICAgICAgICA1NSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDM2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNTgsXG4gICAgICAgIDEsXG4gICAgICAgIDksXG4gICAgICAgIDIwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTI5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTgyLFxuICAgICAgICA2OCxcbiAgICAgICAgOTQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDQ2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDcyLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTIxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDU4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTE5LFxuICAgICAgICA4MyxcbiAgICAgICAgMjQ4LFxuICAgICAgICA3NyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxOSxcbiAgICAgICAgMTgxLFxuICAgICAgICA2NSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxODIsXG4gICAgICAgIDgzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDExNixcbiAgICAgICAgMTM0LFxuICAgICAgICAxNTksXG4gICAgICAgIDE0MSxcbiAgICAgICAgNTMsXG4gICAgICAgIDk1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDgwLFxuICAgICAgICA0NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDY0LFxuICAgICAgICA5OCxcbiAgICAgICAgMixcbiAgICAgICAgMjQyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjE5LFxuICAgICAgICAyMSxcbiAgICAgICAgMjcsXG4gICAgICAgIDIzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE3MixcbiAgICAgICAgNDMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxOSxcbiAgICAgICAgMTYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMixcbiAgICAgICAgMjEwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDY5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTU5LFxuICAgICAgICA4NixcbiAgICAgICAgMjQyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMSxcbiAgICAgICAgODEsXG4gICAgICAgIDg2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDgxLFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA4MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJnVVFGQU41ekhqdEpkYU1LUUFlcU1rT2UrQTEwWi9sODg4TVIyZytKcE40PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJTLWxvSjNrNlNUZXdOdm1NeG5nMTFnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjMyNmVlZjQ2LWE2MTktNDY1ZC1hMzlkLTQzN2VhZWVmMzhiNlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzMixcbiAgICAgIDEyNSxcbiAgICAgIDQxLFxuICAgICAgMjQyLFxuICAgICAgMTE0LFxuICAgICAgMjUxLFxuICAgICAgODMsXG4gICAgICAxMjYsXG4gICAgICAyNDIsXG4gICAgICAyLFxuICAgICAgMzIsXG4gICAgICAxOTMsXG4gICAgICAxMjMsXG4gICAgICAzNSxcbiAgICAgIDQ5LFxuICAgICAgOTIsXG4gICAgICAyMzAsXG4gICAgICAxMTAsXG4gICAgICAyMDgsXG4gICAgICAyMjVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTg3LFxuICAgICAgMjUyLFxuICAgICAgMjAxLFxuICAgICAgODcsXG4gICAgICA5MCxcbiAgICAgIDcyLFxuICAgICAgMjM4LFxuICAgICAgMjM2LFxuICAgICAgNTAsXG4gICAgICA2NixcbiAgICAgIDE0NyxcbiAgICAgIDIxMCxcbiAgICAgIDIwLFxuICAgICAgMTg1LFxuICAgICAgMzAsXG4gICAgICA1NSxcbiAgICAgIDYzLFxuICAgICAgMjIzLFxuICAgICAgMjMwLFxuICAgICAgMTY5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkRQSjJGUTU3XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MDM2Mzk5NTQ0OjEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiT2x1ZmlzYXlvIE9sb3llZGUgTXVzaWNcIixcbiAgICBcImxpZFwiOiBcIjIzMjQwMjUyNTg4MjA5OjEyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ012WXorOERFT2p4K2JRR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiU3FJa0FMbExwSkRrak41Vjc4M2hqaUp4bEtPdzlRb043RGN6UFV6dnpqaz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJrM1hDR1pjWmdsUnpTUEF0VllwTy90MVh3OWNSKzFFVFpWQmJhM1VTS2hvTDZRQWpJd0tPV0V5QTNJejRoTVVmODhrWFNNNjdFMFhodlBwRXRDMHZBZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJYZGxBRmZ6R1MzYVc4QjJrakZER0VndlZIKzVsci9zSE1uZGhQSkM3NUV2MGljWWJWaGVFV2JqdkprRW9FUkp5czBaYmIyRUJvcU02dFZ5Zys3UlFEUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MDM2Mzk5NTQ0OjEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTY2MTY3N1xufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
