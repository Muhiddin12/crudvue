// const app = Vue.createApp({
//   template: `<h2> Hello Template </h2>`,
// });
// app.mount("#app");

// 2 chi usul
const app = Vue.createApp({
  data() {
    return {
      name: "",
      email: "",
      job: "",
      users: [
        {
          id: 1,
          name: "Salim",
          email: "salim@gmail.com",
          job: "Android developer",
        },
      ],
      handleError: "",
      setUpdate: null,
      error: false,
    };
  },

  methods: {
    addUser() {
      if (this.setUpdate != null) {
        let findUpdateUser = this.users.find(
          (user) => user.id == this.setUpdate
        );
        (findUpdateUser.name = this.name),
          (findUpdateUser.email = this.email),
          (findUpdateUser.job = this.job),
          (this.name = ""),
          (this.email = ""),
          (this.job = "");
        this.setUpdate = null;
        this.error = false;
      } else if (this.name && this.email && this.job) {
        let newUser = {
          id: this.users.length + 1,
          name: this.name,
          email: this.email,
          job: this.job,
        };

        this.users.unshift(newUser);
        (this.name = ""),
          (this.email = ""),
          (this.job = ""),
          (this.error = false);
      } else {
        (this.error = true), (this.handleError = "Input is empty !");
      }
    },
    deleteUser(id) {
      this.users = this.users.filter((user) => user.id != id);
    },
    update(id) {
      let findUserId = this.users.find((user) => user.id == id);
      (this.name = findUserId.name),
        (this.email = findUserId.email),
        (this.job = findUserId.job),
        (this.setUpdate = id);
    },
  },
  computed: {
    reverseUsers() {
      return this.users;
    },
  },
}).mount("#app");
