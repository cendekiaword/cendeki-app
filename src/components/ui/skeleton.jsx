import { cn } from "@/utils/cn";

export default function Skeleton({ className, children, ...props }) {
  return (
    <div
      className={cn("animate-pulse ", className)}
      {...props}
    >
      {children}
    </div>
  );
}
