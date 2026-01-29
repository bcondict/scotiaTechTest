interface NavbarButtonProps {
  id: number;
  className: string;
  label: string;
  changeCategory: (id: number, e: React.MouseEvent<HTMLButtonElement>) => void;
  isActive: boolean;
}

export const NavbarButton = ({
  id,
  className,
  label,
  changeCategory,
  isActive,
}: NavbarButtonProps) => {
  const realClass = className + (isActive ? " selected" : "");
  return (
    <button className={realClass} onClick={(e) => changeCategory(id, e)}>
      {label}
    </button>
  );
};
