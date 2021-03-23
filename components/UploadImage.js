/** @format */

import { useState } from 'react'
import Icon from './Icon.js'
import Button from './UIKit/Button'
const UploadImage = (props) => {
  const listURL = []
  const [upLoading, setUploading] = useState(false)
  const [percent, setPercent] = useState(0)
  const [upLoaded, setUploaded] = useState(false)
  const [file, setFile] = useState([])
  const [error, setError] = useState('')
  const fileReviewHandler = (e) => {
    setUploaded(false)
    setPercent(0)
    setFile(e.target.files)
    
  }
  const handleImageUpload = () => {
    const Upload_Preset = 'ml_default'
    const CloundName = 'se-upload'
    const { files } = document.querySelector('input[type="file"]')
    if (files.length == 0) {
      alert('Please choose image to upload')
    } else {
      setUploading(true)
      var percentLoading = 0,
        process = 0
      var scale = 100 / files.length
      var check = true
      const formData = new FormData()
      const upload = [...files].map((item, index) => {
        formData.append('file', item)
        // replace this with your upload preset name
        formData.append('upload_preset', `${Upload_Preset}`)
        const options = {
          method: 'POST',
          body: formData,
        }

        // replace cloudname with your Cloudinary cloud_name
        if (check) {
          return fetch(
            `https://api.Cloudinary.com/v1_1/${CloundName}/image/upload`,
            options
          )
            .then((res) => res.json())
            .then((res) => {
              if (res.error) {
                check = false
                setError('Something went wrong!')
              } else {
                setTimeout(() => {
                  percentLoading += scale
                  setPercent(percentLoading.toFixed(2))
                  process += 1
                  if (process == files.length) {
                    FetchingDone()
                  }
                }, 300 * index)
                listURL.push(res.url)
                props.setUrlImages(listURL);
              }
            })
            .catch((err) => console.log(err))
        }
      })
      const FetchingDone = () => {
        setTimeout(() => {
          setUploading(false)
          setUploaded(true)
        }, 300)
      }
    }
  }
  return (
    <div>
      <div className="col-lg-6 col-sm-8">
        <div className="mx-auto">
          <form>
            <input
              multiple
              onChange={fileReviewHandler}
              type="file"
              className="form-control upload-img mb-2"
              id="inputGroupFile04"
              aria-describedby="inputGroupFileAddon04"
              aria-label="Upload"
            />
            {!upLoaded ? (
              <Button
                text="Add images"
                variant="warning"
                onClick={handleImageUpload}
                />
            ) : (
              ''
            )}
            {upLoading && !error ? (
              <div>
                <div className="d-flex justify-content-center text-primary">
                  <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
                <p className="text-primary d-flex justify-content-center">
                  Loading...
                </p>
                <p className="text-primary d-flex justify-content-center">
                  It might take some times, so please wait.
                </p>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${percent}%` }}
                    aria-valuenow={percent}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    {percent}%
                  </div>
                </div>
              </div>
            ) : (
              ''
            )}
          </form>
          {upLoaded && !error ? (
            <div className="alert alert-success col-8 mt-3 ms-2 " role="alert">
              <Icon icon="check" />
              <span className="ms-2">Upload image succeed!</span>
            </div>
          ) : (
            ''
          )}
          {error ? (
            <div className="alert alert-danger w-50 mt-3 ms-2 " role="alert">
              <Icon icon="false" />
              <span className="ms-2">{error}!</span>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
      <div className="mx-auto">
        <div className="row mx-auto thumbnail-pr mt-4">
          {[...file].map((item) => (
            <div key={item.name} className="col-3 contain-img me-1">
              <img
                className="img-fluid img-thumbnail float-start img-preview m-2"
                src={item ? URL.createObjectURL(item) : null}
                alt={item ? item.name : null}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default UploadImage
