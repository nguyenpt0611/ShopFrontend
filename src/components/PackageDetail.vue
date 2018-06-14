<template src="../views/PackageDetail.vue">
</template>
<script>
  import axios from 'axios'
  import goBack from './mixins/goBack'
  import config from './mixins/dataconfig'
  export default {
    name: 'PackageDetail',
    mixins: [goBack, config],
    data() {
      return {
        name: '',
        package: {
          id: 1,
          name: 'unknown',
          type: 'unknown',
          src: 'unknown',
          call_content: 'unknown',
          data_content: 'unknown',
          description: 'unknown',
          price: '0',
          period: 'unknown'
        },
        err: null,
        data: null,
        package_data: null,
        related_package: null
      }
    },
    created() {
      this.getData()
      this.getRelatedPackageData()
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
      getRelatedPackageData() {
        this.package_data = {
          freedoo_packages: null,
          other_packages: null
        }
        axios.get('http://jsonplaceholder.typicode.com/posts')
          .then(response => {
              this.package_data = Object.assign({
                freedoo_packages: config.data().roaming_packages.freedoo,
                other_packages: config.data().roaming_packages.others
              });
              this.related_package = this.package_data.freedoo_packages
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
