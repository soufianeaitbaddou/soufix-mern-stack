import React from "react";
import DashoardLayout from "../screens/DashoardLayout";
import DataTable from "../components/DataTable";
import TextField from "@material-ui/core/TextField";
const Categories = () => {
  function createData(name) {
    return { name };
  }

  const rows = [
    createData("Cupcake"),
    createData("Cueeepcake"),
    createData("zz"),
  ];

  const headCells = [
    {
      id: "name",
      numeric: false,
      disablePadding: true,
      label: "Dessert (100g serving)",
    },
  ];
  const form = (
    <TextField
      autoFocus
      margin="dense"
      id="name"
      label="Email Address"
      type="email"
      fullWidth
    />
  );
  return (
    <>
      <DashoardLayout>
        <DataTable
          data={rows}
          header={headCells}
          title="Categories"
          addform={form}
        />
      </DashoardLayout>
    </>
  );
};

export default Categories;
