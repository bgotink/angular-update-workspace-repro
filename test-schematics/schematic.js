const {chain} = require('@angular-devkit/schematics');
const {updateWorkspace} = require('@schematics/angular/utility/workspace');

const projectName = 'test';

exports.default = function() {
  return chain([
    updateWorkspace(workspace => {
      workspace.projects.add({
        name: projectName,
        root: 'testy-test',
        sourceRoot: 'testy-test/src',
        projectType: 'library',
        targets: {},
      });
    }),
    updateWorkspace(workspace => {
      workspace.projects.get(projectName).targets.add({
        name: 'build',
        builder: '@doesnt/get-added',
        options: {
          works: false,
        },
      });
    }),
  ]);
};
