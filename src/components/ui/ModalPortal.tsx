import ReactDOM from "react-dom";

type ModalPortalProps = {
  children: React.ReactNode;
};

export default function ModalPortal({ children }: ModalPortalProps) {
  if (typeof window === undefined) {
    return null;
  }

  const node = document.querySelector("#portal") as Element;
  return ReactDOM.createPortal(children, node);
}
