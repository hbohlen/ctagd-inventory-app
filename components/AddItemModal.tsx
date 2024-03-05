import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";

type AddItemModalProps = {
  onAddItem: (itemName: string) => void;
  isOpen: boolean;
  onClose: () => void;
  // Used for passing the Form component to be rendered inside the modal
  children?: React.ReactNode;
};

const AddItemModal: React.FC<AddItemModalProps> = ({
  isOpen,
  onClose,
  children,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        <>
          <ModalHeader className="flex flex-col gap-1">
            Add New Item
          </ModalHeader>
          <ModalBody>{children}</ModalBody>
          <ModalFooter>
            <Button color="danger" variant="light" onPress={onClose}>
              Close
            </Button>
            <Button color="primary" onPress={onClose}>
              Action
            </Button>
          </ModalFooter>
        </>
      </ModalContent>
    </Modal>
  );
};

export default AddItemModal;
