import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

function FriendList ({friends}) {


    return (
        <ul className="friend-list">
            {friends.map(friend => (
             <li className={styles.item} key={friend.id}>
                <span className={friend.isOnline ? styles.online : styles.offline}>{friend.isOnline}</span>
                <img className={styles.avatar} src={friend.avatar} alt="" width="48" />
                <p className={styles.name}>{friend.name}</p>
            </li>
    ))}
        </ul>
    )
}

  
FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
          id: PropTypes.number.isRequired,
          isOnline: PropTypes.bool.isRequired,
          avatar: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired

        }),
      ).isRequired,
  };


export default FriendList;