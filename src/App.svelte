<script lang="ts">
    import { load_data } from "./lib/load_data.svelte.js";
    let tasks = load_data().tasks;

    import TaskList from "./components/TaskList.svelte";
</script>

<h1>Retask</h1>

<div class="task-list">
    <TaskList {tasks} />
</div>

<style>
    :root {
        --bg-primary: #ffffff;
        --bg-secondary: #f9f9f9;
        --text-primary: #000000;
        --text-secondary: #666666;
        --border-color: #cccccc;
    }

    @media (prefers-color-scheme: dark) {
        :root {
            --bg-primary: #1e1e1e;
            --bg-secondary: #2d2d2d;
            --text-primary: #ffffff;
            --text-secondary: #aaaaaa;
            --border-color: #444444;
        }
    }

    :global(body) {
        background-color: var(--bg-primary);
        color: var(--text-primary);
    }

    h1 {
        color: var(--text-primary);
    }
</style>
