<template>
    <div class="row justify-content-center">
        <h1>Create A Post</h1>
        <form @submit.prevent="addPost">
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
            addPost(){
                console.log(this.user);
            }
        }
    }
</script>

<style scoped>

</style>