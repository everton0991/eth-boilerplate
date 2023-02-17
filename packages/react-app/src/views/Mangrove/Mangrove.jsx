import React from "react";
import "./Mangrove.css";

function CollapsibleContent() {
  const CollapsibleHeader = () => (
    <div className="collapsible-header">
      <div>ICON</div>

      <div>
        <p>Confirmation ID number</p>
        <p>62b1cafaa137f6821b11ddac</p>
      </div>

      <div>
        <p>Contract Name</p>
        <p>SwissRe_OctDec_Amsterdam_Call</p>
      </div>

      <div>
        <p>Policy Start and end dates</p>
        <p>2023/Jul/11 - 2023/Jul/11</p>
      </div>

      <div>
        <p>Status</p>
        <p>in progress</p>
      </div>

      <div>
        <p>Client Company</p>
        <p>Mangrove</p>
      </div>

      <div>
        <p>Client ID</p>
        <p>11ddac</p>
      </div>

      <div>
        <p>View Code</p>
        <p>Github Icon - Open Github </p>
      </div>
    </div>
  );

  const CollapsibleBody = () => (
    <div className="collapsible-body">
      <div className="cards-fisrt-row">
        <div className="card payment-summary">
          <div className="card-header">
            <h3>Payment Summary</h3>
          </div>

          <div className="card-content">
            <div>
              <div>
                <h4>Total subject Loss</h4>
                <p>＄250,000,000</p>
              </div>

              <div>
                <h4>total limit </h4>
                <p>＄500,000,000</p>
              </div>

              <div>Progress bar here</div>
            </div>

            <div>
              <h4>per event limit</h4>
              <p>＄1,000,000</p>
              <h4>per event attachment</h4>
              <p>＄50,000</p>
            </div>
          </div>
        </div>

        <div className="card contract-document">
          <div className="card-header">
            <h3>Contract Document</h3>
          </div>

          <div className="card-content">
            <div>
              <p>Location Exposure File - CSV</p>
              <p>2023/Jul/11</p>
              <span>Download Icon</span>
            </div>

            <div>
              <p>Payout Factors Table - CSV</p>
              <p>2023/Jul/11</p>
              <span>Download Icon</span>
            </div>

            <div>
              <p>Reinsurance Contract - PDF</p>
              <p>2023/Jul/11</p>
              <span>Download Icon</span>
            </div>
          </div>
        </div>

        <div className="card stakeholders">
          <div className="card-header">
            <h3>Stakeholders</h3>
          </div>

          <div className="card-content">
            <p>
              <strong>Brokor ID</strong> - <span>dfsdfssssdfsss</span>
            </p>

            <p>
              <strong>Cedent ID</strong> - <span>dfsdfssssdfsss</span>
            </p>

            <p>
              <strong>Reinsurer ID</strong> - <span>dfsdfssssdfsss</span>
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className="card storm-document">
          <div className="card-header">
            <h3>Storm Document</h3>
            <a href="/">Export data</a>
          </div>

          <div className="card-content">
            <div>
              <div className="storm-table">
                <div>
                  <input type="checkbox" />
                </div>
                <div>Storm Name </div>
                <div>Date</div>
                <div>Gross Loss</div>
                <div>Subject Loss</div>
                <div>Loss Detail </div>
                <div>File Type</div>
                <div>File Date</div>
                <div>+</div>
              </div>

              <div className="storm-table">
                <div>
                  <input type="checkbox" />
                </div>
                <div>Margot</div>
                <div>07/16/2022</div>
                <div>$ 5,500,000.00</div>
                <div>$ 5,500,000.00</div>
                <div>Download</div>
                <div>CSV</div>
                <div>2023/July/11</div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="collapsible-wrapper">
      <CollapsibleHeader />
      <CollapsibleBody />
    </div>
  );
}

export default function Mangrove() {
  return (
    <div className="Mangrove-container">
      <header>
        <a href="/">Logo</a> <div>menu</div>
      </header>

      <div className="content">
        <h2>Dashboard View</h2>

        <CollapsibleContent />
      </div>
    </div>
  );
}
