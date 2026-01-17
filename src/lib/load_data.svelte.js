export function load_data() {
    const sample_tasks = $state([
        {
            id: 1,
            title: "Task One",
            description: "This is the first task.",
            complete: false,
        },
        {
            id: 2,
            title: "Task Two",
            description: "This is the second task.",
            complete: false,
        },
        {
            id: 3,
            title: "Task Three",
            description: "This is the third task.",
            complete: true,
        },
    ]);
    return {
        tasks: sample_tasks,
    };
}