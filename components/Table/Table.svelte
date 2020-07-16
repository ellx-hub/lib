<script>
  export let value = {};
  export let headers = () => Object.keys(value.length ? value[0] : {});

  let th;
  $: value, th = headers();

  // TODO: decide on styles
</script>

<table id="table">
  <slot name="head">
    <thead>
      {#each th as header}
        <th>{header}</th>
      {/each}
    </thead>
  </slot>
  {#each value as row}
    <tr>
      {#each th as column}
        <td>{row[column]}</td>
      {/each}
    </tr>
  {/each}
</table>
