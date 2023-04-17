import { BounceLoader } from 'react-spinners';

export default function Loader() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <BounceLoader color="#F5385D" />
    </div>
  );
}
