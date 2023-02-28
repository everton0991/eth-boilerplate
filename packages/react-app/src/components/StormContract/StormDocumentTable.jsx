import "./StormDocumentTable.css";
import { Checkbox, Tooltip } from "antd";

import { ReactComponent as TableDownloadIcon } from "assets/svg/table-download-icon.svg";
import { ReactComponent as InfoIcon } from "assets/svg/info-icon.svg";

export default function StormTable({ listItems }) {
  return (
    <div>
      <div className="storm-table">
        <div className="select-document-colum">
          <Checkbox onChange={() => console.log("checkbox")} />
        </div>
        <div>Storm Name</div>
        <div>Date</div>
        <div>
          <Tooltip title="Prompt text" placement="bottomRight" color="rgba(45, 49, 62, 0.8)">
            Gross Loss <InfoIcon />
          </Tooltip>
        </div>
        <div>
          <Tooltip title="Prompt text" placement="bottomRight" color="rgba(45, 49, 62, 0.8)">
            Subject Loss <InfoIcon />
          </Tooltip>
        </div>
        <div>
          <Tooltip title="Prompt text" placement="bottomRight" color="rgba(45, 49, 62, 0.8)">
            Loss Detail <InfoIcon />
          </Tooltip>
        </div>
        <div>File Type</div>
        <div>File Date</div>
      </div>

      {listItems.map((item, index) => (
        <div className="storm-table row" key={index}>
          <div className="select-document-colum">
            <Checkbox onChange={() => console.log("checkbox")} />
          </div>
          <div>{item.name}</div>
          <div>{item.date}</div>
          <div>{item.grossLoss}</div>
          <div>{item.subjectLoss}</div>
          <div>
            <a href={item.lossDetailFile}>
              <TableDownloadIcon /> Download
            </a>
          </div>
          <div>{item.fileType}</div>
          <div>{item.fileDate}</div>
        </div>
      ))}
    </div>
  );
}
