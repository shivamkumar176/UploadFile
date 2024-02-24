import axios from 'axios';
import React, { useState } from 'react'

const TextImageEditing = ({ uploadedFile, setUploadedFile, setUploadedFileUrl }) => {

    const handleDrop = (e) => {
        console.log(e)
        e.preventDefault();
        const droppedFile = e.dataTransfer.files[0];
        console.log({ droppedFile })

        if (droppedFile.type === 'application/pdf' || droppedFile.type === 'application/vnd.ms-powerpoint') {
            setUploadedFile(droppedFile)
            if (droppedFile) {
                const reader = new FileReader();
                reader.onload = () => {
                    console.log(reader.result)
                    setUploadedFileUrl(reader.result);
                };
                reader.readAsDataURL(droppedFile);
            }
        } else {
            alert('Please drop a PDF or PowerPoint file.');
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    return (
        <>
            <div className='d-flex'>
                <div onDrop={handleDrop} onDragOver={handleDragOver} style={{ height: '200px', width: '200px', border: '1px solid black ' }}>
                    <span className='d-flex justify-content-center'> Drop Here</span>
                </div>
                {uploadedFile !== null && <div>
                    <embed src={URL.createObjectURL(uploadedFile)} type="application/pdf" />
                </div>}
            </div>
        </>
    );
}

export default TextImageEditing

// import axios from 'axios';
// import React, { useState } from 'react'

// const TextImageEditing = ({ uploadedFile,
//     setUploadedFile,
//     uploadedFileUrl,
//     setUploadedFileUrl }) => {
//     // const [file, setFile] = useState(null);

//     const handleDrop = (e) => {
//         console.log(e)
//         e.preventDefault();
//         const droppedFile = e.dataTransfer.files[0];
//         console.log({ droppedFile })

//         if (droppedFile.type === 'application/pdf' || droppedFile.type === 'application/vnd.ms-powerpoint') {
//             setUploadedFile(droppedFile);
//             if (droppedFile) {
//                 const reader = new FileReader();
//                 reader.onload = () => {
//                     console.log(reader.result)
//                     setUploadedFileUrl(reader.result);
//                 };
//                 reader.readAsDataURL(droppedFile);
//             }
//         } else {
//             alert('Please drop a PDF or PowerPoint file.');
//         }
//     };

//     const handleDragOver = (e) => {
//         e.preventDefault();
//     };

//     return (
//         <>
//             <div className='d-flex'>
//                 <div onDrop={handleDrop} onDragOver={handleDragOver} style={{ height: '200px', width: '200px', border: '1px solid black ' }}>
//                     <span className='d-flex justify-content-center'> Drop Here</span>
//                 </div>
//                 <div>
//                     <embed src={window.URL.createObjectURL(uploadedFile)} type="application/pdf" />
//                 </div>
//             </div>
//         </>
//     );
// }

// export default TextImageEditing
