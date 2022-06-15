import "./App.css";
import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import Button from "@mui/material/Button";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

function MangaDetail() {
  const { id } = useParams();
  const [manga, setManga] = useState(null);
  useEffect(() => {
    fetch("https://6197ebee164fa60017c22ebd.mockapi.io/manga/" + id)
      .then((data) => data.json())
      .then((mvs) => {
        setManga(mvs);
      });
  }, [id]);

  return manga ? <MangaDetailSubComp manga={manga} /> : "";
}

function MangaDetailSubComp({ manga }) {
  const history = useHistory();
  return (
    <div className="manga-detail">
      <div className="BackButton">
        <Button
          variant="outlined"
          startIcon={<ArrowBackIosIcon />}
          className="BackButton"
          onClick={() => {
            history.goBack();
          }}
        >
          Back
        </Button>
      </div>
      <div className="manga-info">
        <div className="mangaDetail-info">
          <h2>{manga.slug.toUpperCase()}</h2>
          <h2>{manga.status.toUpperCase()}</h2>
        </div>
        <div className="mangaSummary">{manga.description}</div>
      </div>
    </div>
  );
}

export { MangaDetail };
