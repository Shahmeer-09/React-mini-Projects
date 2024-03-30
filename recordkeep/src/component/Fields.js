import DeleteIcon from "@mui/icons-material/Delete";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import React from "react";

const Fields = ({ name, email, index, data, setData }) => {
  const removeITem = (index) => {
    let arr = data;
    arr.splice(index, 1);
    setData([...arr]);
  };
  return (
    <div className="data_val" key={index}>
      <h4>{name}</h4>
      <h4>{email}</h4>
      <Stack direction="column" spacing={2}>
        <Button
          onClick={() => {
            removeITem(index);
          }}
          variant="contained"
          color="error"
        >
          <DeleteIcon />
        </Button>
      </Stack>
    </div>
  );
};

export default Fields;
