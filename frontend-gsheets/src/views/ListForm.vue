<template>
<div>
  <Navigation/>
  <div class="list-form">
    <h1>List Data Form</h1>
    <div v-for="dataGheets in gsheets.slice(1)" :key="dataGheets.length">
            <p>{{dataGheets[0]}}</p>
            <p>{{dataGheets[1]}}</p>
            <p>{{dataGheets[2]}}</p>
            <p>{{dataGheets[3]}}</p>
        </div>
  </div>
</div>
</template>

<script>
import gsheetDataServices from '../services/gsheetDataServices';
import Navigation from '@/components/Navigation.vue';

export default {
  name: 'ListForm',
  data() {
      return {
        gsheets : null 
      }
  },
  mounted() {
    let getGsheets = gsheetDataServices.getAllData();
    getGsheets.then(response => {
      // check response status
      if (response.status !== 200) {
        console.log('Error: ' + response.status);
        this.gsheets = null;
      } else {
        this.gsheets = response.data.values;
        console.log(this.gsheets, "values gsheets");
      }
    })
  },
  components: {
    Navigation
  }
}
</script>
