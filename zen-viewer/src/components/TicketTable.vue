<template>
  <it-collapse>
    <it-collapse-item title="Tickets">
      <DataTable :value="tickets" :paginator="true" :rows="25">
        <Column field="id" header="ID"></Column>
        <Column field="id" header="Subject"></Column>
        <Column field="id" header="Updated at"></Column>
        <Column field="id" header="Created at"></Column>
      </DataTable>
    </it-collapse-item>
  </it-collapse>
</template>

<script>
import DataTable from "primevue/datatable";
import Column from "primevue/column";
export default {
  name: "TicketTable",

  props: ["tickets"],

  components: {
    DataTable,
    Column,
  },
};
</script>

<style></style>
