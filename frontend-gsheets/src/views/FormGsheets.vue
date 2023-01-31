<template>
<div>
  <Navigation/>
  <div class="form-gsheets">
    <h2>Gsheets Register Data</h2>
    <form v-on:submit.prevent="submitForm">
      <div class="form-group">
        <label for="nomor">Nomor</label>
        <input type="text" class="form-control" id="nomor" v-model="form.nomor" placeholder="Enter your nomor">
        <span class="require-text">
          {{form.nomor.length > 0 ? '' : 'Nomor is required'}}
        </span>
      </div>
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control" id="name" v-model="form.name" placeholder="Enter your name">
        <span class="require-text">
          {{form.name.length > 0 ? '' : 'Name is required'}}
        </span>
      </div>
      <div class="form-group">
        <label for="alamat">Alamat</label>
        <input type="text" class="form-control" id="alamat" v-model="form.alamat" placeholder="Enter your alamat">
        <span class="require-text">
          {{form.alamat.length > 0 ? '' : 'Alamat is required'}}
        </span>
      </div>
      <div class="form-group">
        <label for="handphone">Nomor Handphone</label>
        <input type="number" class="form-control" id="handphone" v-model="form.handphone" placeholder="Enter your nomor handphone">
        <span class="require-text">
          {{form.handphone.length > 0 ? '' : 'Nomor handphone is required'}}
        </span>
      </div>
      <div class="form-button">
        <button type="submit" class="btn btn-primary">Submit</button>
      </div>
    </form>
  </div>
</div>
</template>

<script>
  import gsheetDataServices from '../services/gsheetDataServices';
  import Navigation from '@/components/Navigation.vue';

  export default {
    name: 'FormGsheets',
    data(){
      return {
        form: {
          nomor: '',
          name: '',
          alamat: '',
          handphone: ''
        }
      }
    },
    methods: {
      submitForm() {
        const formdata = {
            "data": [
                this.form.nomor,
                this.form.name,
                this.form.alamat,
                this.form.handphone
            ]
        }
        const getGsheets = gsheetDataServices.addData(formdata);
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
    },
    components: {
      Navigation
    }
  }
</script>

<style scoped>
  .form-gsheets {
        max-width: 960px;
        margin: 0 auto;
    }
  .form-group {
    margin-bottom: 1rem;
  }
  .form-group label, 
  .form-group span {
    display: block;
    text-align: left;
  }
  .form-group span {
    color: red;
  }
  .form-group input,
  .form-group textarea  {
    width: 100%;
    height: 3rem;
    border-radius: 5px;
    border: solid 1px black;
  }
  .form-button button {
    display: block;
    padding: 1rem ;
    width: 100%;
  }
  a {
    color: #42b983;
  }
</style>