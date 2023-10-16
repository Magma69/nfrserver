window.addEventListener("load", async () => {


    let body = {
        "hello": "hi!"
    }

    let request = await fetch(`https://nfrserver.vercel.app/api/`, {
            method: 'POST',
            body: JSON.stringify(body)
        });

    document.getElementById("ser").innerHTML = request.body


})