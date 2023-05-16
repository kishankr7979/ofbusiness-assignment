import React, { Fragment } from "react";
import styled from "styled-components";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import Chip from "./Chip";
import dayjs from "dayjs";
const IssueCard = ({ title, isHeader = false, id='', created_at = '', openedBy = '', labels = [] }) => {
  return (
    <Parent style={{background: isHeader && '#e5e5e5'}}>
      <RadioButtonCheckedIcon htmlColor={!isHeader ? '#4caf50' : '#000000'} />
      <TitleAndDescription>
        <div className="title-status">
          <span className="title">{title}</span>
          {!isHeader && labels.length > 0 && labels.map(({id, name, color}) => <Statuses key={id}>
            <Chip label={name} color={color} />
          </Statuses>)}
        </div>
        {!isHeader && <span className="info">
          #{id} opened on {dayjs().from(created_at, true)} ago by {openedBy}
        </span>}
      </TitleAndDescription>
    </Parent>
  );
};

export default IssueCard;

const Parent = styled.div`
  display: flex;
  gap: 10px;
  padding: 12px;
  width: 100%;
  border: 1px solid gray;
`;

const TitleAndDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  .title-status {
    display: flex;
    gap: 6px;
  }
  .title {
    font-size: 20px;
    font-weight: bold;
    &:hover {
      color: blue;
      cursor: pointer;
    }
  }
  .info {
    color: gray;
    font-size: 12px;
  }
`;


const Statuses = styled.div`
  display: flex;
  gap: 4px;
`;