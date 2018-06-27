<template lang="pug">
  .container
    .columns
      .column.is-5.is-offset-4
        PmTrack(:track="track")
</template>

<script>
import PmTrack from '@/components/Track'

import TrackService from '@/services/track'

export default {
  components: { PmTrack },

  data () {
    return {
      track: {}
    }
  },

  created () {
    const id = this.$route.params.id

    TrackService.getById(id)
      .then(res => {
        this.track = res
      })
  }
}
</script>

<style lang="scss" scoped>
  .columns {
    margin: 20px;
  }
</style>


