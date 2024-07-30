import apiAgent from "../../app/api/apiAgent";

function AxiosNoEffect() {
  const data = apiAgent.usePhotos(1);
  return (
    <>
      <div>AxiosNoEffect</div>
      <div>{data?.albumId}</div>
      <div>{data?.id}</div>
      <div>{data?.thumbnailUrl}</div>
      <div>{data?.title}</div>
      <div>{data?.url}</div>
    </>
  );
}
export default AxiosNoEffect;
