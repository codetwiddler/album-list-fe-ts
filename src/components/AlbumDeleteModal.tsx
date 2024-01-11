import React from 'react';
import Modal from 'react-modal';

type AlbumDeleteModalProps = {
    isOpen: boolean;
    onRequestClose: () => void;
    onConfirm: () => void;
    albumTitle: string;
    albumArtist: string;
  };

const AlbumDeleteModal = ({
    isOpen,
    onRequestClose,
    onConfirm,
    albumTitle,
    albumArtist
}: AlbumDeleteModalProps ) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Confirm Delete"
        >
            <h2>Confirm</h2>
            <p>Are you sure you want to delete "{albumTitle}" by {albumArtist}?</p>
            <button onClick={onConfirm}>Confirm</button>
            <button onClick={onRequestClose}>Cancel</button>
        </Modal>
    );
};

export default AlbumDeleteModal;