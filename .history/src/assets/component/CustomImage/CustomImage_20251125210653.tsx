import  { useState } from 'react'
import { Image } from 'react-bootstrap';
import type { ImageCustomProps } from '../../interfaces/Type';

const CustomImage = ({ src, fallbackSrc, alt, ...props }:ImageCustomProps) => {
  const [imgSrc, setImgSrc] = useState(src);

  const handleError = () => {
    if (imgSrc !== fallbackSrc && imgSrc != '') {
      setImgSrc(fallbackSrc);
    }
  };    
  return (
  <Image src={imgSrc}alt={alt} onError={handleError}  {...props} />
  )
}

export default CustomImage
