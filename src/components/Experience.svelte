<script>
	import TextInput from "./TextInput.svelte";
    import {experienceState} from '../lib/store';

    let experience = $experienceState;

    function updateField(field, value) {
        experience = { ...experience, [field]: value };
    }
</script>
<div class="bg-white">
    {JSON.stringify(experience)}
    <form class="form flex flex-col gap-2">
        <div class="flex items-center gap-x-2">
            <TextInput 
                label="Job Title: " 
                value={experience.title} 
                placeholder="What was the job title?"
                on:input={(event) => updateField('title', event.detail)}
                />
            <TextInput 
                label="Company: " 
                value={experience.company} 
                placeholder="What was the company's name?"
                on:input={(event) => updateField('company', event.detail)}
                />
        </div>
        <div class="flex gap-x-2">
            <div>
                <p>Start Date:</p>
                <input 
                    type="date" 
                    value={experience.start_date} 
                    class="date p-2 rounded-md  bg-gray-200 border-[2px] border-gray-200" 
                    on:change={(event) => updateField('start_date', event.target.value)}
                    />
            </div>
            <div>
                <p>End Date: </p>
                <input 
                    type="date" 
                    value={experience.end_date} 
                    class="date p-2 rounded-md  bg-gray-200 border-[2px] border-gray-200" 
                    on:change={(event) => updateField('end_date', event.target.value)}
                    />
            </div>
        </div>
        <div class="flex flex-wrap gap-x-2">
            <input 
                type="checkbox" 
                value={experience.current} 
                class="checkbox bg-gray-200" 
                bind:checked={experience.current}
                />
            <p>Current Job? </p>
        </div>
    </form>
</div>