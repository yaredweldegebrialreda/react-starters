import React from "react";
import { Route, Routes } from "react-router-dom";
import AddEditDeleteItems from "./pages/AddEditDeleteItems";
import ConvertListToTable from "./pages/ConvertListToTable";
import Home from "./pages/Home";
import MoveItemsFromSouToDest from "./pages/MoveItemsFromSouToDest";
import ReadAllFormControls from "./pages/ReadAllFormControls";
import SortAndDeleteImagesInARow from "./pages/SortAndDeleteImagesInARow";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="1" element={<ReadAllFormControls />} />
        <Route path="2" element={<MoveItemsFromSouToDest />} />
        <Route path="3" element={<AddEditDeleteItems />} />
        <Route path="4" element={<ConvertListToTable />} />
        <Route path="5" element={<SortAndDeleteImagesInARow />} />
      </Routes>
    </>
  );
}

export default App;
