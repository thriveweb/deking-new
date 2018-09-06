import React from 'react'
import Dropzone from 'react-dropzone'

import './FileUpload.css'

class FileUpload extends React.Component {
  state = {
    accepted: [],
    rejected: [],
  }

  render() {
    return (
      <label className="EnquiryForm--Label Dropzone">
        <Dropzone
          accept="image/jpeg, image/png"
          maxSize={2000000}
          onDrop={(accepted, rejected) => {
            this.setState({ accepted, rejected })
          }}
        >
          {({ isDragActive, isDragReject, acceptedFiles, rejectedFiles }) => {
            if (isDragActive) {
              return 'This file is authorized'
            }
            if (isDragReject) {
              return 'This file is not authorized'
            }
            return acceptedFiles.length || rejectedFiles.length ? (
              <ul>
                {acceptedFiles.length >= 1 &&
                  acceptedFiles.map(f => {
                    return <li key={f.name}>{f.name}</li>
                  })}
                {rejectedFiles.length >= 1 &&
                  rejectedFiles.map(f => {
                    return (
                      <li key={f.name}>
                        <small>
                          Type or size error - Please try again <br /> -{' '}
                          {f.name}
                        </small>
                      </li>
                    )
                  })}
              </ul>
            ) : (
              'Drop to upload an image. Max size 2MB'
            )
          }}
        </Dropzone>
      </label>
    )
  }
}

export default FileUpload
