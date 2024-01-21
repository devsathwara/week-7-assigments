import { useCallback, useState } from "react";
import { ChromePicker } from "react-color";

function Card(props) {
  const { name, age, place, followersCount, likesCount, photosCount, pic } = props;
  const [selectedColor, setColor] = useState('#ffffff');

  const handleColor = useCallback((color) => {
    setColor(color.hex);
  }, []);

  return (
    <div className="flex flex-col h-screen font-poppins items-center">
      <div className="card rounded-[4px] m-auto h-[450px] w-[600px] max-w-sm overflow-hidden shadow-lg relative">
        <div className={`header flex justify-center h-[40%] overflow-hidden`} style={{ backgroundColor: selectedColor }}>
          <img
            src={pic}
            className="rounded-full bg-cover bg-center object-cover h-[100px] w-[100px] absolute top-[125px]"
          />
        </div>
        <div className="title flex flex-col justify-center mt-[70px]">
          <div className="flex flex-row justify-center">
            <h2 className="font-bold text-center text-black text-xl">{name}</h2>
            <p className="text-gray-400 text-center pl-2 mt-[3px]">{age}</p>
          </div>
          <div className="m-[10px] text-center text-gray-400">{place}</div>
        </div>

        <div className="footer border-t-2">
          <div className="flex justify-around flex-row mt-[43px]">
            <div className="followers flex justify-center flex-col items-center">
              <h2 className="font-bold text-lg">{followersCount}</h2>
              <p className="text-gray-400">Followers</p>
            </div>
            <div className="likes flex justify-center flex-col items-center">
              <h2 className="font-bold text-lg">{likesCount}</h2>
              <p className="text-gray-400">Likes</p>
            </div>
            <div className="photos flex justify-center flex-col items-center">
              <h2 className="font-bold text-lg">{photosCount}</h2>
              <p className="text-gray-400">Photos</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-[5px]">
        <h2>Select Color for card bakcground: {selectedColor}</h2>
        <ChromePicker color={selectedColor} onChange={handleColor} />
      </div>
    </div>
  );
}

export default Card;
