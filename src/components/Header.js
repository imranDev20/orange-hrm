import React from "react";

const Header = ({ isLogin }) => {
  return (
    <header className="bg-orange-500 py-2 flex justify-between">
      {!isLogin && <div className="w-2/12"></div>}
      <div
        className={`${
          isLogin ? "w-full" : "w-10/12"
        } px-5 text-white flex justify-between items-center`}
      >
        <span className="font-medium text-xl">PIM</span>
        <span className="flex items-center rounded-full bg-orange-400 px-1 py-1">
          <div className="w-8 h-8 mr-2 rounded-full overflow-hidden">
            <img
              src="https://thumbs.dreamstime.com/b/default-avatar-photo-placeholder-profile-icon-eps-file-easy-to-edit-default-avatar-photo-placeholder-profile-icon-124557887.jpg"
              alt=""
            />
          </div>
          <p className="">Subham Shirse</p>
        </span>
      </div>
    </header>
  );
};

export default Header;
