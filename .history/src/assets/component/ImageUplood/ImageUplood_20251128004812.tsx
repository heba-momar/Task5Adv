import { Form } from 'react-bootstrap'
import './ImageUplood.css'
import CustomImage from '../CustomImage/CustomImage'
import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
 type Props = {
  addNewItem?: string;
  initialImage:string
 }  
const ImageUplood =forwardRef<HTMLInputElement,Props > (({addNewItem,initialImage},ref) => {
 
   const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef=useRef<HTMLInputElement>(null)
  useImperativeHandle(ref, () => fileInputRef.current as HTMLInputElement);
  const handleclick=()=>{
    fileInputRef.current?.click()
  }
  useEffect(() => {
    if (initialImage) {
      setPreview(initialImage);
    }
  }, [initialImage]);

 const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
    // onImageSelect(file)
     //setPreview(URL.createObjectURL(file))
       const reader = new FileReader();
      reader.onloadend = (ev:ProgressEvent<FileReader>) => {
        setPreview(ev.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
    else{
        setPreview(null)
    }
    }    
  return (
    <Form.Group>
     <input type="file"  accept="image/*" ref={fileInputRef}
        onChange={handleImageChange}className="d-none" />
          <div onClick={handleclick}
        className={`upload-box ${addNewItem || ""}`}>
        {preview ? (
          <CustomImage src={preview} alt="Preview" className="upload-preview" fallbackSrc="/image/Uploadicon.svg" />
          // <img src={preview} alt="Preview" className="upload-preview" />
        ) : (
          <img src="/image/Uploadicon.svg" alt="" className="uploadIcon" />
        )}
      </div>  
    </Form.Group>
  )
})

export default ImageUplood
