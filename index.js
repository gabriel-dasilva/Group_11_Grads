const url = "https://github.com"


function connect() {
    fetch(url+"/login/oauth/authorize", {
        method: "GET",
    }).then(
        console.log("Redirected")
    )
}
