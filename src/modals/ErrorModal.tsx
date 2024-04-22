import React, { FC } from "react"
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Modal, Button } from '@mantine/core';
import styles from './ErrorModal.module.scss';

interface ErrorModalProps {
  title?: string
  message: string
  actionLabel?: string
  onClose: () => void
  isOpen: boolean
}

const ErrorModal: FC<ErrorModalProps> = ({
  title = "Hata",
  message,
  actionLabel = "Kapat",
  onClose,
  isOpen,
}) => {
  return (
		<>
		<Modal.Root opened={isOpen} onClose={onClose} className={styles.errorModal} yOffset="20dvh">
			<Modal.Overlay />
			<Modal.Content>
				<Modal.Header className={styles.headerContainer}>
  				<FontAwesomeIcon
              icon={faExclamationTriangle}
              size="2xl"
              color="red"
            />
					<Modal.Title className={styles.modalTitle}>{title}</Modal.Title>
					<Modal.CloseButton />
				</Modal.Header>
				<Modal.Body>{message}</Modal.Body>
				<div className={styles.buttonContainer}>
					<Button onClick={onClose}>{actionLabel}</Button>
				</div>
			</Modal.Content>
		</Modal.Root>
	</>
  )
}

export default ErrorModal
