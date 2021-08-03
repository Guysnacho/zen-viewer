<template>
  <it-collapse>
    <it-collapse-item title="Tickets">
      <DataTable :value="tickets" :paginator="true" :rows="25"> </DataTable>
    </it-collapse-item>
  </it-collapse>
</template>

<script>
export default {
  name: "TicketTable",

  data(props) {
    return {
      tickets: props.tickets,
    };
  },
};
</script>

<style></style>
