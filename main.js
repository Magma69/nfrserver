window.addEventListener("load", async () => {


    let body = {
        "hello": "hi!"
    }

    let request = await fetch(`https://nfrserver.vercel.app/api/index.js`, {
            method: 'POST',
            body: JSON.stringify(body)
        });

    console.log(request)


})