<script>
  import { fade } from 'svelte/transition';

  export let value = '';
  export let dense = false;
</script>

<style>
  input {
    font-family: Consolas, monaco, monospace;
    height: 34px;
    border-radius: 0;
    min-width: 200px;
    box-sizing: border-box;
    outline: none;
    border-bottom: 1px dashed black;
    background: transparent;
  }
  
  input.dense {
    height: 20px;
    width: 100px;
    min-width: 100px;
  }
  
  :global(.mode-dark) input {
    color: white;
    border-bottom: 1px dashed white;
  }
  
  :global(.mode-dark) input:focus {
    border-bottom: 1px solid white;
  }
  
  input:focus {
    border-bottom: 1px solid black;
  }
  
  label {
    position: absolute;
    top: 0;
    right: 0;
  }
  
  label.dense {
    display: none;
  }
  
  label, input::-moz-placeholder {
    font-size: 12px;
    margin: 1px 1px 0 0;
    padding: 9px 7px 0 0;
  }

  label, input:-ms-input-placeholder {
    font-size: 12px;
    margin: 1px 1px 0 0;
    padding: 9px 7px 0 0;
  }

  label, input::-webkit-input-placeholder {
    font-size: 12px;
    margin: 1px 1px 0 0;
    padding: 9px 7px 0 0;
  }
  
  :global(.mode-dark) label {
  }
  
  .wrapper {
    position: relative;
  }
  
</style>

<div class="wrapper" class:dense>
  <input
    type="text"
    autocomplete="off"
    autocorrect="off"
    spellcheck="false"
    bind:value
		class:dense
    placeholder={$$props.label || $$props.placeholder}
    {...$$props}
    on:click
  />
  {#if value !== '' && $$props.label}
    <label class:dense transition:fade={{duration: 50}}>{$$props.label}</label>
  {/if}
</div>