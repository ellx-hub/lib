<script>
  import { scale } from 'svelte/transition';
  import Spinner from '../Spinner/Spinner.svelte';

  const STALE = '@@io.ellx.STALE';

  export let value = false;
  export let whenPressed = STALE;
  export let label = '';
  export let onClick = () => {};
  export let dense = false;
  export let size = 2;
  export let stale = false;
  export let disabled = stale;
  export let loading = false;

  let current = value;

  const onMouseUp = () => value = current;
  const onMouseDown = () => {
    current = value;
    value = whenPressed;
    window.addEventListener('mouseup', onMouseUp, { once: true });
  };
</script>

<style>
  button {
    font-family: Consolas, monaco, monospace;
    height: 34px;
    font-weight: bold;
    border-radius: 0;
    box-sizing: border-box;
    padding: 0 .5rem;
    outline: none;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    border: 1px solid black;
    transition: all .1s ease-in;
  }

  button:hover {
    cursor: pointer;
    box-shadow: 0px 0px 0px 1px inset;
  }

  button.dense {
    width: 100px;
    height: 20px;
    font-size: 0.7rem;
  }

  :global(.mode-dark) button {
    background: transparent;
    color: white;
    border: 1px solid white;
  }

  .disabled, .loading {
    pointer-events: none;
    color: lightGray;
    background: #EEE;
    cursor: default;
    border: 1px solid lightGray;
  }

  :global(.mode-dark) .disabled {
    background: #AAA;
    color: gray;
    border: none;
  }
</style>

<button
  class:disabled
  class:loading
  style="width: {(dense ? 1 : size) * 100}px"
  class:dense
  on:click={onClick}
  on:click
  on:mousedown={onMouseDown}
>
  <slot>
    {#if loading || stale}
      <div in:scale>
        <Spinner fill="#AAA" />
      </div>
    {:else}
      {label}
    {/if}
  </slot>
</button>
