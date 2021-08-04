import React, { useState, useRef } from "react";
import DashoardLayout from "../screens/DashoardLayout";
import DataTable from "../components/DataTable";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import AddIcon from "@material-ui/icons/Add";
import { useHistory } from "react-router-dom";
const Posts = () => {
  const history = useHistory();
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
  const toCreatPost = () => {
    console.log("e");
    history.push("/admin/posts/CreatePost");
  };
  const renderTooltip = (
    <Tooltip onClick={toCreatPost} title="Add Post">
      <IconButton aria-label="Add gggg">
        <AddIcon />
      </IconButton>
    </Tooltip>
  );
  return (
    <>
      <DashoardLayout>
        <DataTable
          data={rows}
          header={headCells}
          title="Posts"
          custumToltip={renderTooltip}
        />
      </DashoardLayout>
    </>
  );
};

export default Posts;
