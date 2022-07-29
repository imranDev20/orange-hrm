import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import AddEmployee from "./AddEmployee";

const Pim = () => {
  return (
    <div>
      <Tabs defaultIndex="2">
        <TabList className="flex cursor-pointer bg-white px-5 py-2">
          <Tab className="px-4 py-1 bg-gray-400/20 text-gray-500 mr-3 rounded-full">
            Configuration
          </Tab>
          <Tab className="px-4 py-1 bg-gray-400/20 text-gray-500 mr-3 rounded-full">
            Employee List
          </Tab>
          <Tab className="px-4 py-1 bg-gray-400/20 text-gray-500 mr-3 rounded-full">
            Add Employee
          </Tab>
          <Tab className="px-4 py-1 bg-gray-400/20 text-gray-500 mr-3 rounded-full">
            Reports
          </Tab>
        </TabList>

        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <AddEmployee />
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Pim;
