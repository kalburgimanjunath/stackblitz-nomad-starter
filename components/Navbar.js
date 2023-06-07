export default function Navbar() {
  const navbar = [
    'Discounts',
    'Remote Jobs',
    'Consultations',
    'City Guides',
    'more',
  ];
  return (
    <div className="container flex">
      {navbar.map((item, index) => {
        return <div key={item + index}>{item}</div>;
      })}
    </div>
  );
}
