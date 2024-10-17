'use client'

import { convertFileToUrl } from '@/lib/utils'
import Image from 'next/image'
import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'

type FileUploaderTypeProps = {
    files:File[] | undefined,
    onChange: (files: File[]) => void,
}


 const FileUploader = ({files, onChange}:FileUploaderTypeProps) => { 
  const onDrop = useCallback((accseptedFiles : File[]) => {
       onChange(accseptedFiles)
  },[] )
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <div {...getRootProps()} className="file-upload">
      <input {...getInputProps()} />
      {files && files?.length > 0 ? (
        <Image
          src={convertFileToUrl(files[0])}
          width={1000}
          height={1000}
          alt="uploaded image"
          className="mx-h-[400px] overflow-hidden object-cover"
        />
      ) : (
        <>
          <Image src="/assets/icons/upload.svg" width={40} height={40} alt="upload" />
          <div className="file-upload_label">
            <p className="text-14-regular">
              <span className="text-green-500">Click to upload</span> or Drag and drop
            </p>
            <p>SVG, PNG, JPG, or GIF (max 5MB)</p>
          </div>
        </>
      )}
    </div>
  );
  
}
export default FileUploader