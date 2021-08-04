import axios from "axios";

export default class TicketService {
  fetchTickets() {
    let tickets = null;
    let loaded = false;
    axios({
      method: "get",
      url: "http://localhost:3000",
      auth: {
        username: "samuel.o.adetunji@ttu.edu",
        password: "iDET38wicKBLbDY",
      },
    })
      .then((Response) => {
        loaded = true;
        tickets = Response.data.tickets;
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
              tickets = [...this.tickets, Response.data.tickets];
            })
            .catch((Error) => {
              alert("Failed to retrieve second page.");
              console.log(Error);
            });
        }
      })
      .catch((Error) => {
        console.log(Error);
        loaded = false;
      })
      .finally(() => {
        console.log("Finished fetch");
        return [tickets, loaded];
      });
  }
}
