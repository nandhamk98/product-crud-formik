import IconButton from "@mui/material/IconButton";
import { Counter } from "./counter";
import InfoIcon from "@mui/icons-material/Info";
import { useHistory } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

export function MangaComponent(props) {
  let history = useHistory();

  let id = props.id;

  return (
    <div className="mangaComp">
      <div>
        <img className="mangaPoster" src={props.poster} alt={props.name}></img>
      </div>
      <div className="mangaContent">
        <div className="mangaName">
          <h3>{props.name.toUpperCase()}</h3>
          <h6 style={{ marginLeft: "auto" }}>
            <IconButton
              onClick={() => {
                history.push("/manga/" + id);
              }}
            >
              <InfoIcon />
            </IconButton>
          </h6>
          <h6 className="manga-rating">{props.status.toUpperCase()}</h6>
        </div>
        <p className="mangaSummary">{props.description}</p>
        <div className="manga-action">
          <Counter />
          <div style={{ marginLeft: "auto" }}>
            <IconButton
              onClick={() => {
                history.push("/manga/edit/" + id);
              }}
            >
              <EditIcon />
            </IconButton>
            <IconButton
              onClick={() => {
                props.deleteManga(id);
              }}
            >
              <DeleteIcon />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
}
