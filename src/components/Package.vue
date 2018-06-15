<template src="../views/Package.vue">
</template>
<script>
import config from './mixins/dataconfig'
import axios from 'axios'
export default {
name: 'Package',
mixins: [config],
data() {
  return {
    loading: false,
    error: null,
    package_data: null
  }
},
created() {
  // this.$store.commit('hidenav');
  this.getData()
},
methods: {
  getData() {
    this.package_data = {
      freedoo_packages: null,
      other_packages: null
    }
    axios.get('http://jsonplaceholder.typicode.com/posts')
      .then(response => {
        this.package_data = Object.assign({
            freedoo_packages: config.data().roaming_packages.freedoo,
            other_packages: config.data().roaming_packages.others
          })
        }
      )
      .catch(e => {
        this.error.push(e);
      })
  },
}
}
</script>
