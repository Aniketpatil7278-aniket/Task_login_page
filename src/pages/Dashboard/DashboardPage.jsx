import { useSelector } from "react-redux";

import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";

const Dashboard = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="min-h-screen bg-gray-100">
      <Sidebar />

      <div className="ml-[280px] p-6">
        <Header user={user} />

        <div className="mt-6 bg-white rounded-3xl p-8 shadow-sm">
          <h1 className="text-3xl font-bold">Welcome {user?.userid}</h1>

          <p className="text-gray-500 mt-2">You have successfully logged in.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
