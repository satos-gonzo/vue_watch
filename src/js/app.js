import Vue from 'vue';
Vue.config.devtools = true;//devツールが表示されない時

Vue.component('watch-component', {
  data: {
    now: "00:00:00"
  },
  template: `
  <div>{{this.watchShow()}}</div>
  `,

  methods: {
    getTime: function () {
      // Dateオブジェクトからインスタンスの生成
      let nowTime = new Date();
      // それぞれのメソッドで時間、分、秒を取得
      let nowHour = nowTime.getHours();
      let minute = nowTime.getMinutes();//分
      let nowMin = ('00' + minute).slice(-2);//桁数表示
      let second = nowTime.getSeconds();//秒数
      let nowSec = ('00' + second).slice(-2);//桁数表示
      // 時計を文字列に表示
      let str = nowHour + ':' + nowMin + ':' + nowSec;
      document.getElementById('watch_wrap').innerHTML = str;
    },
    watchShow: function () {
      setInterval(() => {
        this.getTime();
      }, 1000);
    }


  }

});


new Vue({ el: '#watch_wrap' });
