<script>
    import Title from "./Title.svelte";
  
    export let title = '';
    let collapse = false;
  
    const toggle = () => {
      collapse = !collapse;
    };
  </script>
  
  <div class={`collapse collapse-arrow cursor-pointer ${collapse ? 'collapse-open' : 'collapse-close'} bg-transparent`}>
    <input type="checkbox" class="cursor-pointer" bind:checked={collapse} on:click={toggle}/>
    <div class="collapse-title text-xl font-medium" >
      <Title text={title} />
    </div>
    <div class="collapse-content">
        <slot />
    </div>
  </div>
  
  <style>
    .collapse-content {
      display: none;
    }
  
    .collapse-open .collapse-content {
      display: block;
    }
  </style>
  