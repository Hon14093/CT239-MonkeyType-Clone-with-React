export const exportCSV = (data) => {
    function formatDataForCSV(data) {
        const csvData = [Object.keys(data[0])]; // Header row
        data.forEach(row => {
            csvData.push(Object.values(row).map(value => {
                // Check if the value contains the specific string "T"
                if (typeof value === 'string' && value.includes('T')) {
                // Extract the date portion before "T"
                    return value.split('T')[0];
                } else {
                    return value;
                }
            }));
        });
        return csvData;
    }

    function exportToCSV(csvData, filename) {
        const csvContent = "data:text/csv;charset=utf-8," + 
            csvData.map(row => row.join(",")).join("\n");
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", filename);
        document.body.appendChild(link);
        link.click();
    }

    try {
        const csvData = formatDataForCSV(data);
        exportToCSV(csvData, 'my_data.csv');
    } catch (e) {
        console.log(e);
    }
}