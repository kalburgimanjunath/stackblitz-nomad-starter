import Header from '../components/Header';
import Widgets from '../components/Widgets';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <div>
        <div>
          <Widgets title="Recently Active Members" />
          <Widgets title="Groups" />
        </div>
        <div>content</div>
        <div>
          <Widgets title="Upcoming Community Events" />
          <Widgets title="Upcoming Meetups" />
          <Widgets title="Benefits Near Me" />
          <Widgets title="Complete Your Profile" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
