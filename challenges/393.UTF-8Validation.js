let validUtf8 = function (data) {
    let i = 0;

    while (i < data.length) {
        let byte = data[i];
        let nBytes = 0;

        if ((byte >> 7) === 0) nBytes = 1;
        else if ((byte >> 5) === 0b110) nBytes = 2;
        else if ((byte >> 4) === 0b1110) nBytes = 3;
        else if ((byte >> 3) === 0b11110) nBytes = 4;
        else return false;

        if (i + nBytes > data.length) return false;

        for (let j = 1; j < nBytes; j++) {
            if ((data[i + j] >> 6) !== 0b10) return false;
        }

        i += nBytes;
    }

    return true;
}
