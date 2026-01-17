<script lang="ts">
    export let task: {
        id: number;
        title: string;
        description: string;
        complete: boolean;
    };

    function onclick() {
        task.complete = !task.complete;
    }
</script>

<li class="task-card">
    <button type="button" {onclick}>
        <div class="checkbox-container">
            <input type="checkbox" bind:checked={task.complete} />
        </div>
        <div class="content">
            <h2>{task.title}</h2>
            <p>{task.description}</p>
        </div>
    </button>
</li>

<style>
    .task-card {
        border: 1px solid var(--border-color);
        border-radius: 8px;
        padding: 16px;
        margin: 8px 0;
        background-color: var(--bg-secondary);
        display: flex;
        align-items: flex-start;
        gap: 8px;
    }

    .task-card button {
        all: unset;
        display: flex;
        align-items: center;
        width: 100%;
        cursor: pointer;
        flex: 1;
    }

    .checkbox-container {
        margin-right: 16px;
        flex-shrink: 0;
    }

    .content {
        display: flex;
        flex-direction: column;
    }

    h2 {
        margin: 0;
        font-size: 1.25em;
        color: var(--text-primary);
    }

    p {
        margin: 4px 0 0 0;
        color: var(--text-secondary);
    }
</style>
