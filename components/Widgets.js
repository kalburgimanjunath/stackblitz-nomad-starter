import Avatar from './Avatar';

export default function Widgets({ title, type }) {
  return (
    <div>
      <h4 className="font-bold p-2">{title}</h4>
      {type == 'members' || type == 'groups' ? (
        <div className="p-2">
          <div className="flex flex-wrap ">
            <Avatar />
            <Avatar />
            <Avatar />
            <Avatar />
            <Avatar />
            <Avatar />
            <Avatar />
            <Avatar />
            <Avatar />
            <Avatar />
            <Avatar />
          </div>
          <div>
            <button
              className="bg-gray-200 p-2 rounded-5 hover:bg-gray-300 m-2"
              type="submit"
            >
              SEE ALL
            </button>
          </div>
        </div>
      ) : (
        <div></div>
      )}
      <hr />
    </div>
  );
}
