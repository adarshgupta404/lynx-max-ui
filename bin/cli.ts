#!/usr/bin/env node
import fs from "fs";
import path from "path";

const components: Record<string, string> = {
  button: "button.tsx",
};

async function main() {
  const args = process.argv.slice(2);
  const command = args[0];
  const componentName = args[1] as keyof typeof components;

  if (command !== "add" || !componentName) {
    console.log("Usage: bunx lynx-max-ui add <component>");
    return;
  }

  if (!components[componentName]) {
    console.log(`❌ Component '${componentName}' does not exist.`);
    return;
  }

  const sourcePath = path.resolve(__dirname, "../src/components", components[componentName]);
  const destPath = path.resolve(process.cwd(), components[componentName]);

  fs.copyFileSync(sourcePath, destPath);
  console.log(`✅ ${componentName} added successfully!`);
}

main();
