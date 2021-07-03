export function helloWorld() {
    RegisterCommand(
        'helloWorld',
        async () => {
            handleCommand()
        },
        false
    )
}

function handleCommand() {
    console.log('Hello world from client.')
}


