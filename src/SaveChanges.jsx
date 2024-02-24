import React from 'react'

const SaveChanges = ({ fileUrl, uploadedFile, uploadedFileUrl, setFile, setFileUrl, file }) => {
    const handleSaveChanges = () => {
        if (fileUrl == uploadedFileUrl) {
            alert('Same File Found old File Can be download')
        } else if (uploadedFile == null && uploadedFileUrl == "") {
            alert("No file dropped for edit ")
        } else {
            setFileUrl(uploadedFileUrl)
            setFile(uploadedFile)
            alert('File Saved Successfully New Can be Download')
        }
    };
    return (
        <div>
            <div>
                <button className='btn btn-primary' onClick={handleSaveChanges}>Save Changes</button>
            </div>
        </div>
    );
};

export default SaveChanges
