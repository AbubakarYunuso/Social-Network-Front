import { useSelector } from "react-redux";
import styles from "./Group.module.scss";
import { Link } from "react-router-dom";
import { RootState } from "../../app/store";

const Group: React.FC = (): JSX.Element => {
  const group = useSelector((state: RootState) => state.group.group);

  return (
    <div className={styles.group}>
      <div className={styles.buttons}>
        <div className={styles.firstLinks}>
          <button>
            Все сообщества <p>{group.length}</p>
          </button>
          <button>Управление</button>
        </div>
        <button className={styles.createBut}>Создать сообщество</button>
      </div>
      <div>
        <input type="text" placeholder="Поиск сообществ" />
      </div>
      <div className={styles.groupsMain}>
        {group.map((item) => {
          return (
            <div>
              <div className={styles.oneGroup}>
                <div className={styles.groupName}>
                  <img
                    src="https://grozny.tv/storage/images/27b10e7d-9d8f-4f6e-a612-865147245920.jpg"
                    alt=""
                  />
                  <div>
                    <Link to="#">{item.name}</Link>
                    <h5>{item.followers.length} участников</h5>
                  </div>
                </div>
                <button className={styles.followButton}>Подписаться</button>
              </div>
              <div className={styles.hr}></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Group;
