import { MangaComponent } from "./MangaComponent";
import { useState, useEffect } from "react";

function MangaList() {
  const [mangas, setManga] = useState([]);

  const deleteManga = (id) => {
    fetch("https://6197ebee164fa60017c22ebd.mockapi.io/manga/" + id, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => getManga());
  };

  const getManga = () => {
    fetch("https://6197ebee164fa60017c22ebd.mockapi.io/manga")
      .then((data) => data.json())
      .then((mvs) => {
        setManga(mvs);
      });
  };

  useEffect(getManga, []);

  return (
    <div className="mangaList">
      {mangas.map((manga, index) => (
        <MangaComponent
          poster={manga.posterImage}
          name={manga.slug}
          status={manga.status}
          description={manga.description}
          key={index}
          id={manga.id}
          setManga={setManga}
          deleteManga={deleteManga}
        />
      ))}
    </div>
  );
}

export { MangaList };
