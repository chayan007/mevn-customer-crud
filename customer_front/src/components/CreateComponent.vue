<template>
    <div class="row justify-content-center">
        <h1>Create A Post</h1>
        <form @submit.prevent="addUser">
                    <div class="form-group">
                        <label>User Name:</label>
                        <input type="text" class="form-control" v-model="user.name">
                    </div>
                    <div class="form-group">
                        <label>User EMail:</label>
                        <input type="email" class="form-control" v-model="user.email">
                    </div>
            <br />
            <div class="form-group">
                <button class="btn btn-primary">Create</button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                user:{}
            }
        },
        methods: {
            addUser(){
                let uri = 'http://localhost:4000/users/add';
                this.axios.post(uri, this.user).then(() => {
                    this.$router.push({name: 'users'});
                });
            }
        }
    }
</script>

<style scoped>

</style>