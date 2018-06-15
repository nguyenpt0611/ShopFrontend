<template src="../templates/PackageRegister.vue">
</template>
<script>
  import goBack from '../mixins/goBack'
  import config from '../mixins/dataconfig'
  import {API} from '../mixins/http-common'

  export default {
    name: 'PackageRegister',
    mixins: [goBack, config, API],
    data() {
      return {
        handle: this.$route.params.name,
        package: {
          id: 1,
          name: 'unknown',
          type: 'unknown',
          call_content: 'unknown',
          data_content: 'unknown',
          price: '0',
          period: 'unknown'
        },
        err: null,
        data: null
      }
    },
    created() {
      this.getData()
    },
    methods: {
      getData() {
        API.get('packages.json')
          .then(response => {
              this.package = response.data.packages.find((item, index) => {
                return item.handle.match(this.handle.toLowerCase());
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
  @import "~assets/scss/globals/sim";
</style>
