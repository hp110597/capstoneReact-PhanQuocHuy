import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import { NavLink, useSearchParams } from "react-router-dom";

export default function Search() {
    let keywordRef = useRef("");
    let [searchParams, setSearchParams] = useSearchParams();
    let [arrProduct, setArrProduct] = useState([]);
    let timeoutRef = useRef({});
  
    const getProductByKeyword = async () => {
      try {
        //Lấy keyword từ url: url?keyword=abc
        let keyword = searchParams.get("keyword");
        console.log(keyword);
        if (keyword.trim() !== "" && keyword !== null) {
          let result = await axios({
            url: "https://shop.cyberlearn.vn/api/Product?keyword=" + keyword,
            method: "GET",
          });
          console.log(result.data.content);
          setArrProduct(result.data.content);
          clearTimeout(timeoutRef.current);
        }else{
          setArrProduct([])
        }
      } catch (err) {
        console.log(err);
      }
    };
    console.log(keywordRef);
  
    useEffect(() => {
      //call api
      getProductByKeyword();
    }, [keywordRef.current]);
  
    const handleChange = (e) => {
      keywordRef.current = e.target.value;
      timeoutRef.current = setTimeout(() => {
        setSearchParams({ keyword: keywordRef.current });
      }, 1000);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // setSearchParams({ keyword: keywordRef.current });
    };
  
    const renderProductByKeyword = () => {
      return arrProduct.map((item,index)=>{
        return  <div className="col-4 my-5 px-5" key={index}>
        <div className="card">
          <div className="card-top">
          <img src={item.image}  alt={item.name} className="w-100"/>
          <p style={{fontSize:24,fontWeight:'300'}}>{item.name}</p>
          <p  style={{fontSize:20,fontWeight:'300',height:100}}>{item.shortDescription}</p>
          </div>
          <div className="card-body row text-white">
          
            <NavLink className="col-6" to={`/detail/${item.id}`}>
              Buy now
            </NavLink>
            <p className="col-6 text-dark">{item.price}$</p>
          </div>
        </div>
      </div>
      })
    }
  return (
    <form className="search-page py-5" onSubmit={handleSubmit}>
      <div className="form-group ps-5 text-start">
        <p >Search</p>
        <input id="keywordRef"
            onChange={handleChange} type="text" className="me-5 " placeholder="Product name ..." />
        <button>Search</button>
      </div>
      <h3 className="text-start">Search result</h3>
        <div className="row">
        {renderProductByKeyword()}
        </div>
    
    </form>
  );
}
