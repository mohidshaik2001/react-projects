import React from "react";
import { PostForm } from "../components/index";
import { Container } from "../components/index";

function AddPost() {
  return (
    <div className="py-8">
      <Container>
        <PostForm />
      </Container>
    </div>
  );
}

export default AddPost;
