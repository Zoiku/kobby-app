import { DataGrid } from "@mui/x-data-grid";
import { Button2 } from "../components/Buttons";
import { Stack } from "@mui/material";

const Users = () => {
  const rows: Array<Object> = [{ id: 0 }];
  const columns = [{ field: "id" }];

  return (
    <div>
      <Stack sx={{ margin: "0 0 10px 0" }} direction="row-reverse" spacing={1}>
        <Button2 variant="contained">Add</Button2>
        <Button2 variant="text">Delete</Button2>
      </Stack>

      <div className="main_table_box_container">
        <div className="main_table_title_container">
          <div>Users</div>
          <div>Something about users</div>
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

export default Users;
