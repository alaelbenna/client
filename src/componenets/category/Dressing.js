import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import UnderDashboard from "../dashboard/UnderDashboard";

import Footer from "../dashboard/Footer";
import Bedroom from "../decoration/Bedroom";
function Dressing() {
  return (
    <div>
      <Navbar />
     
      <UnderDashboard />
      <Bedroom />
      <Footer />
    </div>
  );
}

export default Dressing;
