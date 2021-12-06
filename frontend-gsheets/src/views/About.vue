<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div v-for="dataGheets in gsheets" :key="dataGheets.length">
            <p>{{dataGheets[0]}}</p>
            <p>{{dataGheets[1]}}</p>
            <p>{{dataGheets[2]}}</p>
            <p>{{dataGheets[3]}}</p>
        </div>
  </div>
</template>

<script>
import gsheetDataServices from '../services/gsheetDataServices';

export default {
  name: 'About',
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
      }
    })
  }
}
</script>
