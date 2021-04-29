import { FeatureOptions } from "./schema";
import {
  Rule,
  SchematicContext,
  template,
  apply,
  url,
  move,
  chain,
  mergeWith,
  Tree,
} from "@angular-devkit/schematics";

import { strings } from "@angular-devkit/core";
const pluralize = require('pluralize')

// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function nxpFeature(options: FeatureOptions): Rule {
  return (tree: Tree, context: SchematicContext) => {
    const templateSource = apply(url("./files"), [
      template({
        ...options,
        ...strings,
        pluralize
      }),
      move("./src/app"),
    ]);
    // context.logger.info(strings.camelize.name)
    return chain([mergeWith(templateSource)])(tree, context);
  };
}
