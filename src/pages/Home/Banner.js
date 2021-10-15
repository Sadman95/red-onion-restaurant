import React from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner d-flex align-items-center justify-content-center">
      <div>
      <h1>Best food waiting for your belly</h1>
      <InputGroup className="w-75 m-auto mt-4">
        <FormControl className='input-style'
          placeholder="Search food items"
          aria-label="Search field"
          aria-describedby="basic-addon2"
        />
        <Button className='button-style' variant="danger" id="button-addon2">
          Search
        </Button>
      </InputGroup>
      </div>
    </div>
  );
};

export default Banner;
