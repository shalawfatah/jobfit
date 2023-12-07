<script>
	import TextArea from "./TextArea.svelte";
    import TextInput from "./TextInput.svelte";
    import {projectState} from '../lib/store'
    let project = $projectState;
    function updateField(field, value) {
        project = { ...project, [field]: value };
    }
</script>
{JSON.stringify(project)}
<div class="bg-white">
    <TextInput 
        label="Project Name: " 
        value={project.title} 
        placeholder="What was the project title?"
        on:input={(event) => updateField('title', event.detail)} 
        />
    <TextArea label="Description" 
        placeholder="Describe the project" 
        value={project.description} 
        on:input={(event) => updateField('description', event.detail)}
        />
    <TextInput 
        label="Position" 
        value={project.position} 
        placeholder="Your role in this project?" 
        on:input={(event) => updateField('position', event.detail)}
        />
    <TextInput 
        label="Live Link" 
        value={project.live} 
        placeholder="Is there a live link to the project?" 
        on:input={(event) => updateField('live', event.detail)}
        />
    <TextInput 
        label="Repository Link" 
        value={project.code} 
        placeholder="Is there a link to the code repository?" 
        on:input={(event) => updateField('code', event.detail)}
        />
    <TextInput 
        label="Tech Stack" 
        value={project.stack} 
        placeholder="The tech stack used, use coma to separate the tech" 
        on:input={(event) => updateField('stack', event.detail)}
        />
</div>