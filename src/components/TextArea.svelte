<script>
    /** @type {string} */
    export let label;
    /** @type {string} */
    export let value;
    /** @type {string} */
    export let placeholder;
</script>

<div class="w-full">
    <p>{label}</p>
    <textarea placeholder={placeholder} value={value} class="textarea w-full" />
</div>