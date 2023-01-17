import React, { useState } from "react";
import { Rate, Checkbox } from "antd";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import type { CheckboxValueType } from "antd/es/checkbox/Group";
import useMetaData from "context";
import { CheckboxContainer, Container } from "Styles/Components/SearchByRating";

const FormRating: React.FC = () => {
  const [showDropDown, setshowDropDown] = useState(false);
  const { setRatingData } = useMetaData();

  const onChange = (checkedValues: CheckboxValueType[]) => {
    setRatingData(checkedValues);
  };
  return (
    <>
      <Container onClick={() => setshowDropDown(!showDropDown)}>
        Rating {!showDropDown ? <DownOutlined /> : <UpOutlined />}
      </Container>
      {showDropDown ? (
        <CheckboxContainer>
          <Checkbox.Group onChange={onChange}>
            <div>
              <div>
                <Checkbox value="any_rating">Any rating</Checkbox>
              </div>
              <div>
                <Checkbox value="1">
                  <Rate count={10} disabled defaultValue={1} />
                </Checkbox>
              </div>
              <div>
                <Checkbox value="2">
                  <Rate count={10} disabled defaultValue={2} />
                </Checkbox>
              </div>
              <div>
                <Checkbox value="3">
                  <Rate count={10} disabled defaultValue={3} />
                </Checkbox>
              </div>
              <div>
                <Checkbox value="4">
                  <Rate count={10} disabled defaultValue={4} />
                </Checkbox>
              </div>
              <div>
                <Checkbox value="5">
                  <Rate count={10} disabled defaultValue={5} />
                </Checkbox>
              </div>
              <div>
                <Checkbox value="6">
                  <Rate count={10} disabled defaultValue={6} />
                </Checkbox>
              </div>
              <div>
                <Checkbox value="7">
                  <Rate count={10} disabled defaultValue={7} />
                </Checkbox>
              </div>
              <div>
                <Checkbox value="8">
                  <Rate count={10} disabled defaultValue={8} />
                </Checkbox>
              </div>
              <div>
                <Checkbox value="9">
                  <Rate count={10} disabled defaultValue={9} />
                </Checkbox>
              </div>
              <div>
                <Checkbox value="10">
                  <Rate count={10} disabled defaultValue={10} />
                </Checkbox>
              </div>
            </div>
          </Checkbox.Group>
        </CheckboxContainer>
      ) : (
        ""
      )}
    </>
  );
};

export default FormRating;
