<template src="../views/PackageRegister.vue">
</template>
<script>
  import axios from 'axios'
  import goBack from './mixins/goBack'
  import config from './mixins/dataconfig'
  export default {
    name: 'PackageRegister',
    mixins: [goBack, config],
    data() {
      return {
        name: '',
        package: {
          id: 1,
          name: 'unknown',
          type: 'unknown',
          call_content: 'unknown',
          data_content: 'unknown',
          price: '0',
          period: 'unknown'
        },
      }
    },
    created() {
      this.getData();
    },
    methods: {
      getData() {
        axios.get('http://jsonplaceholder.typicode.com/posts')
          .then(response => {
              this.name = this.$route.params.name;

              this.package = config.data().roaming_packages.freedoo.find((item,index) => {
                return item.name === this.name;
              });
            }
          )
          .catch(e => {
            this.error.push(e);
          })
      },
      goBack() {
        this.goback();
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "../assets/scss/globals/sim";
</style>
