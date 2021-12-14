<template>
  <div class="form-wrap">
    <h2>Contact Us</h2>
    <form v-on:submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control" id="name" v-model="form.name" placeholder="Enter your name">
        <span>
          {{form.name.length > 0 ? '' : 'Name is required'}}
        </span>
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" class="form-control" id="email" v-model="form.email" placeholder="Enter your email">
        <span>
          {{form.email.length > 0 ? '' : 'Email is required'}}
        </span>
      </div>
      <div class="form-group">
        <label for="message">Message</label>
        <textarea class="form-control" id="message" v-model="form.message" rows="3" placeholder="Enter your message"></textarea>
        <span>
          {{form.message.length > 0 ? '' : 'Message is required'}}
        </span>
      </div>
      <div class="form-button">
        <button type="submit" class="btn btn-primary">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'FormGsheets',
    data(){
      return {
        form: {
          name: '',
          email: '',
          message: ''
        }
      }
    },
    methods: {
      submitForm() {
        console.log('submit form');
        console.log(this.form.name, 'value form');
        alert(this.form.name + '-' + this.form.email + '-' + this.form.message);
      }
    }
  }
</script>

<style scoped>
  .form-wrap {
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
    color: #42b983;
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