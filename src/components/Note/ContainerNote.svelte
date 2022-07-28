<script>
    import { noteStore } from "../../store";
    import CardNote from "./CardNote.svelte";
</script>

<main>
    {#if $noteStore}
        {#each $noteStore as note}
            <CardNote note={note} />
        {/each}
        
    {:else}
        <span>No notes ✍️</span>
    {/if}
</main>

<style lang="scss">
main{
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
}
</style>