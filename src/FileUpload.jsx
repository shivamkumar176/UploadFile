import axios from 'axios';
import React, { useRef, useState } from 'react'

const FileUpload = ({ setFile, setFileUrl, fileUrl, file }) => {
    const uploadFileRef = useRef(null);

    const handleFileChange = async (e) => {
        const selectedFile = e.target.files[0];
        console.log(selectedFile)
        if (selectedFile.type === 'application/pdf' || selectedFile.type === 'application/vnd.ms-powerpoint') {
            setFile(selectedFile);
            if (selectedFile) {
                console.log("inside if condition")

                const reader = new FileReader();
                reader.onload = () => {
                    console.log(reader.result)
                    setFileUrl(reader.result);
                };
                reader.readAsDataURL(selectedFile);
            }

        } else {
            alert('Please upload a PDF or PPT file.');
        }
    };
    console.log({ fileUrl })
    return (
        <>
            <input
                className="d-none"
                type="file" accept=".pdf,.ppt,.pptx" onChange={handleFileChange}
                ref={uploadFileRef}
            />
            <div onClick={() => uploadFileRef.current.click()}>
                Click Here for Upload File
            </div>
        </>
    );
}

export default FileUpload
