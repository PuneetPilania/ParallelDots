import profileImage from "../../../assets/image_profile.jpeg";
import "./homeView.css";

function HomeView(props) {
  const { user_name, shots, followers, following, lightning, quantity } =
    props.user_info;
  return (
    <div className="homeView__main">
      <img className="pro_image" src={profileImage} alt="image_profile" />
      <b>
        <p>{user_name}</p>
      </b>
      <div className="homeView__detail">
        <div className="homeView__sub_detail">
          <p>{following}</p>
          <p>Following</p>
        </div>
        <div className="homeView__sub_detail">
          <p>{followers}</p>
          <p>Followers</p>
        </div>
        <div className="homeView__sub_detail">
          <p>{shots}</p>
          <p>Shots</p>
        </div>
      </div>

      <div>
        <p>lightning {lightning}</p>
        <p>Quality {quantity}</p>
      </div>
    </div>
  );
}

export default HomeView;
