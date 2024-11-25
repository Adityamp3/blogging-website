import { useContext, useState } from "react";
import { UserContext } from "../App";
import { Navigate } from "react-router-dom";
import PublishForm from "../components/blog-editor.component";
import BlogEditor from "../components/blog-editor.component";

const Editor = () => {
  const [editorState, setEditorState] = useState("publish");

  let {
    userAuth: { access_token },
  } = useContext(UserContext);

  return access_token === null ? (
    <Navigate to="/signin" />
  ) : editorState == "editor" ? (
    <BlogEditor />
  ) : (
    <PublishForm />
  );
};

export default Editor;
