<template src="../templates/Package.vue">
</template>
<script>
  import config from "../mixins/dataconfig"
  import {API} from "../mixins/http-common"
  import ultilities from "../mixins/utilities"

  export default {
    name: 'Package',
    mixins: [config, API, ultilities],
    data() {
      return {
        loading: false,
        error: [],
        package_data: {
          freedoo_packages: null,
          other_packages: null
        }
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
        API.get('packages.json')
          .then(response => {
              this.package_data.freedoo_packages = response.data.packages.filter((item) => item.short_code.match('freedo'))
              this.package_data.other_packages = response.data.packages.filter((item) => item.short_code.match('msocial'))
            }
          )
          .catch(e => {
            this.error.push(e);
          })
      },
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
      },
    }
  }
</script>
