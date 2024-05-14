const app = Vue.createApp({
  data() {
    return {
      url: "tedimicorazon@do.com",
      showBooks: true,
      books: [
        { title: "el imperio final", author: "yo", isFav: true },
        { title: "Camino de los Reyes", author: "tu", isFav: true },
        { title: "El nombre del viento", author: "ellos", isFav: false },
      ],
      x: 0,
      y: 0,
    };
  },
  methods: {
    changeTitle(title) {
      this.title = title;
    },
    hideBooks() {
      /**if (this.showBooks) {
        this.showBooks = false;
      } else {
        this.showBooks = true;
      }
      son lo mismo pero el de abajo queda mas pro
      */
      this.showBooks = !this.showBooks;
    },
    changeFav(book) {
      book.isFav = !book.isFav;
    },
    /**
     * Los eventos del cursor 
     * 
    handleEvent(e) {
      console.log(e.type);
    },
    handleMouseMove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
     */
  },
  computed: {
    filteredBooks() {
      return this.books.filter((book) => {
        book.isFav;
      });
    },
  },
});

//donde se va a montar
app.mount("#app");
