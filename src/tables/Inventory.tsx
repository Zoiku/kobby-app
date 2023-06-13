import { useState } from "react";
import { DataGrid, GridRowId } from "@mui/x-data-grid";
import { Button2 } from "../components/Buttons";
import { Stack, Paper, InputBase, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MuiDialog from "../components/Dialog";
import DrawerModal from "../components/DrawerModal";

const AddInventoryForm = () => (
  <Box
    component="form"
    sx={{
      "& > :not(style)": { margin: "0 0 10px 0" },
    }}
  >
    <div>Inventory form goes here</div>
  </Box>
);

const Inventory = () => {
  const [openAddInventoryForm, setOpenAddInventoryForm] = useState(false);
  const toggleOpenAddInventoryForm = (open: boolean) => () => {
    setOpenAddInventoryForm(open);
  };
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const toggleOpenDeleteDialog = (open: boolean) => () => {
    setOpenDeleteDialog(open);
  };
  const handleDeleteDialogActions = (open: boolean) => () => {
    switch (open) {
      case true:
        setOpenDeleteDialog(false);
        break;

      case false:
        setOpenDeleteDialog(false);
        break;

      default:
        break;
    }
  };
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
  ];
  const columns = [
    { field: "date", headerName: "Date", width: 180 },
    { field: "reason", headerName: "Reason", width: 180 },
    { field: "type", headerName: "Type", width: 180 },
    { field: "amount", headerName: "Amount", width: 180 },
  ];
  const handleAddInventory = () => {
    setOpenAddInventoryForm(true);
  };

  return (
    <div>
      <DrawerModal
        openState={openAddInventoryForm}
        toggleOpenState={toggleOpenAddInventoryForm}
        title="Add Inventory Form"
      >
        <AddInventoryForm />
      </DrawerModal>

      <MuiDialog
        openDialog={openDeleteDialog}
        toggleOpenDialog={toggleOpenDeleteDialog}
        handleDialogActions={handleDeleteDialogActions}
        dialogTitle={
          selectionModel && selectionModel?.length > 1
            ? "Do you want to delete these inventories?"
            : "Do you want to delete this inventory?"
        }
      />

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
            p: "4px 2px",
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
            <Button2
              onClick={toggleOpenDeleteDialog(true)}
              color="error"
              variant="contained"
            >
              Delete
            </Button2>
          ) : (
            <Button2 onClick={handleAddInventory} variant="contained">
              Add
            </Button2>
          )}
        </Stack>
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
          onRowSelectionModelChange={onSelectionModelChange}
        />
      </div>
    </div>
  );
};

export default Inventory;
