import "./App.css";
import { Routes, Route } from "react-router-dom";
import Admin from "./components/Admin";
import Pim from "./components/Pim";
import Login from "./components/Login";
import Home from "./components/Home";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import AddEmployee from "./components/AddEmployee";
import PimHeader from "./components/PimHeader";
import Profile from "./components/Profile";
import PersonalDetails from "./components/PersonalDetails";
import ContactDetails from "./components/ContactDetails";
import JobDetails from "./components/JobDetails";

function App() {
  return (
    <div className="">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <main className="flex">
                <Sidebar />
              </main>
            </>
          }
        />
        <Route
          path="/admin"
          element={
            <>
              <Header />
              <main className="flex">
                <Sidebar />
                <Admin />
              </main>
            </>
          }
        />

        <Route
          path="/pim"
          element={
            <>
              <Header />
              <main className="flex">
                <Sidebar />
                <Pim />
              </main>
            </>
          }
        >
          <Route
            path="profile"
            element={
              <>
                <PimHeader />
                <Profile />
              </>
            }
          >
            <Route
              index
              element={
                <>
                  <PersonalDetails />
                </>
              }
            ></Route>
            <Route
              path="contact-details"
              element={
                <>
                  <ContactDetails />
                </>
              }
            ></Route>
            <Route
              path="job"
              element={
                <>
                  <JobDetails />
                </>
              }
            ></Route>
          </Route>

          <Route
            path="add-employee"
            element={
              <>
                <PimHeader />
                <AddEmployee />
              </>
            }
          ></Route>
        </Route>

        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
