// src/components/Dashboard/Header.jsx

import { Avatar, Paper, Typography } from "@mui/material";

const Header = ({ user }) => {
  return (
    <Paper
      elevation={0}
      className="
        w-full
        px-6
        py-4
        rounded-3xl
        border
        border-gray-200
        flex
        items-center
        justify-between
        gap-5
        flex-wrap
      "
    >
      {/* LEFT SECTION */}
      <div className="flex items-center gap-4">
        <div>
          <Typography variant="h4" fontWeight="bold">
            Dashboard
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            className="hidden sm:block"
          >
            Welcome back 👋
          </Typography>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex items-center gap-4">
        <Paper
          elevation={0}
          className="
            flex
            items-center
            gap-3
            px-4
            py-2
            rounded-2xl
            border
            border-blue-100
            bg-blue-50
          "
        >
          <Avatar
            sx={{
              bgcolor: "#3b82f6",
              width: 42,
              height: 42,
            }}
          >
            {user?.userid?.charAt(0)?.toUpperCase() || "U"}
          </Avatar>

          <div className="hidden sm:block">
            <Typography variant="body2" fontWeight={600}>
              {user?.userid || "Guest User"}
            </Typography>

            <Typography variant="caption" color="text.secondary">
              {user?.role || "Admin"}
            </Typography>
          </div>
        </Paper>
      </div>
    </Paper>
  );
};

export default Header;
