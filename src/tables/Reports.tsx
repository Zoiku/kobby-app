import "../styles/Reports.scss";
import { Box } from "@mui/material";
import Chart from "../charts";

const Reports = () => {
  const reportTitle = {
    title: "Report Line Chart",
    titleHelper: "",
  };

  return (
    <Box>
      <Chart title={reportTitle} />
    </Box>
  );
};

export default Reports;
