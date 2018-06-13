<template src="../views/PackageRoaming.vue">
</template>
<script>
import config from './mixins/dataconfig'
export default {
  name: 'PackageRoaming',
  mixins: [config],
  data() {
    return {
      data: {
        freedoo_packages: config.data().roaming_packages.freedoo,
        other_packages: config.data().roaming_packages.others,
      }
    }
  }
}
</script>
