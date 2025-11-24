async function proxyRequest() {
    const apiUrl = "https://kisiirevision.gt.tc/apis/kisiiAppVisits.php";

    const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
            "User-Agent": "Mozilla/5.0",
            "Accept": "*/*"
        }
    });

    const data = await response.text();
    console.log("API Response:", data);
    return data;
}

// Expose for Android app to call
proxyRequest();
