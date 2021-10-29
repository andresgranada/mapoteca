import { toast } from 'react-toastify';

export const notify_error = (message) => toast.error(message);
export const notify_succes = (message) => toast.success(message);

export default {
    notify_error,
    notify_succes,
}