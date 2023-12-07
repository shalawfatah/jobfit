<script>
	import TextInput from "./TextInput.svelte";

    export let general = {
        name: '',
        phone: '',
        email: '',
        github: '',
        linkedin: '',
        portfolio: '',
        summary: ''
    }
</script>
<div class="bg-white">
    <form class="form flex flex-col gap-2">
        <div class="w-full flex gap-x-2">
            <TextInput value={general.name} label="Name: " placeholder="What was the job title?" />
            <TextInput value={general.phone} label="Phone: " placeholder="What is your phone number?" />
        </div>
        <div class="w-full flex gap-x-2">
            <TextInput value={general.email} label="Email: " placeholder="What is your phone email?" />
            <TextInput value={general.github} label="Github: " placeholder="What is your github?" />
        </div>
        <div class="w-full flex gap-x-2">
            <TextInput value={general.linkedin} label="LinkedIn: " placeholder="Do you have LinkedIn?" />
            <TextInput value={general.portfolio} label="Website/Portfolio: " placeholder="Do you have portfolio/website?" />
        </div>
        <div class="w-full">
            <p>Summary: </p>
            <textarea value={general.summary} class="textarea w-full" />
        </div>
    </form>
</div>