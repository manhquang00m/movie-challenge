import { useEffect } from 'react';
import './style.scss';

export type NotificationType = 'success' | 'error';

interface NotificationProps {
    message: string;
    type: NotificationType;
    duration?: number;
    onClose: () => void;
}

const Notification = ({ message, type, duration = 3000, onClose }: NotificationProps) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, duration);

        return () => clearTimeout(timer);
    }, [duration, onClose]);

    return (
        <div className={`notification ${type}`}>
            <div className="icon">
                {type === 'success' && '✓'}
                {type === 'error' && '✕'}
            </div>
            <p>{message}</p>
            <button onClick={onClose} className="close">✕</button>
        </div>
    );
};

export default Notification;
