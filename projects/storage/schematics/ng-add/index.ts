import { chain, Rule, schematic, SchematicContext, Tree } from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';

import { addPackageToPackageJson } from '@po-ui/ng-schematics/package-config';

/**
 * Scaffolds the basics of the PO Storage, this includes:
 *  - Imports PoStorageModule to app root module;
 *  - Install dependencies;
 */
export default function (options: any): Rule {
  return chain([
    addPoPackageAndInstall(),
    schematic('ng-add-setup-project', {
      ...options
    })
  ]);
}

function addPoPackageAndInstall(): Rule {
  return (tree: Tree, context: SchematicContext) => {
    addPackageToPackageJson(tree, '@po-ui/ng-storage', '0.0.0-PLACEHOLDER');

    // install packages
    context.addTask(new NodePackageInstallTask());
  };
}
