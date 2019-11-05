// Service to fetch PDF from REST API

export async function fetchPdf() {
    fetch(`http://localhost:4000/pdf`, {
        method: "GET",
        headers: {
            "Content-Type": "application/pdf"
        }
    })
    .then(res => res.blob())
    .then(response => {
        //Create a Blob from the PDF Stream
        console.log(response);
        const file = new Blob([response], {
            type: "application/pdf"
        });
        
        //Build a URL from the file
        const fileURL = URL.createObjectURL(file);
        //Open the URL on new Window
        window.open(fileURL);
    })
    .catch(error => {
        console.log(error);
    });
};
