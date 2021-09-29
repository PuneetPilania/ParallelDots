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
          <span id="sub_detail_value">{following}</span>
          <span id="sub_detail_key">Following</span>
        </div>
        <div className="homeView__sub_detail">
          <span id="sub_detail_value">{followers}</span>
          <span id="sub_detail_key">Followers</span>
        </div>
        <div className="homeView__sub_detail">
          <span id="sub_detail_value">{shots}</span>
          <span id="sub_detail_key">Shots</span>
        </div>
      </div>

      <div className="description__values">
        <div>Lightning</div> <p>{lightning}</p>
        <div>Quality </div> <p>{quantity}</p>
      </div>
    </div>
  );
}

export default HomeView;
