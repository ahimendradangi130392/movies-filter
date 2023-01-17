import React, { useEffect, useState } from "react";
import { Rate, Select } from "antd";
import useMetaData from "context";
import { LabelCategory, LabelHaeding } from "Styles/Components/SearchByText";

const onChange = (value: string) => {
  console.log(`selected ${value}`);
};

const onSearch = (value: string) => {
  console.log("search:", value);
};

const App: React.FC = () => {
  const [movieOptions, setMovieOptions] = useState<any>();
  const { metadata, setMetadata, ratingData, genreData } = useMetaData();

  useEffect(() => {
    setMetadata([
      {
        label: "The Matrix",
        rating: "7.5",
        category: "Action",
        value: "the_matrix",
      },
      { label: "Focus", rating: "6.9", category: "Comedy", value: "focus" },
      {
        label: "The Lazarus Effect",
        rating: "6.4",
        category: "Thriller",
        value: "the_lazarus_effect",
      },
      { label: "Everly", rating: "5", category: "Action", value: "everly" },
      {
        label: "Maps to the Stars",
        rating: "7",
        category: "Drama",
        value: "maps_to_the_stars",
      },
    ]);
  }, []);

  const labelValue = () => {
    let x = metadata.map(({ label, rating, value, category }, index) => ({
      key: index,
      value: value,
      title: label,
      rating: rating,
      category: category,
      label: (
        <>
          <LabelHaeding>
            <div>
              <div>{label}</div>
              <Rate
                count={10}
                allowHalf
                disabled
                defaultValue={JSON.parse(rating)}
              />
            </div>
            <LabelCategory>{category}</LabelCategory>
          </LabelHaeding>
        </>
      ),
    }));
    return x;
  };

  useEffect(() => {
    const val = labelValue();
    setMovieOptions(val);
  }, [metadata]);

  const filterByReference = (arr1: any, arr2: any) => {
    let res = [];
    res = arr1.filter((el: any) => {
       return arr2.find((element: any) => {
          return element.key === el.key;
       });
    });
    return res;
 }

  useEffect(() => {
    const val = labelValue();
    if (!ratingData.includes("any_rating") || !genreData.includes("any_genre")) {
      const newData = val?.filter((movie: any) =>
        ratingData.includes(movie.rating)
      );
      const filterMovieCategory = val?.filter((movie: any) =>
      genreData.includes(movie.category)
    );
    if(newData.length > 0 && filterMovieCategory.length == 0) {
      setMovieOptions(newData);
    }
    if(newData.length == 0 && filterMovieCategory.length > 0) {
      setMovieOptions(filterMovieCategory);
    }
    if(newData.length > 0 && filterMovieCategory.length > 0) {
      const arr = filterByReference(newData, filterMovieCategory)
        setMovieOptions(arr);
    }

    } else {
      setMovieOptions(val);
    }
  }, [ratingData, genreData]);


  return (
    <>
      <Select
        showSearch
        placeholder="Search movie"
        optionFilterProp="children"
        onChange={onChange}
        onSearch={onSearch}
        filterOption={(input, option) =>
          (option?.title ?? "").toLowerCase().includes(input.toLowerCase())
        }
        options={movieOptions}
        style={{ minWidth: "500px" }}
      ></Select>
    </>
  );
};

export default App;
