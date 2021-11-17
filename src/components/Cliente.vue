<template>
    <div class="signUp_user">
        <div class="container_signUp_user">
                <h1>Bienvenido </h1>
                <h2><span>{{nombre}}</span></h2>
            <hr>
                <form>
                    <button> Modificar Datos </button>
                    <br>
                    <button> Modelos </button>
                    <br>
                    <button> Pacientes </button>
                    <!-- <button type="submit">Ver Citas</button> -->
                </form>
        </div>
    </div>
</template>

<script>
import jwt_decode from "jwt-decode";
import axios from 'axios';
    export default {
        name: "user",

        data:function(){
        return {
             nombre: ""
        }
    },

    methods: {
        
        loadEditCliente: function() {
            this.$router.push({ name:"editcliente" });
        },

        getData: async function () {
            
            if (localStorage.getItem("token_access") === null || localStorage.getItem("token_refresh") === null) {
                this.$emit('logOut');
                return;
            }
            
            await this.verifyToken();
            let token = localStorage.getItem("token_access");
            let userId = jwt_decode(token).user_id.toString();

            axios.get(`https://auth-doc-cov.herokuapp.com/user/${userId}/`, {headers: {'Authorization': `Bearer ${token}`}})
            .then((result) => {
                this.nombre = result.data.nombre;
                })
            .catch(() => {
                this.$emit('logOut');
            });
    },

    verifyToken: function () {
        return axios.post("https://auth-doc-cov.herokuapp.com/refresh/", {refresh: localStorage.getItem("token_refresh")}, {headers: {}}
    )
            .then((result) => {
                localStorage.setItem("token_access", result.data.access);
            })
            .catch(() => {
                this.$emit('logOut');
            });
        }
    },
    created: async function(){
        this.getData();
    },

}

</script>

<style>
.signUp_user{
    margin: 0;
    padding: 0%;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.signUp_user h1{
    color: #041220;
    margin-top: 100px;
     font-family: sans-serif;
     text-align: center;
     font-size: 50px;
}

.signUp_user h2{
    color: #133f6b;
    margin-top: 100px;
     font-family: sans-serif;
     text-align: center;
     font-size: 30px;
}
.signUp_user form{
    width: 80%;
}

.signUp_user button{
    color: #E5E7E9;
    background: #283747;
    border: 1px solid #E5E7E9;
    border-radius: 5px;
    padding: 10px 20px;
       margin-right: 20px;
}
.signUp_user button:hover
{
    color: #283747;
    background: #E5E7E9;
    border: 1px solid #283747;
}
</style>