window.addEventListener("load", async () => {


    let body = {
        "hello": "hi!"
    }

    let request = await fetch(`https://nfrserver.vercel.app/plzwork/`, {
            method: 'GET',
            body: JSON.stringify(body)
        });

    console.log(request)


})