import "./CollapsiblePanel.css";
import { ReactComponent as ActiveChevronRight } from "assets/svg/active-chevron-right.svg";
import { ReactComponent as ActiveChevronDown } from "assets/svg/active-chevron-down.svg";
import { ReactComponent as PendingChevronRight } from "assets/svg/pending-chevron-right.svg";
import { ReactComponent as PendingChevronDown } from "assets/svg/pending-chevron-down.svg";
import { ReactComponent as CalendarIcon } from "assets/svg/calendar-icon.svg";
import { ReactComponent as GithubIcon } from "assets/svg/github-icon.svg";

export default function CollapsiblePanel({ isOpen = false, active, children, onClick, header = {} }) {
  return (
    <>
      <div className="collapsible-header" onClick={onClick}>
        <div className={`contract-status ${active ? "" : "pending"}`}>
          {active ? (
            isOpen ? (
              <ActiveChevronDown />
            ) : (
              <ActiveChevronRight />
            )
          ) : isOpen ? (
            <PendingChevronDown />
          ) : (
            <PendingChevronRight />
          )}
          <h3>{active ? "Active Contract" : "Awaiting Execution"}</h3>
        </div>

        <div>
          <strong>Confirmation ID number</strong>
          <p>{header.confirmationNumber}</p>
        </div>

        <div>
          <strong>Contract Name</strong>
          <p>{header.contractName}</p>
        </div>

        <div>
          <strong>Policy Start and end dates</strong>
          <p>
            {header.policyPeriod.start} <CalendarIcon /> - {header.policyPeriod.end} <CalendarIcon />
          </p>
        </div>

        <div>
          <strong>Client Company</strong>
          <p>{header.clientCompany}</p>
        </div>

        <div>
          <strong>Client ID</strong>
          <p>{header.clientID}</p>
        </div>

        <div>
          <strong>View Code</strong>
          <p className="view-code">
            <GithubIcon />
            <a href={header.githubUri}>Open Github</a>
          </p>
        </div>
      </div>

      {children}
    </>
  );
}
