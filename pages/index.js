import Header from '../components/Header';
import Footer from '../components/Footer';
import Widgets from '../components/Widgets';
// import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className="container mx-auto">
      <script src="https://cdn.tailwindcss.com"></script>
      <Header />
      <div className="grid grid-cols-4 gap-4 bg-blue-50">
        <div className="grid-cols-1">
          <Widgets title="Recently Active Members" type="members" />
          <Widgets title="Groups" type="groups" />
        </div>
        <div className="grid-cols-8">content</div>
        <div className="grid-cols-4">
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
