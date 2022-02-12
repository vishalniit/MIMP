type Props = {
  children: React.ReactNode;
};

export default function Prose({ children }: Props) {
  return <div className="max-w-[100%] mx-auto px-4 text-center">{children}</div>;
}
