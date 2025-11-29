import React from "react";
import { Heart } from "lucide-react";
import { MessageCircle } from "lucide-react";
import { Share2 } from "lucide-react";

const UserCard = (props) => {
  return (
    <div className="card">
      <img src={props.img} alt="profile-Picture" />
      <h1>{props.name}</h1>
      <strong>{props.title}</strong>
      <div className="socials">
        <img
          src="https://tse2.mm.bing.net/th/id/OIP.NV0IkLKBnGLdUDXi4CTNggHaHa?w=1666&h=1666&rs=1&pid=ImgDetMain&o=7&rm=3"
          alt="facebook logo"
        />
        <img
          src="https://tse1.mm.bing.net/th/id/OIP.6nhKjdmk9bpq_oWATpBjDgHaHa?pid=ImgDet&w=199&h=199&c=7&dpr=1.3&o=7&rm=3"
          alt="twitter logo"
        />
        <img
          src="https://static.vecteezy.com/system/resources/previews/018/930/413/non_2x/instagram-logo-instagram-icon-transparent-free-png.png"
          alt="instagram logo"
        />
        <img
          src="https://static.vecteezy.com/system/resources/previews/018/930/575/original/youtube-logo-youtube-icon-transparent-free-png.png"
          alt="youtube logo"
        />
      </div>
      <div className="btns">
        <button>Subscribe</button>
        <button>About Us</button>
      </div>
      <div className="stats">
      <div className="like">
        <button><Heart size={16} strokeWidth={2} /></button>
        <p>{props.likes}</p>
      </div>
      <div className="like">
        <button><MessageCircle size={16} strokeWidth={2} /></button>
        <p>{props.comments}</p>
      </div>
      <div className="like">
        <button><Share2 size={16} strokeWidth={2} /></button>
        <p>{props.shares}</p>
      </div>
      </div>
    </div>
  );
};

export default UserCard;
