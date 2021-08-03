<template>
  <div class="hello">
    <h1>Welcome to Samuel Adetunji's ZenVuer</h1>
    <it-alert
      :visible="!getLoaded"
      type="danger"
      title="Can't reach Zendesk"
      iconbox
      body="Please try again later"
    />
    <ticket-table v-if="loaded" tickets="tickets" />
  </div>
</template>

<script>
import axios from "axios";
import TicketTable from "./TicketTable.vue";
export default {
  components: { TicketTable },
  name: "TicketHome",
  mounted() {
    console.log("Component has loaded");
    this.fetchTickets();
  },

  data() {
    return {
      tickets: [],
      loaded: false,
    };
  },

  methods: {
    fetchTickets() {
      axios({
        method: "get",
        url: "http://localhost:3000",
        auth: {
          username: "samuel.o.adetunji@ttu.edu",
          password: "iDET38wicKBLbDY",
        },
      })
        .then((Response) => {
          this.loaded = true;
          this.tickets = Response.data.tickets;
          if (Response.data.next_page) {
            axios({
              method: "get",
              url: "http://localhost:3000/2",
              auth: {
                username: "samuel.o.adetunji@ttu.edu",
                password: "iDET38wicKBLbDY",
              },
            })
              .then((Response) => {
                this.tickets = [...this.tickets, Response.data.tickets];
              })
              .catch((Error) => {
                alert("Failed to retrieve second page.");
                console.log(Error);
              });
          }
        })
        .catch((Error) => {
          console.log(Error);
          this.loaded = false;
        });
    },
  },
  computed: {
    getLoaded() {
      return this.loaded;
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
