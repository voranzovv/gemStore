import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
});

const ContentImage = ({ data }) => {
  const classes = useStyles();
  return (
    // <div class="col-md-4">
    //   <div class="productbox">
    //     <div class="fadeshop">
    //       <div
    //         class="captionshop text-center"
    //         style={{ display: "none", height: 140 }}
    //       >
    //         <h3>{data.name}</h3>
    //         <p>{data.description}</p>
    //         <p>
    //           {/* <a href="#" class="learn-more detailslearn">
    //                   <i class="fa fa-shopping-cart"></i> Purchase
    //                 </a> */}
    //           <a
    //             href={data.cat === "gem" ? "allgems" : data._id}
    //             class="learn-more detailslearn"
    //           >
    //             <i class="fa fa-link"></i> Details
    //           </a>
    //         </p>
    //       </div>
    //       <span class="maxproduct">
    //         <img
    //           src={
    //             !data.created_at
    //               ? data.img
    //               : "http://localhost:8000/uploads/" + data.image
    //           }
    //           alt={data.name}
    //           style={{  }}
    //         />
    //         <CardMedia
    //           // className={classes.media}
    //           title="Contemplative Reptile"
    //           image={
    //             !data.created_at
    //               ? data.img
    //               : "http://localhost:8000/uploads/" + data.image
    //           }
    //         />
    //       </span>
    //     </div>
    //     <div class="product-details">
    //       <a href={data.cat === "gem" ? "allgems" : data._id}>
    //         <h1>{data.name}</h1>
    //       </a>

    //       {data.cat === "gem" ? null : (
    //         <a
    //           className="btn btn-danger"
    //           href={data.cat === "gem" ? "allgems" : data._id}
    //         >
    //           Edit{" "}
    //         </a>
    //       )}

    //       {/* <span class="price">
    //               <span class="edd_price">$49.00</span>
    //             </span> */}
    //     </div>
    //   </div>
    // </div>

    <div className="col-md-4">
      <Card className="productbox">
        <CardActionArea>
          <CardMedia
            className={classes.media}
            title="Contemplative Reptile"
            image={
              !data.created_at
                ? data.img
                : "http://localhost:8000/uploads/" + data.image
            }
          />
          <CardContent>
            <a href={data.cat === "gem" ? "allgems" : data._id}>
              <Typography gutterBottom variant="h5" component="h2">
                {data.name}
              </Typography>
            </a>
            <Typography variant="body2" color="textSecondary" component="p">
              {data.description.length < 44
                ? data.description
                : data.description.substring(0, 44)+'...'}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <div className="">
            {data.cat === "gem" ? null : (
              <a
                className="btn btn-danger btn-block "
                href={data.cat === "gem" ? "allgems" : data._id}
              >
                See more{" "}
              </a>
            )}
          </div>
        </CardActions>
      </Card>
    </div>
  );
};

export default ContentImage;
