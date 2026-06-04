// src/components/Sidebar/Sidebar.jsx

import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
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
  Button,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    dispatch(logoutRequest());
  };

  const menuItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <LayoutDashboard size={20} />,
    },
    {
      name: "Admission",
      path: "/admission",
      icon: <Users size={20} />,
    },
    {
      name: "Reports",
      path: "/demo",
      icon: <FileText size={20} />,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: <Settings size={20} />,
    },
  ];

  return (
    <Box
      className="
        fixed
        left-0
        top-0
        w-[280px]
        h-screen
        flex
        flex-col
        justify-between
        bg-gradient-to-b
        from-slate-900
        via-slate-800
        to-slate-900
        border-r
        border-slate-700
        shadow-2xl
      "
    >
      {/* Top Section */}
      <div>
        {/* Logo */}
        <div className="flex flex-col items-center justify-center py-8 px-6">
          <div className="w-24 h-24 bg-white rounded-2xl shadow-lg flex items-center justify-center p-2 mb-4">
            <img
              src={logo}
              alt="MediConnect"
              className="w-full h-full object-contain"
            />
          </div>

          <Typography variant="h5" className="!text-white !font-bold">
            MediConnect
          </Typography>

          <Typography variant="body2" className="!text-slate-400 mt-2">
            Healthcare Ecosystem
          </Typography>
        </div>

        <Divider sx={{ borderColor: "#334155" }} />

        {/* Menu */}
        <List className="px-3 py-4">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;

            return (
              <ListItemButton
                key={item.name}
                onClick={() => navigate(item.path)}
                className={`
                  !rounded-xl
                  !mb-3
                  !px-4
                  !py-3
                  transition-all
                  duration-300
                  hover:translate-x-1
                  ${
                    isActive
                      ? "!bg-blue-600 hover:!bg-blue-700"
                      : "hover:!bg-slate-700"
                  }
                `}
              >
                <ListItemIcon
                  sx={{
                    color: "#fff",
                    minWidth: "40px",
                  }}
                >
                  {item.icon}
                </ListItemIcon>

                <ListItemText
                  primary={
                    <Typography
                      sx={{
                        color: "#fff",
                        fontWeight: 500,
                      }}
                    >
                      {item.name}
                    </Typography>
                  }
                />
              </ListItemButton>
            );
          })}
        </List>
      </div>

      {/* Logout */}
      <div className="p-4">
        <Button
          fullWidth
          variant="contained"
          color="error"
          startIcon={<LogOut size={18} />}
          onClick={handleLogout}
          className="!h-14 !rounded-xl !font-semibold"
          sx={{
            textTransform: "none",
          }}
        >
          Logout
        </Button>
      </div>
    </Box>
  );
};

export default Sidebar;
