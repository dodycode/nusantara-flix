import { Nav } from "./_components/nav";

type Props = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: Props) {
  return (
    <div className="flex h-screen flex-col overflow-hidden font-sans">
      <Nav />
      <div className="h-full flex-1 overflow-y-auto">{children}</div>
    </div>
  );
}
