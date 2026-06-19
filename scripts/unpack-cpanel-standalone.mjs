import { existsSync, rmSync } from "node:fs";
import { spawnSync } from "node:child_process";
import path from "node:path";

const root = process.cwd();
const archivePath = path.resolve(
  root,
  process.env.DEPLOY_ARCHIVE ?? "mindjer_i_futuro-standalone.zip",
);
const standaloneDir = path.join(root, ".next", "standalone");
const serverFile = path.join(standaloneDir, "server.js");

function run(command, args) {
  const result = spawnSync(command, args, {
    cwd: root,
    encoding: "utf8",
    stdio: "pipe",
  });

  if (result.status !== 0) {
    const output = [result.stdout, result.stderr].filter(Boolean).join("\n");
    throw new Error(`${command} ${args.join(" ")} failed\n${output}`);
  }

  return result.stdout;
}

if (!existsSync(archivePath)) {
  throw new Error(`Deploy archive not found: ${archivePath}`);
}

const listing = run("unzip", ["-l", archivePath]);
if (!listing.includes(".next/standalone/server.js")) {
  throw new Error("Deploy archive does not contain .next/standalone/server.js");
}

rmSync(standaloneDir, { force: true, recursive: true });
run("unzip", ["-oq", archivePath, "-d", root]);

if (!existsSync(serverFile)) {
  throw new Error(`Standalone server was not extracted: ${serverFile}`);
}

console.log(`Standalone build extracted to ${standaloneDir}`);
