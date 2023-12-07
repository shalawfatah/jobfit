<script>
	import Accordion from "../components/Accordion.svelte";
	import Experience from "../components/Experience.svelte";
    import GenInfo from "../components/GenInfo.svelte";
	import Project from "../components/Project.svelte";
	import Skill from "../components/Skill.svelte";
    import {generalInfo} from '../lib/store';

</script>
<div class="bg-white p-2">
    <Accordion title="General Information">
        <GenInfo />
    </Accordion>
    <Accordion title="Experience">
        <Experience />
    </Accordion>
    <Accordion title="Projects">
        <Project />
    </Accordion>
    <Accordion title="Skills">
        <Skill />
    </Accordion>
</div>