import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
import { useHistory } from "react-router-dom";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import * as Yup from "yup";

function AddManga() {
  // const [movieTrailer, setMovieTariler] = useState("");
  const history = useHistory();

  const addMangaThroughPost = (mangaData) => {
    fetch("https://6197ebee164fa60017c22ebd.mockapi.io/manga", {
      method: "POST",
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
      mangaName: "",
      posterLink: "",
      mangaStatus: "",
      mangaDescription: "",
    },
    onSubmit: (value) => {
      addMangaThroughPost(value);
    },
    validationSchema: validation,
  });

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
          style={{ width: "100%", margin: "10px" }}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="mangaDescription"
          value={formik.values.mangaDescription}
        />
        {formik.touched.mangaDescription && formik.errors.mangaDescription ? (
          <div className="errorValidation">
            {formik.errors.mangaDescription}
          </div>
        ) : null}
        {/* <TextField
          id="outlined-name"
          label="Trailer"
          style={{ width: "100%", margin: "10px" }}
          onChange={(event) => {
            setMovieTariler(event.target.value);
          }}
        /> */}
        <Button variant="outlined" startIcon={<AddIcon />} type="submit">
          Add Manga
        </Button>
      </form>
    </div>
  );
}

export { AddManga };
