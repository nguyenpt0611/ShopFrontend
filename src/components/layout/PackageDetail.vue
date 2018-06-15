<template src="../templates/PackageDetail.vue">
</template>
<script>
  import goBack from '../mixins/goBack'
  import config from '../mixins/dataconfig'
  import {API} from '../mixins/http-common'
  export default {
    name: 'PackageDetail',
    mixins: [goBack, config, API],
    data() {
      return {
        handle: this.$route.params.name,
        package: {
          title: '',
          subtitle: '',
          highlights: '',
          content: '',
          interval: '',
          short_code: '',
          command_dk: '',
          command_huy: '',
          handle: '',
          price_amount: 0,
          img: ''
        },
        err: null,
        data: null,
        package_data: null,
        related_package: null
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
              this.related_package = response.data.packages.filter((item, index) => {
                return item.short_code.match(this.package.short_code);
              });
            }
          )
          .catch(e => {
            this.error.push(e);
          })
      },
      goBack() {
        this.goback();
      },
      getImageUrl (imgUrl) {
        return require('@/assets/images/' + imgUrl)
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "~assets/scss/globals/sim";
</style>
