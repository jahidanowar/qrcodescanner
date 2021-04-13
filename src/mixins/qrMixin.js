export default {
  data() {
    return {
      result: null,
    };
  },
  methods: {
    onDecode(result) {
      this.result = result;
      this.playBeep();
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
      let audio = new Audio("/audio/beep.mp3");
      audio.play();
    },
  },
};
