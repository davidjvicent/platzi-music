<template lang="pug">
  #app
    PmHeader

    router-view

    pmFooter
</template>

<script>

import PmFooter from '@/components/layout/Footer'
import PmHeader from '@/components/layout/Header'

export default {
  name: 'app',
  components: {
    PmHeader,
    PmFooter
  }
}
</script>

<style lang="scss">
  @import './scss/main.scss';

  .is-active {
    border: 3px #23d160 solid;
  }
</style>
