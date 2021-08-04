import React from "react";
import DashoardLayout from "../screens/DashoardLayout";
import DataTable from "../components/DataTable";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Viewer, { Worker } from "@phuocng/react-pdf-viewer";

import "@phuocng/react-pdf-viewer/cjs/react-pdf-viewer.css";
import ReactMde from "react-mde";
import * as Showdown from "showdown";
import "react-mde/lib/styles/css/react-mde-all.css";
const converter = new Showdown.Converter({
  tables: true,
  simplifiedAutoLink: true,
  strikethrough: true,
  tasklists: true,
});

const useStyles = makeStyles({
  Mde: {
    marginTop: 50,
  },
  TextField: {
    marginTop: 10,
  },
});
const CreatePost = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState("**Hello world!!!**");
  const [selectedTab, setSelectedTab] = React.useState("write");
  return (
    <div>
      <DashoardLayout>
        <div className={classes.Mde}>
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.4.456/build/pdf.worker.min.js">
            <div style={{ height: "750px" }}>
              <Viewer fileUrl="https://arxiv.org/pdf/quant-ph/0410100.pdf" />
            </div>
          </Worker>
          <TextField id="standard-basic" label="Standard" />
          <TextField id="standard-basic" label="Standard" />
          <ReactMde
            className={classes.Mde}
            value={value}
            onChange={setValue}
            selectedTab={selectedTab}
            onTabChange={setSelectedTab}
            generateMarkdownPreview={(markdown) =>
              Promise.resolve(converter.makeHtml(markdown))
            }
          />
        </div>
      </DashoardLayout>
    </div>
  );
};

export default CreatePost;
