import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

function EditManga() {
  const { id } = useParams();
  const [manga, setManga] = useState(null);
  useEffect(() => {
    fetch("https://6197ebee164fa60017c22ebd.mockapi.io/manga/" + id)
      .then((data) => data.json())
      .then((mvs) => {
        setManga(mvs);
      });
  }, [id]);

  return manga ? <EditMangaSubComp manga={manga} /> : "";
}

function EditMangaSubComp({ manga }) {
  const validation = Yup.object({
    mangaName: Yup.string().required("Required").max(30, "Name is Too Long"),
    posterLink: Yup.string()
      .required("Required")
      .max(200, "Poster Link is Too Long"),
    mangaStatus: Yup.string().required("Required").min(5).max(15),
    mangaDescription: Yup.string()
      .required("Required")
      .max(200, "Decscription is Too Long")
      .min(50, "Decscription is Too Small"),
  });

  const formik = useFormik({
    initialValues: {
      mangaName: manga.mangaName,
      posterLink: manga.posterLink,
      mangaStatus: manga.mangaStatus,
      mangaDescription: manga.mangaDescription,
    },
    onSubmit: (value) => {
      editMangaThroughPut(value);
    },
    validationSchema: validation,
  });

  const editMangaThroughPut = (mangaData) => {
    fetch("https://6197ebee164fa60017c22ebd.mockapi.io/manga/" + manga.id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(mangaData),
    })
      .then((data) => data.json())
      .then((data) => {
        history.push("/manga");
      });
  };

  const history = useHistory();
  return (
    <div className="inputField">
      <form onSubmit={formik.handleSubmit}>
        <TextField
          id="outlined-name"
          label="Manga Name"
          name="mangaName"
          style={{ width: "100%", margin: "10px" }}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.mangaName}
        />
        {formik.touched.mangaName && formik.errors.mangaName ? (
          <div className="errorValidation">{formik.errors.mangaName}</div>
        ) : null}
        <TextField
          id="outlined-name"
          label="Poster Link"
          name="posterLink"
          style={{ width: "100%", margin: "10px" }}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.posterLink}
        />
        {formik.touched.posterLink && formik.errors.posterLink ? (
          <div className="errorValidation">{formik.errors.posterLink}</div>
        ) : null}
        <TextField
          id="outlined-name"
          label="Status"
          name="mangaStatus"
          style={{ width: "100%", margin: "10px" }}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.mangaStatus}
        />
        {formik.touched.mangaStatus && formik.errors.mangaStatus ? (
          <div className="errorValidation">{formik.errors.mangaStatus}</div>
        ) : null}
        <TextField
          id="outlined-name"
          label="Description"
          name="mangaDescription"
          style={{ width: "100%", margin: "10px" }}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.mangaDescription}
        />
        {formik.touched.mangaDescription && formik.errors.mangaDescription ? (
          <div className="errorValidation">
            {formik.errors.mangaDescription}
          </div>
        ) : null}
        <Button variant="outlined" startIcon={<AddIcon />} type="submit">
          Update Manga
        </Button>
      </form>
    </div>
  );
}

export { EditManga };
