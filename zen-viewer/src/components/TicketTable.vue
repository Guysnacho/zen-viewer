<template>
  <it-collapse>
    <it-collapse-item title="Tickets">
      <DataTable
        :value="tickets"
        :paginator="true"
        :rows="25"
        sortMode="multiple"
        class="p-datatable-sm"
      >
        <Column field="id" header="ID" sortable></Column>
        <Column field="subject" header="Subject"></Column>
        <Column field="updated_at" header="Updated at" sortable></Column>
        <Column field="created_at" header="Created at" sortable></Column>
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
