<script>
	import TextInput from "./TextInput.svelte";

    export let experience = {
        title: '',
        company: '',
        start_date: '',
        end_date: '',
        current: '',
    }
</script>
<div class="bg-white">
    <form class="form flex flex-col gap-2">
        <div class="flex items-center gap-x-2">
            <TextInput label="Job Title: " value={experience.title} placeholder="What was the job title?" />
            <TextInput label="Company: " value={experience.company} placeholder="What was the company's name?" />
        </div>
        <div class="flex gap-x-2">
            <div>
                <p>Start Date:</p>
                <input type="date" value={experience.start_date} class="date p-2 rounded-md" />
            </div>
            <div>
                <p>End Date: </p>
                <input type="date" value={experience.end_date} class="date p-2 rounded-md" />
            </div>
        </div>
        <div class="flex flex-wrap gap-x-2">
            <input type="checkbox" value={experience.current} class="checkbox bg-gray-200" />
            <p>Current Job? </p>
        </div>
    </form>
</div>