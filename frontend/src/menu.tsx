import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import Grid from "@mui/material/Grid";
import { useForm } from "react-hook-form";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import RadioGroup from "@mui/material/RadioGroup";
import axios from "axios";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
const drawerWidth = 240;

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
export default function Menu() {
  const [typeElement, setTypeElement] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [inputTab, setInputTab] = React.useState([
    { label: "", id: "", type: "" },
  ]);

  const { register, handleSubmit } = useForm({});

  const onDragStart = (e: any) => {
    console.log("eeee", e.target.innerText);
    setTypeElement(e.target.innerText);
  };
  const onDragOver = (e: any) => {
    e.preventDefault();
  };
  const onFormDrop = (e: any) => {
    if (typeElement === "input") {
      setOpen(true);
    }
  };
  const handleClose = (data: any) => {
    let tab = inputTab;
    let obj = {
      label: data.inputLabel,
      id: data.inputId,
      type: data.inputType,
    };
    if (tab[0].label === "") tab[0] = obj;
    else tab.push(obj);

    setInputTab(tab);

    setOpen(false);
  };
  const onSubmit = (data: any, e: any) => {
    handleClose(data);
  };
  const onError = (errors: any, e: any) => console.log(errors, e);

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {["input", "checkBox", "textArea"].map((text, index) => (
          <ListItem
            key={text}
            disablePadding
            draggable
            onDragStart={(e) => onDragStart(e)}
          >
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
  const saveForm = () => {
    const bodyParameters = {
      formulaire: { TextField: inputTab },
    };

    axios
      .post("http://localhost:4040/addform", bodyParameters)
      .then((response) => {
        console.log(response);
      });
  };
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Formulaire dynamique
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <div
          onDragOver={(e) => {
            onDragOver(e);
          }}
          onDrop={(e) => onFormDrop(e)}
          style={{ width: "100%", minHeight: "100vh" }}
        >
          <Grid container spacing={2}>
            <div>
              {inputTab[0].label !== "" &&
                inputTab.map((element) => (
                  <Grid item spacing={4}>
                    <TextField
                      style={{ marginTop: "5%" }}
                      label={element.label}
                      id={element.id}
                      type={element.type}
                      key={element.id}
                    ></TextField>
                  </Grid>
                ))}
              {inputTab[0].label !== "" && (
                <button onClick={() => saveForm()}>Sauvegarder</button>
              )}
            </div>
          </Grid>
        </div>
      </Box>
      {/* Model for input */}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Configuration d'input
          </Typography>
          <Grid container spacing={2} style={{ marginTop: "5%" }}>
            <form onSubmit={handleSubmit(onSubmit, onError)}>
              <TextField
                style={{ padding: "3%" }}
                label="inputLabel"
                id="inputLabel"
                {...register("inputLabel")}
              />
              <TextField
                style={{ padding: "3%" }}
                label="inputId"
                id="inputId"
                {...register("inputId")}
              />
              <Grid item xs={7} md={7}>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="text"
                    control={<Radio />}
                    {...register("inputType")}
                    label="text"
                  />
                  <FormControlLabel
                    value="password"
                    control={<Radio />}
                    {...register("inputType")}
                    label="password"
                  />
                  <FormControlLabel
                    value="number"
                    control={<Radio />}
                    label="number"
                    {...register("inputType")}
                  />
                </RadioGroup>
              </Grid>
              <button type="submit">Valider</button>
            </form>
          </Grid>
        </Box>
      </Modal>
    </Box>
  );
}
