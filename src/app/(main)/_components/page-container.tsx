import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const PageContainer: React.FC<Props> = ({ children, className }) => {
  return (
    <div className={cn("container mx-auto px-4 pt-16", className)}>
      {children}
    </div>
  );
};

export { PageContainer };
