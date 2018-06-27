<template lang="pug">
  main
    PmNotification(v-show="showNotification")
      p(slot="body") No se encontraron resultados de {{ searchQuery }}.

    PmLoader(v-show="isLoading")
    section.section(v-show="!isLoading")
      nav.nav
        .container
          .field.has-addons
            .control.is-expanded
              input.input.is-large(
                type="text",
                placeholder="¿Qué canción estás buscando?",
                v-model="searchQuery",
                @keyup.enter="search"
              )
            .control
              a.button.is-info.is-large(@click="search") Buscar
            .control
              a.button.is-danger.is-large &times;
          p.help.is-info.has-text-right
            small {{ searchMessage }}
      .container.results
        .columns.is-multiline
          .column.is-one-quarter(v-for="t in tracks")
            PmTrack(
              :class="{ 'is-active': t.id === selectedTrack }",
              :track="t",
              @select="setSelectedTrack")
</template>

<script>
import trackServices from '@/services/track'

import PmTrack from '@/components/Track'

import PmNotification from '@/components/shared/Notification'
import PmLoader from '@/components/shared/Loader'
export default {
  name: 'app',
  components: {
    PmTrack,
    PmLoader,
    PmNotification
  },
  data () {
    return {
      searchQuery: '',
      tracks: [],
      isLoading: false,
      showNotification: false,
      selectedTrack: ''
    }
  },

  computed: {
    searchMessage () {
      return `Encontrados: ${this.tracks.length}`
    }
  },

  watch: {
    showNotification () {
      if (this.showNotification) {
        setTimeout(() => {
          this.showNotification = false
        }, 3000)
      }
    }
  },

  methods: {
    search () {
      if (!this.searchQuery) { return }

      this.isLoading = true

      trackServices.search(this.searchQuery)
        .then(res => {
          this.showNotification = res.tracks.total === 0
          this.tracks = res.tracks.items
          this.isLoading = false
        })
    },

    setSelectedTrack (id) {
      this.selectedTrack = id
    }
  }
}
</script>

<style lang="scss">

  .is-active {
    border: 3px #23d160 solid;
  }
</style>
