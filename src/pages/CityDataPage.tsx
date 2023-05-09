import { CityDataContent } from "Components/CityData/CityDataContent";
import { ScrollbarYWrapper } from "Components/SharedComponents/ScrollbarYWrapper";
import { Sidebar } from "Components/Sidebar/Sidebar";

export const CityDataPage = () => (
  <>
    <ScrollbarYWrapper>
      <Sidebar />
    </ScrollbarYWrapper>
    <ScrollbarYWrapper>
      <CityDataContent />
    </ScrollbarYWrapper>
  </>
);
