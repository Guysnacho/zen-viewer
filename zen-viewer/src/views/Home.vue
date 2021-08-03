<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <TicketHome />
    <ticket-table />
  </div>
</template>

<script>
// @ is an alias to /src
import TicketHome from "@/components/TicketHome.vue";
import TicketTable from '../components/TicketTable.vue';

export default {
  name: "Home",
  components: {
    TicketHome,
    TicketTable,
  },
};
</script>
