// GitHub Pages service worker-style behavior
async function runProxy() {
    // Only handle API URL file
    if (window.location.pathname.endsWith("api.json")) {

        const apiUrl = "https://kisiirevision.gt.tc/apis/kisiiAppVisits.php";

        const response = await fetch(apiUrl, {
            method: "GET",
            headers: {
                "User-Agent": "Mozilla/5.0",
                "Accept": "*/*"
            }
        });

        const text = await response.text();

        // Return clean JSON response
        document.open();
        document.write(text);
        document.close();
    }
}

runProxy();
