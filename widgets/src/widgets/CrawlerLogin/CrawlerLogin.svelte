<script lang="ts">
    import { Form, TextInput, Button } from "carbon-components-svelte";
    import { 
        CrawlerLoginUserName,
        CrawlerLoginPassword
    } from '../../stores';

    let localCrawlerLoginUserName:string = $CrawlerLoginUserName
    let localCrawlerLoginPassword:string = $CrawlerLoginPassword
</script>

<style>
    .submit-btn {
        background-color: var(--orange-50);
    }
</style>

<Form 
    on:submit={(e) => {
        e.preventDefault();
        console.log('You are logged in!')

        console.log('Username: ' + localCrawlerLoginUserName)
        console.log('Password: ' + localCrawlerLoginPassword)

        CrawlerLoginUserName.set(localCrawlerLoginUserName)
        CrawlerLoginPassword.set(localCrawlerLoginPassword)

        console.log('Global Username: ' + CrawlerLoginUserName)
        console.log('Global Password: ' + CrawlerLoginPassword)
    }}
>
    <TextInput light hideLabel placeholder='Enter your username' bind:value={localCrawlerLoginUserName}/>
    <TextInput light hideLabel placeholder='Enter your password' bind:value={localCrawlerLoginPassword}/>

    <Button class="submit-btn" type="submit" on:click={() => {
        CrawlerLoginUserName.set(localCrawlerLoginUserName)
        CrawlerLoginPassword.set(localCrawlerLoginPassword)
    }}>Login</Button>
</Form>