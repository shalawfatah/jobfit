<script>
    export let label;
    export let value;
    export let placeholder;
</script>

<div class="w-full">
    <p>{label}</p>
    <input type="text" placeholder={placeholder} value={value} class="input w-full" />
</div>