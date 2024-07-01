import { useState } from "react";
import './group.css'

function GroupButton({ groupName, groupImage }) {
    const [isFollowing, setIsFollowing] = useState(false);

    const handleFollow = () => {
        setIsFollowing(!isFollowing);
    };

    return (
        <div className="group">
            <div className="groupsec">
                <img src={groupImage} alt="" />
                <p>{groupName}</p>
            </div>
            <button className={isFollowing ? 'followed' : 'follow'} onClick={handleFollow}>
                {isFollowing ? 'Followed' : 'Follow'}
            </button>
        </div>
    );
}

export default GroupButton