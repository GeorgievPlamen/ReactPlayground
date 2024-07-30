import { useNavigate } from "react-router-dom";
import { Button } from "./styled/Button";

interface Props {
  label: string;
}

function NavButton({ label }: Props) {
  const nav = useNavigate();

  return <Button onClick={() => nav(label)}>{label}</Button>;
}
export default NavButton;
