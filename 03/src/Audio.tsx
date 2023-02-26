import React from'react';

type audioProps = {
    srcfile: string
}

const Audio = ({ srcfile} : audioProps) => {

    return(
        <audio src={srcfile} autoPlay/>
    )
}

export default Audio;
