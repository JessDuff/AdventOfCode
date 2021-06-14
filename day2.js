const readline = require("readline"),
    fs = require("fs"),
    INPUT = "input.txt";

let reader = readline.createInterface({
    input: fs.createReadStream(INPUT)
});
let paper = 0;
let ribbon = 0;

reader.on("line", line => {
  wrappingPaper(line);
});

function wrappingPaper(line) {
  let values = line.split("x");
  let max = Math.max.apply(Math, values);
  let [min = max, otherMin = max] = values.filter(e => e != max);

  paper = paper + (2 * ((values[0] * values[1]) + (values[1] * values[2]) + (values[0] * values[2]))) + min * otherMin;
  ribbon = ribbon + (2 * min + 2 * otherMin) + (values[0] * values[1] * values[2]);
}