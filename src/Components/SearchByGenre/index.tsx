import React, { useState } from "react";
import { Checkbox } from "antd";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import type { CheckboxValueType } from "antd/es/checkbox/Group";
import useMetaData from "context";

const FormSelect: React.FC = () => {
  const [showDropDown, setshowDropDown] = useState(false);
  const { setGenreData } = useMetaData();

  const onChange = (checkedValues: CheckboxValueType[]) => {
    console.log("checked = ", checkedValues);
    setGenreData(checkedValues);  
  };
  return (
    <>
      <div
        style={{
          border: "1px solid #eee",
          padding: "5px 10px",
          maxWidth: "100px",
          cursor: "pointer",
        }}
        onClick={() => setshowDropDown(!showDropDown)}
      >
        Genre {!showDropDown ? <DownOutlined /> : <UpOutlined />}
      </div>
      {showDropDown ? (
        <Checkbox.Group
          style={{
            maxWidth: "100%",
            position: "absolute",
            border: "1px solid #eee",
            padding: "10px",
            marginTop: "3px",
          }}
          onChange={onChange}
        >
          <div>
            <div>
              <Checkbox value="any_genre">Any genre</Checkbox>
            </div>
            <div>
              <Checkbox value="Action">Action</Checkbox>
            </div>
            <div>
              <Checkbox value="Comedy">Comedy</Checkbox>
            </div>
            <div>
              <Checkbox value="Drama">Drama</Checkbox>
            </div>
            <div>
              <Checkbox value="Thriller">Thriller</Checkbox>
            </div>
          </div>
        </Checkbox.Group>
      ) : (
        ""
      )}
    </>
  );
};

export default FormSelect;
