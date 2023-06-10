import {
  Accordion,
  AccordionItem,
  Button,
  DatePicker,
  DatePickerInput,
  FileUploader,
  Select,
  SelectItem,
} from "carbon-components-react";
import { Camera, Save } from "@carbon/icons-react";
import moment from "moment";
import { mockVisits } from "../../__mocks__/mockVisits";

import "./visits.scss";

const visitTypes = [
  "IPD",
  "OPD",
  "Special OPD",
  "Emergency",
  "Pharmacy visit",
  "Lab visit",
];

const Visits = () => {
  return (
    <div className="visitsContainer">
      <Accordion>
        <AccordionItem title="Visit: New">
          <div className="visits-list">
            <Select
              id="visitType"
              labelText="Visit type"
              size="md"
              className="visitType"
            >
              {visitTypes.map((visit) => (
                <SelectItem id={visit} text={visit} value={visit} />
              ))}
            </Select>
            <DatePicker className="datePicker" datePickerType="range">
              <DatePickerInput
                id="date-picker-input-id-start"
                placeholder="dd/mm/yyyy"
                labelText={<>Start date</>}
                size="md"
                required
              />
              <DatePickerInput
                id="date-picker-input-id-start"
                placeholder="dd/mm/yyyy"
                labelText={<>End date</>}
                size="md"
              />
            </DatePicker>
            <br />
            <div className="action-buttons">
              <Button className="icon-buttons">
                <Camera size="20" className="icon" />
                Scan
              </Button>
              <Button className="icon-buttons">
                <Save size="20" className="icon" />
                Save
              </Button>
            </div>
          </div>
        </AccordionItem>
        {mockVisits.map((visit) => {
          return (
            <AccordionItem
              title={
                "Visit from: " +
                moment(visit.fromDate).format("ll") +
                (visit.toDate ? " to " + moment(visit.toDate).format("ll") : "")
              }
            >
              <div>
                <FileUploader
                  labelTitle="Upload files"
                  labelDescription="Max file size is 500mb. Only .jpg files are supported."
                  buttonLabel="Add file"
                  buttonKind="tertiary"
                  size="md"
                  filenameStatus="edit"
                  accept={[".jpg", ".png", ".pdf", ".jpeg", ".svg"]}
                  multiple={true}
                  disabled={false}
                  iconDescription="Delete file"
                  className="file-uploader"
                  name=""
                />
                <br />
                <div className="action-buttons">
                  <Button className="icon-buttons">
                    <Save size="20" className="icon" />
                    Save
                  </Button>
                </div>
              </div>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
};

export default Visits;
