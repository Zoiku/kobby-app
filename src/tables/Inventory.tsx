import { DataGrid } from "@mui/x-data-grid";
import { Button2 } from "../components/Buttons";
import { Stack } from "@mui/material";

const Inventory = () => {
  const rows: Array<Object> = [{ id: 0 }];
  const columns = [{ field: "id" }];

  return (
    <div>
      <Stack sx={{ margin: "0 0 10px 0" }} direction="row-reverse" spacing={1}>
        <Button2 variant="contained">Delete</Button2>
        <Button2 variant="outlined">Add</Button2>
      </Stack>

      <div className="main_table_box_container">
        <div className="main_table_title_container">
          <div>Inventory</div>
          <div>Something about inventory</div>
        </div>

        <DataGrid
          checkboxSelection
          disableRowSelectionOnClick={true}
          rows={rows}
          columns={columns}
          className="main_table_box"
        />
      </div>
    </div>
  );
};

export default Inventory;
