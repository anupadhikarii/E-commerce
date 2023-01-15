/** @format */

import React from "react";
import { HiPhotograph } from "react-icons/hi";
import { MdOutlineCollections } from "react-icons/md";
import { BiUser } from "react-icons/bi";
import "./productLine.css";
function ProductLine() {
  return (
    <>
      <div className='product-navline'>
        <ul>
          <li>
            <div className='photo'>
              <li>
                <HiPhotograph />
              </li>
              <li>Photos 3.2k</li>
            </div>
          </li>
          <li>
            <div className='photo'>
              <li>
                <MdOutlineCollections />
              </li>
              <li>Collection 3.9k</li>
            </div>
          </li>
          <li>
            <div className='photo'>
              <li>
                <BiUser />
              </li>
              <li>User 108</li>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default ProductLine;
