import React from "react";
import { Button, Form, FormControl } from "react-bootstrap";
import Volunteers from "./Volunteers/Volunteers";

const Home = () => {
  return (
    <div>
      <h1 className="mb-3">I GROW BY HELPING PEOPLE IN NEED. </h1>
      <>
        <Form className="mx-auto w-25 d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="mx-auto"
            aria-label="Search"
          />
          <Button variant="outline-primary">Search</Button>
        </Form>
      </>
      <Volunteers />
    </div>
  );
};

export default Home;
