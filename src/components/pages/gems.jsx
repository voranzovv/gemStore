import ContentImage from "../contentImage";
import ContentTitle from "../contentTitle";
const PStones = [
  {
    id: "ps1",
    name: "Ruby",
    link: "/precious-stone",
    description: "Description of fucking ruby",
    img: "images/ruby.jpg",
    cat: "precious",
  },
  {
    id: "ps2",
    name: "Blue Sapphire",
    link: "/precious-stone",
    description: "Description of fucking sapphire",
    img: "images/sapphire.jpg",
    cat: "precious",
  },
  {
    id: "ps3",
    name: "Padparacha",
    link: "/precious-stone",
    description: "Description of fucking spinal",
    img: "images/spinel.jpg",
    cat: "precious",
  },
];

const SPStones = [
  {
    id: "ps1",
    name: "Garnet",
    link: "/precious-stone",
    description: "Description of fucking ruby",
    img: "images/ruby.jpg",
    cat: "semi_precious",
  },
  {
    id: "ps2",
    name: "Alexandrite",
    link: "/precious-stone",
    description: "Description of fucking sapphire",
    img: "images/sapphire.jpg",
    cat: "semi_precious",
  },
  {
    id: "ps3",
    name: "spinal",
    link: "/precious-stone",
    description: "Description of fucking spinal",
    img: "images/spinel.jpg",
    cat: "semi_precious",
  },
];

const Gems = () => {
  return (
    <div className="item header margin-top-0">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <div className="text-pageheader">
              <div
                className="subtext-image"
                data-scrollreveal="enter bottom over 1.7s after 0.1s"
              >
                Gems
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container toparea">
        <ContentTitle title={"Precious Stones"} />
        <div className="row">
          {PStones.map((ps) => (
            <ContentImage data={ps} />
          ))}
        </div>
        <ContentTitle title={"Semi Precious Stones"} />
        <div className="row">
          {SPStones.map((sps) => (
            <ContentImage data={sps} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gems;
