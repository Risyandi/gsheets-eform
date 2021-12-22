<template>
  <div>
    <Navigation/>
    <MediaWebsiteCard/>
  </div>
</template>

<script>
  import MediaWebsiteCard from '@/components/MediaWebsiteCard.vue'
  import Navigation from '@/components/Navigation.vue'

  export default {
    name: 'Website',
    components: {
      MediaWebsiteCard,
      Navigation
    }
  }
</script>