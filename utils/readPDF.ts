import pdf from 'pdf-parse';

import fs from 'fs/promises';

export async function readPDF(){

    const dataBuffer = await fs.readFile('./uploads/Quewayne Resume.pdf');
    const retVal=  pdf(dataBuffer).then(function(data) {
        return data.text; 
    });

    return retVal;
}


