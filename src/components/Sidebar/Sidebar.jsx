// src/components/Dashboard/Sidebar.jsx

import { useDispatch } from "react-redux";
import { logoutRequest } from "../../state-management/authorization/authActions";
import logo from "../../assets/logo1.png";

import {
  LayoutDashboard,
  Users,
  Settings,
  FileText,
  LogOut,
} from "lucide-react";

import {
  Box,
  Typography,
  Button,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

const Sidebar = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutRequest());
  };

  const menuItems = [
    {
      name: "Dashboard",
      icon: <LayoutDashboard size={20} />,
      active: true,
    },
    {
      name: "Users",
      icon: <Users size={20} />,
    },
    {
      name: "Reports",
      icon: <FileText size={20} />,
    },
    {
      name: "Settings",
      icon: <Settings size={20} />,
    },
  ];

  return (
    <Box
      className="
        h-screen w-full max-w-[280px] bg-gradient-to-b  from-slate-900 via-slate-800 
        to-slate-900
        flex
        flex-col
        justify-between
        border-r
        border-slate-700
        shadow-2xl
        overflow-hidden
      "
    >
      {/* Top Section */}
      <Box>
        {/* Logo Section */}
        <Box
          className="flex flex-col items-center justify-center px-6 py-8">
          <div
            className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-2xl shadow-lg flex items-center justify-center p-2 mb-4">
          
            <img
              src={logo}
              alt="MediConnect Logo"
              className="w-full h-full object-contain"/>
             
          </div>
          <Typography
            variant="h5"
            className=" !text-white !font-bold text-center">
            MediConnect
          </Typography>

          <Typography
            variant="body2"
            className=" !text-slate-400 text-center mt-2">
            Healthcare Ecosystem
          </Typography>
        </Box>

        <Divider sx={{ borderColor: "#334155" }} />

        {/* Menu Section */}
        <List className="px-3 py-5">
          {menuItems.map((item) => (
            <ListItemButton
              key={item.name}
              className={`!rounded-xl !mb-3 !px-4 !py-3 transition-all duration-300 hover:!translate-x-1
                ${
                  item.active
                    ? "!bg-blue-600 hover:!bg-blue-700 shadow-lg"
                    : "hover:!bg-slate-700"
                }
              `}
            >
              <ListItemIcon
                sx={{
                  color: item.active ? "#ffffff" : "#CBD5E1",
                  minWidth: "40px",
                }}
              >
                {item.icon}
              </ListItemIcon>

              <ListItemText
                primary={item.name}
                primaryTypographyProps={{
                  color: item.active ? "#ffffff" : "#CBD5E1",
                  fontWeight: item.active ? 600 : 500,
                  fontSize: "0.95rem",
                }}
              />
            </ListItemButton>
          ))}
        </List>
      </Box>

      {/* Logout Section */}
      <Box className="p-4">
        <Button
          fullWidth
          variant="contained"
          color="error"
          startIcon={<LogOut size={18} />}
          onClick={handleLogout}
          className="!h-12 md:!h-14 !rounded-xl !font-semibold !text-base"
          sx={{
            textTransform: "none",
          }}
        >
          Logout
        </Button>
      </Box>
    </Box>
  );
};

export default Sidebar;
