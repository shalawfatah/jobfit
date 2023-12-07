<script>
	import TextArea from "./TextArea.svelte";
import TextInput from "./TextInput.svelte";
    /**
     * Represents a project with details such as title, description, location, position, duration, live link, code repository, and technology stack.
     * @typedef {Object} Project
     * @property {string} title - The title of the project.
     * @property {string} description - A brief description of the project.
     * @property {string} location - The location or place associated with the project.
     * @property {string} position - The role or position related to the project.
     * @property {string} duration - The duration or timeline of the project.
     * @property {string} live - The link to the live version or deployment of the project.
     * @property {string} code - The link to the source code repository of the project.
     * @property {string} stack - The technology stack used in the project.
     */
    export let project = {
        title: '',
        description: '',
        location: '',
        position: '',
        duration: '',
        live: '',
        code: '',
        stack: ''
    }
</script>

<div class="bg-white">
    <TextInput label="Project Name: " value={project.title} placeholder="What was the project title?" />
    <TextArea label="Description" placeholder="Describe the project" value={project.description} />
    <TextInput label="Position" value={project.position} placeholder="Your role in this project?" />
    <TextInput label="Live Link" value={project.live} placeholder="Is there a live link to the project?" />
    <TextInput label="Repository Link" value={project.code} placeholder="Is there a link to the code repository?" />
    <TextInput label="Tech Stack" value={project.stack} placeholder="The tech stack used, use coma to separate the tech" />
</div>