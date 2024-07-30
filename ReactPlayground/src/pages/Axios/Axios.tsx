import { useEffect, useState } from "react";
import apiAgent from "../../app/api/apiAgent";
import { IPhoto } from "../../app/models/Photo";

function Axios() {
  console.log("Axios rendering");
  const [photo, setPhoto] = useState<IPhoto>();

  async function fetchData() {
    try {
      const result = await apiAgent.getPhotos(1);
      setPhoto(result);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div>Axios</div>
      <div>{photo?.albumId}</div>
      <div>{photo?.id}</div>
      <div>{photo?.thumbnailUrl}</div>
      <div>{photo?.title}</div>
      <div>{photo?.url}</div>
    </>
  );
}
export default Axios;
