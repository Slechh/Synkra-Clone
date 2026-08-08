type ContainerProps = {
  children: React.ReactNode;
};

export function Container({ children }: ContainerProps) {
  return <div className="mx-auto max-w-6xl w-full px-4">{children}</div>;
}
