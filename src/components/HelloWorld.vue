<template>
  <div class="hello">
    <h1>Welcome to Your Vue.js App</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br />
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener"
        >vue-cli documentation</a
      >.
    </p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HelloWorld",
  mounted() {
    console.log("Component has loaded");
    console.log(this.fetchTickets());
  },

  data() {
    return {
      tickets: null,
    };
  },

  methods: {
    fetchTickets: () => {
      var tickets = axios({
        method: "get",
        url: "https://zcctunji.zendesk.com/api/v2/tickets/api/v2/tickets",
        auth: {
          username: "samuel.o.adetunji@ttu.edu",
          password: "iDET38wicKBLbDY",
        },
      });
      this.tickets = tickets;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
