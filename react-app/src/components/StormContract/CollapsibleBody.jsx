import "./CollapsibleBody.css";
import { Button } from "antd";
import { ReactComponent as DownloadIcon } from "assets/svg/download-icon.svg";
import { ReactComponent as ExportIcon } from "assets/svg/export-icon.svg";

import StormDocumentTable from "./StormDocumentTable";

export default function CollapsibleBody({ isOpen = false, active = false, content = {} }) {
  const CollapsibleBodyActive = () => (
    <div className={`collapsible-body`}>
      <div className="cards-first-row">
        <div className="card payment-summary">
          <div className="card-header">
            <h3>Payment Summary</h3>
          </div>

          <div className="card-content">
            <div className="payment-total-wrapper">
              <div className="payment-total">
                <div className="contract-subject-loss">
                  <h4>Contract subject Loss</h4>
                  <p>{content.paymentSummary.subjectLoss}</p>
                </div>

                <div className="contract-total-limit">
                  <h4>Contract total limit </h4>
                  <p>{content.paymentSummary.totalLimit}</p>
                </div>
              </div>

              <div className="progress-bar__container">
                <div
                  className="progress-bar"
                  style={{
                    left: "-50%", // Controls progress bar size
                  }}
                >
                  <span className="progress-bar__text">50%</span>
                </div>
              </div>
            </div>

            <div className="payment-per-limit">
              <h4>per event limit</h4>
              <p>{content.paymentSummary.perEventLimit}</p>
              <br />
              <h4>per event attachment</h4>
              <p>{content.paymentSummary.perEventAttachment}</p>
            </div>
          </div>
        </div>

        <div className="card contract-document">
          <div className="card-header">
            <h3>Contract Document</h3>
          </div>

          <div className="card-content">
            {content.contractDocument.map((contractDocument, index) => (
              <div className="document-info" key={index}>
                <p>
                  <strong>{contractDocument.name}</strong>
                </p>
                <p>{contractDocument.type}</p>
                <p>{contractDocument.date}</p>
                <Button shape="round" onClick={() => window.open(contractDocument.fileUri)} icon={<DownloadIcon />} />
              </div>
            ))}
          </div>
        </div>

        <div className="card stakeholders">
          <div className="card-header">
            <h3>Stakeholders</h3>
          </div>

          <div className="card-content">
            <p>
              <strong>Broker ID</strong>
              <span>{content.stakeholders.brokerID}</span>
            </p>

            <p>
              <strong>Cedent ID</strong>
              <span>{content.stakeholders.cedentID}</span>
            </p>

            <p>
              <strong>Reinsurer ID</strong>
              <span>{content.stakeholders.reinsurerID}</span>
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className="card storm-document">
          <div className="card-header">
            <h3>Storm Document</h3>
            <a href="/" className="export-storm-document">
              <ExportIcon />
              Export This Table
            </a>
          </div>

          <div className="card-content">
            <StormDocumentTable listItems={content.stormDocument} />
          </div>
        </div>
      </div>
    </div>
  );

  const CollapsibleBodyPending = () => (
    <div className={`collapsible-body ${isOpen ? "open" : ""}`}>
      <div className="cards-first-row">
        <div className="card payment-summary-pending">
          <div className="card-header">
            <h3>Payment Summary</h3>
          </div>

          <div className="card-content">
            <p>
              <strong>Total Limit</strong>
              <span>{content.paymentSummary.totalLimit}</span>
            </p>

            <p>
              <strong>Per Event Limit</strong>
              <span>{content.paymentSummary.perEventLimit}</span>
            </p>

            <p>
              <strong>Per Event Attachment</strong>
              <span>{content.paymentSummary.perEventAttachment}</span>
            </p>
          </div>
        </div>

        <div className="card contract-document contract-document-pending">
          <div className="card-header">
            <h3>Contract Document</h3>
          </div>

          <div className="card-content">
            {content.contractDocument.map((contractDocument, index) => (
              <div className="document-info" key={index}>
                <p>
                  <strong>{contractDocument.name}</strong>
                </p>
                <p>{contractDocument.type}</p>
                <p>{contractDocument.date}</p>
                <Button shape="round" onClick={() => window.open(contractDocument.fileUri)} icon={<DownloadIcon />} />
              </div>
            ))}
          </div>
        </div>

        <div className="card stakeholders">
          <div className="card-header">
            <h3>Stakeholders</h3>
          </div>

          <div className="card-content">
            <p>
              <strong>Broker ID</strong>
              <span>{content.stakeholders.brokerID}</span>
            </p>

            <p>
              <strong>Cedent ID</strong>
              <span>{content.stakeholders.cedentID}</span>
            </p>

            <p>
              <strong>Reinsurer ID</strong>
              <span>{content.stakeholders.reinsurerID}</span>
            </p>
          </div>
        </div>
      </div>

      <div className="sign-transaction">
        <Button type="primary">Sign</Button>
        <p>Clicking "Sign" will initiate a transaction in the Metamask browser extension.</p>
      </div>
    </div>
  );

  return active ? <CollapsibleBodyActive /> : <CollapsibleBodyPending />;
}
