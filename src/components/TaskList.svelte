<script lang="ts">
    type Task = {
        id: number;
        title: string;
        description: string;
        complete: boolean;
    };

    export let tasks: Task[];

    import TaskCard from "./TaskCard.svelte";
</script>

<ul>
    {#each tasks as task, index (task.id)}
        <TaskCard {task} />
    {/each}
</ul>

<style>
    ul {
        display: flex;
        flex-direction: column;
        list-style: none;
        padding: 0;
    }
</style>
