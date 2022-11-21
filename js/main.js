const { createApp } = Vue;

createApp({
    // data: function () {}
    data () {
      // la funzione data deve SEMPRE ritornare un oggetto
      return {
        nome: "Ciao a tutti",
        imgLogo: "imgs/logo.png",
      };
    },
  }).mount("#app")