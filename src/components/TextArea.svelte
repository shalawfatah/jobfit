<script>
    /** @type {string} */
    export let label;
    /** @type {string} */
    export let value;
    /** @type {string} */
    export let placeholder;

    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    // Function to handle input changes and emit an event
    function handleInput(event) {
        const newValue = event.target.value;
        dispatch('input', newValue);
    }
</script>

<div class="w-full">
    <p>{label}</p>
    <textarea 
        placeholder={placeholder} 
        value={value} 
        class="textarea w-full bg-transparent border-[2px] border-gray-200"
        on:input={handleInput}
        />
</div>