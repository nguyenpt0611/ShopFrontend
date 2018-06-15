<template src="../templates/PackageRoaming.vue">
</template>
<script>
  import config from "../mixins/dataconfig";
  import {API} from "../mixins/http-common"

  export default {
    name: 'PackageRoaming',
    mixins: [config, API],
    data() {
      return {
        loading: false,
        error: null,
        package_data: null
      }
    },
    created() {
      this.getData()
    },
    methods: {
      getData() {
        this.package_data = {
          freedoo_packages: null,
          other_packages: null
        }
        API.get('https://mobifreedo.herokuapp.com/api/v1/packages.json')
          .then(response => {
              this.package_data = Object.assign({
                freedoo_packages: config.data().roaming_packages.freedoo,
                other_packages: config.data().roaming_packages.others
              })
              console.log(response.data())
            }
          )
          .catch(e => {
            // this.error.push(e);
          })
      },
    }
  }
</script>
<style lang="scss" scoped>
  @import "~assets/scss/globals/sim";
</style>
