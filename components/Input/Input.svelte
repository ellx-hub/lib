<script>
  export let value = '';
  export let dense = false;
  export let size = 2;
  export let label = '';
  export let stale = false;
  export let disabled = stale;
  export let outlined = false;

  $: hidden = ((size * 12) - ((value || '').length + (label || '').length)) < -1;
</script>

<style>
  input {
    font-family: Consolas, monaco, monospace;
    height: 34px;
    border-radius: 0;
    padding-left: 4px;
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

  .outlined {
    border: 1px solid black;
  }

  :global(.mode-dark) .outlined {
    border: 1px solid white;
  }

  :global(.mode-dark) input {
    color: white;
    border-bottom: 1px dashed lightGray;
  }

  :global(.mode-dark) input:focus {
    box-shadow: 0px 1px 0px 0px white;
  }

  input:focus:not([type="range"]) {
    border-style: solid;
    box-shadow: 0px 1px 0px 0px black;
  }

  .outlined:focus, :global(.mode-dark) .outlined:focus {
    box-shadow: 0px 0px 0px 1px inset !important;
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
    color: gray;
    font-size: 12px;
    margin: 1px 1px 0 0;
    padding: 7px 7px 0 0;
  }

  label, input:-ms-input-placeholder {
    color: gray;
    font-size: 12px;
    margin: 1px 1px 0 0;
    padding: 7px 7px 0 0;
  }

  label, input::-webkit-input-placeholder {
    color: gray;
    font-size: 12px;
    margin: 1px 1px 0 0;
    padding: 7px 7px 0 0;
  }

  :global(.mode-dark) label, :global(.mode-dark) input::-moz-placeholder {
     color: lightGray;
  }

  :global(.mode-dark) label, :global(.mode-dark) input:-ms-input-placeholder {
     color: lightGray;
  }

  :global(.mode-dark) label, :global(.mode-dark) input::-webkit-input-placeholder {
     color: lightGray;
  }

  .wrapper {
    position: relative;
    display: flex;
  }

  .hidden {
    display: none;
  }

  .disabled {
    pointer-events: none;
    color: gray;
    border: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type=number] {
    -moz-appearance: textfield;
  }
</style>

<div
  class:disabled
  style="width: {(dense ? 1 : size) * 100}px"
  class="wrapper">
  <input
    bind:value
    type="text"
    autocomplete="off"
    autocorrect="off"
    spellcheck="false"
    class:outlined
    class:dense
    placeholder={label || $$props.placeholder}
    {...$$props}
    on:click
  />
  {#if value !== '' && label}
    <label class:disabled class:dense class:hidden>{label}</label>
  {/if}
</div>
