import { useRef } from "react";
import './SearchItem.css'
import {  Form, InputGroup } from "react-bootstrap"
import { BiSearch } from 'react-icons/bi'
  export interface SearchInputProps {
  onSearch: (query: string) => void;
classExtra?:string
} 
const SearchItem = ({onSearch,classExtra}:SearchInputProps) => {
    const ref =useRef<HTMLInputElement>(null);
      const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch(ref.current?.value.trim() || '');
    }
  };
  return (
      <InputGroup className={`search-bar rounded-2 ${classExtra}`}>
      <Form.Control ref={ref} onKeyDown={handleKeyDown}
      className="form-control lh-1 border-0 "  placeholder="Search product by name "/>
      <InputGroup.Text className="btn border-0 bg-white" onClick={() => onSearch(ref.current?.value.trim() || '')}>
        <BiSearch />
      </InputGroup.Text>
    </InputGroup>
  )
}

export default SearchItem
