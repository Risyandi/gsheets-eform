<template>
<div>
  <Navigation/>
  <div class="list-form">
    <h1>List Data Form</h1>
    <div class="card card-list" v-for="dataGheets in gsheets.slice(1)" :key="dataGheets.length">
      <div class="card-body">
        <h5 class="card-title">{{ dataGheets[0] + ' - ' + dataGheets[1] }}</h5>
        <p class="card-text">{{ dataGheets[2]+ ', ' + dataGheets[3] }}</p>
      </div>
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
      console.log('Response: ' + response.status);
      if (response.status !== 200) {
        // response status not 200
        this.gsheets = null;
        console.log(this.gsheets, "values gsheets");
      } else {
        // response status 200
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
