import {
  Bot,
  webhookCallback,
} from "https://deno.land/x/grammy@v1.21.1/mod.ts";
import { Menu } from "https://deno.land/x/grammy_menu@v1.2.1/mod.ts";
import { toIMF } from "https://deno.land/std@0.160.0/datetime/mod.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.7";

// setup bot
const token = Deno.env.get("BOT_TOKEN");
if (!token) throw new Error("BOT_TOKEN is unset");
const bot = new Bot(token);

// setup database client
const supabase = createClient(
  Deno.env.get("SUPABASE_URL") ?? "",
  Deno.env.get("SUPABASE_ANON_KEY") ?? "",
);

async function getTemperature() {
  const { data, error } = await supabase.from("fake").select(
    "temperature",
  ).limit(1).order("timestamp", { ascending: true }).single();

  if (error) {
    throw error;
  }

  return data.temperature;
}

async function getHumidity() {
  const { data, error } = await supabase.from("fake").select(
    "humidity",
  ).limit(1).order("timestamp", { ascending: true }).single();

  if (error) {
    throw error;
  }

  return data.humidity;
}

async function getPressure() {
  const { data, error } = await supabase.from("fake").select(
    "pressure",
  ).limit(1).order("timestamp", { ascending: true }).single();

  if (error) {
    throw error;
  }

  return data.pressure;
}

// create start menu
const menu = new Menu("main")
  .text(
    "Temperature",
    async (ctx) =>
      ctx.reply(
        "Temperature is " + await getTemperature() + " ºC",
      ),
  )
  .row()
  .text(
    "Humidity",
    async (ctx) =>
      ctx.reply("Relative humidity is " + await getHumidity() + " %"),
  )
  .row()
  .text(
    "Pressure",
    async (ctx) => ctx.reply("Pressure is " + await getPressure() + " Pa"),
  );
bot.use(menu);

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
