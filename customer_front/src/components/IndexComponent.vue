<template>
    <div>
        <h1>Users</h1>
        <div class="row">
            <div class="col-md-10"></div>
            <div class="col-md-2">
                <router-link :to="{ name: 'create' }" class="btn btn-primary">Create User</router-link>
            </div>
        </div><br />

        <table class="table table-hover">
            <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="user in users" :key="user._id">
                <td>{{ user.name }}</td>
                <td>{{ user.email }}</td>
                <td><router-link :to="{name: 'edit', params: { id: user._id }}" class="btn btn-primary">Edit</router-link></td>
                <td><button class="btn btn-danger" @click.prevent="deleteUser(user._id)">Delete</button></td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                users: []
            }
        },
        created() {
            let uri = 'http://localhost:4000/users';
            this.axios.get(uri).then(response => {
                this.users = response.data;
            });
        },
        methods: {
            deleteUser(id)
            {
                let uri = `http://localhost:4000/users/delete/${id}`;
                this.axios.delete(uri).then(response => {
                    this.users.splice(this.users.indexOf(id), 1);
                });
            }
        }
    }
</script>

<style scoped>

</style>