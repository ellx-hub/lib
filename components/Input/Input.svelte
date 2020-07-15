<script>
  export let value = '';
  export let dense = false;
  export let size = 2;
  export let label = '';

	$: hidden = ((size * 12) - (value.length + label.length)) < -1;
</script>

<style>
  input {
    font-family: Consolas, monaco, monospace;
    height: 34px;
    border-radius: 0;
    box-sizing: border-box;
    outline: none;
    border-bottom: 1px dashed black;
    background: transparent;
    width: 100%;
  }
  
  input.dense {
    height: 20px;
    width: 100px;
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
    font-family: Consolas, monaco, monospace;
  }
  
  label.dense {
    display: none;
  }
  
  label, input::-moz-placeholder {
    font-size: 12px;
    margin: 1px 1px 0 0;
    padding: 7px 7px 0 0;
  }

  label, input:-ms-input-placeholder {
    font-size: 12px;
    margin: 1px 1px 0 0;
    padding: 7px 7px 0 0;
  }

  label, input::-webkit-input-placeholder {
    font-size: 12px;
    margin: 1px 1px 0 0;
    padding: 7px 7px 0 0;
  }
  
  .wrapper {
    position: relative;
    display: flex;
  }
  
  .hidden {
    display: none;
  }
</style>

<div
	style="width: {(dense ? 1 : size) * 100}px"
  class="wrapper">
  <input
    type="text"
    autocomplete="off"
    autocorrect="off"
    spellcheck="false"
    bind:value
		class:dense
    placeholder={label || $$props.placeholder}
    {...$$props}
    on:click
  />
  {#if value !== '' && label}
    <label class:dense class:hidden>{label}</label>
  {/if}
</div>