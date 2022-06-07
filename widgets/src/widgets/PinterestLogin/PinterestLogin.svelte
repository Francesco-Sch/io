<script lang="ts">
    import "carbon-components-svelte/css/white.css";
    import { Form, TextInput, Button } from "carbon-components-svelte";
    import { 
        PinterestLoginUserName,
        PinterestLoginPassword
    } from '../../stores';

    let localPinterestLoginUserName:string = $PinterestLoginUserName
    let localPinterestLoginPassword:string = $PinterestLoginPassword
</script>

<style></style>

<Form 
    on:submit={(e) => {
        e.preventDefault();
        console.log('You are logged in!')

        console.log('Username: ' + localPinterestLoginUserName)
        console.log('Password: ' + localPinterestLoginPassword)

        PinterestLoginUserName.set(localPinterestLoginUserName)
        PinterestLoginPassword.set(localPinterestLoginPassword)

        console.log('Global Username: ' + PinterestLoginUserName)
        console.log('Global Password: ' + PinterestLoginPassword)
    }}
    class="pinterest-login"
>
    <TextInput light hideLabel placeholder='Enter your username' bind:value={localPinterestLoginUserName}/>
    <TextInput light hideLabel placeholder='Enter your password' bind:value={localPinterestLoginPassword}/>

    <Button type="submit" on:click={() => {
        PinterestLoginUserName.set(localPinterestLoginUserName)
        PinterestLoginPassword.set(localPinterestLoginPassword)
    }}>Login</Button>
</Form>