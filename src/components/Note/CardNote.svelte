<script lang="ts">
    import { noteStore } from "../../store";
    import type { Note } from "../../models/Notes";
    import noteService from "../../services/Notes";

    export let note: Note = {
        id: "",
        title: "",
        description: "",
        done: false,
    };

    const handleDelete = async () => {
        const response = await noteService.removeNote(note.id);

        if (response.data) {
            noteStore.currentIdNote.set("");
            noteStore.removeNote(note.id);
        }
    };


</script>

<div class="{note.done && "done"} card-note">
    <h3>{note.title}</h3>
    <p>{note.description}</p>
    <button on:click={() => noteStore.currentIdNote.set(note.id)} >Update</button>
    <button on:click={() => handleDelete()}>Remove</button>
</div>

<style lang="scss">
    .card-note{
        background-color: rgb(222, 222, 222);
        padding: 10px;
        h3, p{
            margin: 0;
        }

        &.done{
            opacity: 0.6;
        }
    }

  
</style>