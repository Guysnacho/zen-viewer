<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <TicketHome />
  </div>
</template>

<script>
// @ is an alias to /src
import TicketHome from "@/components/TicketHome.vue";

export default {
  name: "Home",
  components: {
    TicketHome,
  },
};
</script>
