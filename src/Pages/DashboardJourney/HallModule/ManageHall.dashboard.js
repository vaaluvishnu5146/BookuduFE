import React from "react";
import { useNavigate } from "react-router-dom";
import BasicCta from "../Elements/Buttons/BasicCta";
import Text from "../../../SharedComponents/Texts/Text";
import PageLayout from "../layout";
import DataGridDemo from "../Components/DataTable/DataTable";

function ManageHallPage() {
  return (
    <PageLayout pageTitle="Manage Hall">
      <DataGridDemo />
    </PageLayout>
  );
}

export default ManageHallPage;
