window.addEventListener("load", async () => {


    let body = {
        "hello": "hi!"
    }

    let request = await fetch(`https://nfrserver.vercel.app/plzwork/`, {
            method: 'GET'
        });

    console.log(request)


})