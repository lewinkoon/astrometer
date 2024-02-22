import {
  Bot,
  webhookCallback,
} from "https://deno.land/x/grammy@v1.21.1/mod.ts";
import { Menu } from "https://deno.land/x/grammy_menu@v1.2.1/mod.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.7";

const token = Deno.env.get("BOT_TOKEN");
if (!token) throw new Error("BOT_TOKEN is unset");

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

const bot = new Bot(token);

// create a simple menu
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

// make it interactive
bot.use(menu);

bot.command(
  "start",
  async (ctx) =>
    await ctx.reply("Hi there! This is Astrobot. How can i help you?", {
      reply_markup: menu,
    }),
);
bot.command("ping", (ctx) => ctx.reply(`Pong! ${new Date()}`));

const handleUpdate = webhookCallback(bot, "std/http");

Deno.serve(async (req) => {
  try {
    const url = new URL(req.url);
    if (url.searchParams.get("secret") !== bot.token) {
      return new Response("not allowed", { status: 405 });
    }
    return await handleUpdate(req);
  } catch (err) {
    console.error(err);
  }
  return new Response();
});
