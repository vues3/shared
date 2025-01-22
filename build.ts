/* -------------------------------------------------------------------------- */
/*                                   Imports                                  */
/* -------------------------------------------------------------------------- */

import type { BuildConfig } from "bun";

import dts from "bun-plugin-dts";

/* -------------------------------------------------------------------------- */
/*                                  Constants                                 */
/* -------------------------------------------------------------------------- */

const minify: BuildConfig["minify"] = true;

/* -------------------------------------------------------------------------- */

const outdir: BuildConfig["outdir"] = "./";

/* -------------------------------------------------------------------------- */
/*                                   Arrays                                   */
/* -------------------------------------------------------------------------- */

const entrypoints: BuildConfig["entrypoints"] = ["./index.ts"];

/* -------------------------------------------------------------------------- */

const external: BuildConfig["external"] = ["vue"];

/* -------------------------------------------------------------------------- */

const plugins: BuildConfig["plugins"] = [dts()];

/* -------------------------------------------------------------------------- */
/*                                    Main                                    */
/* -------------------------------------------------------------------------- */

await Bun.build({ entrypoints, external, minify, outdir, plugins });

/* -------------------------------------------------------------------------- */
