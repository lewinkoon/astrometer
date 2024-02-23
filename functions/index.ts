import {
  Bot,
  webhookCallback,
} from "https://deno.land/x/grammy@v1.21.1/mod.ts";
import { toIMF } from "https://deno.land/std@0.160.0/datetime/mod.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.7";

const supabase = createClient(
  Deno.env.get("SUPABASE_URL") ?? "",
  Deno.env.get("SUPABASE_ANON_KEY") ?? "",
);

// get bot token
const token = Deno.env.get("BOT_TOKEN");
if (!token) throw new Error("BOT_TOKEN is unset");
const bot = new Bot(token);

await bot.api.setMyCommands([
  { command: "start", description: "Start the bot" },
  { command: "help", description: "Show help text" },
  { command: "ping", description: "Check status" },
]);

// show bot info
bot.command(
  "start",
  (ctx) => ctx.reply("Hi there! This is Astrobot 🛰️"),
);

// check bot status
bot.command(
  "ping",
  (ctx) => ctx.reply(`Pong! ${toIMF(new Date())}`),
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
