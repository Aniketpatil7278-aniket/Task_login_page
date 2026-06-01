import { Button, Paper, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { logoutRequest } from "../../state-management/authorization/authActions";

const Dashboard = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logoutRequest());
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Paper
        elevation={3}
        sx={{
          p: 5,
          minWidth: 400,
          textAlign: "center",
          borderRadius: 4,
        }}
      >
        <Typography variant="h4" fontWeight="bold">
          Dashboard
        </Typography>

        <Typography variant="h6" sx={{ mt: 2 }}>
          Welcome {user?.userid}
        </Typography>

        <Typography color="text.secondary" sx={{ mt: 1 }}>
          You have successfully logged in.
        </Typography>

        <Button
          variant="contained"
          color="error"
          sx={{ mt: 4 }}
          onClick={handleLogout}
        >
          Logout
        </Button>
      </Paper>
    </div>
  );
};

export default Dashboard;
