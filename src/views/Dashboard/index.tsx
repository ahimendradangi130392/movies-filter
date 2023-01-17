import React from "react";
import FormField from "Components/SearchByText";
import FormRating from "Components/SearchByRating";
import FormSelect from "Components/SearchByGenre";
import { MainContainer } from "Styles/views/Dashboard";

const Dashboard = () => {
  return (
    <>
      <MainContainer>
        <div>
          <FormField />
        </div>
        <div>
          <FormRating />
        </div>
        <div>
          <FormSelect />
        </div>
      </MainContainer>
    </>
  );
};

export default Dashboard;
