import { useState } from "react";
import { DataGrid, GridRowId } from "@mui/x-data-grid";
import { Button2 } from "../components/Buttons";
import { Stack, Paper, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Reports = () => {
  const [selectionModel, setSelectionModel] = useState<null | Array<GridRowId>>(
    null
  );
  const onSelectionModelChange = (newSelectionModel: Array<GridRowId>) => {
    setSelectionModel(newSelectionModel);
  };

  const rows = [
    {
      id: 0,
      date: "2022-01-01",
      type: "Random",
      reason: "No reason",
      amount: 200,
    },
    {
      id: 1,
      date: "2022-01-01",
      type: "Random",
      reason: "No reason",
      amount: 200,
    },
  ];

  const columns = [
    { field: "date", headerName: "Date", width: 180 },
    { field: "reason", headerName: "Reason", width: 180 },
    { field: "type", headerName: "Type", width: 180 },
    { field: "amount", headerName: "Amount", width: 180 },
  ];

  return (
    <div>
      <Stack
        sx={{ margin: "0 0 10px 0" }}
        direction="row"
        justifyContent="space-between"
      >
        <Paper
          sx={{
            boxShadow: "none",
            border: "1px solid #c5c5c5",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            style={{
              padding: "5px",
              display: "grid",
              placeContent: "center",
            }}
          >
            <SearchIcon />
          </div>

          <InputBase
            name="question"
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search"
            inputProps={{
              "aria-label": "search frequently asked questions",
            }}
          />
        </Paper>

        <Stack spacing={1} direction="row">
          {selectionModel && selectionModel?.length > 0 ? (
            <Button2 color="error" variant="contained">
              Delete
            </Button2>
          ) : (
            <Button2 variant="contained">Add</Button2>
          )}
        </Stack>
      </Stack>

      <div className="main_table_box_container">
        <div className="main_table_title_container">
          <div>Reports</div>
          <div>Something about reports</div>
        </div>

        <DataGrid
          checkboxSelection
          disableRowSelectionOnClick={true}
          rows={rows}
          columns={columns}
          className="main_table_box"
          onRowSelectionModelChange={onSelectionModelChange}
        />
      </div>
    </div>
  );
};

export default Reports;
