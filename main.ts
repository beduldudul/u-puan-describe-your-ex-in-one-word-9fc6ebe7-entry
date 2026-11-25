import { writeFileSync, mkdirSync } from "node:fs";

// One word for the ex: he left the inbox the way spam does.
// No trailing newline: the gate counts exactly the word itself.
const word = "Unsubscribed";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", word);
