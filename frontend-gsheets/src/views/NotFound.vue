<template>
  <div>
    <Navigation/>
    <div class="notfound">
      <h1>Not Found 404</h1>
    </div>
  </div>
</template>

<script>
  import Navigation from '@/components/Navigation.vue';

  export default {
    name: 'NotFound',
    components: {
      Navigation
    }
  }
</script>
