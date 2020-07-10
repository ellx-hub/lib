<script>
  export let min = 0;
  export let max = 100;
  export let value = 50;
</script>

<style>
  input {
    font-color: black;
  }
</style>

<input class="cursor-pointer" type="range" bind:value {min} {max}>
