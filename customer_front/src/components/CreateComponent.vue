<template>
    <div class="row justify-content-center">
        <h1>Create A Post</h1>
        <form @submit.prevent="addPost">
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label>User Name:</label>
                        <input type="text" class="form-control" v-model="user.name">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label>User EMail:</label>
                        <textarea class="form-control" v-model="user.email" rows="5"></textarea>
                    </div>
                </div>
            </div><br />
            <div class="form-group">
                <button class="btn btn-primary">Create</button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: CreateComponent,
        data(){
            return {
                user:{}
            }
        },
        methods: {
            addPost(){
                console.log(this.post);
            }
        }
    }
</script>

<style scoped>

</style>