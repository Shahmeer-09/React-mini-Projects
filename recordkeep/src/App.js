import "./App.css";
import Header from "./component/Header";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import Fields from "./component/Fields";

function App() {
  const [form, setForm] = useState({});
  const [data, setData] = useState([]);
  const display = () => {
    setData([...data, form]);
    setForm(form);
  };

  return (
    <div className="App">
      <Header />
      <div className="form">
        <Stack direction="row" spacing={2}>
          <TextField
            // value={name}
            onBlur={(e) => setForm({ ...form, name: e.target.value })}
            id="outlined-basic"
            label="name"
            variant="outlined"
          />

          <TextField
            // value={email}
            onBlur={(e) => setForm({ ...form, email: e.target.value })}
            id="outlined-basic"
            label="email"
            variant="outlined"
          />
          <Button onClick={display} variant="contained" color="success">
            <AddIcon />
          </Button>
        </Stack>
      </div>
      <div className="data">
        <div className="data_val">
          <h4>name</h4>
          <h4>email</h4>
          <h4>remove</h4>
        </div>
        {data.map((element, index) => {
          return (
            <Fields
              name={element.name}
              email={element.email}
              index={index}
              data={data}
              setData={setData}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
