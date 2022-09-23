/// <reference path="components/project-input.ts" />
/// <reference path="components/project-list.ts" />
/// <reference path="models/project.ts" />

namespace App {
    new ProjectInput();
    new ProjectList(ProjectStatus.Active);
    new ProjectList(ProjectStatus.Finished);
}
