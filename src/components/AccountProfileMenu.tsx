import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";

const AccountProfileMenu = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const toggleAccountProfile =
    (open: boolean) => (e: React.MouseEvent<HTMLElement>) => {
      switch (open) {
        case true:
          setAnchorEl(e.currentTarget);
          break;

        case false:
          setAnchorEl(null);
          break;

        default:
          break;
      }
    };

  const simulateLogOut = () => {
    toggleAccountProfile(false);
    navigate("/", { replace: true });
  };

  return (
    <div>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={toggleAccountProfile(false)}
        onClick={toggleAccountProfile(false)}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={simulateLogOut}>Logout</MenuItem>
      </Menu>

      <IconButton
        onClick={toggleAccountProfile(true)}
        size="small"
        aria-controls={open ? "account-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        sx={{ padding: 0 }}
      >
        <Avatar
          variant="square"
          sx={{
            width: 30,
            height: 30,
            background: "#1976d2",
            color: "white",
          }}
        >
          U
        </Avatar>
      </IconButton>
    </div>
  );
};

export default AccountProfileMenu;
