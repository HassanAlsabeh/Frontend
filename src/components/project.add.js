import React from "react";
import { useState } from "react";
import axios from "axios";

const AddProjectForm = () => {
  const [title, setTitle] = useState("");
  const [description, setdescription] = useState("");
  const [fileName, setFileName] = useState("");
  const [button, setbutton] = useState("");

  const onChangeFile = (e) => {
    setFileName(e.target.files[0]);
  };

  const changeonClick = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("image", fileName);
    formData.append("button", button);

    setTitle("");
    setdescription("");
    setFileName("");
    setbutton("");
    axios
      .post("http://localhost:5003/project/add", formData)
      .then((res) => console.log(res.data))
      .catch((error) => {
        console.log(error);
      });
  };
  // const onChangeFile=(e) =>{
  //   setFileName(e.target.files[0]);
  // };
  // const changeonClick = e=>{
  //   e.preventDefault();
  //   const formData = new FormData();
  //   formData.append("title",title);
  //   formData.append("description",description);
  //   formData.append("image",img);

  // }
  //   this.onChangeTitle = this.onChangeTitle.bind(this);
  //   this.onChangeDescription = this.onChangeDescription.bind(this);
  //   this.state = {
  //     title: "",
  //     description: "",setFileName
  // }
  // componentDidMount() {
  //   this.setState({
  //     title: "",
  //     description: "",
  //   });
  // }
  // onChangeTitle(e) {
  //   this.setState({
  //     title: e.target.value,
  //   });
  // }

  // onChangeDescription(e) {
  //   this.setState({
  //     description: e.target.value,
  //   });
  // }

  // onSubmit = (e) => {
  //   e.preventDefault();
  //   const exercise = {
  //     title: this.state.title,
  //     description: this.state.description,
  //   };

  // console.log(exercise);
  //   axios
  //     .post("http://localhost:5003/project/add", exercise)
  //     .then((res) => console.log(res.data));
  //   // window.location =
  // };

  return (
    <div>
      <div class="container">
        <form
          id="contact"
          onSubmit={changeonClick}
          encType="multipart/form-data"
        >
          <h3>Creat new Project</h3>
          <br></br>

          <input
            placeholder="Title"
            type="text"
            tabindex="1"
            required
            autofocus
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            placeholder="Description"
            type="text"
            tabindex="2"
            required
            value={description}
            onChange={(e) => setdescription(e.target.value)}
          />

          <input
            placeholder="button"
            type="text"
            tabindex="2"
            required
            value={button}
            onChange={(e) => setbutton(e.target.value)}
          />

          <label>Upload image</label>
          <input type="file" name="image" onChange={onChangeFile} />

          <button
            name="submit"
            type="submit"
            id="contact-submit"
            data-submit="...Sending"
          >
            Submit
          </button>
        </form>
      </div>

      {/* <h3>Creat new Project</h3>
      <form onSubmit={changeonClick} encType="multipart/form-data">
        <div>
          <label>Title</label>
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>button</label>
          <input
            type="text"
            required
            value={button}
            onChange={(e) => setButton(e.target.value)}
          />
        </div>
        <div>
          <label>Description</label>
          <input
            type="text"
            required
            value={description}
            onChange={(e) => setdescription(e.target.value)}
          />
          <div>
            <label>Upload image</label>
            <input type="file" name="image" onChange={onChangeFile} />
          </div>
          <div>
            <button type="submit">Create project</button>
          </div>
        </div>
      </form> */}
      {/* <form action="/project/add" encType="multipart/form-data">
          <label>upload image</label>
          <input type="file" name="image"/>
          <div>
              <input type="submit" value="Create New Project" />
            </div>
        </form> */}
    </div>
  );
};
export default AddProjectForm;
