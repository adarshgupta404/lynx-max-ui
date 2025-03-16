#!/usr/bin/env bun

import { $, argv } from "bun";
import path from "path";
import {
  existsSync,
  mkdirSync,
  cpSync,
  rmSync,
  unlinkSync,
  writeFileSync,
} from "fs";
import prompts from "prompts";
import { tailwindcssConfig } from "../tailwind-config";

const args = argv.slice(2);
const subcommand = args[0]; // 'add' or 'init'

main();

async function main() {
  if (subcommand === "add") {
    await handleAdd();
  } else if (subcommand === "init") {
    await handleInit();
  } else {
    console.log(
      "🚫 Unknown command. Try `bunx lynx-max-ui add` or `bunx lynx-max-ui init`"
    );
  }
}

async function handleAdd() {
  const validComponents = ["button", "card"];

  const response = await prompts({
    type: "multiselect",
    name: "components",
    message: "🧱 Which components do you want to add?",
    choices: [
      ...validComponents.map((component) => ({
        title: capitalize(component),
        value: component,
      })),
    ],
    hint: "- Use Space to select multiple. Press Enter to confirm.",
  });

  const selectedComponents = response.components;

  if (!selectedComponents || selectedComponents.length === 0) {
    console.log("👋 Exiting Lynx-Max-UI CLI!");
    return;
  } // Ask ONCE for install path before looping

  const pathResponse = await prompts({
    type: "text",
    name: "entry",
    message: "📂 Where should I install the components?",
    initial: "src/components",
  });

  const componentsPath = path.resolve(process.cwd(), pathResponse.entry);

  if (!existsSync(componentsPath))
    mkdirSync(componentsPath, { recursive: true });

  for (const componentName of selectedComponents) {
    await addComponent(componentName, componentsPath);
  }

  console.log(`✅ Successfully added: ${selectedComponents.join(", ")}`);
}

async function addComponent(componentName: string, componentsPath: string) {
  const validComponents = ["button", "card", "badge"];

  if (!validComponents.includes(componentName)) {
    console.log(`🚫 Component "${componentName}" not found.`);
    return;
  }

  const __dirname = path.dirname(import.meta.path);

  const templateFile = path.resolve(
    __dirname,
    `../templates/ui/${componentName}.tsx`
  );

  const componentTargetFile = path.join(
    componentsPath,
    "ui",
    `${capitalize(componentName)}.tsx`
  );

  if (!existsSync(path.join(componentsPath, "ui"))) {
    mkdirSync(path.join(componentsPath, "ui"), { recursive: true });
  }

  if (existsSync(componentTargetFile)) {
    rmSync(componentTargetFile);
    console.log(`🗑️ Removed existing ${componentName}.tsx`);
  }

  cpSync(templateFile, componentTargetFile);
  console.log(`✅ Copied ${componentName}.tsx to ${componentsPath}/ui`);
}

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

async function handleInit() {
  const cwd = process.cwd();
  const jsConfigPath = path.join(cwd, "tailwind.config.js");
  const tsConfigPath = path.join(cwd, "tailwind.config.ts");
  const utilsPath = path.join(cwd, "src/utils");

  const tailwindConfigContent = tailwindcssConfig;

  console.log("🛠️ Initializing Tailwind config for Lynx-Max-UI..."); // Clean up old Tailwind config if it exists

  if (existsSync(jsConfigPath)) {
    unlinkSync(jsConfigPath);
    console.log("🗑️ Deleted existing tailwind.config.js");
  }

  if (existsSync(tsConfigPath)) {
    unlinkSync(tsConfigPath);
    console.log("🗑️ Deleted existing tailwind.config.ts");
  } // Create the new tailwind config

  writeFileSync(tsConfigPath, tailwindConfigContent);
  console.log("✅ Created new tailwind.config.ts for Lynx-Max-UI!"); // Ensure utils directory exists

  if (!existsSync(utilsPath)) {
    mkdirSync(utilsPath, { recursive: true });
  } // Copy cn.ts utility

  const __dirname = path.dirname(import.meta.path);
  const templateUtilsDir = path.resolve(__dirname, "../templates/utils");
  const cnFileTarget = path.join(utilsPath, "cn.ts");

  if (!existsSync(cnFileTarget)) {
    cpSync(path.join(templateUtilsDir, "cn.ts"), cnFileTarget);
    console.log(`✅ Copied cn.ts utility to ${utilsPath}`);
  } else {
    console.log(`✅ cn.ts already exists at ${utilsPath}`);
  }

  console.log("📦 Installing Tailwind CSS and @lynx-js/tailwind-preset...");
  try {
    await $`bun add tailwindcss@3 @lynx-js/tailwind-preset clsx tailwind-merge`;
    console.log(
      "✅ Tailwind CSS, Lynx-Max-UI dependencies, clsx, and tailwind-merge installed!"
    );
  } catch (error) {
    console.error("❌ Failed to install dependencies:", error);
  }

  console.log("🎉 Lynx-Max-UI initialized! You're ready to go.");
}
