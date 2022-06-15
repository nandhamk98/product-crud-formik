import "./App.css";
import { useState } from "react";
import Box from "@mui/material/Box";
import { MangaDetail } from "./MangaDetailComponent";
import Button from "@mui/material/Button";
import { EditManga } from "./EditManga";
import { Route, Switch, useHistory } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { AddManga } from "./AddMangaComponent";
import { MangaList } from "./MangaListComp";

// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  const history = useHistory();
  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        <Paper elevation={3} className="paper">
          <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="warning">
              <Toolbar>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ marginRight: "auto" }}
                >
                  MANGA LIST
                  <sub>
                    <MenuBookIcon sx={{ marginLeft: "10px" }} />
                  </sub>
                </Typography>
                <Button
                  style={{ marginLeft: "auto" }}
                  color="inherit"
                  onClick={() => history.push("/")}
                >
                  Home
                </Button>
                <Button color="inherit" onClick={() => history.push("/manga")}>
                  List Manga
                </Button>
                <Button
                  color="inherit"
                  onClick={() => history.push("/add-manga")}
                >
                  Add Manga
                </Button>
                <Button
                  color="inherit"
                  onClick={() => setMode(mode === "light" ? "dark" : "light")}
                >
                  {mode === "light" ? "Dark Mode" : "Light Mode"}
                </Button>
              </Toolbar>
            </AppBar>
          </Box>

          <Switch>
            <Route path="/add-manga" exact>
              <AddManga />
            </Route>
            <Route path="/manga/edit/:id" exact>
              <EditManga />
            </Route>
            <Route path="/manga/:id" exact>
              <MangaDetail />
            </Route>
            <Route path="/manga">
              <MangaList />
            </Route>
            <Route path="/" exact>
              <h3>Welcome to Explore Manga</h3>
            </Route>
            <Route path="**">
              <h1>Page Not Found</h1>
            </Route>
          </Switch>
        </Paper>
        {/* <ColorBox /> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
