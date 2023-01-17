import { createContext, ReactNode, useContext, useState } from "react";
import type { CheckboxValueType } from "antd/es/checkbox/Group";

export interface IMovieData {
  label: string;
  rating: string;
  category: string;
  value: string;
}

export interface IMetadataProps {
  metadata: IMovieData[];
  setMetadata: (data: IMovieData[]) => void;
  ratingData: CheckboxValueType[];
  setRatingData: (data: CheckboxValueType[]) => void;
  genreData: CheckboxValueType[];
  setGenreData: (data: CheckboxValueType[]) => void;
}

const contextDefaultValues: IMetadataProps = {
  metadata: [{ label: "", rating: "0", category: "", value: "" }],
  setMetadata: (data: IMovieData[]) => data,
  ratingData: [""],
  setRatingData: (data: CheckboxValueType[]) => data,
  genreData: [""],
  setGenreData: (data: CheckboxValueType[]) => data,
};
export const MetadataContext =
  createContext<IMetadataProps>(contextDefaultValues);

export const MetadataProvider = ({ children }: { children: ReactNode }) => {
  const [metadata, setMetadata] = useState(contextDefaultValues.metadata);
  const [ratingData, setRatingData] = useState(contextDefaultValues.ratingData);
  const [genreData, setGenreData] = useState(contextDefaultValues.genreData);

  return (
    <MetadataContext.Provider
      value={{
        metadata,
        setMetadata,
        ratingData,
        setRatingData,
        genreData,
        setGenreData,
      }}
    >
      {children}
    </MetadataContext.Provider>
  );
};
// eslint-disable-next-line import/no-anonymous-default-export
export default () => useContext(MetadataContext);
