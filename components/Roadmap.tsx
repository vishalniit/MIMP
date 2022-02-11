import Image from 'next/image';
import Creator from '../public/assets/Roadmap.gif';
export default function Roadmap() {
  return (
    <>
      <h2 className="text-4xl mb-4">Roadmap</h2>
      <Image
        src={Creator}
        alt="random dev"
        width={1200}
        height={600}
        className="flex items-center grow"
      />
    </>
  );
}
