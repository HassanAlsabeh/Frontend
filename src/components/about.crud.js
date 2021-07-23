import React from "react";
import axios from "axios";
import { useState } from "react";
import "./about_update.css";
// import { useParams } from "react-router-dom";
import Dashboard from "../pages/dashboard/dashboard";

const UpdateAbout = () => {
  const [certificate, setCertificate] = useState("");
  const [certificatedesc, setCertificatedesc] = useState("");
  const [profile, setProfile] = useState("");
  const [profiledesc, setProfiledesc] = useState("");
  const [languages, setLanguages] = useState("");
  const [languagesdesc, setLanguagesdesc] = useState("");
  const [programs, setPrograms] = useState("");
  const [programsdesc, setProgramsdesc] = useState("");
  const [fileName, setFileName] = useState("");
  // const { id } = useParams();

  const onChangeFile = (e) => {
    setFileName(e.target.files[0]);
  };

  const changeonClick = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("certificate", certificate);
    formData.append("certificatedesc", certificatedesc);
    formData.append("profile", profile);
    formData.append("profiledesc", profiledesc);
    formData.append("languages", languages);
    formData.append("languagesdesc", languagesdesc);
    formData.append("programs", programs);
    formData.append("programsdesc", programsdesc);
    formData.append("image", fileName);

    setCertificate("");
    setCertificatedesc("");
    setProfile("");
    setProfiledesc("");
    setLanguages("");
    setLanguagesdesc("");
    setPrograms("");
    setProgramsdesc("");
    setFileName("");
    axios
    .put(`http://localhost:5003/about/update/60f9310d8fa6219c03894f64`, formData)
    .then((res) => console.log(res.data));
};

  return (
    <div>
      <Dashboard />
      <div class="container">
        <form
          id="contact"
          onSubmit={changeonClick}
          encType="multipart/form-data"
        >
          <h3>About Update</h3>
          <br></br>

          <input
            placeholder="Certificate"
            type="text"
            tabindex="1"
            required
            autofocus
            value={certificate}
            onChange={(e) => setCertificate(e.target.value)}
          />

          <input
            placeholder="certificatedesc"
            type="text"
            tabindex="2"
            required
            value={certificatedesc}
            onChange={(e) => setCertificatedesc(e.target.value)}
          />

          <input
            placeholder="Profile"
            type="text"
            tabindex="3"
            required
            value={profile}
            onChange={(e) => setProfile(e.target.value)}
          />

          <input
            placeholder="profiledesc"
            type="text"
            tabindex="4"
            required
            value={profiledesc}
            onChange={(e) => setProfiledesc(e.target.value)}
          />

          <input
            placeholder="Languages"
            type="text"
            tabindex="4"
            required
            value={languages}
            onChange={(e) => setLanguages(e.target.value)}
          />

          <input
            placeholder="Languagesdesc"
            type="text"
            tabindex="4"
            required
            value={languagesdesc}
            onChange={(e) => setLanguagesdesc(e.target.value)}
          />
          <input
            placeholder="Programs"
            type="text"
            tabindex="4"
            required
            value={programs}
            onChange={(e) => setPrograms(e.target.value)}
          />

          <input
            placeholder="Programsdesc"
            type="text"
            tabindex="4"
            required
            value={programsdesc}
            onChange={(e) => setProgramsdesc(e.target.value)}
          />
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
    </div>

    // {/* // <div className="about_main_update">
    // //   <h3>Creat new data</h3>
    // //   <form onSubmit={changeonClick} encType="multipart/form-data">
    // //     <div>
    // //       <label>Certificate</label>
    // //       <input */}
    // {/* //         type="text"
    // //         required
    // //         value={certificate}
    // //         onChange={(e) => setCertificate(e.target.value)}
    // //       /> */}
    //     </div>
    //     <div>
    //       <label>Text</label>
    //       <input
    //         type="text"
    //         required
    //         value={certificatedesc}
    //         onChange={(e) => setCertificatedesc(e.target.value)}
    //       />
    //     </div>
    //     <div>
    //       <label>Profile</label>
    //       <input
    //         type="text"
    //         required
    //         value={profile}
    //         onChange={(e) => setProfile(e.target.value)}
    //       />
    //     </div>
    //     <div>
    //       <label>Text</label>
    //       <input
    //         type="text"
    //         required
    //         value={profiledesc}
    //         onChange={(e) => setProfiledesc(e.target.value)}
    //       />
    //     </div>
    //     <div>
    //       <label>Languages</label>
    //       <input
    //         type="text"
    //         required
    //         value={languages}
    //         onChange={(e) => setLanguages(e.target.value)}
    //       />
    //     </div>
    //     <div>
    //       <label>Text</label>
    //       <input
    //         type="text"
    //         required
    //         value={languagesdesc}
    //         onChange={(e) => setLanguagesdesc(e.target.value)}
    //       />
    //     </div>
    //     <div>
    //       <label>Programs</label>
    //       <input
    //         type="text"
    //         required
    //         value={programs}
    //         onChange={(e) => setPrograms(e.target.value)}
    //       />
    //     </div>
    //     <div>
    //       <label>Text</label>
    //       <input
    //         type="text"
    //         required
    //         value={programsdesc}
    //         onChange={(e) => setProgramsdesc(e.target.value)}
    //       />
    //     </div>
    //     <div>
    //       <label>Upload image</label>
    //       <input type="file" name="image" onChange={onChangeFile} />
    //     </div>
    //     <div>
    //       <input type="submit" value="Create About data" />
    //     </div>
    //   </form>
    // </div>
  );
};
export default UpdateAbout;
