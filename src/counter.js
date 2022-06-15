import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import Badge from "@mui/material/Badge";

function Counter() {
  const [likes, setLikes] = useState(0);
  const [dislike, setDisLikes] = useState(0);

  return (
    <div className="counter">
      <IconButton
        aria-label="toggle description"
        color="primary"
        onClick={() => {
          setLikes(likes + 1);
        }}
      >
        <Badge color="primary" badgeContent={likes}>
          <ThumbUpIcon className="iconButton" />
        </Badge>
      </IconButton>
      <IconButton
        aria-label="toggle description"
        color="primary"
        onClick={() => {
          setDisLikes(dislike + 1);
        }}
      >
        <Badge color="error" badgeContent={dislike}>
          <ThumbDownAltIcon className="iconButton" />
        </Badge>
      </IconButton>
    </div>
  );
}

export { Counter };
