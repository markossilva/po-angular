import { chain, Rule } from '@angular-devkit/schematics';

import { addModuleImportToRootModule } from '@po-ui/ng-schematics/module';

/** PO Module name that will be inserted into app root module */
const poStorageModuleName = 'PoStorageModule.forRoot()';
const poStorageModuleSourcePath = '@po-ui/ng-storage';

/**
 * Scaffolds the basics of a Angular Material application, this include:
 *  - Add PO Storage Module to app root module
 */
export default function (options: any): Rule {
  return chain([addModuleImportToRootModule(options, poStorageModuleName, poStorageModuleSourcePath)]);
}
