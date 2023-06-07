import Avatar from './Avatar';
import Navbar from './Navbar';

export default function Header() {
  return (
    <div className="w-full flex">
      <Navbar />
      <div className="flex justify-content-space-between">
        <div className="p-2">manjunathkalburgi@gmail.com</div>
        <div className="p-2 flex flex-wrap ">
          <Avatar />
        </div>
        <div className="p-2">Messages</div>
        <div className="p-2">Notifications</div>
      </div>
    </div>
  );
}
