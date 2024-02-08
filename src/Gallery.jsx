import { useGlobalContext } from "./context";
import { useImageApi } from "./useImageApi";

const Gallery = () => {
  const { searchTxt } = useGlobalContext();
  let { isLoading, isError, data } = useImageApi(searchTxt);

  if (isLoading) {
    return (
      <div className="gallery-container">
        <h4>loading...</h4>
      </div>
    );
  }
  if (isError) {
    return (
      <div className="gallery-container">
        <h4>there was an error</h4>
      </div>
    );
  }
  if (data.results.length < 1) {
    return (
      <div className="gallery-container">
        <h4>no result found</h4>
      </div>
    );
  }

  return (
    <section className="photos-center">
      {data.results.map((item) => {
        const url = item?.urls?.regular;
        return (
          <img
            src={url}
            key={item.id}
            alt={item.alt_description}
            className="photo"
          />
        );
      })}
    </section>
  );
};

export default Gallery;
