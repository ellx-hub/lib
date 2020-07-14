<script>
  export let value;
  export let options = [];
</script>

<style>
  .flex {
    display: flex;
  }
  .flex-col {
    flex-direction: column;
  }
  label {
    height: 20px;
    padding: 4px 0;
  }
  .items-center {
    align-items: center;
  }
  .ml-2 {
    margin-left: .5rem;
  }
</style>

<div class="flex flex-col">
  {#each options as option}
    <label class="flex items-center">
      <input bind:group={value} type="radio" value={option} />
      <span class="ml-2">{option}</span>
    </label>
  {/each}
</div>