import { createCanvas, loadImage } from "https://deno.land/x/canvas/mod.ts";
import { type Image } from "https://deno.land/x/canvas@v1.4.1/mod.ts";

const width = 1200;
const height = 630;
const imagePath = "./og-image-background.png";
const font = "bold 70pt 'VL Gothic'";
const title = "srucm輪講について"; // ここは引数で取る

const canvas = createCanvas(width, height);
const ctx = canvas.getContext("2d");
const backgroundImage = await loadImage(imagePath);

ctx.drawImage(backgroundImage, 0, 0);

ctx.font = font
ctx.fillStyle = "#000000";
ctx.fillText(title, 50, 130);

await Deno.writeFile("output.png", canvas.toBuffer());
