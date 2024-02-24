import React, { useState } from 'react'
import FileUpload from './FileUpload';
import BoundingBoxDisplay from './BoundingBoxDisplay';
import TextImageEditing from './TextImageEditing';
import SaveChanges from './SaveChanges';

const App = () => {
  const [file, setFile] = useState(null);
  const [fileUrl, setFileUrl] = useState('');
  const [uploadedFile, setUploadedFile] = useState(null);
  const [uploadedFileUrl, setUploadedFileUrl] = useState('');
  const HandleDownload = () => {
    const url = window.URL.createObjectURL(new Blob([file]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', file.name);
    document.body.appendChild(link);
    link.click();
    link.parentNode.removeChild(link);
  }
  return (
    <div>
      <div className='d-flex justify-content-around mt-5'>
        <div>
          <h1>File Upload</h1>
          <FileUpload setFile={setFile} setFileUrl={setFileUrl} fileUrl={fileUrl} file={file} />
        </div>
        {file !== null && <div>
          <h1>Files Display</h1>
          <BoundingBoxDisplay file={file} fileUrl={fileUrl} />
        </div>}
      </div>
      {file !== null &&
        <>
          <div className='d-flex justify-content-around mt-5'>
            <div>
              <h1>Save Changes</h1>
              <SaveChanges
                file={file}
                fileUrl={fileUrl}
                uploadedFile={uploadedFile}
                uploadedFileUrl={uploadedFileUrl}
                setFile={setFile}
                setFileUrl={setFileUrl}
                setUploadedFile={setUploadedFile}
                setUploadedFileUrl={setUploadedFileUrl}
              />
            </div>
            <div>
              <h1>For Editing Drop Your File Here</h1>
              <TextImageEditing
                uploadedFile={uploadedFile}
                setUploadedFile={setUploadedFile}
                setUploadedFileUrl={setUploadedFileUrl}
              />
            </div>
          </div>
          <div className='d-flex justify-content-center align-item-center mt-5'>
          <button className='btn btn-success'
              onClick={HandleDownload}>Download
            </button>
          </div>
        </>
      }

    </div>
  );
}

export default App
