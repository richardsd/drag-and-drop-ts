import { ProjectStatus } from "../state/project";

// Project data object
export class Project {
    constructor(public id: string, public title: string, public description: string, public people: number, public status: ProjectStatus) { }
}
