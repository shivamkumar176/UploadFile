import React from 'react'

const BoundingBoxDisplay = ({ file, fileUrl }) => {
    console.log({ fileUrl }
    )
    return (
        <div style={{ height: '8rem', width: '8rem', border: '1px solid black' }}>
            <embed src={URL.createObjectURL(file)} type="application/pdf" />
        </div>
    );
}

export default BoundingBoxDisplay
