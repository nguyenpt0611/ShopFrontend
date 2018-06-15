export default {
  data() {
    return {
    }
  },
  methods: {
    //get period from interval
    getPeriod: function (interval) {
      switch (interval) {
        case '1':
          return 'ngày'
          break
        case '7':
          return 'tuần'
          break
        case '30':
          return 'tháng'
          break
        default:
          return interval + ' ngày'
      }
    }
  }
}
