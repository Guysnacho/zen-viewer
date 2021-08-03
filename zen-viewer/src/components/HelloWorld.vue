<template>
  <div class="hello">
    <h1>Welcome to Samuel Adetunji's ZenVuer</h1>
    <it-alert
      :visible="loaded"
      type="danger"
      title="Can't reach Zendesk"
      iconbox
      body="Please try again later"
    />
    <it-button @click="fetchTickets">Request</it-button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HelloWorld",
  mounted() {
    console.log("Component has loaded");
  },

  data() {
    return {
      tickets: null,
      loaded: false,
    };
  },

  methods: {
    fetchTickets: () => {
      axios({
        method: "get",
        url: "localhost:3000",

      })
        .then((Response) => {
          this.loaded = true;
          this.tickets = Response.data;
        })
        .catch((Error) => {
          console.log(Error);
          this.loaded = false;
        });
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
