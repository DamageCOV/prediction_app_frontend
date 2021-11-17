<template>
<div id="app" class="app">
    <div class="header">
            <h1>PREDICCIÓN DETERIORO PACIENTES COVID<a href=""></a></h1>
            <div class="button2"> 
                <nav>
                    <button v-if="is_auth" v-on:click="loadHome" > Paciente </button>
                    <button v-if="is_auth" v-on:click="loadHome" > Modelo </button>
                    <button v-if="is_auth" v-on:click="loadHome" > Doctor </button>
                    <button v-if="!is_auth" v-on:click="loadLogin" > Iniciar Sesión </button> 
                    <button v-if="!is_auth" v-on:click="loadSignUp" > Registrarse </button> 
                    <button v-if="is_auth" v-on:click="logOut" > Cerrar Sesión </button>
                </nav> 
            </div>
    </div>
    <div class="main-component">
        <router-view 
            v-on:completedLogin="completedLogin" 
            v-on:completedSignUp="completedSignUp"
            v-on:logOut="logOut"
         >   
        </router-view>
      </div>
</div>
</template>

<script>
// import func from 'vue-editor-bridge';
export default {
  name: 'App',
  data: function(){
    return{
      is_auth:false,
    } 
  },

  components:{
  },

  methods:{

    verifyAuth: function() {
      if(this.is_auth == false)
        this.$router.push({name: "login"})
      else 
        this.$router.push({ name:"cliente"});
    },

    loadLogin: function(){
      this.$router.push({name: "login"})
    },

    completedLogin: function(data) {
      localStorage.setItem("isAuth", true);
      localStorage.setItem("username", data.username);
      localStorage.setItem("token_access", data.token_access);
      localStorage.setItem("token_refresh", data.token_refresh);
      alert("Autenticación Exitosa");
      this.is_auth = true;
      this.verifyAuth();
    },

    loadSignUp: function(){
      this.$router.push({name: "signUp"})
    },

    completedSignUp: function(data) {
      alert("Registro Exitoso");
      this.completedLogin(data);
    },

    loadHome: function() {
      this.$router.push({ name: "cliente" });
    },

    completedEditCliente: function(){},

    logOut: function () {
      localStorage.clear();
      this.is_auth = false;
      this.verifyAuth();
      alert("Sesión Cerrada");
    },  
  },

  created: function(){
    this.verifyAuth()
  }

}
</script>

<style>
   body{
    font-family: roboto-l,arial,"sans-serif";
    background-color: #684a4a;
    background: url(./assets/fondo.png);
    /* background-size: auto; */
    background-size: 1400px 700px;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center; 
    max-width: 1400px;
    min-width: 260px;
    margin: 0 auto;
  }

  .header 
{
     display: flex;
    position: sticky;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    min-height: 60px;
    top: 0px;
    left: 0px;
    background: linear-gradient(91deg,#2e71b9,#2e71b9);
    font-family: sans-serif;
    -webkit-box-shadow: 0 4px 5px 0 rgb(0 0 0 / 14%), 0 1px 10px 0 rgb(0 0 0 / 12%), 0 2px 4px -1px rgb(0 0 0 / 30%);
    box-shadow: 0 4px 5px 0 rgb(0 0 0 / 14%), 0 1px 10px 0 rgb(0 0 0 / 12%), 0 2px 4px -1px rgb(0 0 0 / 30%);
}

  .header h1 {
    color: white;
    text-align: center;
    /* font-family: cursive; */
    margin-left: 20px;
}

  .header nav {
    height: 54%;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 30px;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: space-around;
}

  .header nav button{
    color: #E5E7E9;
    background: #283747;
    border: 1px solid #E5E7E9;
    border-radius: 5px;
    padding: 10px 20px;
       margin-right: 20px;
  }

  .header nav button:hover{
    color: #283747;
    background: #E5E7E9;
    border: 1px solid #E5E7E9;
  } 

  .main-component{
    height: 75vh;
    margin: 0%;
    padding: 0%;
   
  }

  .main-component nav button{
    color: #E5E7E9;
    background: #283747;
    border: 1px solid #E5E7E9;
    border-radius: 5px;
    padding: 30px 30px;
  }

  .main-component nav button:hover{
    color: #283747;
    background: #E5E7E9;
    border: 1px solid #E5E7E9;
  } 

  .footer{
    margin: 0;
    padding: 0;
    height: 10vh;
    min-height: 100px;
    background-color: #c1cfdd; /* #283747; */
    color: #549fea; /* #E5E7E9; */
  }

  .footer nav item{
    color: #549fea;

  }
 
  .footer h2{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  } 
  

</style>
