import apiAgent from "../../app/api/apiAgent";

function AxiosNoEffect() {
  const photoData = apiAgent.fetchPhotos(1);
  const photo = photoData();
  return (
    <>
      <div>AxiosNoEffect</div>
      <div>{photo?.albumId}</div>
      <div>{photo?.id}</div>
      <div>{photo?.thumbnailUrl}</div>
      <div>{photo?.title}</div>
      <div>{photo?.url}</div>
    </>
  );
}
export default AxiosNoEffect;
