import { useState, useEffect } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

type AddItemModalProps = {
  onAddItem: (itemName: string) => void;
};

const AddItemModal: React.FC<AddItemModalProps> = ({ onAddItem }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Add New Item
            </ModalHeader>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default AddItemModal;
