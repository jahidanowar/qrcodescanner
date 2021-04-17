export default {
  data() {
    return {
      result: null,
      copied: false,
    };
  },
  methods: {
    onDecode(result) {
      this.result = result;
      this.playBeep();
      this.addQrData();
    },
    copyText(str) {
      const el = document.createElement("textarea");
      el.value = str;
      document.body.appendChild(el);
      el.select();
      try {
        let copied = document.execCommand("copy");
        document.body.removeChild(el);
        return Promise.resolve(copied);
      } catch (e) {
        document.body.removeChild(el);
        return Promise.reject(e);
      }
    },
    playBeep() {
      let audio = new Audio("/assets/audio/beep.mp3");
      audio.play();
    },
    addQrData() {
      if (this.result.length < 1) {
        return;
      }
      this.$store.dispatch("addData", {
        id: Math.floor(Math.random() * 100),
        time: Date.now(),
        content: this.result,
      });
    },
  },
};
