<script>
	import download from '/utils/download.js';
  import Button from '/components/Button/Button.svelte';

  export let value;
  export let label = 'Download';
  export let type = 'text/plain';
  export let filename = '';
</script>

<Button
	{...$$props}
  disabled={$$props.disabled || (!value || !value.length)}
	on:click={() => download(filename, new Blob([value], { type }))}
>
  <slot>{label}</slot>
</Button>