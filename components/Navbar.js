export default function Navbar() {
  const navbar = [
    'Discounts',
    'Remote Jobs',
    'Consultations',
    'City Guides',
    'more',
  ];
  return (
    <div className="container flex justify-content-space-between bg-ping-100 align-items-center">
      <div>Logo</div>
      {navbar.map((item, index) => {
        return (
          <div
            className="p-2 hover:bg-pink-600 m-2 text-color-white-100"
            key={item + index}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
}
