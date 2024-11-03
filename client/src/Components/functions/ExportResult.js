import { toPng } from 'html-to-image';

const exportResult = async () => {
    const captureElement = document.getElementById('capture');

    try {
        const imageUrl = await toPng(captureElement, {
            style: {
                backgroundColor: 'rgba(30,29,47,255)' 
            }
        });

        // Create a download link and trigger the download
        const downloadLink = document.createElement('a');
        downloadLink.href = imageUrl;
        downloadLink.download = 'result.png';
        downloadLink.click();

        console.log("Screenshot captured successfully!");
    } catch (error) {
        console.error("Failed to capture screenshot:", error);
    }
};

export default exportResult;
