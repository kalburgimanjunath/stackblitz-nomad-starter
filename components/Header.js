import Navbar from './Navbar';

export default function Header() {
  return (
    <div className="w-full flex">
      <Navbar />
      <div>
        <div>Name</div>
        <div>Messages</div>
        <div>Notifications</div>
      </div>
    </div>
  );
}
