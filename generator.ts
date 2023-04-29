import { createCanvas, loadImage } from "https://deno.land/x/canvas/mod.ts";

const width = 1200;
const height = 630;
const imagePath = "./og-image-background.png";
const title = "scrum輪講について"; // ここは引数で取る

const canvas = createCanvas(width, height);
const ctx = canvas.getContext("2d");
const backgroundImage = await loadImage(imagePath);

ctx.drawImage(backgroundImage, 0, 0);

const font_buffer = await Deno.readFile('./VL-Gothic-Regular.ttf')
canvas.loadFont(font_buffer, { family: 'VL-Gothic' })
ctx.font = "70px VL-Gothic";
ctx.fillStyle = "#000000";
ctx.fillText(title, 50, 130);

await Deno.writeFile("output.png", canvas.toBuffer());
