import Bio_left from "./Bio_left";
import Load_imgs from "../image/load_imgs_into_pixels";

const InfoCard = () => {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: 1, maxWidth: "50%" }}>
        <Bio_left />
      </div>
      <div style={{ flex: 1, maxWidth: "50%" }}>
        {/* <img src={imageSrc} alt="Image" style={{ width: '100%' }} /> */}
        <Load_imgs />
      </div>
    </div>
  );
};

export default InfoCard;
