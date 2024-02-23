import {
  Bot,
  webhookCallback,
} from "https://deno.land/x/grammy@v1.21.1/mod.ts";
import { format } from "https://deno.land/std@0.160.0/datetime/mod.ts";

// get bot token
const token = Deno.env.get("BOT_TOKEN");
if (!token) throw new Error("BOT_TOKEN is unset");
const bot = new Bot(token);

// set bot commands
bot.command(
  "start",
  (ctx) => ctx.reply("Hi there! This is Astrobot."),
);
bot.command(
  "ping",
  (ctx) => ctx.reply(`Pong! ${format(new Date(), "yyyy-MM-dd HH:mm:ss")}`),
);

// setup webhook
const handleUpdate = webhookCallback(bot, "std/http");

// init web server
Deno.serve(async (req) => {
  if (req.method === "POST") {
    const url = new URL(req.url);
    if (url.pathname.slice(1) === bot.token) {
      try {
        return await handleUpdate(req);
      } catch (err) {
        console.error(err);
      }
    }
  }
  return new Response();
});
