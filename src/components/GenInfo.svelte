<script>
	import TextArea from "./TextArea.svelte";
    import TextInput from "./TextInput.svelte";
    import {generalInfo} from '../lib/store';
    let general = $generalInfo;

    function updateField(field, value) {
        general = { ...general, [field]: value };
    }

</script>
{JSON.stringify(general)}
<div class="bg-white">
    <form class="form flex flex-col gap-2">
        <div class="w-full flex gap-x-2">
            <TextInput 
                value={general.name} 
                label="Name: " 
                placeholder="What was the job title?"
                on:input={(event) => updateField('name', event.detail)} 
                />
            <TextInput 
                value={general.phone} 
                label="Phone: " 
                placeholder="What is your phone number?"
                on:input={(event) => updateField('phone', event.detail)} 
                />
        </div>
        <div class="w-full flex gap-x-2">
            <TextInput 
                value={general.email} 
                label="Email: " 
                placeholder="What is your phone email?" 
                on:input={(event) => updateField('email', event.detail)}
                />
            <TextInput 
                value={general.github} 
                label="Github: " 
                placeholder="What is your github?" 
                on:input={(event) => updateField('github', event.detail)}
                />
        </div>
        <div class="w-full flex gap-x-2">
            <TextInput 
                value={general.linkedin} 
                label="LinkedIn: " 
                placeholder="Do you have LinkedIn?"
                on:input={(event) => updateField('linkedin', event.detail)}
                 />
            <TextInput 
                value={general.portfolio} 
                label="Website/Portfolio: " 
                placeholder="Do you have portfolio/website?"
                on:input={(event) => updateField('portfolio', event.detail)}
                 />
        </div>
            <TextArea 
                label="Summary: " 
                placeholder="Write a short mission statement"
                value={general.summary} 
                on:input={(event) => updateField('summary', event.detail)}
                />
    </form>
</div>