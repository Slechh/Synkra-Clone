type ContainerProps = {
  children: React.ReactNode;
};

export function Container({ children }: ContainerProps) {
  return <div className="mx-auto max-w-296 w-full px-4">{children}</div>;
}
