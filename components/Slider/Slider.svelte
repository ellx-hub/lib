<script>
  import Input from '/components/Input/Input.svelte';
  export let min = 0;
  export let max = 100;
  export let value = 50;
  export let dense = false;
  export let size = 2;
</script>

<style>
  .dense {
    width: 100px;
  }
</style>

<Input
	type="range"
	bind:value
	{size}
	{dense}
	{min}
	{max}
	{...$$props} />
