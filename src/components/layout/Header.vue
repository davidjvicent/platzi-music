<template lang="pug">
  section.hero.is-success
    .hero-head
      header.navbar
        .container
          .navbar-start
              .navbar-item
                strong 📻 Platzi Music
          .navbar-end.navbar-menu
            router-link.navbar-item(:to="{ name: 'search' }") Buscar
            router-link.navbar-item(:to="{ name: 'about' }") Nosotros
    .hero-body
      .container.has-text-centered
        h1.title Platzi Music
        h2.subtitle Canciones que están Vue-nísimas
        PmPlayer
</template>

<script>
import PmPlayer from '@/components/Player'

export default {
  components: { PmPlayer }
}
</script>
