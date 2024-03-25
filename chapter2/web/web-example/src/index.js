import * as tf from "@tensorflow/tfjs";

console.log(tf.version.tfjs);

const app = document.getElementById("app");
app.innerHTML = `<h1>TensorFlow.js version: ${tf.version.tfjs}</h1>`;