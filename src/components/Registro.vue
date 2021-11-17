<template>
        <div class="signUp_user">
            <div class="container_signUp_user">
                <h1>Realiza tu registro</h1>
                <hr>
                <form v-on:submit.prevent="processSignUp" >
                    <input type="text" v-model="user.username" placeholder="Ingrese un username">
                    <br>
                    <input type="password" v-model="user.password" placeholder="Ingrese una contraseña">
                    <br>
                    <input type="text" v-model="user.nombre" placeholder="Ingrese su nombre">
                    <br>
                    <input type="email" v-model="user.email"  placeholder="Ingrese su correo">
                    <br>                  
                    <input type="text" v-model="user.especialidad"  placeholder="Ingrese su especialidad">
                    <br>                
                    <button type="submit">Registrarse</button>
                    
                </form>
            </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "Registro",

    data: function(){
        return {
            user: {
            username:"",
            password: "",
            nombre: "",
            email: "",
            especialidad: "",
            }
        }
    },

    methods: {
        processSignUp: function(){
            axios.post(
            "https://auth-doc-cov.herokuapp.com/user/",
            this.user,
            {headers: {}}
            )
            .then((result) => {
                let dataSignUp = {
                    username: this.user.username,
                    token_access: result.data.access,
                    token_refresh: result.data.refresh,
                }
                this.$emit('completedSignUp', dataSignUp)
            })
            .catch((error) => {
                console.log(error)
                alert("ERROR: Fallo en el registro.");  
            });
        }
    }
}
</script>

<style>
.signUp_user{
    /* padding: 50%; */
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.container_signUp_user {
    margin-top: 100px;
    border: 0px solid #283747;
    border-radius: 10px;
    width: 40%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.signUp_user h1{
    color: #031930;
    /* margin-top: 1500px; */
    justify-content: center;
    align-items: center;
}
.signUp_user form{
    width: 40%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.signUp_user input{
    height: 40px;
    width: 100%;
    box-sizing: border-box;
    padding: 10px 20px;
    margin: 10px 0;    
    border: 2px solid #2c7fd7;
}
.signUp_user button{
    width: 100%;
    height: 40px;
    color: #E5E7E9;
    background: #2e71b9;
    border: 1px solid #E5E7E9;
    border-radius: 5px;
    padding: 10px 25px;
    margin: 5px 0 25px 0;
}
.signUp_user button:hover
{
    color: #E5E7E9;
    background: rgb(60, 100, 100);
    border: 1px solid #283747;
}
</style>