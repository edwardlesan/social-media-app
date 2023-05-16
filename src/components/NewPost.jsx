import "./NewPost.css";
import {
  BorderColorOutlined,
  AddPhotoAlternateOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@mui/icons-material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "../state";
import Dropzone from "react-dropzone";
import { IconButton, Divider } from "@mui/material";

const NewPost = ({ picturePath }) => {
  const dispatch = useDispatch();
  const [isImage, setIsImage] = useState(false);
  const [image, setImage] = useState(null);
  const [post, setPost] = useState("");
  const { _id } = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);

  const handleNewPost = async () => {
    const formData = new FormData();
    formData.append("userId", _id);
    formData.append("description", post);
    if (image) {
      formData.append("picture", image);
      formData.append("picturePath", image.name);
    }

    const res = await fetch(`http://localhost:3001/posts`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
      body: formData,
    });
    const posts = await res.json();
    dispatch(setPosts({ posts }));
    setImage(null);
    setPost("");
  };

  return (
    <div className="new_post_card">
      <div className="new_post_content">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            padding: "0 10px",
          }}
        >
          <BorderColorOutlined sx={{ color: "#2c5784" }} />
          <h5 style={{ color: "gray" }}>Create Post</h5>
        </div>
        <input
          placeholder="What's on your mind..."
          onChange={(e) => setPost(e.target.value)}
          value={post}
        />
      </div>

      {isImage && (
        <div className="new_post_image_box">
          <Dropzone
            acceptedFiles=".jpg,.jpeg,.png"
            multiple={false}
            onDrop={(acceptedFiles) => setImage(acceptedFiles[0])}
          >
            {({ getRootProps, getInputProps }) => (
              <div className="new_post_image_drop" {...getRootProps()}>
                <input {...getInputProps()} />
                {!image ? (
                  <p>Add Image Here</p>
                ) : (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <h6>{image.name}</h6>
                    <EditOutlined
                      sx={{ color: "#2c5784", cursor: "pointer" }}
                    />
                  </div>
                )}

                {image && (
                  <div
                    onClick={() => setImage(null)}
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "flex-end",
                      marginTop: "10px",
                    }}
                  >
                    <DeleteOutlined
                      sx={{ color: "#2c5784", cursor: "pointer" }}
                    />
                  </div>
                )}
              </div>
            )}
          </Dropzone>
        </div>
      )}

      <div className="new_post_buttons">
        <div
          onClick={() => setIsImage(!isImage)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            cursor: "pointer",
          }}
        >
          <AddPhotoAlternateOutlined
            sx={{ color: "#2c5784", cursor: "pointer" }}
          />
          <h5 style={{ color: "#2c5784" }}>Add Image</h5>
        </div>
        <button
          className="new_post_button"
          disabled={!post}
          onClick={handleNewPost}
        >
          POST
        </button>
      </div>
    </div>
  );
};

export default NewPost;
